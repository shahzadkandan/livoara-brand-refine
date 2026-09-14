import { createFileRoute } from "@tanstack/react-router";
import { CopySection, EditorialPage } from "@/components/editorial-page";

const description = "Read the terms of service for using and purchasing from LIVOARA.";
export const Route = createFileRoute("/terms")({ head: () => ({ meta: [{ title: "Terms of Service — LIVOARA" }, { name: "description", content: description }, { property: "og:title", content: "Terms of Service — LIVOARA" }, { property: "og:description", content: description }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }] }), component: TermsPage });

function TermsPage() {
  return <EditorialPage eyebrow="Policies & customer care" title="Terms of Service" intro="These Terms of Service govern your use of livoara.in and your purchase of products through our website. By accessing or using the website, you agree to these terms.">
    <CopySection title="Terms status"><p>Effective date: 14 September 2026. Continued use of the website after an update constitutes acceptance of the revised terms.</p></CopySection>
    <CopySection title="1. About LIVOARA"><p>LIVOARA is an organised-living and lifestyle brand focused on thoughtfully designed and curated products that help customers organise, simplify, and elevate everyday living. Our range may include beauty and organisation products, storage solutions, lifestyle products, products for women and men, gifting, personalised products, and Print-on-Demand products.</p></CopySection>
    <CopySection title="2. Website use"><PolicyList items={["Use the website only for lawful purposes.", "Do not misuse, disrupt, damage, or attempt unauthorised access to the website or its systems.", "Do not reproduce, copy, modify, or commercially exploit website content without written permission.", "We may restrict access where misuse or unlawful activity is identified."]} /></CopySection>
    <CopySection title="3. Product information"><p>We make reasonable efforts to keep product descriptions, specifications, images, colours, dimensions, prices, and other information accurate. Minor variations may occur due to screen settings, photography, manufacturing tolerances, or product batches.</p></CopySection>
    <CopySection title="4. Prices & taxes"><p>Prices may change without prior notice. Applicable taxes and charges will be displayed or reflected as required at checkout. Promotional pricing may be subject to offer-specific conditions.</p></CopySection>
    <CopySection title="5. Orders"><p>Placing an order constitutes an offer to purchase. An order confirmation does not necessarily guarantee fulfilment if an item becomes unavailable, a pricing or inventory error is identified, or an order cannot be processed for legitimate operational or compliance reasons. If LIVOARA cancels an order after payment has been received, the applicable amount will be refunded through the relevant payment mechanism.</p></CopySection>
    <CopySection title="6. Payment"><p>We may offer prepaid methods such as UPI, cards, net banking, and other supported methods, along with Cash on Delivery where available for eligible locations or products. Payment options shown at checkout may vary.</p></CopySection>
    <CopySection title="7. COD orders"><p>Where COD is offered, LIVOARA may use verification or confirmation procedures. COD availability may depend on pincode, product, order value, serviceability, or other operational criteria.</p></CopySection>
    <CopySection title="8. Shipping"><p>Shipping timelines, charges, and serviceability are governed by our Shipping & Returns Policy. Delivery estimates are indicative and may be affected by logistics conditions, weather, holidays, operational disruptions, or events beyond our reasonable control.</p></CopySection>
    <CopySection title="9. Returns & exchanges"><p>Returns, refunds, and exchanges are governed by our Shipping & Returns Policy.</p></CopySection>
    <CopySection title="10. Intellectual property"><p>The LIVOARA name, logo, website design, text, graphics, photographs, product content, and other materials are owned by or licensed to LIVOARA unless otherwise stated. Unauthorised use is prohibited.</p></CopySection>
    <CopySection title="11. Third-party services"><p>The website may use third-party services including payment gateways, logistics providers, analytics services, communication tools, and other technology providers. Their services may be governed by their own terms and policies.</p></CopySection>
    <CopySection title="12. Website availability"><p>We aim to keep the website available and accurate, but do not guarantee uninterrupted or error-free access.</p></CopySection>
    <CopySection title="13. Changes"><p>LIVOARA may update these Terms from time to time. Updated terms will be posted on this page with the revised effective date.</p></CopySection>
    <CopySection title="14. Contact"><p>Questions about these Terms: <a className="text-foreground underline underline-offset-4" href="mailto:hello@livoara.in">hello@livoara.in</a></p><p>ARINJJOY VENTURES<br />Kalinga Nagar, Ghatikia, Bhubaneswar, Odisha – 751003<br />GSTIN: 21ACMFA2803PIZE</p></CopySection>
  </EditorialPage>;
}

function PolicyList({ items }: { items: string[] }) {
  return <ul className="list-disc space-y-2 pl-5">{items.map((item) => <li key={item}>{item}</li>)}</ul>;
}