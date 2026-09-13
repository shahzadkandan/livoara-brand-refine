import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Gift, Plane, Sparkles } from "lucide-react";
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
      <Link to="/product" className="block" aria-label="Shop the LIVOARA Travel Vanity">
        <picture><img src={heroAsset.url} alt="LIVOARA illuminated travel vanity with mirror, beauty products and jewellery" className="h-[66vh] min-h-[430px] w-full object-cover object-[66%_center] sm:h-auto sm:min-h-0" /></picture>
      </Link>
      <div className="bg-secondary px-5 py-5 sm:hidden"><Button asChild className="w-full"><Link to="/product">Shop Now <ArrowRight className="size-4" /></Link></Button></div>
    </section>

    <section className="grid lg:grid-cols-2">
      <div className="flex min-h-[480px] flex-col justify-center bg-background px-7 py-20 sm:px-12 lg:px-[10vw]">
        <Plane className="size-5 text-accent" strokeWidth={1.4} />
        <p className="mt-8 text-xs uppercase tracking-[0.2em] text-muted-foreground">Travel, considered</p>
        <h2 className="mt-5 max-w-lg font-display text-4xl leading-tight sm:text-6xl">Your ritual, wherever the moment takes you.</h2>
        <p className="mt-6 max-w-md leading-8 text-muted-foreground">A compact home for the pieces you reach for most, with light and organization built into one elegant companion.</p>
        <Button asChild variant="outline" className="mt-9 w-fit"><Link to="/product">Discover the vanity <ArrowRight className="size-4" /></Link></Button>
      </div>
      <ProductCrop positionClass="object-[72%_center]" label="The LIVOARA vanity open with illuminated mirror" />
    </section>

    <section className="grid bg-primary text-primary-foreground lg:grid-cols-2">
      <ProductCrop positionClass="object-[88%_30%]" label="LIVOARA vanity styled beside a wrapped gift" />
      <div className="flex min-h-[480px] flex-col justify-center px-7 py-20 sm:px-12 lg:px-[10vw]">
        <Gift className="size-5 text-accent" strokeWidth={1.4} />
        <p className="mt-8 text-xs uppercase tracking-[0.2em] text-primary-foreground/60">A thoughtful gift</p>
        <h2 className="mt-5 max-w-lg font-display text-4xl leading-tight sm:text-6xl">Beautiful before it is even opened.</h2>
        <p className="mt-6 max-w-md leading-8 text-primary-foreground/70">Made to feel personal, useful, and quietly special—for milestones, journeys, and just-because moments.</p>
        <Button asChild variant="soft" className="mt-9 w-fit"><Link to="/product">Gift LIVOARA <ArrowRight className="size-4" /></Link></Button>
      </div>
    </section>

    <section className="mx-auto max-w-[1450px] px-6 py-24 sm:px-10 lg:py-32">
      <div className="mx-auto max-w-3xl text-center"><Sparkles className="mx-auto size-5 text-accent" strokeWidth={1.4} /><p className="mt-6 text-xs uppercase tracking-[0.2em] text-muted-foreground">One design, many moments</p><h2 className="mt-5 font-display text-4xl sm:text-6xl">Everything has its place.</h2><p className="mx-auto mt-6 max-w-xl leading-8 text-muted-foreground">From morning light to a last-minute touch-up, the LIVOARA vanity keeps your beauty ritual composed and close.</p></div>
      <div className="mt-14 aspect-[16/7] overflow-hidden bg-muted"><img src={heroAsset.url} alt="Close view of the LIVOARA vanity compartments and mirror" className="h-full w-full scale-[1.45] object-cover object-[65%_58%]" loading="lazy" /></div>
    </section>

    <section className="border-y border-border bg-muted/55 px-6 py-24 text-center sm:px-10 lg:py-32"><p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Our story</p><h2 className="mx-auto mt-6 max-w-3xl font-display text-4xl leading-tight sm:text-6xl">Beauty lives in the details you choose to carry.</h2><p className="mx-auto mt-7 max-w-2xl leading-8 text-muted-foreground">LIVOARA begins with a simple idea: everyday objects can be both deeply useful and quietly beautiful. Our first piece brings that intention to your personal ritual.</p><Button asChild variant="outline" className="mt-9"><Link to="/about">Read our story <ArrowRight className="size-4" /></Link></Button></section>

    <section className="mx-auto max-w-[1200px] px-6 py-24 lg:py-32"><div className="grid gap-12 lg:grid-cols-[1fr_1.5fr]"><div><p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Notes from our community</p><h2 className="mt-5 font-display text-4xl sm:text-5xl">Made to be loved.</h2></div><div className="grid gap-px bg-border sm:grid-cols-2"><Testimonial quote="[Add a verified customer quote here.]" name="[Customer name]" /><Testimonial quote="[Add a second verified customer quote here.]" name="[Customer name]" /></div></div></section>

    <Newsletter />
  </div>;
}

function ProductCrop({ positionClass, label }: { positionClass: string; label: string }) {
  return <div className="min-h-[440px] overflow-hidden bg-secondary"><img src={heroAsset.url} alt={label} className={`h-full min-h-[440px] w-full scale-[1.55] object-cover ${positionClass}`} loading="lazy" /></div>;
}

function Testimonial({ quote, name }: { quote: string; name: string }) { return <blockquote className="bg-background p-8 sm:p-10"><div className="text-accent" aria-label="Rating placeholder">☆ ☆ ☆ ☆ ☆</div><p className="mt-7 font-display text-2xl leading-relaxed">“{quote}”</p><footer className="mt-7 text-xs uppercase tracking-[0.16em] text-muted-foreground">{name} · Verified review placeholder</footer></blockquote>; }

function Newsletter() { return <section className="bg-secondary px-6 py-20 text-center sm:px-10"><p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">The LIVOARA letter</p><h2 className="mt-5 font-display text-4xl sm:text-5xl">A little beauty, delivered.</h2><p className="mx-auto mt-4 max-w-lg text-sm leading-7 text-muted-foreground">Join for product notes and thoughtful inspiration. Email delivery will be connected soon.</p><form className="mx-auto mt-8 flex max-w-lg flex-col gap-3 sm:flex-row" onSubmit={(e) => e.preventDefault()}><label htmlFor="newsletter" className="sr-only">Email address</label><input id="newsletter" type="email" required placeholder="Email address" className="min-h-12 min-w-0 flex-1 border border-input bg-background px-4 outline-none focus:ring-2 focus:ring-ring" /><Button type="submit">Join the list</Button></form></section>; }