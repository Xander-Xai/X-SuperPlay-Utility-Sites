import {test} from 'node:test';
import assert from 'node:assert/strict';
import {readFile,access,readdir} from 'node:fs/promises';
import path from 'node:path';
const base=process.cwd();
const pages=(await readdir('public')).filter(n=>n.endsWith('.html'));

test('all five pages are noindex and contain real headings',async()=>{
  assert.equal(pages.length,5);
  for (const page of pages) {
    const html=await readFile(path.join('public',page),'utf8');
    assert.match(html,/<meta name="robots" content="noindex,nofollow">/);
    assert.match(html,/<h1(?:\s|>)/);
    assert.doesNotMatch(html,/<script[^>]+src="https?:/i);
    assert.doesNotMatch(html,/<iframe/i);
  }
});
test('every root-relative href/src exists in private source tree',async()=>{
  for (const page of pages) {
    const html=await readFile(path.join('public',page),'utf8');
    const re=/(?:href|src)="(\/[^"?#]+)"/g;
    for (const m of html.matchAll(re)) {
      const rel=m[1].replace(/^\//,'');
      const source=rel.startsWith('src/')?rel:path.join('public',rel || 'index.html');
      await assert.doesNotReject(access(path.join(base,source)), `missing ${source} referenced by ${page}`);
    }
  }
});
test('no public exposure: robots, no tracking, no CI deploy job',async()=>{
  const robots=await readFile('public/robots.txt','utf8');
  assert.match(robots,/Disallow:\s*\//);
  const workflow=await readFile('.github/workflows/ci.yml','utf8');
  assert.doesNotMatch(workflow,/cloudflare\/pages-action|wrangler deploy|pages deploy/i);
  const app=await readFile('src/app.mjs','utf8');
  assert.match(app,/requestAnimationFrame\(render\)/);
  assert.doesNotMatch(app,/fetch\(|XMLHttpRequest|sendBeacon/i);
  const pkg=JSON.parse(await readFile('package.json','utf8'));
  assert.match(pkg.scripts.preview,/--bind\s+127\.0\.0\.1/);
  assert.equal(Object.keys(pkg.dependencies||{}).length,0);
});
