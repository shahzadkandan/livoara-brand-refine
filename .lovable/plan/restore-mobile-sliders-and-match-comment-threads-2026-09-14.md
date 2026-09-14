# Restore Mobile Sliders and Match Comment Threads

## Goal
Correct the last update by keeping intentional mobile swipe sections while preventing the whole page from moving sideways, and make product comments closely follow the supplied social-thread reference.

## Changes
- Restore horizontal swipe behavior on the home content-card section that previously slid on mobile.
- Keep the page itself fixed to the screen width; only the intended card row will scroll horizontally.
- Replace the product comment masonry/cards with one clean, dense vertical discussion feed.
- Give each comment a round initials avatar, customer name, compact message bubble, small Like/Reply-style metadata, and an indented LIVOARA reply where appropriate.
- Increase the visible conversation density while keeping every entry clearly marked as sample feedback and avoiding invented ratings or verified claims.
- Preserve pricing, product gallery hover/zoom, cart, policy wording, full product image, and the updated light home call-to-action.

## Technical details
- Update only the home page, product page, and roadmap.
- Use contained `overflow-x-auto` rows with fixed mobile card widths and scroll snapping; retain normal grids on larger screens.
- Build comments as an accessible single-column list with nested brand replies and responsive spacing.
- Verify mobile page width, swipe behavior, comments, desktop layout, interactions, and final build state.
