import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import heroAsset from "@/assets/livoara-hero.png.asset.json";
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

    <section className="border-y border-border bg-muted/50"><div className="mx-auto grid max-w-[1450px] gap-px bg-border md:grid-cols-3"><Problem number="01" text="Makeup scattered across your vanity every morning." /><Problem number="02" text="Beauty essentials hidden, dusty and difficult to find." /><Problem number="03" text="No flattering light when you are getting ready on the go." /></div></section>

    <section className="mx-auto max-w-[1450px] px-6 py-20 sm:px-10 lg:py-28">
      <h2 className="font-display text-4xl sm:text-6xl">Designed for your daily ritual.</h2><p className="mt-5 max-w-xl leading-8 text-muted-foreground">Every detail is made to keep your makeup organised, beautifully lit and easy to reach.</p>
      <div className="mt-12 grid gap-x-7 gap-y-12 md:grid-cols-2"><Feature crop="object-[64%_50%]" title="LED mirror for a clear finish" text="Get ready with bright, even light wherever you are." /><Feature crop="object-[82%_48%]" title="Room for your everyday essentials" text="Keep palettes, brushes, skincare and accessories together." /><Feature crop="object-[70%_62%]" title="Smart compartments" text="Dedicated spaces make every product easy to see and pick." /><Feature crop="object-[91%_47%]" title="Compact, elegant and portable" text="Bring your vanity routine from bedroom to suitcase with ease." /></div>
    </section>

    <section className="bg-secondary px-6 py-20 sm:px-10 lg:py-28"><div className="mx-auto max-w-[1450px]"><h2 className="font-display text-4xl sm:text-6xl">Made for every moment.</h2><div className="mt-12 grid gap-7 md:grid-cols-3"><Moment crop="object-[84%_45%]" title="At home" text="Keeps your dresser clutter-free and every piece within reach." /><Moment crop="object-[65%_52%]" title="Travel" text="A compact design that slips neatly into your suitcase or handbag." /><Moment crop="object-[91%_45%]" title="Gifting" text="A thoughtful pick for birthdays and special moments." /></div></div></section>

    <section className="mx-auto max-w-[1450px] px-6 py-20 sm:px-10 lg:py-28"><p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Coming soon</p><h2 className="mt-5 font-display text-4xl sm:text-6xl">Future Categories</h2><div className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4"><Category crop="object-[88%_48%]" label="Women" /><Category crop="object-[78%_58%]" label="Men" /><Category crop="object-[58%_52%]" label="Beauty" /><Category crop="object-[94%_48%]" label="Lifestyle" /></div></section>

    <section className="border-y border-border px-6 py-20 sm:px-10 lg:py-28"><div className="mx-auto max-w-[1450px]"><h2 className="font-display text-4xl sm:text-6xl">A better way to get ready.</h2><p className="mt-5 max-w-xl leading-8 text-muted-foreground">See how a dedicated LED makeup box compares with loose storage and a generic organiser.</p><div className="mt-12 overflow-x-auto"><table className="w-full min-w-[720px] border-collapse text-left text-sm"><thead><tr className="border-b border-border text-xs uppercase tracking-[0.14em]"><th className="px-4 py-5 font-medium">Feature</th><th className="px-4 py-5 text-center font-medium">Loose on a vanity</th><th className="px-4 py-5 text-center font-medium">Generic organiser</th><th className="bg-muted px-4 py-5 text-center font-medium">LIVOARA</th></tr></thead><tbody><CompareRow label="Organised storage" loose="×" generic="Partial" livoara="✓ Full" /><CompareRow label="LED mirror" loose="×" generic="×" livoara="✓" /><CompareRow label="Makeup-ready compartments" loose="×" generic="Basic" livoara="✓ Smart" /><CompareRow label="Verified returns policy" loose="—" generic="Varies" livoara="[Add policy]" /><CompareRow label="Price" loose="—" generic="Varies" livoara="[Price]" /></tbody></table></div></div></section>

    <section className="bg-muted/70 px-6 py-24 sm:px-10 lg:py-28"><div className="mx-auto max-w-[1450px]"><h2 className="max-w-xl font-display text-4xl sm:text-6xl">What customers are saying.</h2><div className="mt-10 grid gap-5 md:grid-cols-3"><Testimonial quote="[Add a verified customer quote here.]" name="[Customer name]" /><Testimonial quote="[Add a second verified customer quote here.]" name="[Customer name]" /><Testimonial quote="[Add a third verified customer quote here.]" name="[Customer name]" /></div></div></section>

    <section className="border-y border-border px-6 py-20 sm:px-10"><div className="mx-auto max-w-3xl"><h2 className="text-center font-display text-4xl sm:text-5xl">Questions, answered.</h2><div className="mt-10"><Faq question="What can I store in the LED makeup box?" answer="[Add verified capacity details.]" /><Faq question="Does the LED mirror need to be plugged in?" answer="[Add verified operating instructions.]" /><Faq question="How long does delivery take?" answer="[Add verified delivery details.]" /><Faq question="What if I’m not satisfied?" answer="[Add verified returns policy.]" /></div></div></section>

    <section className="bg-primary px-6 py-20 text-primary-foreground sm:px-10"><div className="mx-auto flex max-w-[1200px] flex-col items-start justify-between gap-8 md:flex-row md:items-end"><div><p className="text-xs uppercase tracking-[0.2em] text-primary-foreground/55">The LIVOARA vanity</p><h2 className="mt-5 max-w-xl font-display text-4xl sm:text-6xl">Give your beauty routine the light it deserves.</h2></div><Button asChild variant="soft"><Link to="/product">Shop Now <ArrowRight className="size-4" /></Link></Button></div></section>

    <Newsletter />
  </div>;
}

function Problem({ number, text }: { number: string; text: string }) { return <div className="min-h-40 bg-muted px-8 py-9"><span className="text-xs text-accent">{number}</span><p className="mt-5 max-w-xs font-display text-2xl leading-snug">{text}</p></div>; }
function Feature({ crop, title, text }: { crop: string; title: string; text: string }) { return <article><div className="aspect-[4/3] overflow-hidden bg-secondary"><img src={heroAsset.url} alt={title} className={`h-full w-full scale-[1.65] object-cover ${crop}`} loading="lazy" /></div><h3 className="mt-5 font-display text-2xl">{title}</h3><p className="mt-2 text-sm leading-7 text-muted-foreground">{text}</p></article>; }
function Moment({ crop, title, text }: { crop: string; title: string; text: string }) { return <article><div className="aspect-[4/5] overflow-hidden bg-muted"><img src={heroAsset.url} alt={`LIVOARA vanity for ${title.toLowerCase()}`} className={`h-full w-full scale-[1.8] object-cover ${crop}`} loading="lazy" /></div><h3 className="mt-5 font-display text-2xl">{title}</h3><p className="mt-2 text-sm leading-7 text-muted-foreground">{text}</p></article>; }
function Category({ crop, label }: { crop: string; label: string }) { return <article><div className="aspect-[4/3] overflow-hidden bg-secondary"><img src={heroAsset.url} alt="LIVOARA product preview" className={`h-full w-full scale-[2] object-cover ${crop}`} loading="lazy" /></div><div className="mt-4 flex items-center justify-between"><h3 className="font-display text-xl">{label}</h3><span className="text-xs uppercase tracking-[0.14em] text-muted-foreground">Coming soon</span></div></article>; }
function CompareRow({ label, loose, generic, livoara }: { label: string; loose: string; generic: string; livoara: string }) { return <tr className="border-b border-border"><th className="px-4 py-5 font-medium">{label}</th><td className="px-4 py-5 text-center text-muted-foreground">{loose}</td><td className="px-4 py-5 text-center text-muted-foreground">{generic}</td><td className="bg-muted px-4 py-5 text-center font-medium text-accent">{livoara}</td></tr>; }
function Faq({ question, answer }: { question: string; answer: string }) { return <details className="group border-b border-border py-5"><summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-medium"><span>{question}</span><span className="text-xl text-accent transition-transform group-open:rotate-45">+</span></summary><p className="pt-4 text-sm leading-7 text-muted-foreground">{answer}</p></details>; }

function Testimonial({ quote, name }: { quote: string; name: string }) { return <blockquote className="bg-background p-8 sm:p-10"><div className="text-accent" aria-label="Rating placeholder">☆ ☆ ☆ ☆ ☆</div><p className="mt-7 font-display text-2xl leading-relaxed">“{quote}”</p><footer className="mt-7 text-xs uppercase tracking-[0.16em] text-muted-foreground">{name} · Verified review placeholder</footer></blockquote>; }

function Newsletter() { return <section className="bg-secondary px-6 py-20 text-center sm:px-10"><p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">The LIVOARA letter</p><h2 className="mt-5 font-display text-4xl sm:text-5xl">A little beauty, delivered.</h2><p className="mx-auto mt-4 max-w-lg text-sm leading-7 text-muted-foreground">Join for product notes and thoughtful inspiration. Email delivery will be connected soon.</p><form className="mx-auto mt-8 flex max-w-lg flex-col gap-3 sm:flex-row" onSubmit={(e) => e.preventDefault()}><label htmlFor="newsletter" className="sr-only">Email address</label><input id="newsletter" type="email" required placeholder="Email address" className="min-h-12 min-w-0 flex-1 border border-input bg-background px-4 outline-none focus:ring-2 focus:ring-ring" /><Button type="submit">Join the list</Button></form></section>; }