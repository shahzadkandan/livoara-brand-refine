import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Check, CirclePlay, Lightbulb, Luggage, PackageOpen, Sparkles } from "lucide-react";
import type { ReactNode } from "react";
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
import organiseVideo from "@/assets/livoara-use-organise.mp4.asset.json";
import routineVideo from "@/assets/livoara-use-routine.mp4.asset.json";
import detailsVideo from "@/assets/livoara-use-details.mp4.asset.json";
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
  return <div className="page-reveal max-w-full overflow-x-clip">
    <section aria-label="Made for every moment" className="relative bg-secondary">
      <h1 className="sr-only">LIVOARA — Made for every moment.</h1>
      <Link to="/product" className="block" aria-label="Shop the LIVOARA Travel Vanity">
        <picture><img src={heroAsset.url} alt="LIVOARA illuminated travel vanity with mirror, beauty products and jewellery" className="h-[52dvh] min-h-[350px] max-h-[520px] w-full object-cover object-[68%_center] sm:h-[clamp(420px,46vw,620px)] sm:max-h-[620px] sm:object-center" /></picture>
      </Link>
      <div className="bg-secondary px-5 py-5 sm:hidden"><Button asChild className="w-full"><Link to="/product">Shop Now <ArrowRight className="size-4" /></Link></Button></div>
    </section>

    <section className="border-y border-border bg-muted/50 px-6 py-16 sm:px-10 lg:py-20"><div className="mx-auto max-w-[1120px]"><div className="grid gap-6 md:grid-cols-[.82fr_1.18fr] md:items-end"><div><p className="text-[10px] uppercase tracking-[0.22em] text-accent">Everyday problems, considered</p><h2 className="mt-4 font-display text-4xl sm:text-5xl">A calmer way to get ready.</h2></div><p className="max-w-xl text-sm leading-7 text-muted-foreground">LIVOARA brings the mirror, light and organised storage together so daily routines feel less scattered.</p></div><div className="mt-9 grid gap-px overflow-hidden border border-border bg-border md:grid-cols-3"><DailyProblem icon={<PackageOpen />} problem="Scattered essentials" solution="Dedicated compartments keep everyday items together." /><DailyProblem icon={<Lightbulb />} problem="Unhelpful room light" solution="An illuminated mirror supports your routine." /><DailyProblem icon={<Luggage />} problem="Too many travel pouches" solution="One compact vanity case keeps the setup together." /></div></div></section>

    <section className="mx-auto max-w-[1120px] px-6 py-16 sm:px-10 lg:py-20">
      <h2 className="font-display text-4xl sm:text-5xl">Designed for your daily ritual.</h2><p className="mt-5 max-w-lg text-sm leading-7 text-muted-foreground">Every detail is made to keep your makeup organised, beautifully lit and easy to reach.</p>
      <div className="mt-12 grid gap-x-8 gap-y-12 md:grid-cols-2"><Feature image={whiteSunlight} title="LED mirror for a clear finish" text="Get ready with bright, even light wherever you are." /><Feature image={categoryLifestyle} title="Room for your everyday essentials" text="Keep palettes, brushes, skincare and accessories together." /><Feature image={productDetail} title="Smart compartments" text="Dedicated spaces make every product easy to see and pick." /><Feature image={pinkStacked} title="Compact, elegant and portable" text="Bring your vanity routine from bedroom to suitcase with ease." /></div>
    </section>

    <section className="bg-secondary px-6 py-16 sm:px-10 lg:py-20"><div className="mx-auto max-w-[1120px]"><h2 className="font-display text-4xl sm:text-5xl">Made for every moment.</h2><div className="mt-9 grid gap-6 md:grid-cols-3"><Moment image={categoryLifestyle} title="At home" text="Keeps your dresser clutter-free and every piece within reach." /><Moment image={pinkStacked} title="Travel" text="Compact design fits naturally into a considered travel routine." /><Moment image={categoryGifts} title="Gifting" text="A useful, polished choice for thoughtful gifting." /></div></div></section>

    <section className="border-y border-border px-6 py-16 sm:px-10 lg:py-20"><div className="mx-auto max-w-[1120px]"><div className="grid gap-5 md:grid-cols-[1fr_auto] md:items-end"><div><p className="text-[10px] uppercase tracking-[0.22em] text-accent">See it in your routine</p><h2 className="mt-4 font-display text-4xl sm:text-5xl">Designed to be used, beautifully.</h2></div><p className="max-w-sm text-sm leading-7 text-muted-foreground">Short product films show how light, storage and portability come together.</p></div><div className="mt-9 grid gap-5 md:grid-cols-3"><UseVideo src={organiseVideo.url} poster={pinkStacked} title="Organise your essentials" text="Keep everyday beauty pieces visible and together." /><UseVideo src={routineVideo.url} poster={whiteSunlight} title="Create your light" text="Bring an illuminated mirror into the getting-ready moment." /><UseVideo src={detailsVideo.url} poster={productDetail} title="Pack one considered case" text="Move from dresser to travel with one compact format." /></div></div></section>

    <section className="mx-auto max-w-[1120px] px-6 py-16 sm:px-10 lg:py-20"><p className="text-[10px] uppercase tracking-[0.22em] text-accent">Collection</p><h2 className="mt-4 font-display text-4xl sm:text-5xl">Future Categories</h2><div className="mt-8 grid grid-cols-2 gap-5 md:grid-cols-4"><Category image={categoryWomen} label="Women" /><Category image={categoryMen} label="Men" /><Category image={categoryBeauty} label="Beauty" /><Category image={categoryLifestyle} label="Lifestyle" /><Category image={categoryGifts} label="Gifts" /><Category image={categoryAccessories} label="Accessories" /><Category image={categoryPod} label="POD" /></div></section>

    <section className="px-6 py-16 sm:px-10 lg:py-20"><div className="mx-auto max-w-[1120px]"><p className="text-[10px] uppercase tracking-[0.22em] text-accent">Problem vs solution · us vs them</p><h2 className="mt-4 font-display text-4xl sm:text-5xl">A better way to get ready.</h2><p className="mt-4 max-w-lg text-sm leading-7 text-muted-foreground">See why a dedicated LED makeup box offers a more considered routine than scattered storage.</p><div className="-mx-6 mt-8 overflow-x-auto px-6 pb-3 sm:-mx-10 sm:px-10 md:mx-0 md:px-0"><table className="w-full min-w-[720px] border-collapse text-left text-xs"><thead><tr className="border-b border-border text-[9px] uppercase tracking-[0.17em]"><th className="px-4 py-5 font-medium"></th><th className="px-4 py-5 text-center font-medium">Loose on a vanity</th><th className="px-4 py-5 text-center font-medium">Generic organiser</th><th className="bg-secondary px-4 py-5 text-center font-medium text-accent">LIVOARA</th></tr></thead><tbody><CompareRow label="Organised storage" loose="Scattered" generic="General storage" livoara="Dedicated compartments" /><CompareRow label="Mirror lighting" loose="Separate mirror" generic="Usually separate" livoara="Illuminated mirror" /><CompareRow label="Getting-ready format" loose="Multiple items" generic="Storage focused" livoara="Mirror and storage together" /><CompareRow label="Travel format" loose="Separate pouches" generic="Varies by design" livoara="Compact vanity case" /><CompareRow label="Launch price" loose="Not applicable" generic="Varies" livoara="From ₹1,499" /></tbody></table></div></div></section>

    <section className="bg-muted/70 py-16 lg:py-20"><div className="mx-auto max-w-[1120px]"><div className="px-6 sm:px-10 lg:px-0"><p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Designed around real routines</p><h2 className="mt-4 max-w-md font-display text-4xl sm:text-5xl">What thoughtful organisation can change.</h2></div><div className="mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-4 sm:grid sm:grid-cols-2 sm:overflow-visible sm:px-10 sm:pb-0 lg:grid-cols-4 lg:px-0"><Testimonial quote="A clear home for everyday makeup, brushes, and small essentials." name="Organisation" /><Testimonial quote="An illuminated mirror and storage together, so getting ready feels simpler." name="Convenience" /><Testimonial quote="A compact case that keeps the dressing area looking considered and calm." name="Everyday style" /><Testimonial quote="One organised format for routines at home and while travelling." name="Portability" /></div></div></section>

    <section className="border-y border-border px-6 py-16 sm:px-10 lg:py-20"><div className="mx-auto max-w-2xl"><h2 className="text-center font-display text-4xl sm:text-5xl">Questions, answered.</h2><div className="mt-8"><Faq question="What can I store in the LED makeup box?" answer="It is designed to organise everyday makeup, brushes, skincare, jewellery, and other small beauty essentials. Fit depends on the size and shape of each item." open /><Faq question="How does the illuminated mirror work?" answer="Use the controls and power instructions supplied with your product. Please read the product label and enclosed guide before first use." /><Faq question="How long does delivery take?" answer="The estimated delivery timeline and any applicable shipping charge are shown at checkout for your location. Tracking is shared after dispatch where available." /><Faq question="What if my order arrives damaged or incorrect?" answer="Email hello@livoara.in within 7 calendar days of delivery. A clear, continuous unboxing video is required so our team can assess the request under the Shipping & Returns Policy." /></div></div></section>

    <section className="relative overflow-hidden border-y border-border bg-secondary px-6 py-16 text-foreground sm:px-10 lg:py-20">
      <img src={whiteSunlight} alt="" className="absolute inset-0 h-full w-full object-cover opacity-20" aria-hidden="true" />
      <div className="absolute inset-0 bg-secondary/90" aria-hidden="true" />
      <div className="relative z-10 mx-auto max-w-[1120px]">
        <h2 className="max-w-xl font-display text-4xl sm:text-5xl">Give your beauty routine<br />the light it deserves.</h2>
        <Button asChild variant="soft" className="mt-8"><Link to="/product">Shop Now</Link></Button>
        <div className="mt-16 grid gap-5 text-xs text-muted-foreground sm:grid-cols-4"><span>✓ &nbsp; Secure payment options</span><span>✓ &nbsp; 7-day request window</span><span>✓ &nbsp; COD where available</span><span>✓ &nbsp; Beauty, simplified</span></div>
      </div>
    </section>

  </div>;
}

function DailyProblem({ icon, problem, solution }: { icon: ReactNode; problem: string; solution: string }) { return <article className="bg-background p-6 sm:p-7"><span className="grid size-10 place-items-center bg-secondary text-accent [&>svg]:size-5">{icon}</span><p className="mt-5 text-[10px] uppercase tracking-[0.16em] text-muted-foreground">Daily problem</p><h3 className="mt-2 font-display text-xl">{problem}</h3><p className="mt-4 flex gap-2 text-xs leading-6 text-muted-foreground"><Check className="mt-1 size-3.5 shrink-0 text-accent" />{solution}</p></article>; }
function UseVideo({ src, poster, title, text }: { src: string; poster: string; title: string; text: string }) { return <article><div className="group relative aspect-[4/5] overflow-hidden bg-secondary"><video src={src} poster={poster} muted loop playsInline controls preload="metadata" className="h-full w-full object-cover" aria-label={`${title} product use video`} /><span className="pointer-events-none absolute left-4 top-4 grid size-9 place-items-center bg-background/90 text-accent group-has-[video:playing]:opacity-0" aria-hidden="true"><CirclePlay className="size-5" /></span></div><h3 className="mt-4 font-display text-xl">{title}</h3><p className="mt-2 text-xs leading-6 text-muted-foreground">{text}</p></article>; }
function Feature({ image, title, text }: { image?: string; title: string; text: string }) { return <article><div className="aspect-[1.26/1] overflow-hidden bg-background">{image && <img src={image} alt={title} className="h-full w-full object-cover" loading="lazy" />}</div><h3 className="mt-5 font-display text-2xl">{title}</h3><p className="mt-2 text-xs leading-6 text-muted-foreground">{text}</p></article>; }
function Moment({ image, title, text }: { image: string; title: string; text: string }) { return <article><div className="aspect-[4/5] overflow-hidden"><img src={image} alt={`LIVOARA vanity for ${title.toLowerCase()}`} className="h-full w-full object-cover" loading="lazy" /></div><h3 className="mt-5 font-display text-xl">{title}</h3><p className="mt-2 text-xs leading-6 text-muted-foreground">{text}</p></article>; }
function Category({ image, label }: { image: string; label: string }) { return <article><div className="aspect-square overflow-hidden bg-secondary"><img src={image} alt={`${label} category`} className="h-full w-full object-cover" loading="lazy" /></div><div className="mt-3 flex items-center justify-between"><h3 className="font-display text-base">{label}</h3><span className="text-accent">↗</span></div></article>; }
function CompareRow({ label, loose, generic, livoara }: { label: string; loose: string; generic: string; livoara: string }) { return <tr className="border-b border-border"><th className="px-4 py-5 font-medium">{label}</th><td className="px-4 py-5 text-center text-muted-foreground">{loose}</td><td className="px-4 py-5 text-center text-muted-foreground">{generic}</td><td className="bg-muted px-4 py-5 text-center font-medium text-accent">{livoara}</td></tr>; }
function Faq({ question, answer, open = false }: { question: string; answer: string; open?: boolean }) { return <details open={open} className="group border-b border-border py-5"><summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-sm font-medium"><span>{question}</span><span className="text-lg transition-transform group-open:rotate-45">+</span></summary><p className="pt-4 text-xs leading-6 text-muted-foreground">{answer}</p></details>; }

function Testimonial({ quote, name }: { quote: string; name: string }) { return <article className="min-h-52 w-[82vw] max-w-80 shrink-0 snap-start bg-background p-7 sm:w-auto sm:max-w-none"><div className="text-accent" aria-hidden="true">✦</div><p className="mt-5 font-display text-lg leading-snug">{quote}</p><p className="mt-6 text-xs uppercase tracking-[0.14em] text-muted-foreground">{name}</p></article>; }