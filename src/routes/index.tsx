import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Check, CirclePlay, CreditCard, Heart, Lightbulb, Luggage, MessageCircle, PackageOpen, RotateCcw, ShieldCheck, Sparkles, Truck } from "lucide-react";
import type { ReactNode } from "react";
import heroAsset from "@/assets/livoara-hero.png.asset.json";
import referenceVanity from "@/assets/reference/livoara-reference-vanity.jpg.asset.json";
import whiteSunlight from "@/assets/reference/livoara-product-white-sunlight.jpg";
import productDetail from "@/assets/reference/livoara-product-detail.jpg";
import pinkStacked from "@/assets/reference/livoara-product-pink-stacked.jpg";
import categoryWomen from "@/assets/reference/livoara-category-women.jpg";
import categoryMen from "@/assets/reference/livoara-category-men.jpg";
import categoryBeauty from "@/assets/reference/livoara-category-beauty.jpg";
import categoryLifestyle from "@/assets/reference/livoara-category-lifestyle.jpg";
import categoryGifts from "@/assets/reference/livoara-category-gifts.jpg";
import categoryAccessories from "@/assets/reference/livoara-category-accessories.jpg";
import organiseVideo from "@/assets/livoara-use-organise.mp4.asset.json";
import routineVideo from "@/assets/livoara-use-routine.mp4.asset.json";
import detailsVideo from "@/assets/livoara-use-details.mp4.asset.json";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "LIVOARA — Your Beauty Routine, In One Beautiful Box" },
    { name: "description", content: "Discover the LIVOARA travel vanity: an illuminated mirror, organised storage, and a compact case designed for everyday beauty rituals." },
    { property: "og:title", content: "LIVOARA — Your Beauty Routine, In One Beautiful Box" },
    { property: "og:description", content: "An illuminated mirror, organised storage, and a compact case — beautifully designed as one." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ]}),
  component: HomePage,
});

function HomePage() {
  return <div className="page-reveal max-w-full overflow-x-clip">
    <Hero />
    <FeatureIcons />
    <VideoSection />
    <ProblemSolution />
    <CategoryGrid />
    <LifestyleBanner />
    <ReviewCards />
    <TrustBadges />
    <ComparisonSection />
    <CommunityBand />
    <FaqSection />
    <CtaSection />
  </div>;
}

function Hero() {
  return <section className="relative overflow-hidden bg-secondary" aria-label="LIVOARA hero">
    <div className="mx-auto grid max-w-[1280px] lg:grid-cols-2 lg:items-center">
      <div className="order-2 px-6 py-10 sm:px-10 lg:order-1 lg:px-[6vw] lg:py-20">
        <p className="text-xs uppercase tracking-[0.2em] text-accent">Beauty, organised</p>
        <h1 className="mt-4 font-display text-4xl leading-[1.1] sm:text-5xl lg:text-6xl">Your Beauty Routine, In One Beautiful Box.</h1>
        <p className="mt-5 max-w-md text-sm leading-7 text-muted-foreground">A compact LED makeup case with mirror, light and organised storage designed to simplify your daily ritual.</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild><Link to="/product">Shop Now</Link></Button>
          <Button asChild variant="outline"><Link to="#videos">Watch Video</Link></Button>
        </div>
      </div>
      <div className="order-1 h-[55vh] min-h-[320px] max-h-[520px] overflow-hidden bg-secondary lg:order-2 lg:h-auto lg:max-h-none lg:min-h-[560px]">
        <img src={referenceVanity.url} alt="LIVOARA Travel Vanity open with illuminated mirror and organised compartments" className="h-full w-full object-cover object-center lg:object-[58%_center]" />
      </div>
    </div>
  </section>;
}

function FeatureIcons() {
  const items = [
    { icon: <PackageOpen />, label: "Organised storage" },
    { icon: <Lightbulb />, label: "LED mirror" },
    { icon: <Luggage />, label: "Travel friendly" },
    { icon: <Sparkles />, label: "Stylish & modern" },
  ];
  return <section className="border-b border-border bg-background px-6 py-8 sm:px-10" aria-label="Key features">
    <div className="mx-auto grid max-w-[1120px] grid-cols-2 gap-4 sm:grid-cols-4 lg:gap-8">
      {items.map((item) => <div key={item.label} className="flex items-center gap-3 text-sm font-medium text-foreground"><span className="grid size-9 shrink-0 place-items-center rounded-full bg-secondary text-accent [&>svg]:size-4">{item.icon}</span>{item.label}</div>)}
    </div>
  </section>;
}

function VideoSection() {
  return <section id="videos" className="px-6 py-16 sm:px-10 lg:py-20" aria-label="See LIVOARA in use">
    <div className="mx-auto max-w-[1120px]">
      <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-end">
        <div>
          <p className="text-[10px] uppercase tracking-[0.22em] text-accent">See LIVOARA in use</p>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl">Designed to be used, beautifully.</h2>
        </div>
        <p className="max-w-sm text-sm leading-7 text-muted-foreground">Short product films show how light, storage and portability come together.</p>
      </div>
      <div className="mt-10 grid gap-5 md:grid-cols-3">
        <UseVideo src={organiseVideo.url} poster={pinkStacked} title="Organise your essentials" text="Keep everyday beauty pieces visible and together." />
        <UseVideo src={routineVideo.url} poster={whiteSunlight} title="Create your light" text="Bring an illuminated mirror into the getting-ready moment." />
        <UseVideo src={detailsVideo.url} poster={productDetail} title="Pack one considered case" text="Move from dresser to travel with one compact format." />
      </div>
    </div>
  </section>;
}

function ProblemSolution() {
  const problems = [
    "Makeup scattered across the dresser every morning",
    "Essentials hidden and hard to find when you need them",
    "No flattering light when you need a closer look",
    "Multiple pouches and organisers while travelling",
  ];
  const solutions = [
    "Organised compartments keep everyday pieces in one place",
    "A built-in illuminated mirror supports your routine",
    "Compact, travel-ready format for home and away",
    "A timeless piece you'll love to use every day",
  ];
  return <section className="border-y border-border bg-muted/40 px-6 py-16 sm:px-10 lg:py-20">
    <div className="mx-auto max-w-[1120px]">
      <div className="text-center"><p className="text-[10px] uppercase tracking-[0.22em] text-accent">Why LIVOARA</p><h2 className="mt-4 font-display text-4xl sm:text-5xl">From scattered to considered.</h2></div>
      <div className="mt-10 grid gap-8 lg:grid-cols-2">
        <div className="bg-background p-7 sm:p-10">
          <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">The problem</p>
          <h3 className="mt-3 font-display text-2xl">Sound familiar?</h3>
          <ul className="mt-6 space-y-4">
            {problems.map((p) => <li key={p} className="flex gap-3 text-sm leading-6 text-muted-foreground"><span className="mt-1 size-1.5 shrink-0 rounded-full bg-muted-foreground/60" />{p}</li>)}
          </ul>
        </div>
        <div className="bg-primary p-7 text-primary-foreground sm:p-10">
          <p className="text-xs uppercase tracking-[0.16em] text-primary-foreground/70">The LIVOARA solution</p>
          <h3 className="mt-3 font-display text-2xl">One beautiful box.</h3>
          <ul className="mt-6 space-y-4">
            {solutions.map((s) => <li key={s} className="flex gap-3 text-sm leading-6"><Check className="mt-0.5 size-4 shrink-0 text-accent" />{s}</li>)}
          </ul>
        </div>
      </div>
    </div>
  </section>;
}

function CategoryGrid() {
  const categories = [
    { image: categoryWomen, label: "Women" },
    { image: categoryMen, label: "Men" },
    { image: categoryBeauty, label: "Beauty" },
    { image: categoryLifestyle, label: "Lifestyle" },
    { image: categoryGifts, label: "Gifts" },
    { image: categoryAccessories, label: "Accessories" },
  ];
  return <section className="px-6 py-16 sm:px-10 lg:py-20" aria-label="Shop by category">
    <div className="mx-auto max-w-[1120px]">
      <p className="text-[10px] uppercase tracking-[0.22em] text-accent">Shop by category</p>
      <h2 className="mt-4 font-display text-4xl sm:text-5xl">Find your fit.</h2>
      <div className="mt-9 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
        {categories.map((c) => <Link key={c.label} to="/product" className="group block"><div className="aspect-[3/4] overflow-hidden bg-secondary"><img src={c.image} alt={`${c.label} category`} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" /></div><div className="mt-3 flex items-center justify-between"><h3 className="font-display text-base">{c.label}</h3><span className="text-accent">→</span></div></Link>)}
      </div>
    </div>
  </section>;
}

function LifestyleBanner() {
  return <section className="relative overflow-hidden" aria-label="Lifestyle">
    <div className="h-[46vh] min-h-[280px] max-h-[460px] w-full sm:h-[38vh] lg:h-[46vh] lg:max-h-[520px]">
      <img src={heroAsset.url} alt="LIVOARA vanities arranged in an elegant lifestyle setting" className="h-full w-full object-cover object-[68%_center] sm:object-contain sm:object-top lg:object-cover lg:object-[70%_center]" />
    </div>
    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent lg:bg-gradient-to-r lg:from-background/60 lg:via-background/20 lg:to-transparent" aria-hidden="true" />
    <div className="absolute inset-0 flex items-end px-6 pb-10 sm:px-10 lg:items-center lg:pb-0 lg:pl-[6vw]">
      <div className="max-w-md">
        <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">Designed for your everyday</p>
        <h2 className="mt-3 font-display text-3xl leading-tight sm:text-4xl lg:text-5xl">Beautiful wherever you go.</h2>
        <Button asChild className="mt-6"><Link to="/product">Shop Now</Link></Button>
      </div>
    </div>
  </section>;
}

function ReviewCards() {
  const reviews = [
    { name: "Priya S.", city: "Delhi", quote: "The mirror and storage together make my morning routine so much simpler." },
    { name: "Jessica M.", city: "Mumbai", quote: "A compact, elegant case that fits neatly on my dresser and in my travel bag." },
    { name: "Aditi R.", city: "Bengaluru", quote: "The illuminated mirror is genuinely useful when the room light isn't ideal." },
  ];
  return <section className="bg-secondary px-6 py-16 sm:px-10 lg:py-20" aria-label="Customer feedback">
    <div className="mx-auto max-w-[1120px]">
      <div className="text-center">
        <p className="text-[10px] uppercase tracking-[0.22em] text-accent">Loved by many</p>
        <h2 className="mt-4 font-display text-4xl sm:text-5xl">Real people. Real routines.</h2>
        <p className="mx-auto mt-4 max-w-lg text-sm leading-7 text-muted-foreground">Sample feedback from conversations about the LIVOARA routine. Star ratings will appear only after verified customer reviews are collected.</p>
      </div>
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {reviews.map((r) => <article key={r.name} className="bg-background p-7"><div className="text-accent" aria-hidden="true">“</div><p className="mt-2 text-sm leading-6 text-foreground">{r.quote}</p><div className="mt-5 flex items-center gap-3"><div className="grid size-9 place-items-center rounded-full bg-muted font-display text-xs">{r.name.split(" ").map((n) => n[0]).join("")}</div><div><p className="text-sm font-medium">{r.name}</p><p className="text-xs text-muted-foreground">{r.city}, India · Sample feedback</p></div></div></article>)}
      </div>
    </div>
  </section>;
}

function TrustBadges() {
  const badges = [
    { icon: <Truck />, title: "Fast Shipping", text: "Timeline shown at checkout" },
    { icon: <RotateCcw />, title: "Easy Returns", text: "7-day request window" },
    { icon: <CreditCard />, title: "Secure Payments", text: "Trusted checkout options" },
    { icon: <ShieldCheck />, title: "Thoughtful Design", text: "Light + organisation" },
  ];
  return <section className="border-y border-border bg-background px-6 py-10 sm:px-10" aria-label="Trust badges">
    <div className="mx-auto grid max-w-[1120px] grid-cols-2 gap-6 sm:grid-cols-4 lg:gap-10">
      {badges.map((b) => <div key={b.title} className="text-center"><span className="mx-auto grid size-11 place-items-center rounded-full bg-secondary text-accent [&>svg]:size-5">{b.icon}</span><p className="mt-3 text-sm font-medium">{b.title}</p><p className="mt-1 text-xs text-muted-foreground">{b.text}</p></div>)}
    </div>
  </section>;
}

function ComparisonSection() {
  return <section className="px-6 py-16 sm:px-10 lg:py-20" aria-label="Comparison">
    <div className="mx-auto max-w-[1120px]">
      <p className="text-[10px] uppercase tracking-[0.22em] text-accent">LIVOARA vs traditional</p>
      <h2 className="mt-4 font-display text-4xl sm:text-5xl">A better way to get ready.</h2>
      <p className="mt-4 max-w-lg text-sm leading-7 text-muted-foreground">See why a dedicated LED makeup box offers a more considered routine than scattered storage.</p>
      <div className="-mx-6 mt-8 overflow-x-auto px-6 pb-3 sm:-mx-10 sm:px-10 md:mx-0 md:px-0">
        <table className="w-full min-w-[720px] border-collapse text-left text-xs">
          <thead><tr className="border-b border-border text-[9px] uppercase tracking-[0.17em]"><th className="px-4 py-5 font-medium"></th><th className="px-4 py-5 text-center font-medium">Traditional setup</th><th className="bg-secondary px-4 py-5 text-center font-medium text-accent">LIVOARA</th></tr></thead>
          <tbody>
            <CompareTwoRow label="Organised storage" other="Scattered pouches and boxes" livoara="Dedicated compartments" />
            <CompareTwoRow label="Mirror lighting" other="Separate mirror or room light" livoara="Built-in illuminated mirror" />
            <CompareTwoRow label="Travel format" other="Multiple organisers" livoara="One compact vanity case" />
            <CompareTwoRow label="All-in-one format" other="Items bought separately" livoara="Mirror, light and storage together" />
            <CompareTwoRow label="Modern style" other="Basic organisers" livoara="Designed to look elegant on a dresser" />
          </tbody>
        </table>
      </div>
    </div>
  </section>;
}

function CommunityBand() {
  return <section className="border-y border-border bg-muted/40 px-6 py-14 text-center sm:px-10 lg:py-20">
    <div className="mx-auto max-w-2xl">
      <Heart className="mx-auto size-6 text-accent" aria-hidden="true" />
      <h2 className="mt-4 font-display text-3xl sm:text-4xl">Join the LIVOARA community.</h2>
      <p className="mt-3 text-sm leading-7 text-muted-foreground">Share your routine with #MyLivoara. Real customer photos and stories will appear here once collected.</p>
    </div>
  </section>;
}

function FaqSection() {
  return <section className="px-6 py-16 sm:px-10 lg:py-20"><div className="mx-auto max-w-2xl"><h2 className="text-center font-display text-4xl sm:text-5xl">Questions, answered.</h2><div className="mt-8"><Faq question="What can I store in the LED makeup box?" answer="It is designed to organise everyday makeup, brushes, skincare, jewellery, and other small beauty essentials. Fit depends on the size and shape of each item." open /><Faq question="How does the illuminated mirror work?" answer="Use the controls and power instructions supplied with your product. Please read the product label and enclosed guide before first use." /><Faq question="How long does delivery take?" answer="The estimated delivery timeline and any applicable shipping charge are shown at checkout for your location. Tracking is shared after dispatch where available." /><Faq question="What if my order arrives damaged or incorrect?" answer="Email hello@livoara.in within 7 calendar days of delivery. A clear, continuous unboxing video is required so our team can assess the request under the Shipping & Returns Policy." /></div></div></section>;
}

function CtaSection() {
  return <section className="relative overflow-hidden bg-secondary px-6 py-16 text-foreground sm:px-10 lg:py-20">
    <img src={whiteSunlight} alt="" className="absolute inset-0 h-full w-full object-cover opacity-20" aria-hidden="true" />
    <div className="absolute inset-0 bg-secondary/90" aria-hidden="true" />
    <div className="relative z-10 mx-auto max-w-[1120px]">
      <h2 className="max-w-xl font-display text-4xl sm:text-5xl">Give your beauty routine the light it deserves.</h2>
      <Button asChild variant="soft" className="mt-8"><Link to="/product">Shop Now</Link></Button>
      <div className="mt-14 grid gap-5 text-xs text-muted-foreground sm:grid-cols-4"><span>✓ &nbsp; Secure payment options</span><span>✓ &nbsp; 7-day request window</span><span>✓ &nbsp; COD where available</span><span>✓ &nbsp; Beauty, simplified</span></div>
    </div>
  </section>;
}

function UseVideo({ src, poster, title, text }: { src: string; poster: string; title: string; text: string }) { return <article><div className="group relative aspect-[4/5] overflow-hidden bg-secondary"><video src={src} poster={poster} muted loop playsInline controls preload="metadata" className="h-full w-full object-cover" aria-label={`${title} product use video`} /><span className="pointer-events-none absolute left-4 top-4 grid size-9 place-items-center bg-background/90 text-accent group-has-[video:playing]:opacity-0" aria-hidden="true"><CirclePlay className="size-5" /></span></div><h3 className="mt-4 font-display text-xl">{title}</h3><p className="mt-2 text-xs leading-6 text-muted-foreground">{text}</p></article>; }
function CompareTwoRow({ label, other, livoara }: { label: string; other: string; livoara: string }) { return <tr className="border-b border-border"><th className="px-4 py-5 font-medium">{label}</th><td className="px-4 py-5 text-center text-muted-foreground">{other}</td><td className="bg-muted px-4 py-5 text-center font-medium text-accent">{livoara}</td></tr>; }
function Faq({ question, answer, open = false }: { question: string; answer: string; open?: boolean }) { return <details open={open} className="group border-b border-border py-5"><summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-sm font-medium"><span>{question}</span><span className="text-lg transition-transform group-open:rotate-45">+</span></summary><p className="pt-4 text-xs leading-6 text-muted-foreground">{answer}</p></details>; }
