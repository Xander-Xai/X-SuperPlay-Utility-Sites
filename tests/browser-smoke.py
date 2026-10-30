"""Optional Chromium UI smoke, no public server/network required.
Needs: pip install playwright; chromium installed or playwright install chromium.
Loads the real static HTML and JS in-memory, not a full HTTP/deploy E2E test.
"""
from pathlib import Path
import os
import re
from playwright.sync_api import sync_playwright
ROOT=Path(__file__).resolve().parents[1]
index=(ROOT/'public/index.html').read_text()
index=re.sub(r'<script[^>]+src="/src/app.mjs"[^>]*></script>', '', index)
index=index.replace('<link rel="stylesheet" href="/styles.css">','')
calc=(ROOT/'src/estimate.mjs').read_text().replace('export const ','const ').replace('export function ','function ')
app=(ROOT/'src/app.mjs').read_text().replace("import {DEFAULTS, calculate, formatGiB} from './estimate.mjs';",'')
with sync_playwright() as p:
    candidate=os.environ.get('CHROMIUM_PATH', '/usr/bin/chromium')
    executable=candidate if Path(candidate).is_file() else None
    browser=p.chromium.launch(headless=True, executable_path=executable, args=['--no-sandbox'])
    page=browser.new_page(viewport={'width':390,'height':844})
    errors=[]
    page.on('pageerror',lambda error:errors.append(str(error)))
    page.set_content(index)
    page.add_script_tag(content=calc+'\n'+app)
    assert page.locator('#readout').inner_text()=='21.08 GiB', 'baseline UI failed'
    page.locator('[name="contextTokens"]').fill('16384')
    assert page.locator('#readout').inner_text()=='22.28 GiB', 'context change failed'
    page.locator('[name="contextTokens"]').fill('0')
    assert 'Invalid inputs' in page.locator('#result-status').inner_text(), 'invalid input not flagged'
    page.locator('button[type="reset"]').click()
    page.wait_for_function("document.querySelector('#readout').textContent === '21.08 GiB'")
    assert not errors,errors
    print('Chromium DOM smoke PASS: baseline, recalculation, invalid input, reset, no JS exceptions.')
    browser.close()
