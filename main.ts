import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const PLAN = `Sell $199 quote sites to plumbers buying Facebook ads that lead only to Facebook pages; $29/month edits. D1: find 20 in Meta Ad Library, verify no site, build 3 live previews on free Cloudflare Pages. Budget: domain allowance $12, Zoho Mail $12/year, OpenRouter $10, reserve $66=$100. D2: template mobile quote form, test delivery. D3-26: email 50 owners/day their own preview; follow up on days +3,+7; honor opt-outs. Confirm budget and Base USDC acceptance before bespoke edits; collect before transferring source/site. No calls or seller KYC. D27-30: finish handovers, collect, sell care. Funnel: 1,200 contacts x 4% replies=48; half discuss=24; one-third buy=8. Most likely: haircut to 6 settled + 2 care payments: $1,252 revenue+$66 reserve-$10 fees=$1,308 held D30. Zero-sale floor $66. After 200 contacts with no sale, switch to electricians; after 400, stop spending if still none. Edge: existing ad spend proves intent; live previews show exactly where paid traffic could request a quote.`;

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, 'entry.txt'), PLAN, 'utf8');
