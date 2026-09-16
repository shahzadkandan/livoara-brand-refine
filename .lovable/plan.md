# LIVOARA homepage redesign from PDF reference

## Goal
Rebuild the homepage using the uploaded PDF reference while keeping the existing LIVOARA fonts, colors, header, footer, and navigation exactly the same. Apply only the parts that make the current single-product experience clearer and more conversion-focused.

## What stays unchanged
- Existing design tokens, Playfair Display + DM Sans typography, button components, header, footer, and navigation.
- Single-product focus: every shop/category link routes to `/product`.
- No custom backend, orders, payments, inventory, or checkout — Shopify continues to handle commerce.
- All unsupported claims remain editable placeholders; no invented ratings, stock, delivery guarantees, or customer counts.

## Homepage changes
1. **Hero refresh**
   - Eyebrow: “BEAUTY, ORGANISED”
   - Headline: “Your Beauty Routine, In One Beautiful Box.”
   - Subheadline: compact LED makeup case copy using existing factual benefits.
   - CTAs: “Shop Now” → `/product`; “Watch Video” scrolls to the video section or opens the existing product video preview.
   - Feature pills/icons: Organised storage, LED mirror, Travel friendly, Stylish & modern.

2. **“See LIVOARA in use” video section**
   - Reuse the existing product use-case videos, presented as a 60-second highlighted clip with a clear play/preview.

3. **Problem → Solution band**
   - “Sound familiar?” list of daily pain points.
   - “The LIVOARA Solution” list of matching benefits.
   - Keep wording factual and publish-safe.

4. **Shop by Category**
   - Category cards: Women, Men, Beauty, Lifestyle, Gifts, Accessories — all linking to `/product`.
   - Use existing reference/category assets where available.

5. **Lifestyle banner**
   - Full-width lifestyle image with “Designed for your everyday, beautiful wherever you go.” and a Shop Now link.

6. **Customer conversations**
   - Replace dense comment threads with the PDF’s cleaner review cards.
   - Label clearly as sample feedback; no fabricated star ratings or verified counts.

7. **Trust badges**
   - Fast Shipping, Easy Returns, Secure Payments, Features/Durability — using policy-safe wording from existing site copy.

8. **Comparison table**
   - “LIVOARA vs Traditional” feature table, mobile swipeable, using existing factual comparisons.

9. **Community / #MyLivoara**
   - Lightweight closing band inviting customers to share, kept as a placeholder until real UGC is available.

## Supporting pages
- No structural changes to About, Contact, Privacy, Terms, or Shipping & Returns.
- Product page keeps existing improvements; only minor alignment if the new homepage introduces shared trust/badge components.

## Validation
- Verify homepage loads at 1280×1800 and 390×844.
- Check that no section causes horizontal page scroll.
- Confirm build passes and all internal links resolve.
