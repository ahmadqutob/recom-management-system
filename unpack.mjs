import fs from 'node:fs';
import path from 'node:path';
import zlib from 'node:zlib';
const parts = ['payload/part1.txt','payload/part2.txt','payload/part3.txt','payload/part4.txt','payload/part5.txt','payload/part6.txt'];
const source = parts.map(file => fs.readFileSync(file,'utf8').trim()).join('');
const decoded = zlib.brotliDecompressSync(Buffer.from(source,'base64'));
const files = JSON.parse(decoded.toString('utf8'));
for (const [name, content] of Object.entries(files)) {
  if(name.startsWith('/') || name.includes('..')) throw new Error('Unsafe path');
  fs.mkdirSync(path.dirname(name), {recursive:true});
  fs.writeFileSync(name,content,'utf8');
}
console.log(`Prepared ${Object.keys(files).length} source files`);
