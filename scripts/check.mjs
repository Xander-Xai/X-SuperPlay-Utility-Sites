import {readFile} from 'node:fs/promises';
import path from 'node:path';
const root=process.cwd();
const files=['public/index.html','public/about.html','public/methodology.html','public/privacy.html','public/contact.html','public/robots.txt','src/app.mjs','src/estimate.mjs','public/styles.css'];
for(const filename of files){const text=await readFile(path.join(root,filename),'utf8');if(!text.trim())throw new Error(`Empty ${filename}`);if(/googletagmanager\.com|google-analytics\.com|adsbygoogle|<form[^>]+action=|fetch\(|XMLHttpRequest\(/i.test(text)) throw new Error(`Potential external network/ads/form in ${filename}`)}
const home=await readFile(path.join(root,'public/index.html'),'utf8');
for(const target of ['/about.html','/methodology.html','/privacy.html','/contact.html','/styles.css','/src/app.mjs'])if(!home.includes(target))throw new Error(`Missing home reference: ${target}`);
const robots=await readFile(path.join(root,'public/robots.txt'),'utf8');if(!robots.includes('Disallow: /'))throw new Error('Prototype must default to noindex');
console.log('Static links, files and no-ad/no-network indicators checked; not a full security or accessibility audit.');
