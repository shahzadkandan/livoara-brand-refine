import { createFileRoute } from "@tanstack/react-router";
import {
  Check,
  ChevronDown,
  Gift,
  LockKeyhole,
  Minus,
  PackageCheck,
  Plus,
  ShieldCheck,
  Sparkles,
  Truck,
} from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";
import heroAsset from "@/assets/livoara-hero.png.asset.json";
import pinkVanity from "@/assets/reference/livoara-product-pink-stacked.jpg";
import whiteVanity from "@/assets/reference/livoara-product-white-sunlight.jpg";
import { Button } from "@/components/ui/button";
import { useCart } from "@/components/site-shell";

export const Route = createFileRoute("/product")({
  head: () => ({
    meta: [
      { title: "The Travel Vanity — LIVOARA" },
      { name: "description", content: "Meet the LIVOARA Travel Vanity: an illuminated vanity, organizer, and travel companion in one considered design." },
      { property: "og:title", content: "The Travel Vanity — LIVOARA" },
      { property: "og:description", content: "A considered beauty companion for home and travel." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ProductPage,
});

const benefits = [
  "Illuminated mirror for your beauty ritual",
  "Organized compartments for everyday essentials",
  "Compact format designed to travel beautifully",
];

const galleryImages = [
  {
    src: heroAsset.url,
    alt: "LIVOARA Travel Vanity displayed beside beauty essentials",
    className: "scale-[1.6] object-[68%_52%]",
    thumbnailClassName: "scale-[2.2] object-[68%_52%]",
  },
  {
    src: pinkVanity,
    alt: "Pink LIVOARA Travel Vanity open with illuminated mirror and organized compartments",
    className: "object-center",
    thumbnailClassName: "object-center",
  },
  {
    src: whiteVanity,
    alt: "White LIVOARA Travel Vanity open in natural sunlight",
    className: "object-center",
    thumbnailClassName: "object-center",
  },
] as const;

const sampleReviews = [
  {
    name: "Priya S.",
    city: "Delhi",
    rating: 5,
    title: "Travel ke liye bahut convenient",
    copy: "Mirror ki light kaafi useful hai aur makeup ka samaan ek hi jagah neatly organise ho jata hai. Weekend trips par carry karna bhi easy laga.",
  },
  {
    name: "Neha R.",
    city: "Mumbai",
    rating: 5,
    title: "Worth it for daily use",
    copy: "Vanity looks elegant on my dresser and the compartments make my morning routine much easier. The illuminated mirror is my favourite part.",
  },
  {
    name: "Ayesha K.",
    city: "Lucknow",
    rating: 4,
    title: "Gift ke liye lovely choice",
    copy: "Maine ise gifting ke liye choose kiya. Design premium lagta hai aur andar essentials rakhne ke liye achhi space hai.",
  },
] as const;

function ProductPage() {
  const [quantity, setQuantity] = useState(1);
  const [selected, setSelected] = useState(0);
  const [showSticky, setShowSticky] = useState(false);
  const { add } = useCart();
  const selectedImage = galleryImages[selected] ?? galleryImages[0];

  useEffect(() => {
    const handleScroll = () => {
      const button = document.getElementById("main-add-to-cart");
      setShowSticky(Boolean(button && button.getBoundingClientRect().bottom < 0));
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="page-reveal pb-20 lg:pb-0">
      <div className="border-b border-border bg-muted/40 px-5 py-3 text-center text-[10px] uppercase tracking-[0.18em] text-muted-foreground sm:text-xs">
        Home / The LIVOARA Travel Vanity
      </div>

      <div className="mx-auto grid max-w-[1450px] gap-8 px-4 py-6 sm:px-7 lg:grid-cols-[1.08fr_.92fr] lg:items-start lg:gap-12 lg:px-12 lg:py-12">
        <div className="lg:sticky lg:top-24">
          <div className="aspect-square overflow-hidden bg-secondary">
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className={`h-full w-full object-cover transition-opacity duration-300 ${selectedImage.className}`}
            />
          </div>
          <div className="mt-3 grid grid-cols-3 gap-2 sm:gap-3">
            {galleryImages.map((image, index) => (
              <Button
                variant="ghost"
                key={image.src}
                onClick={() => setSelected(index)}
                className={`aspect-[4/3] h-auto overflow-hidden border bg-secondary p-0 ${selected === index ? "border-foreground" : "border-border"}`}
                aria-label={`View product image ${index + 1}`}
                aria-pressed={selected === index}
              >
                <img src={image.src} alt="" className={`h-full w-full object-cover ${image.thumbnailClassName}`} />
              </Button>
            ))}
          </div>
        </div>

        <div>
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs">
            <span className="text-accent" aria-hidden="true">★ ★ ★ ★ ★</span>
            <span className="font-medium">[Rating & verified review count]</span>
          </div>
          <h1 className="mt-3 font-display text-4xl leading-tight sm:text-5xl">The LIVOARA Travel Vanity</h1>
          <p className="mt-3 max-w-xl text-sm leading-6 text-muted-foreground sm:text-base sm:leading-7">
            A luminous vanity, thoughtful organizer, and travel companion—beautifully designed as one.
          </p>

          <div className="mt-5 grid grid-cols-2 gap-2">
            <BenefitCard icon={<Sparkles />} text="Illuminated mirror" />
            <BenefitCard icon={<Check />} text="Organized storage" />
            <BenefitCard icon={<Truck />} text="Travel-ready design" />
            <BenefitCard icon={<Gift />} text="Thoughtful gifting" />
          </div>

          <div className="mt-6 border-y border-border py-4">
            <div className="flex flex-wrap items-end justify-between gap-3">
              <div><p className="text-[11px] uppercase tracking-[0.16em] text-muted-foreground">Price</p><p className="mt-1 text-3xl font-medium">[Price]</p></div>
              <p className="text-xs text-muted-foreground">[Verified offer, if available]</p>
            </div>
          </div>

          <ul className="mt-5 grid gap-3">
            {benefits.map((benefit) => (
              <li key={benefit} className="flex gap-3 text-sm">
                <span className="mt-0.5 grid size-5 shrink-0 place-items-center bg-secondary"><Check className="size-3 text-accent" /></span>
                {benefit}
              </li>
            ))}
          </ul>

          <div className="mt-6 flex items-center justify-between gap-4">
            <span className="text-[11px] uppercase tracking-[0.16em]">Quantity</span>
            <div className="grid grid-cols-3 border border-border">
              <Button variant="icon" size="icon" aria-label="Decrease quantity" onClick={() => setQuantity(Math.max(1, quantity - 1))}><Minus className="size-4" /></Button>
              <span className="grid min-w-11 place-items-center text-sm" aria-live="polite">{quantity}</span>
              <Button variant="icon" size="icon" aria-label="Increase quantity" onClick={() => setQuantity(quantity + 1)}><Plus className="size-4" /></Button>
            </div>
          </div>
          <Button id="main-add-to-cart" className="mt-4 w-full text-xs uppercase tracking-[0.12em]" size="lg" onClick={() => add(quantity)}>Add to Cart · [Price]</Button>
          <Button className="mt-2 w-full text-xs uppercase tracking-[0.12em]" size="lg" variant="outline" onClick={() => add(quantity)}>Buy Now</Button>

          <div className="mt-5 grid grid-cols-3 border-y border-border py-4 text-center text-[11px] leading-4">
            <Status icon={<PackageCheck />} label="Order placed" value="Today" />
            <Status icon={<Truck />} label="Dispatched" value="[Add timing]" />
            <Status icon={<Gift />} label="Delivered" value="[Add timing]" />
          </div>
          <div className="mt-4 grid grid-cols-2 gap-px border border-border bg-border text-xs">
            <Trust icon={<ShieldCheck />} text="[Add verified guarantee]" />
            <Trust icon={<LockKeyhole />} text="Secure checkout" />
            <Trust icon={<Truck />} text="[Add shipping policy]" />
            <Trust icon={<PackageCheck />} text="[Add returns policy]" />
          </div>

          <div className="mt-5 divide-y divide-border border-y border-border">
            <InfoRow title="Product Details" open><p>The LIVOARA Travel Vanity combines an illuminated mirror with organized storage in a compact, elegant case. [Add verified materials and feature details.]</p></InfoRow>
            <InfoRow title="Specifications"><dl className="grid gap-4 sm:grid-cols-2"><Spec term="Dimensions" value="[Add dimensions]" /><Spec term="Weight" value="[Add weight]" /><Spec term="Materials" value="[Add materials]" /><Spec term="Power" value="[Add power details]" /></dl></InfoRow>
            <InfoRow title="Shipping & Returns"><p>[Add verified delivery windows, regions, costs, and return eligibility.]</p></InfoRow>
            <InfoRow title="What's Included"><p>[Add verified box contents.]</p></InfoRow>
          </div>
        </div>
      </div>

      <section className="border-y border-border bg-muted/55">
        <div className="mx-auto max-w-4xl px-6 py-16 text-center sm:py-20">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Thoughtfully composed</p>
          <h2 className="mt-5 font-display text-4xl sm:text-5xl">One place for your ritual.</h2>
          <p className="mx-auto mt-6 max-w-2xl leading-8 text-muted-foreground">Designed to bring light, order, and ease to the moments you spend getting ready.</p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-16">
        <p className="text-center text-xs uppercase tracking-[0.2em] text-muted-foreground">Questions, answered</p>
        <h2 className="mt-4 text-center font-display text-4xl">Product guidance</h2>
        <div className="mt-8 divide-y divide-border border-y border-border">
          <InfoRow title="How does the light operate?"><p>[Add verified operating instructions.]</p></InfoRow>
          <InfoRow title="What fits inside?"><p>[Add verified capacity details.]</p></InfoRow>
          <InfoRow title="Customer Reviews"><p>Verified customer reviews will appear here once available.</p></InfoRow>
        </div>
      </section>

      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-[1450px] px-6 py-16 sm:px-10 sm:py-20 lg:px-12">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs uppercase tracking-[0.2em] text-primary-foreground/65">Customer stories</p>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl">Trusted by customers across India</h2>
            <p className="mt-4 text-sm leading-6 text-primary-foreground/70">Sample reviews for layout preview. Replace with verified customer feedback before publishing.</p>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {sampleReviews.map((review) => (
              <article key={review.name} className="flex min-h-80 flex-col bg-background p-6 text-foreground sm:p-7">
                <div className="flex items-center justify-between gap-4">
                  <span className="text-lg text-accent" aria-label={`${review.rating} out of 5 stars`}>{"★".repeat(review.rating)}<span className="text-border">{"★".repeat(5 - review.rating)}</span></span>
                  <span className="text-4xl font-display text-muted-foreground" aria-hidden="true">“</span>
                </div>
                <h3 className="mt-5 font-display text-2xl leading-tight">{review.title}</h3>
                <p className="mt-4 flex-1 text-sm leading-7 text-muted-foreground">{review.copy}</p>
                <footer className="mt-6 border-t border-border pt-4">
                  <p className="font-medium">{review.name}</p>
                  <div className="mt-1 flex items-center justify-between gap-3 text-xs text-muted-foreground">
                    <span>{review.city}, India</span>
                    <span>Sample review</span>
                  </div>
                </footer>
              </article>
            ))}
          </div>
        </div>
      </section>

      <div className={`fixed inset-x-0 bottom-0 z-50 border-t border-border bg-background/95 p-3 backdrop-blur transition-transform duration-300 lg:hidden ${showSticky ? "translate-y-0" : "translate-y-full"}`}>
        <Button className="w-full text-xs uppercase tracking-[0.12em]" onClick={() => add(quantity)}>Add to Cart · [Price]</Button>
      </div>
    </div>
  );
}

function InfoRow({ title, children, open = false }: { title: string; children: ReactNode; open?: boolean }) {
  return <details className="group py-5" open={open}><summary className="flex cursor-pointer list-none items-center justify-between font-medium"><span>{title}</span><ChevronDown className="size-4 transition-transform group-open:rotate-180" /></summary><div className="max-w-2xl pt-4 text-sm leading-7 text-muted-foreground">{children}</div></details>;
}

function Spec({ term, value }: { term: string; value: string }) {
  return <div><dt className="font-medium text-foreground">{term}</dt><dd>{value}</dd></div>;
}

function BenefitCard({ icon, text }: { icon: ReactNode; text: string }) {
  return <div className="flex min-h-16 items-center gap-3 border border-border bg-muted/50 px-3 text-xs font-medium sm:px-4"><span className="text-accent [&>svg]:size-4">{icon}</span><span>{text}</span></div>;
}

function Status({ icon, label, value }: { icon: ReactNode; label: string; value: string }) {
  return <div className="px-2"><span className="mx-auto grid size-8 place-items-center border border-border text-accent [&>svg]:size-4">{icon}</span><strong className="mt-2 block font-medium">{value}</strong><span className="text-muted-foreground">{label}</span></div>;
}

function Trust({ icon, text }: { icon: ReactNode; text: string }) {
  return <div className="flex min-h-12 items-center gap-2 bg-muted/55 px-3"><span className="text-accent [&>svg]:size-4">{icon}</span><span>{text}</span></div>;
}