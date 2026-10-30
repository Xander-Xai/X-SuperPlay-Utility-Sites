# Local preview and conditional public release checklist

**Current state: LOCAL_PREVIEW_ONLY / NO G3 APPROVAL.** No automatic deployment workflow is present. All site pages include a `noindex,nofollow` tag; `robots.txt` disallows the whole site. No canonical or sitemap is fabricated before a real authorized production domain is known. Do not remove these barriers without the gates below.

## Private/local run

```bash
node --version # Node >= 20
npm run verify
npm run preview # serves dist/ locally on port 8000, stop with Ctrl+C
```

Verify locally: tool inputs, error feedback, keyboard use, math cases, responsive layout, visible limitations, links to About/Methodology/Privacy/Contact. These checks do not replace browser/a11y/penetration testing.

## If/when G3 is approved separately

1. Record OPC's exact approved scope, private customer data exclusion, budget, rollback owner, compliance check and G3 signed review reference.
2. Review third-party policies on the real date, validate browser and mobile accessibility, code privacy, actual URLs, and ownership-controlled contact method. Publish a real privacy policy after analyzing actual hosting logs/analytics/ads; replace placeholder contact page.
3. Use Cloudflare Pages static build: build command `npm run build`, output `dist`; make sure no Pages Functions/API routes or extra third-party analytics are enabled.
4. First audit the designated `*.pages.dev` URL, HTTPS, headers, redirects, correct routes and caching; ensure preview deployments are not inadvertently indexed.
5. Only when publicly publishing is authorized: deliberately update robots and noindex, generate verified production-domain canonical + sitemap, submit Search Console ownership, check index coverage. Having these files does not ensure Google indexing.
6. Do not add AdSense code just because a page is online; require G4 approval, verified account/site eligibility, applicable certified CMP, tax/payment details, and documented invalid traffic controls.
7. Record actual Cloudflare deployment id, commit, audit result and reversible rollback method; keep commercial decisions in OPC.

## Rollback

If deployment later occurs: use hosting provider's supported rollback to the last tested deployment, restore noindex as appropriate, disable misconfigured analytics/ads, revoke exposed credentials and record an incident. There is **no deployed version to roll back today**.
