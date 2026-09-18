# Client revision requests — LIVOARA website

Seven requests from the document, implemented inside the existing LIVOARA design (same colours, fonts, header, layout).

## 1. Category tiles get working links
All eight Future Categories tiles (Women, Men, Beauty, Lifestyle, Gifts, Accessories, POD, Travel Vanity) become clickable and open the shop page, since the store currently sells one product. Tiles get a clear hover state.

## 2. Reviews become a real, submittable widget
- Customers can write a review: name, city, star rating, comment, optional photo-free text only.
- Submitted reviews are saved in a secure cloud database (Lovable Cloud enabled for this) and appear on the site after they are approved, so nothing unwanted goes live.
- The reviews strip scrolls sideways with arrows for a premium feel, on both home page and product page.
- Existing sample cards stay visible only until real reviews come in, and remain clearly labelled as samples.

## 3. Product page cleanup
- Remove the duplicated headline/label block above the gallery so the page opens directly with the product.
- Trim repeated trust and disclaimer lines that say the same thing twice.
- Add the review widget (write + read) directly on the product page.

## 4. Cart shows full details
Cart drawer already lists photo, name, variant, price and quantity. It gets a clearer layout: larger photo, per-line total, item savings where a compare price exists, and subtotal above the checkout button.

## 5. Checkout button
Checkout is already wired to Shopify checkout. It will be re-tested end to end and the button text made explicit ("Secure checkout"), with a clear message if the cart is empty.

## 6. Benefit images + sticky add-to-cart bar
- Add a benefits image row showing what the customer receives (mirror light, organised sections, compact case, what's in the box).
- The sticky add-to-cart bar already exists on mobile; it is extended to desktop with product photo, name, price, quantity stepper and ADD TO CART.

## 7. Description + delivery checker
- Expand the product description section with supporting images.
- New "Check delivery availability" box: customer enters a 6-digit pincode, we look up the real city and state, then show serviceability and an estimated timeline. The estimate wording is kept as an editable placeholder until you confirm your courier's committed timelines.

## Technical notes
- Lovable Cloud enabled for a `reviews` table (name, city, rating, body, status, created_at) with row-level security: anyone may submit, only approved rows are publicly readable.
- Reviews read/write through server functions; Shopify keeps handling products, cart, payments and checkout.
- Pincode lookup uses the public India Post pincode API from a server function; no invented city data.
- No fabricated ratings or star scores anywhere; averages appear only once real reviews exist.
