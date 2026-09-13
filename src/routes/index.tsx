import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Check, Gift, Lightbulb, PackageCheck, Plane, Sparkles } from "lucide-react";
import type { ReactNode } from "react";
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

    <section className="border-y border-border bg-muted/50"><div className="mx-auto grid max-w-[1450px] gap-px bg-border md:grid-cols-3"><Promise icon={<Plane />} title="Made to travel" text="Compact, composed and ready to go." /><Promise icon={<Lightbulb />} title="Light where you need it" text="An illuminated mirror for every ritual." /><Promise icon={<PackageCheck />} title="Everything in its place" text="Considered storage for daily essentials." /></div></section>

    <section className="mx-auto max-w-[1450px] px-6 py-20 sm:px-10 lg:py-28">
      <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">The details</p><h2 className="mt-5 font-display text-4xl sm:text-6xl">Designed for your daily ritual.</h2><p className="mt-5 max-w-xl leading-8 text-muted-foreground">One thoughtful piece for getting ready at home, away, or anywhere in between.</p>
      <div className="mt-12 grid gap-x-5 gap-y-10 md:grid-cols-2"><Feature crop="object-[64%_50%]" title="LED mirror for a clear finish" text="Soft illumination keeps your routine beautifully in view." /><Feature crop="object-[82%_48%]" title="Room for your everyday essentials" text="Organized compartments keep the pieces you reach for close." /><Feature crop="object-[70%_62%]" title="Smart compartments" text="A considered interior designed around the little things." /><Feature crop="object-[91%_47%]" title="Compact, elegant and portable" text="A refined companion made for moments near and far." /></div>
    </section>

    <section className="bg-secondary px-6 py-20 sm:px-10 lg:py-28"><div className="mx-auto max-w-[1450px]"><p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">One vanity, every occasion</p><h2 className="mt-5 font-display text-4xl sm:text-6xl">Made for every moment.</h2><div className="mt-12 grid gap-5 md:grid-cols-3"><Moment crop="object-[84%_45%]" title="At home" icon={<Sparkles />} /><Moment crop="object-[65%_52%]" title="Travel" icon={<Plane />} /><Moment crop="object-[91%_45%]" title="Gifting" icon={<Gift />} /></div></div></section>

    <section className="mx-auto grid max-w-[1450px] items-center gap-12 px-6 py-20 sm:px-10 lg:grid-cols-[1fr_1.1fr] lg:py-28"><div><p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">A better way to get ready</p><h2 className="mt-5 font-display text-4xl sm:text-6xl">Thoughtfully made around you.</h2><p className="mt-6 max-w-lg leading-8 text-muted-foreground">A calm, considered home for your beauty ritual, designed to replace clutter with a little more ease.</p><ul className="mt-8 grid gap-4 text-sm"><li className="flex gap-3"><Check className="size-5 text-accent" />Light and storage in one design</li><li className="flex gap-3"><Check className="size-5 text-accent" />Easy to carry from place to place</li><li className="flex gap-3"><Check className="size-5 text-accent" />A polished piece made to be seen</li></ul><Button asChild className="mt-9"><Link to="/product">Shop the LIVOARA vanity <ArrowRight className="size-4" /></Link></Button></div><ProductCrop positionClass="object-[72%_center]" label="The LIVOARA vanity open with illuminated mirror" /></section>

    <section className="border-y border-border bg-muted/55 px-6 py-24 text-center sm:px-10 lg:py-32"><p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Our story</p><h2 className="mx-auto mt-6 max-w-3xl font-display text-4xl leading-tight sm:text-6xl">Beauty lives in the details you choose to carry.</h2><p className="mx-auto mt-7 max-w-2xl leading-8 text-muted-foreground">LIVOARA begins with a simple idea: everyday objects can be both deeply useful and quietly beautiful. Our first piece brings that intention to your personal ritual.</p><Button asChild variant="outline" className="mt-9"><Link to="/about">Read our story <ArrowRight className="size-4" /></Link></Button></section>

    <section className="mx-auto max-w-[1200px] px-6 py-24 lg:py-32"><p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Notes from our community</p><h2 className="mt-5 font-display text-4xl sm:text-5xl">What customers are saying.</h2><div className="mt-10 grid gap-px bg-border md:grid-cols-3"><Testimonial quote="[Add a verified customer quote here.]" name="[Customer name]" /><Testimonial quote="[Add a second verified customer quote here.]" name="[Customer name]" /><Testimonial quote="[Add a third verified customer quote here.]" name="[Customer name]" /></div></section>

    <section className="border-y border-border px-6 py-20 sm:px-10"><div className="mx-auto max-w-3xl"><p className="text-center text-xs uppercase tracking-[0.2em] text-muted-foreground">Questions, answered</p><h2 className="mt-5 text-center font-display text-4xl sm:text-5xl">A few things to know.</h2><div className="mt-10"><Faq question="What can I keep inside the LIVOARA vanity?" answer="[Add verified capacity details.]" /><Faq question="How does the illuminated mirror work?" answer="[Add verified operating instructions.]" /><Faq question="What are the shipping and return terms?" answer="[Add verified policy details.]" /></div></div></section>

    <section className="bg-primary px-6 py-20 text-primary-foreground sm:px-10"><div className="mx-auto flex max-w-[1200px] flex-col items-start justify-between gap-8 md:flex-row md:items-end"><div><p className="text-xs uppercase tracking-[0.2em] text-primary-foreground/55">The LIVOARA vanity</p><h2 className="mt-5 max-w-xl font-display text-4xl sm:text-6xl">Give your beauty routine the light it deserves.</h2></div><Button asChild variant="soft"><Link to="/product">Shop Now <ArrowRight className="size-4" /></Link></Button></div></section>

    <Newsletter />
  </div>;
}

function ProductCrop({ positionClass, label }: { positionClass: string; label: string }) {
  return <div className="min-h-[440px] overflow-hidden bg-secondary"><img src={heroAsset.url} alt={label} className={`h-full min-h-[440px] w-full scale-[1.55] object-cover ${positionClass}`} loading="lazy" /></div>;
}

function Promise({ icon, title, text }: { icon: ReactNode; title: string; text: string }) { return <div className="flex items-start gap-4 bg-muted px-7 py-8"><span className="mt-0.5 text-accent [&>svg]:size-5 [&>svg]:stroke-[1.4]">{icon}</span><div><h3 className="font-display text-xl">{title}</h3><p className="mt-1 text-sm text-muted-foreground">{text}</p></div></div>; }
function Feature({ crop, title, text }: { crop: string; title: string; text: string }) { return <article><div className="aspect-[4/3] overflow-hidden bg-secondary"><img src={heroAsset.url} alt={title} className={`h-full w-full scale-[1.65] object-cover ${crop}`} loading="lazy" /></div><h3 className="mt-5 font-display text-2xl">{title}</h3><p className="mt-2 text-sm leading-7 text-muted-foreground">{text}</p></article>; }
function Moment({ crop, title, icon }: { crop: string; title: string; icon: ReactNode }) { return <article><div className="aspect-[4/3] overflow-hidden bg-muted"><img src={heroAsset.url} alt={`LIVOARA vanity for ${title.toLowerCase()}`} className={`h-full w-full scale-[1.8] object-cover ${crop}`} loading="lazy" /></div><div className="mt-5 flex items-center gap-3 text-accent [&>svg]:size-4"><span>{icon}</span><h3 className="font-display text-2xl text-foreground">{title}</h3></div></article>; }
function Faq({ question, answer }: { question: string; answer: string }) { return <details className="group border-b border-border py-5"><summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-medium"><span>{question}</span><span className="text-xl text-accent transition-transform group-open:rotate-45">+</span></summary><p className="pt-4 text-sm leading-7 text-muted-foreground">{answer}</p></details>; }

function Testimonial({ quote, name }: { quote: string; name: string }) { return <blockquote className="bg-background p-8 sm:p-10"><div className="text-accent" aria-label="Rating placeholder">☆ ☆ ☆ ☆ ☆</div><p className="mt-7 font-display text-2xl leading-relaxed">“{quote}”</p><footer className="mt-7 text-xs uppercase tracking-[0.16em] text-muted-foreground">{name} · Verified review placeholder</footer></blockquote>; }

function Newsletter() { return <section className="bg-secondary px-6 py-20 text-center sm:px-10"><p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">The LIVOARA letter</p><h2 className="mt-5 font-display text-4xl sm:text-5xl">A little beauty, delivered.</h2><p className="mx-auto mt-4 max-w-lg text-sm leading-7 text-muted-foreground">Join for product notes and thoughtful inspiration. Email delivery will be connected soon.</p><form className="mx-auto mt-8 flex max-w-lg flex-col gap-3 sm:flex-row" onSubmit={(e) => e.preventDefault()}><label htmlFor="newsletter" className="sr-only">Email address</label><input id="newsletter" type="email" required placeholder="Email address" className="min-h-12 min-w-0 flex-1 border border-input bg-background px-4 outline-none focus:ring-2 focus:ring-ring" /><Button type="submit">Join the list</Button></form></section>; }