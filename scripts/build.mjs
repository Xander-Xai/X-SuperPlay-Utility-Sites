import {rm,mkdir,cp,readdir,readFile} from 'node:fs/promises';
import path from 'node:path';
const root=process.cwd(), dist=path.join(root,'dist');
await rm(dist,{recursive:true,force:true});
await mkdir(path.join(dist,'src'),{recursive:true});
await cp(path.join(root,'public'),dist,{recursive:true});
await cp(path.join(root,'src','app.mjs'),path.join(dist,'src','app.mjs'));
await cp(path.join(root,'src','estimate.mjs'),path.join(dist,'src','estimate.mjs'));
const pages=(await readdir(dist)).filter(p=>p.endsWith('.html'));
if(pages.length!==5) throw new Error('Expected five static pages');
for(const page of pages){const data=await readFile(path.join(dist,page),'utf8');if(!data.includes('noindex,nofollow'))throw new Error(`Missing prototype noindex: ${page}`)}
console.log(`Built ${pages.length} noindex static pages into dist/; no external deployment performed.`);
