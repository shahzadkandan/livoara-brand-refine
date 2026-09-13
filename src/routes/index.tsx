import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import heroAsset from "@/assets/livoara-hero.png.asset.json";
import whiteSunlight from "@/assets/reference/livoara-product-white-sunlight.jpg";
import productDetail from "@/assets/reference/livoara-product-detail.jpg";
import pinkStacked from "@/assets/reference/livoara-product-pink-stacked.jpg";
import categoryWomen from "@/assets/reference/livoara-category-women.jpg";
import categoryMen from "@/assets/reference/livoara-category-men.jpg";
import categoryBeauty from "@/assets/reference/livoara-category-beauty.jpg";
import categoryLifestyle from "@/assets/reference/livoara-category-lifestyle.jpg";
import categoryGifts from "@/assets/reference/livoara-category-gifts.jpg";
import categoryAccessories from "@/assets/reference/livoara-category-accessories.jpg";
import categoryPod from "@/assets/reference/livoara-category-pod.jpg";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "LIVOARA — Made for Every Moment" },
    { name: "description", content: "Discover the LIVOARA travel vanity, a luminous beauty companion thoughtfully designed for travel, gifting, and everyday rituals." },
    { property: "og:title", content: "LIVOARA — Made for Every Moment" },
    { property: "og:description", content: "A luminous vanity, thoughtful organizer, and travel companion—beautifully designed as one." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ]}),
  component: HomePage,
});

function HomePage() {
  return <div className="page-reveal overflow-hidden">
    <section aria-label="Made for every moment" className="relative bg-secondary">
      <h1 className="sr-only">LIVOARA — Made for every moment.</h1>
      <Link to="/product" className="block" aria-label="Shop the LIVOARA Travel Vanity">
        <picture><img src={heroAsset.url} alt="LIVOARA illuminated travel vanity with mirror, beauty products and jewellery" className="h-[66vh] min-h-[430px] w-full object-cover object-[66%_center] sm:h-auto sm:min-h-0" /></picture>
      </Link>
      <div className="bg-secondary px-5 py-5 sm:hidden"><Button asChild className="w-full"><Link to="/product">Shop Now <ArrowRight className="size-4" /></Link></Button></div>
    </section>

    <section className="border-y border-border bg-muted/50"><div className="mx-auto grid max-w-[1120px] gap-px bg-border md:grid-cols-3"><Problem number="01" text="Makeup scattered across your vanity every morning." /><Problem number="02" text="Beauty essentials hidden, dusty and difficult to find." /><Problem number="03" text="No flattering light when you are getting ready on the go." /></div></section>

    <section className="mx-auto max-w-[1120px] px-6 py-24 sm:px-10 lg:py-28">
      <h2 className="font-display text-4xl sm:text-5xl">Designed for your daily ritual.</h2><p className="mt-5 max-w-lg text-sm leading-7 text-muted-foreground">Every detail is made to keep your makeup organised, beautifully lit and easy to reach.</p>
      <div className="mt-12 grid gap-x-8 gap-y-12 md:grid-cols-2"><Feature image={whiteSunlight} title="LED mirror for a clear finish" text="Get ready with bright, even light wherever you are." /><Feature image={categoryLifestyle} title="Room for your everyday essentials" text="Keep palettes, brushes, skincare and accessories together." /><Feature image={productDetail} title="Smart compartments" text="Dedicated spaces make every product easy to see and pick." /><Feature title="Compact, elegant and portable" text="Bring your vanity routine from bedroom to suitcase with ease." /></div>
    </section>

    <section className="bg-secondary px-6 py-24 sm:px-10 lg:py-28"><div className="mx-auto max-w-[1120px]"><h2 className="font-display text-4xl sm:text-5xl">Made for every moment.</h2><div className="mt-12 grid gap-6 md:grid-cols-3"><Moment image={categoryLifestyle} title="At home" text="Keeps your dresser clutter-free and every piece within reach." /><Moment image={pinkStacked} title="Travel" text="Fold-flat design slips into any suitcase or handbag." /><Moment image={categoryGifts} title="Gifting" text="Comes gift-ready — a thoughtful pick for birthdays and festivals." /></div></div></section>

    <section className="mx-auto max-w-[1120px] px-6 py-24 sm:px-10 lg:py-28"><p className="text-[10px] uppercase tracking-[0.22em] text-accent">Collection</p><h2 className="mt-5 font-display text-4xl sm:text-5xl">Future Categories</h2><div className="mt-10 grid grid-cols-2 gap-5 md:grid-cols-4"><Category image={categoryWomen} label="Women" /><Category image={categoryMen} label="Men" /><Category image={categoryBeauty} label="Beauty" /><Category image={categoryLifestyle} label="Lifestyle" /><Category image={categoryGifts} label="Gifts" /><Category image={categoryAccessories} label="Accessories" /><Category image={categoryPod} label="POD" /></div></section>

    <section className="px-6 py-24 sm:px-10 lg:py-32"><div className="mx-auto max-w-[1120px]"><h2 className="font-display text-4xl sm:text-5xl">A better way to get ready.</h2><p className="mt-5 max-w-lg text-sm leading-7 text-muted-foreground">See why a dedicated LED makeup box beats scattered storage and generic organisers.</p><div className="mt-12 overflow-x-auto"><table className="w-full min-w-[720px] border-collapse text-left text-xs"><thead><tr className="border-b border-border text-[9px] uppercase tracking-[0.17em]"><th className="px-4 py-5 font-medium"></th><th className="px-4 py-5 text-center font-medium">Loose on a vanity</th><th className="px-4 py-5 text-center font-medium">Generic organizer</th><th className="bg-muted px-4 py-5 text-center font-medium">LIVOARA</th></tr></thead><tbody><CompareRow label="Organised storage" loose="×" generic="Partial" livoara="✓ Full" /><CompareRow label="LED mirror" loose="×" generic="×" livoara="✓" /><CompareRow label="Makeup-ready compartments" loose="×" generic="Basic" livoara="✓ Smart" /><CompareRow label="30-day returns" loose="—" generic="Varies" livoara="✓" /><CompareRow label="Price" loose="—" generic="₹1,499–₹2,999" livoara="₹2,499" /></tbody></table></div></div></section>

    <section className="bg-muted/70 px-6 py-24 sm:px-10 lg:py-28"><div className="mx-auto max-w-[1120px]"><h2 className="max-w-md font-display text-4xl sm:text-5xl">What customers are saying.</h2><div className="mt-10 flex snap-x gap-5 overflow-x-auto pb-4"><Testimonial quote="My makeup finally has a home, and the light makes getting ready so easy." name="Priya, Mumbai" /><Testimonial quote="The mirror light is so flattering and everything finally stays in one place. My morning routine feels much calmer now." name="Ananya, Bengaluru" /><Testimonial quote="It looks beautiful on my vanity and holds all my daily makeup without taking over the table." name="Mehak, New Delhi" /><Testimonial quote="I bought it before a trip and loved how easy it was to carry my brushes, skincare and makeup together." name="Riya, Mumbai" /></div></div></section>

    <section className="border-y border-border px-6 py-24 sm:px-10 lg:py-28"><div className="mx-auto max-w-2xl"><h2 className="text-center font-display text-4xl sm:text-5xl">Questions, answered.</h2><div className="mt-12"><Faq question="What can I store in the LED makeup box?" answer="It is designed for everyday makeup, brushes, skincare, jewellery and other beauty essentials." open /><Faq question="Does the LED mirror need to be plugged in?" answer="[Add verified operating instructions.]" /><Faq question="How long does delivery take?" answer="[Add verified delivery details.]" /><Faq question="What if I’m not satisfied?" answer="[Add verified returns policy.]" /></div></div></section>

    <section className="bg-primary px-6 py-24 text-primary-foreground sm:px-10 lg:py-28"><div className="mx-auto max-w-[1120px]"><h2 className="max-w-xl font-display text-4xl sm:text-5xl">Give your beauty routine<br />the light it deserves.</h2><Button asChild variant="soft" className="mt-8"><Link to="/product">Shop Now</Link></Button><div className="mt-16 grid gap-5 text-xs text-primary-foreground/70 sm:grid-cols-4"><span>✓ &nbsp; Secure Checkout</span><span>✓ &nbsp; Easy 30-Day Returns</span><span>✓ &nbsp; COD Available</span><span>✓ &nbsp; Beauty, simplified</span></div></div></section>

    <section className="px-6 py-16 text-center sm:px-10"><p className="text-[10px] uppercase tracking-[0.22em] text-accent">Apps &amp; embeds</p><div className="mx-auto mt-5 max-w-3xl border border-dashed border-border px-6 py-8 text-[10px] uppercase tracking-[0.16em] text-muted-foreground">Apps / embed section — add custom HTML, reviews, upsells or widgets here</div></section>
  </div>;
}

function Problem({ number, text }: { number: string; text: string }) { return <div className="min-h-44 bg-muted px-8 py-10"><span className="text-[10px] text-accent">{number}</span><p className="mt-5 max-w-xs font-display text-xl leading-snug">{text}</p></div>; }
function Feature({ image, title, text }: { image?: string; title: string; text: string }) { return <article><div className="aspect-[1.26/1] overflow-hidden bg-background">{image && <img src={image} alt={title} className="h-full w-full object-cover" loading="lazy" />}</div><h3 className="mt-5 font-display text-2xl">{title}</h3><p className="mt-2 text-xs leading-6 text-muted-foreground">{text}</p></article>; }
function Moment({ image, title, text }: { image: string; title: string; text: string }) { return <article><div className="aspect-[4/5] overflow-hidden"><img src={image} alt={`LIVOARA vanity for ${title.toLowerCase()}`} className="h-full w-full object-cover" loading="lazy" /></div><h3 className="mt-5 font-display text-xl">{title}</h3><p className="mt-2 text-xs leading-6 text-muted-foreground">{text}</p></article>; }
function Category({ image, label }: { image: string; label: string }) { return <article><div className="aspect-square overflow-hidden bg-secondary"><img src={image} alt={`${label} category`} className="h-full w-full object-cover" loading="lazy" /></div><div className="mt-3 flex items-center justify-between"><h3 className="font-display text-base">{label}</h3><span className="text-accent">↗</span></div></article>; }
function CompareRow({ label, loose, generic, livoara }: { label: string; loose: string; generic: string; livoara: string }) { return <tr className="border-b border-border"><th className="px-4 py-5 font-medium">{label}</th><td className="px-4 py-5 text-center text-muted-foreground">{loose}</td><td className="px-4 py-5 text-center text-muted-foreground">{generic}</td><td className="bg-muted px-4 py-5 text-center font-medium text-accent">{livoara}</td></tr>; }
function Faq({ question, answer, open = false }: { question: string; answer: string; open?: boolean }) { return <details open={open} className="group border-b border-border py-5"><summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-sm font-medium"><span>{question}</span><span className="text-lg transition-transform group-open:rotate-45">+</span></summary><p className="pt-4 text-xs leading-6 text-muted-foreground">{answer}</p></details>; }

function Testimonial({ quote, name }: { quote: string; name: string }) { return <blockquote className="min-h-56 w-[min(82vw,355px)] shrink-0 snap-start bg-background p-7"><div className="text-accent" aria-label="Five star rating">★★★★★</div><p className="mt-5 font-display text-lg leading-snug">“{quote}”</p><footer className="mt-6 text-xs text-muted-foreground">— {name}</footer></blockquote>; }