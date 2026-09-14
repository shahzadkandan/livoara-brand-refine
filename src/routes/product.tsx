import { createFileRoute } from "@tanstack/react-router";
import {
  Check,
  ChevronDown,
  CreditCard,
  Gift,
  IndianRupee,
  LockKeyhole,
  Minus,
  PackageCheck,
  Plus,
  ShieldCheck,
  Sparkles,
  Star,
  Truck,
} from "lucide-react";
import { useEffect, useState, type PointerEvent as ReactPointerEvent, type ReactNode } from "react";
import heroAsset from "@/assets/livoara-hero.png.asset.json";
import referenceVanity from "@/assets/reference/livoara-reference-vanity.jpg.asset.json";
import pinkVanity from "@/assets/reference/livoara-product-pink-stacked.jpg";
import whiteVanity from "@/assets/reference/livoara-product-white-sunlight.jpg";
import { Button } from "@/components/ui/button";
import { useCart } from "@/components/site-shell";

export const Route = createFileRoute("/product")({
  head: () => ({
    meta: [
      { title: "The Travel Vanity — LIVOARA" },
      { name: "description", content: "Discover the LIVOARA Travel Vanity: illuminated mirror, thoughtful organization, and travel-ready design." },
      { property: "og:title", content: "The Travel Vanity — LIVOARA" },
      { property: "og:description", content: "A considered beauty companion for home and travel." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ProductPage,
});

const galleryImages = [
  { src: referenceVanity.url, alt: "Pink illuminated travel vanity open with makeup essentials", className: "object-center", thumb: "object-center" },
  { src: heroAsset.url, alt: "LIVOARA Travel Vanity displayed beside beauty essentials", className: "scale-[1.6] object-[68%_52%]", thumb: "scale-[2.2] object-[68%_52%]" },
  { src: pinkVanity, alt: "Pink LIVOARA Travel Vanity open with illuminated mirror and organized compartments", className: "object-center", thumb: "object-center" },
  { src: whiteVanity, alt: "White LIVOARA Travel Vanity open in natural sunlight", className: "object-center", thumb: "object-center" },
] as const;

const benefits = [
  "Illuminated mirror for your beauty ritual",
  "Organized compartments for everyday essentials",
  "Compact format designed for travel",
] as const;

const sampleReviews = [
  { name: "Priya S.", city: "Delhi", rating: 5, title: "Travel ke liye bahut convenient", copy: "Mirror ki light useful hai aur makeup ka samaan ek hi jagah neatly organise ho jata hai. Weekend trips par carry karna bhi easy laga." },
  { name: "Neha R.", city: "Mumbai", rating: 5, title: "Worth it for daily use", copy: "Vanity looks elegant on my dresser and the compartments make my morning routine easier. The illuminated mirror is my favourite part." },
  { name: "Ayesha K.", city: "Lucknow", rating: 4, title: "Gift ke liye lovely choice", copy: "Maine ise gifting ke liye choose kiya. Design premium lagta hai aur andar essentials rakhne ke liye achhi space hai." },
] as const;

const featuredComments = [
  { initials: "RM", name: "Riya M.", city: "Pune", title: "Dressing table ab organised rehti hai", copy: "Vanity ka size daily makeup ke liye kaafi practical laga. Mirror light se ready hona easy ho jata hai aur pink finish bahut elegant dikhti hai." },
  { initials: "AS", name: "Ananya S.", city: "Bengaluru", title: "Compact and genuinely useful", copy: "Weekend travel mein products alag pouch mein rakhne ki zarurat nahi padi. Compartments neat hain aur vanity carry karna convenient laga." },
  { initials: "NK", name: "Nisha K.", city: "Jaipur", title: "Gift karke bahut achha response mila", copy: "Packaging aur product dono premium feel dete hain. Light wala mirror sabse zyada pasand aaya—daily routine ke liye lovely choice hai." },
] as const;

const singleOffer = { id: "single" as const, label: "1 piece", detail: "Single vanity", price: "₹1,499", pieces: 1 };

const bundleOffers: ReadonlyArray<{ id: "single" | "double" | "triple"; label: string; detail: string; price: string; pieces: number; badge?: string }> = [
  singleOffer,
  { id: "double", label: "2 pieces", detail: "Save ₹299", price: "₹2,699", pieces: 2, badge: "Popular" },
  { id: "triple", label: "3 pieces", detail: "Save ₹698", price: "₹3,799", pieces: 3, badge: "Best value" },
] as const;

type BundleOfferId = (typeof bundleOffers)[number]["id"];

function ProductPage() {
  const [quantity, setQuantity] = useState(1);
  const [selected, setSelected] = useState(0);
  const [zoomPoint, setZoomPoint] = useState<{ x: number; y: number } | null>(null);
  const [selectedOffer, setSelectedOffer] = useState<BundleOfferId>("single");
  const [offerSeconds, setOfferSeconds] = useState((2 * 60 * 60) + (50 * 60) + 18);
  const [showSticky, setShowSticky] = useState(false);
  const { add } = useCart();
  const selectedImage = galleryImages[selected] ?? galleryImages[0];
  const activeOffer = bundleOffers.find((offer) => offer.id === selectedOffer) ?? singleOffer;
  const selectedPrice = activeOffer.price;
  const cartQuantity = activeOffer.pieces * quantity;
  const timerHours = Math.floor(offerSeconds / 3600);
  const timerMinutes = Math.floor((offerSeconds % 3600) / 60);
  const timerSeconds = offerSeconds % 60;

  const handleImagePointerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (event.pointerType !== "mouse") return;
    const bounds = event.currentTarget.getBoundingClientRect();
    setZoomPoint({
      x: Math.min(100, Math.max(0, ((event.clientX - bounds.left) / bounds.width) * 100)),
      y: Math.min(100, Math.max(0, ((event.clientY - bounds.top) / bounds.height) * 100)),
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      const button = document.getElementById("main-add-to-cart");
      setShowSticky(Boolean(button && button.getBoundingClientRect().bottom < 0));
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setOfferSeconds((seconds) => seconds > 0 ? seconds - 1 : 0);
    }, 1000);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="page-reveal pb-20 lg:pb-0">
      <div className="border-b border-border bg-muted/45 px-5 py-3 text-center text-[10px] uppercase tracking-[0.18em] text-muted-foreground sm:text-xs">
        Home / The LIVOARA Travel Vanity
      </div>

      <section className="mx-auto grid max-w-[1450px] gap-9 px-4 py-7 sm:px-7 lg:grid-cols-[1.08fr_.92fr] lg:items-start lg:gap-14 lg:px-12 lg:py-14">
        <div className="lg:sticky lg:top-24">
          <div
            className="group relative aspect-square cursor-crosshair overflow-hidden border border-border bg-secondary"
            onPointerEnter={handleImagePointerMove}
            onPointerMove={handleImagePointerMove}
            onPointerLeave={() => setZoomPoint(null)}
          >
            <img src={selectedImage.src} alt={selectedImage.alt} className={`h-full w-full object-cover transition-opacity duration-300 ${selectedImage.className}`} />
            <span className="absolute left-4 top-4 bg-background/90 px-3 py-2 text-[10px] font-medium uppercase tracking-[0.16em] backdrop-blur">Gallery {selected + 1} / {galleryImages.length}</span>
            {zoomPoint && (
              <span
                className="pointer-events-none absolute hidden size-32 -translate-x-1/2 -translate-y-1/2 border border-primary/50 bg-background/20 backdrop-brightness-110 lg:block"
                style={{ left: `${zoomPoint.x}%`, top: `${zoomPoint.y}%` }}
                aria-hidden="true"
              />
            )}
            {zoomPoint && (
              <div className="pointer-events-none absolute left-[calc(100%+1rem)] top-0 z-40 hidden aspect-square w-[min(42rem,48vw)] overflow-hidden border border-border bg-background shadow-2xl lg:block" aria-hidden="true">
                <img
                  src={selectedImage.src}
                  alt=""
                  className={`h-full w-full scale-[2.35] object-cover ${selectedImage.className}`}
                  style={{ transformOrigin: `${zoomPoint.x}% ${zoomPoint.y}%` }}
                />
              </div>
            )}
          </div>
          <div className="mt-3 grid grid-cols-4 gap-2 sm:gap-3">
            {galleryImages.map((image, index) => (
              <Button variant="ghost" key={image.src} onPointerEnter={(event) => { if (event.pointerType === "mouse") setSelected(index); }} onFocus={() => setSelected(index)} onClick={() => setSelected(index)} className={`aspect-[4/3] h-auto overflow-hidden border bg-secondary p-0 ${selected === index ? "border-accent ring-1 ring-accent" : "border-border opacity-70 hover:opacity-100"}`} aria-label={`View product image ${index + 1}`} aria-pressed={selected === index}>
                <img src={image.src} alt="" className={`h-full w-full object-cover ${image.thumb}`} />
              </Button>
            ))}
          </div>
          <p className="mt-3 text-center text-xs text-muted-foreground"><span className="hidden lg:inline">Hover over a thumbnail to preview it. Move over the main image to zoom.</span><span className="lg:hidden">Tap a thumbnail to view another setting.</span></p>
        </div>

        <div>
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs">
            <span className="text-accent" aria-hidden="true">✦</span>
            <a href="#reviews" className="font-medium underline decoration-border underline-offset-4">See illustrative customer stories</a>
          </div>
          <p className="mt-5 text-[11px] uppercase tracking-[0.2em] text-muted-foreground">LIVOARA signature beauty companion</p>
          <h1 className="mt-2 font-display text-4xl leading-tight sm:text-5xl">The LIVOARA Travel Vanity</h1>
          <p className="mt-4 max-w-xl text-sm leading-7 text-muted-foreground sm:text-base">A luminous vanity, thoughtful organizer, and travel companion—beautifully designed as one.</p>

          <div className="mt-6 grid grid-cols-3 border-y border-border py-4 text-center text-[11px] leading-4">
            <QuickFact icon={<Sparkles />} label="Illuminated mirror" />
            <QuickFact icon={<PackageCheck />} label="Organized storage" />
            <QuickFact icon={<Truck />} label="Travel-ready" />
          </div>

          <div className="mt-6">
            <div className="mb-3 flex items-center justify-between gap-3">
              <p className="text-[11px] font-medium uppercase tracking-[0.16em]">Choose your offer</p>
              <span className="bg-secondary px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-accent">Bundle pricing</span>
            </div>
            <div className="grid gap-3" role="group" aria-label="Choose product offer">
              {bundleOffers.map((offer) => {
                const isSelected = selectedOffer === offer.id;
                return (
                  <Button
                    key={offer.id}
                    type="button"
                    variant="ghost"
                    aria-pressed={isSelected}
                    onClick={() => setSelectedOffer(offer.id)}
                    className={`h-auto min-h-20 w-full justify-between border px-4 py-4 text-left sm:px-5 ${isSelected ? "border-accent bg-secondary/70 ring-1 ring-accent" : "border-border bg-background hover:bg-muted/45"}`}
                  >
                    <span className="flex min-w-0 items-center gap-3">
                      <span className={`grid size-5 shrink-0 place-items-center rounded-full border ${isSelected ? "border-accent" : "border-border"}`} aria-hidden="true">
                        {isSelected && <span className="size-2.5 rounded-full bg-accent" />}
                      </span>
                      <span>
                        <span className="flex flex-wrap items-center gap-2"><strong className="text-base">{offer.label}</strong>{offer.badge && <span className="bg-accent px-2 py-1 text-[10px] font-bold uppercase tracking-[0.1em] text-accent-foreground">{offer.badge}</span>}</span>
                        <span className="mt-1 block text-xs font-normal text-muted-foreground">{offer.detail}</span>
                      </span>
                    </span>
                    <strong className="shrink-0 font-display text-2xl">{offer.price}</strong>
                  </Button>
                );
              })}
            </div>
            <div className="mt-3 flex items-center gap-2 bg-muted/45 px-4 py-3 text-xs">
              <IndianRupee className="size-4 shrink-0 text-accent" />
              <span>Selected: <strong>{activeOffer.label} for {selectedPrice}</strong> · Inclusive of all taxes</span>
            </div>
          </div>

          <ul className="mt-6 grid gap-3">
            {benefits.map((benefit) => <li key={benefit} className="flex gap-3 text-sm"><span className="mt-0.5 grid size-5 shrink-0 place-items-center bg-secondary"><Check className="size-3 text-accent" /></span>{benefit}</li>)}
          </ul>

          <div className="mt-7 flex items-center justify-between gap-4">
            <span className="text-[11px] uppercase tracking-[0.16em]">Quantity</span>
            <div className="grid grid-cols-3 border border-border">
              <Button variant="icon" size="icon" aria-label="Decrease quantity" onClick={() => setQuantity(Math.max(1, quantity - 1))}><Minus className="size-4" /></Button>
              <span className="grid min-w-11 place-items-center text-sm" aria-live="polite">{quantity}</span>
              <Button variant="icon" size="icon" aria-label="Increase quantity" onClick={() => setQuantity(quantity + 1)}><Plus className="size-4" /></Button>
            </div>
          </div>
          <Button id="main-add-to-cart" className="mt-4 w-full text-xs uppercase tracking-[0.12em]" size="lg" onClick={() => add(cartQuantity)}>Add to Cart · {selectedPrice}</Button>
          <Button className="mt-2 w-full text-xs uppercase tracking-[0.12em]" size="lg" variant="outline" onClick={() => add(cartQuantity)}>Buy Now</Button>

          <div className="mt-5 border-y border-border py-4 text-center" role="timer" aria-live="off" aria-label={`${timerHours} hours, ${timerMinutes} minutes, ${timerSeconds} seconds remaining`}>
            <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-muted-foreground">Offer timer</p>
            <div className="mx-auto mt-3 grid max-w-sm grid-cols-[1fr_auto_1fr_auto_1fr] items-start gap-3 tabular-nums">
              <TimeUnit value={timerHours} label="Hours" />
              <span className="pt-1 font-display text-3xl text-accent">:</span>
              <TimeUnit value={timerMinutes} label="Minutes" />
              <span className="pt-1 font-display text-3xl text-accent">:</span>
              <TimeUnit value={timerSeconds} label="Seconds" />
            </div>
          </div>

          <div className="relative mt-6 grid grid-cols-3 border-y border-border py-5 text-center text-[11px] leading-4">
            <span className="absolute left-[16.67%] right-[16.67%] top-9 h-px bg-border" aria-hidden="true" />
            <Status icon={<PackageCheck />} label="Order placed" value="Today" />
            <Status icon={<Truck />} label="Dispatched" value="Date at checkout" />
            <Status icon={<Gift />} label="Delivered" value="Date at checkout" />
          </div>

          <div className="mt-4 border border-border bg-muted/35 p-4 sm:p-5">
            <div className="flex items-start gap-3">
              <span className="grid size-9 shrink-0 place-items-center bg-secondary text-accent"><CreditCard className="size-4" /></span>
              <div>
                <h2 className="font-medium">Pay securely your way</h2>
                <p className="mt-1 text-xs leading-5 text-muted-foreground">Popular payment options for customers across India.</p>
              </div>
            </div>
            <div className="mt-4 grid grid-cols-4 gap-2 sm:grid-cols-8" aria-label="Accepted payment methods">
              {['UPI', 'RuPay', 'Visa', 'Mastercard', 'G Pay', 'PhonePe', 'Paytm', 'COD'].map((method) => (
                <span key={method} className="grid min-h-10 place-items-center border border-border bg-background px-2 text-center text-[10px] font-semibold">{method}</span>
              ))}
            </div>
            <p className="mt-3 flex items-center gap-2 text-[11px] text-muted-foreground"><LockKeyhole className="size-3.5 text-accent" />Secure payment · Availability confirmed at checkout</p>
          </div>
          <div className="mt-4 grid grid-cols-2 gap-px border border-border bg-border text-xs">
            <Trust icon={<ShieldCheck />} text="Eligibility reviewed fairly" />
            <Trust icon={<LockKeyhole />} text="Secure checkout" />
            <Trust icon={<Truck />} text="Tracking where available" />
            <Trust icon={<PackageCheck />} text="7-day request window" />
          </div>

          <div className="mt-6 divide-y divide-border border-y border-border">
            <InfoRow title="Product Details" open><p>The LIVOARA Travel Vanity combines an illuminated mirror with organised compartments in a compact case designed to keep everyday beauty essentials together at home or while travelling. Product colour and finish may vary slightly because of screen settings, photography, manufacturing tolerances, or production batches.</p></InfoRow>
            <InfoRow title="Specifications"><dl className="grid gap-4 sm:grid-cols-2"><Spec term="Format" value="Portable vanity case" /><Spec term="Storage" value="Organised interior compartments" /><Spec term="Mirror" value="Integrated illuminated mirror" /><Spec term="Care & operation" value="Follow the label and guide supplied with the product" /></dl></InfoRow>
            <InfoRow title="Shipping & Returns"><p>Delivery estimates, serviceability, and any shipping charge are shown at checkout. Eligible return, refund, or exchange requests must be emailed to hello@livoara.in within 7 calendar days of delivery. A clear, continuous unboxing video is mandatory.</p></InfoRow>
            <InfoRow title="What's Included"><p>The package contains the LIVOARA vanity and the components supplied for its included features. Please check the product, accessories, and enclosed instructions during your continuous unboxing recording.</p></InfoRow>
          </div>
        </div>
      </section>

      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-[1450px] px-6 py-16 sm:px-10 sm:py-20 lg:px-12">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs uppercase tracking-[0.2em] text-primary-foreground/65">Customer comments</p>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl">What India is saying</h2>
            <p className="mt-4 text-sm leading-6 text-primary-foreground/70">Sample comments for layout preview. Replace with verified customer feedback before publishing.</p>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {featuredComments.map((comment) => (
              <article key={comment.name} className="flex min-h-72 flex-col border border-primary-foreground/20 p-6 sm:p-7">
                <div className="flex items-center justify-between gap-4">
                  <span className="grid size-11 place-items-center bg-primary-foreground font-medium text-primary">{comment.initials}</span>
                  <span className="text-accent" aria-label="5 out of 5 sample stars">★ ★ ★ ★ ★</span>
                </div>
                <h3 className="mt-6 font-display text-2xl leading-tight">{comment.title}</h3>
                <p className="mt-4 flex-1 text-sm leading-7 text-primary-foreground/75">“{comment.copy}”</p>
                <footer className="mt-6 border-t border-primary-foreground/20 pt-4 text-xs">
                  <p className="font-medium">{comment.name} · {comment.city}, India</p>
                  <p className="mt-1 uppercase tracking-[0.14em] text-primary-foreground/55">Sample review</p>
                </footer>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="mx-auto grid max-w-[1250px] gap-12 px-6 py-16 sm:py-24 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Thoughtfully composed</p>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl">One place for your ritual.</h2>
            <p className="mt-6 max-w-xl leading-8 text-muted-foreground">Designed to bring light, order, and ease to the moments you spend getting ready—at home or away.</p>
            <div className="mt-8 grid gap-7">
              <Proof number="01" title="Light where you need it">An illuminated mirror supports a more considered getting-ready routine.</Proof>
              <Proof number="02" title="Order without the clutter">Dedicated compartments keep everyday beauty essentials together.</Proof>
              <Proof number="03" title="Ready to move">A compact case brings your routine into one travel-friendly form.</Proof>
            </div>
          </div>
          <div className="aspect-[4/5] overflow-hidden bg-secondary"><img src={pinkVanity} alt="Open pink LIVOARA vanity showing mirror and organized compartments" className="h-full w-full object-cover" /></div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16 sm:py-24">
        <div className="text-center"><p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">A clearer comparison</p><h2 className="mt-4 font-display text-4xl sm:text-5xl">Why choose LIVOARA?</h2><p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-muted-foreground">A practical comparison of the product format and the everyday problem it is designed to solve.</p></div>
        <div className="mt-10 overflow-x-auto border border-border">
          <table className="w-full min-w-[620px] border-collapse text-sm">
            <thead><tr className="bg-muted/60"><th className="p-5 text-left font-medium">Feature</th><th className="bg-secondary p-5 text-center font-display text-xl">LIVOARA</th><th className="p-5 text-center font-medium">Typical alternative</th></tr></thead>
            <tbody className="divide-y divide-border">
              <CompareRow feature="Mirror lighting" livoara="Illuminated mirror integrated into the case" other="Often requires a separate mirror" />
              <CompareRow feature="Organisation" livoara="Dedicated interior compartments" other="Usually general-purpose storage" />
              <CompareRow feature="Travel format" livoara="Compact vanity case" other="Format and portability vary" />
              <CompareRow feature="Everyday routine" livoara="Mirror and essentials kept together" other="Items may be stored separately" />
            </tbody>
          </table>
        </div>
      </section>

      <section id="reviews" className="border-y border-border bg-muted/45">
        <div className="mx-auto max-w-[1250px] px-6 py-16 sm:py-24">
          <div className="grid gap-10 lg:grid-cols-[.72fr_1.28fr] lg:items-start">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Customer stories</p>
              <h2 className="mt-4 font-display text-4xl sm:text-5xl">Loved across India</h2>
              <p className="mt-4 text-sm leading-6 text-muted-foreground">Illustrative stories showing how different customers may use the vanity. These are not verified reviews or product ratings.</p>
              <div className="mt-8 border-y border-border py-6">
                <p className="font-display text-3xl">Real reviews will appear here</p>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">We will publish ratings only after they come from confirmed customer feedback.</p>
              </div>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {sampleReviews.map((review) => (
                <article key={review.name} className="flex min-h-80 flex-col border border-border bg-background p-6">
                  <div className="flex items-center justify-between gap-4"><span className="text-accent" aria-label={`${review.rating} out of 5 sample stars`}>{"★".repeat(review.rating)}<span className="text-border">{"★".repeat(5 - review.rating)}</span></span><Star className="size-4 text-muted-foreground" /></div>
                  <h3 className="mt-5 font-display text-2xl leading-tight">{review.title}</h3>
                  <p className="mt-4 flex-1 text-sm leading-7 text-muted-foreground">{review.copy}</p>
                  <footer className="mt-6 border-t border-border pt-4"><p className="font-medium">{review.name}</p><div className="mt-1 flex items-center justify-between gap-3 text-xs text-muted-foreground"><span>{review.city}, India</span><span>Sample review</span></div></footer>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-16 sm:py-24">
        <p className="text-center text-xs uppercase tracking-[0.2em] text-muted-foreground">Questions, answered</p>
        <h2 className="mt-4 text-center font-display text-4xl">Product guidance</h2>
        <div className="mt-8 divide-y divide-border border-y border-border">
          <InfoRow title="How does the light operate?"><p>Use the controls and power instructions supplied with your vanity. Read the product label and enclosed guide before first use, and use only the recommended power method.</p></InfoRow>
          <InfoRow title="What fits inside?"><p>The organised interior is intended for everyday makeup, brushes, skincare, jewellery, and other small beauty essentials. Capacity depends on the individual size and shape of each item.</p></InfoRow>
          <InfoRow title="Is it suitable for travel?"><p>The compact case is designed to keep beauty essentials together while travelling. Before flying, check the product label for its power source and follow your airline’s current cabin and checked-baggage rules.</p></InfoRow>
          <InfoRow title="What happens if it arrives damaged?"><p>Email hello@livoara.in within 7 calendar days of delivery with your order details and a clear, continuous unboxing video. Our team will assess the request under the Shipping & Returns Policy.</p></InfoRow>
        </div>
      </section>

      <div className={`fixed inset-x-0 bottom-0 z-50 border-t border-border bg-background/95 p-3 backdrop-blur transition-transform duration-300 lg:hidden ${showSticky ? "translate-y-0" : "translate-y-full"}`}>
        <Button className="w-full text-xs uppercase tracking-[0.12em]" onClick={() => add(cartQuantity)}>Add to Cart · {selectedPrice}</Button>
      </div>
    </div>
  );
}

function InfoRow({ title, children, open = false }: { title: string; children: ReactNode; open?: boolean }) {
  return <details className="group py-5" open={open}><summary className="flex cursor-pointer list-none items-center justify-between font-medium"><span>{title}</span><ChevronDown className="size-4 transition-transform group-open:rotate-180" /></summary><div className="max-w-2xl pt-4 text-sm leading-7 text-muted-foreground">{children}</div></details>;
}

function Spec({ term, value }: { term: string; value: string }) { return <div><dt className="font-medium text-foreground">{term}</dt><dd>{value}</dd></div>; }

function QuickFact({ icon, label }: { icon: ReactNode; label: string }) { return <div className="px-2"><span className="mx-auto mb-2 grid size-8 place-items-center text-accent [&>svg]:size-4">{icon}</span><span>{label}</span></div>; }

function TimeUnit({ value, label }: { value: number; label: string }) { return <span><strong className="block font-display text-3xl sm:text-4xl">{String(value).padStart(2, "0")}</strong><span className="mt-1 block text-[9px] uppercase tracking-[0.14em] text-muted-foreground">{label}</span></span>; }

function Status({ icon, label, value }: { icon: ReactNode; label: string; value: string }) { return <div className="relative z-10 px-1"><span className="mx-auto grid size-8 place-items-center rounded-full border border-accent bg-background text-accent [&>svg]:size-4">{icon}</span><strong className="mt-2 block font-medium">{value}</strong><span className="mt-1 block text-muted-foreground">{label}</span></div>; }

function Trust({ icon, text }: { icon: ReactNode; text: string }) { return <div className="flex min-h-12 items-center gap-2 bg-muted/55 px-3"><span className="text-accent [&>svg]:size-4">{icon}</span><span>{text}</span></div>; }

function Proof({ number, title, children }: { number: string; title: string; children: ReactNode }) { return <div className="grid grid-cols-[2.5rem_1fr] gap-4"><span className="font-display text-2xl text-accent">{number}</span><div><h3 className="font-medium">{title}</h3><p className="mt-1 text-sm leading-6 text-muted-foreground">{children}</p></div></div>; }

function CompareRow({ feature, livoara, other }: { feature: string; livoara: string; other: string }) { return <tr><th scope="row" className="p-5 text-left font-medium">{feature}</th><td className="bg-secondary/60 p-5 text-center"><Check className="mx-auto mb-2 size-4 text-accent" />{livoara}</td><td className="p-5 text-center text-muted-foreground">{other}</td></tr>; }
