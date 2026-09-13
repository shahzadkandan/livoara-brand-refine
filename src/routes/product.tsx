import { createFileRoute } from "@tanstack/react-router";
import { Check, ChevronDown, Minus, Plus, ShieldCheck, Truck } from "lucide-react";
import { useState, type ReactNode } from "react";
import heroAsset from "@/assets/livoara-hero.png.asset.json";
import { Button } from "@/components/ui/button";
import { useCart } from "@/components/site-shell";

export const Route = createFileRoute("/product")({
  head: () => ({ meta: [
    { title: "The Travel Vanity — LIVOARA" }, { name: "description", content: "Meet the LIVOARA Travel Vanity: an illuminated vanity, organizer, and travel companion in one considered design." },
    { property: "og:title", content: "The Travel Vanity — LIVOARA" }, { property: "og:description", content: "A considered beauty companion for home and travel." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ]}), component: ProductPage,
});

const benefits = ["Illuminated mirror for your beauty ritual", "Organized compartments for everyday essentials", "Compact format designed to travel beautifully"];

function ProductPage() {
  const [quantity, setQuantity] = useState(1); const { add } = useCart(); const [selected, setSelected] = useState(0);
  const crops = ["object-[68%_52%]", "object-[85%_54%]", "object-[54%_52%]"];
  return <div className="page-reveal">
    <div className="mx-auto grid max-w-[1450px] gap-10 px-5 py-8 sm:px-8 lg:grid-cols-[1.18fr_.82fr] lg:gap-16 lg:px-12 lg:py-16">
      <div><div className="aspect-[5/4] overflow-hidden bg-secondary"><img src={heroAsset.url} alt="LIVOARA Travel Vanity" className={`h-full w-full scale-[1.35] object-cover ${crops[selected]}`} /></div><div className="mt-3 grid grid-cols-3 gap-3">{crops.map((crop, index) => <Button variant="ghost" key={crop} onClick={() => setSelected(index)} className={`aspect-square h-auto overflow-hidden border bg-secondary p-0 ${selected === index ? "border-foreground" : "border-border"}`} aria-label={`View product image ${index + 1}`}><img src={heroAsset.url} alt="" className={`h-full w-full scale-[2.5] object-cover ${crop}`} /></Button>)}</div></div>
      <div className="lg:sticky lg:top-28 lg:self-start"><p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">LIVOARA signature piece</p><h1 className="mt-4 font-display text-5xl leading-tight sm:text-6xl">The Travel Vanity</h1><div className="mt-5 flex items-center gap-3 text-sm"><span className="text-accent">☆ ☆ ☆ ☆ ☆</span><span className="text-muted-foreground">[Rating & review count]</span></div><p className="mt-7 text-2xl">[Price]</p><p className="mt-6 leading-8 text-muted-foreground">A luminous vanity, thoughtful organizer, and travel companion—beautifully designed as one.</p><ul className="mt-7 space-y-4">{benefits.map((benefit) => <li key={benefit} className="flex gap-3 text-sm"><Check className="mt-0.5 size-4 shrink-0 text-accent" />{benefit}</li>)}</ul>
        <div className="mt-8 flex items-center gap-4"><span className="text-xs uppercase tracking-[0.16em]">Quantity</span><div className="grid grid-cols-3 border border-border"><Button variant="icon" size="icon" aria-label="Decrease quantity" onClick={() => setQuantity(Math.max(1, quantity - 1))}><Minus className="size-4" /></Button><span className="grid min-w-10 place-items-center text-sm">{quantity}</span><Button variant="icon" size="icon" aria-label="Increase quantity" onClick={() => setQuantity(quantity + 1)}><Plus className="size-4" /></Button></div></div>
        <Button className="mt-6 w-full" size="lg" onClick={() => add(quantity)}>Add to Cart</Button><Button className="mt-3 w-full" size="lg" variant="outline" onClick={() => add(quantity)}>Buy Now</Button>
        <div className="mt-7 grid gap-3 border-y border-border py-5 text-sm sm:grid-cols-2"><div className="flex items-center gap-3"><Truck className="size-5 text-accent" /><span>Shipping terms: [add policy]</span></div><div className="flex items-center gap-3"><ShieldCheck className="size-5 text-accent" /><span>Trust details: [add policy]</span></div></div>
      </div>
    </div>
    <section className="border-y border-border bg-muted/55"><div className="mx-auto max-w-4xl px-6 py-20"><p className="text-center text-xs uppercase tracking-[0.2em] text-muted-foreground">Thoughtfully composed</p><h2 className="mt-5 text-center font-display text-4xl sm:text-5xl">One place for your ritual.</h2><p className="mx-auto mt-6 max-w-2xl text-center leading-8 text-muted-foreground">Designed to bring light, order, and ease to the moments you spend getting ready.</p></div></section>
    <section className="mx-auto max-w-4xl px-6 py-20"><InfoRow title="Product Details"><p>The LIVOARA Travel Vanity combines an illuminated mirror with organized storage in a compact, elegant case. [Add verified materials and feature details.]</p></InfoRow><InfoRow title="Specifications"><dl className="grid gap-4 sm:grid-cols-2"><Spec term="Dimensions" value="[Add dimensions]" /><Spec term="Weight" value="[Add weight]" /><Spec term="Materials" value="[Add materials]" /><Spec term="Power" value="[Add power details]" /></dl></InfoRow><InfoRow title="Reviews"><p>Verified customer reviews will appear here once available.</p></InfoRow><InfoRow title="Frequently Asked Questions"><p><strong>How does the light operate?</strong><br />[Add verified operating instructions.]</p><p className="mt-5"><strong>What fits inside?</strong><br />[Add verified capacity details.]</p></InfoRow><InfoRow title="Shipping & Returns"><p>[Add verified delivery windows, regions, costs, and return eligibility.]</p></InfoRow></section>
  </div>;
}

function InfoRow({ title, children }: { title: string; children: ReactNode }) { return <details className="group border-b border-border py-6" open={title === "Product Details"}><summary className="flex cursor-pointer list-none items-center justify-between font-display text-2xl"><span>{title}</span><ChevronDown className="size-5 transition-transform group-open:rotate-180" /></summary><div className="max-w-2xl pt-6 text-sm leading-7 text-muted-foreground">{children}</div></details>; }
function Spec({ term, value }: { term: string; value: string }) { return <div><dt className="font-medium text-foreground">{term}</dt><dd>{value}</dd></div>; }