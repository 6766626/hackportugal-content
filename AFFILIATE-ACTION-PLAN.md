# Affiliate revenue action plan for HackPortugal

Status: draft 2026-05-17. This is an internal document — not shipped in the app.

## Honest assessment

The promo-codes-verified guide ships **today** as a Premium-gated feature, with:
- Your AutoDoc personal referral code BC98213949 (10% off for new customers, ~€5-10 store credit to you per use)
- 4 fintech referral programmes that anyone can use (N26 €35 / Revolut €30 / Wise €75 / Glovo €8)
- 6 product/travel/cashback sections with verified codes and clear verification dates

But the **AutoDoc BC98213949 code is a refer-a-friend code, not an affiliate code**. The economics differ:
- **Refer-a-friend (BC98213949)**: you earn €5-10 store credit per new customer who uses it. Capped, store credit only — useless if you don't shop at AutoDoc yourself.
- **Affiliate programme** (via Admitad/Tradedoubler): you earn 5.5% cash commission on every sale from your link/code, paid to your bank. Uncapped, scales with users.

If HackPortugal sends meaningful traffic to AutoDoc, switching from the refer-a-friend code to an affiliate code multiplies revenue by 10-50x.

## Three-phase rollout

### Phase 1 — register on Admitad (this week, ~2 hours)

**Why Admitad first**: single registration unlocks AutoDoc, Decathlon, Glovo, Booking, eDreams, lastminute, FNAC and dozens of other PT-relevant offers. Free. No website required for basic approval (they accept mobile apps + Telegram channels as traffic sources).

**Steps**:
1. Go to <https://www.admitad.com/affiliates/> → "Become a publisher"
2. Use "HackPortugal" as publisher name, register the iOS app and your domain (hackportugal.eu or similar) as traffic sources
3. After signup, search the catalogue for: AutoDoc PT, Decathlon PT, Glovo PT, Booking.com, eDreams, iHerb, lastminute, FNAC
4. Apply to each (most auto-approve, some take 24-48 hours)
5. For each approved programme, generate a tracking link / promo code

**Once approved**: I'll do a content-repo PR replacing the current refer-a-friend codes with the Admitad affiliate ones. Same guide, same UX, but every conversion now pays HackPortugal commission, not just store credit.

**Expected revenue per 1,000 active premium users / month**, conservatively:
- AutoDoc 5.5% × avg €60 basket × 3% conversion = ~€100
- Decathlon 1-6% × avg €40 basket × 5% conversion = ~€60
- Glovo €1-3 per signup × 8% conversion = ~€160
- Booking 4% × avg €200 stay × 2% conversion = ~€160
- **Total ~€480/month** at 1,000 active users — meaningfully more than 1,000 × €4.99 × Apple's 70-85% cut would generate alone

### Phase 2 — land a hackportugal.eu landing page (this month, ~1 day)

**Why**: Awin and CJ Affiliate require a publicly-accessible website (not an app). Awin gives you direct Booking.com access (4% on hotels — biggest single revenue source for a relocation app), big brands (Lufthansa, Hertz, Marriott, etc.). Without a landing page, you're locked out of the highest-value programmes.

**What it needs** (minimum to pass Awin compliance):
- Hosted at a real domain (hackportugal.eu — buy via Cloudflare Registrar, ~€10/year)
- Pages: home (what the app is), about, privacy, terms — all of which you already have in the iOS app
- Static HTML/Hugo/Astro deploy on GitHub Pages or Cloudflare Pages, free
- "Resources" or "Recommended services" section that lists actual affiliate-linked offers (this is what Awin verifies — proof you can actually drive traffic)

**Once live + Awin approved**:
- Apply to Booking.com via Awin (auto-approve for most publishers)
- Apply to Tradedoubler (separate network, has Iberia/TAP/different brand set)
- Apply to CJ Affiliate (Booking.com here too, plus US brands)
- Re-deploy the content repo with Awin-attributed links for hotel/flight content

### Phase 3 — automate verification (next quarter, ~3 days)

Today the promo-codes-verified guide is manually maintained — monthly check, edit content, push. That works for ~50 codes but breaks at scale.

**What to build**:
1. A simple Node script in `scripts/check-promocodes.mjs` that for each code:
   - For URLs: HTTP HEAD check that the destination still resolves
   - For codes: heuristic check via HEAD on `https://brand.com/check-coupon?code=X` (varies per brand)
   - For affiliate links: ping the affiliate network API for active status
2. CI job runs weekly, opens a PR with a list of suspected-dead codes for manual confirmation
3. Once you confirm in the PR, automated content edit + redeploy
4. Optional: a `verifiedAt` field auto-bumped to today's date when the check passes

This makes the Premium promo-codes section **always fresh**, which justifies the price tag.

## Concrete next-action checklist

- [ ] **Day 1**: Sign up at admitad.com/affiliates (you, 30 min)
- [ ] **Day 1**: Apply to AutoDoc, Decathlon, Glovo, Booking programmes inside Admitad
- [ ] **Day 2-3**: Wait for approvals; collect tracking codes/links once approved
- [ ] **Day 4**: Send me the approved tracking codes — I'll do a content repo PR to replace BC98213949 (refer-a-friend) with Admitad affiliate code (commission)
- [ ] **Week 2**: Decide on a domain (hackportugal.eu, hackportugal.pt, or .app) and register
- [ ] **Week 3**: Deploy a static landing page (I can scaffold one in Astro in ~2 hours)
- [ ] **Week 4**: Apply to Awin and CJ with the live landing page
- [ ] **Month 2**: Once Awin live, add Booking.com section to the verified-promo guide and add the affiliate tracking to wedding/travel-related guides (`travel_portugal/*`, `housing_rent/*`)
- [ ] **Month 3+**: Build the auto-verification CI job

## Codes to add once you have affiliate IDs (template)

For each programme below, replace `TODO_AFFILIATE_CODE` once the network issues you one:

```js
// content/{lang}/daily_life/promo-codes-verified.mjs
{ kind: 'checklist', items: [
  '🔧 AutoDoc 5% off + 5.5% cashback for HackPortugal — link: https://admitad.com/g/TODO/ — verified DD/MM/YYYY 💚',
  '⚽ Decathlon 1-6% commission — link: https://admitad.com/g/TODO/ — verified DD/MM/YYYY 💚',
  '🛵 Glovo €8 sign-up + €2 commission to HackPortugal — link: https://admitad.com/g/TODO/ — verified DD/MM/YYYY 💚',
  '🏨 Booking.com 4% per completed stay via Awin — link: https://www.awin1.com/cread.php?awinmid=TODO&awinaffid=YOUR_AWIN_ID — verified DD/MM/YYYY 💚'
]}
```

The `💚` icon already means "affiliated" in the guide's honesty disclaimer.

## What NOT to do

- ❌ Don't sign up for shady "you'll earn $1,000 a week" networks (ClickBank, MaxBounty, etc.) — most are MLM-adjacent and Apple may reject the app at review
- ❌ Don't switch the guide to "100% affiliate links" — keep ~20% non-affiliated codes so the disclaimer is honest, otherwise readers smell a sponsored content trap and trust drops
- ❌ Don't add affiliate links to legal/immigration guides (residence_permit, nationality, taxes) — that crosses an ethical line for legal-grade content
- ❌ Don't auto-renew expired codes in CI without manual confirmation — broken codes shipped automatically would tank Premium trust

## Estimated timeline to first €100 in commission

Conservative: 6-8 weeks from today, assuming you finish Phase 1 by end of next week and HackPortugal has at least 50-100 active Premium users.

Aggressive: 3-4 weeks if Admitad approves AutoDoc in 24h and you have any existing audience (Telegram channel, IG followers) you can soft-launch to.

The biggest single revenue lever once you cross 500 active Premium users will be Booking.com via Awin — every relocation app users typically books 5-15 hotel nights a year via the in-app guides, and 4% × €100 average stay × 10 stays = €40/user/year just from one programme.
