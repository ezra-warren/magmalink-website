/**
 * Fetch logos for Our Stack tools using Google Favicon API.
 * Saves to public/logos/<key>.png. Run: node scripts/fetch-logos.mjs
 */

import { writeFile, mkdir } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT_DIR = path.join(__dirname, '..', 'public', 'logos');

const TOOLS = [
  { key: 'clay', domain: 'clay.com' },
  { key: 'smartlead', domain: 'smartlead.ai' },
  { key: 'instantly', domain: 'instantly.ai' },
  { key: 'n8n', domain: 'n8n.io' },
  { key: 'cursor', domain: 'cursor.com' },
  { key: 'claude', domain: 'anthropic.com' },
  { key: 'heyreach', domain: 'heyreach.io' },
  { key: 'apollo', domain: 'apollo.io' },
  { key: 'hubspot', domain: 'hubspot.com' },
  { key: 'salesnavigator', domain: 'linkedin.com' },
  { key: 'apify', domain: 'apify.com' },
  { key: 'prospeo', domain: 'prospeo.io' },
  { key: 'openai', domain: 'openai.com' },
  { key: 'gemini', domain: 'gemini.google.com' },
  { key: 'perplexity', domain: 'perplexity.ai' },
];

const SIZE = 128;
const FAVICON_URL = (domain) => `https://www.google.com/s2/favicons?domain=${domain}&sz=${SIZE}`;

async function fetchLogo(key, domain) {
  const url = FAVICON_URL(domain);
  const res = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0' } });
  if (!res.ok) return false;
  const buf = Buffer.from(await res.arrayBuffer());
  if (buf.length < 100) return false; // too small, likely placeholder
  const filepath = path.join(OUT_DIR, `${key}.png`);
  await writeFile(filepath, buf);
  return true;
}

async function main() {
  await mkdir(OUT_DIR, { recursive: true });
  for (const { key, domain } of TOOLS) {
    process.stdout.write(`Fetching ${key} (${domain})... `);
    const ok = await fetchLogo(key, domain).catch(() => false);
    console.log(ok ? 'saved' : 'skip');
  }
  console.log('Done. Logos in public/logos/');
}

main().catch(console.error);
