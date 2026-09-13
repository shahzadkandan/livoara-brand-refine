import { createFileRoute } from "@tanstack/react-router";
import { Check, ChevronDown, Gift, Minus, Plus, ShieldCheck, Sparkles, Truck, Star, CreditCard, RotateCcw, Battery, Layers, Wind } from "lucide-react";
import { useState, type ReactNode, useEffect } from "react";
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
  const [quantity, setQuantity] = useState(1);
  const { add } = useCart();
  const [selected, setSelected] = useState(0);
  const [showSticky, setShowSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const atcButton = document.getElementById("main-atc");
      if (atcButton) {
        const rect = atcButton.getBoundingClientRect();
        setShowSticky(rect.bottom < 0);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const crops = ["object-[68%_52%]", "object-[85%_54%]", "object-[54%_52%]"];

  return (
    <div className="page-reveal">
      <div className="border-b border-border bg-muted/40 px-5 py-3 text-center text-[10px] uppercase tracking-[0.2em] text-muted-foreground sm:text-xs">
        Home / The LIVOARA Travel Vanity
      </div>
      
      <div className="mx-auto grid max-w-[1450px] gap-10 px-5 py-8 sm:px-8 lg:grid-cols-[1.15fr_.85fr] lg:gap-16 lg:px-12 lg:py-16">
        {/* Gallery Section */}
        <div className="space-y-4">
          <div className="aspect-[4/5] overflow-hidden bg-secondary sm:aspect-square">
            <img 
              src={heroAsset.url} 
              alt="LIVOARA Travel Vanity" 
              className={`h-full w-full scale-[1.6] object-cover transition-all duration-500 ${crops[selected]}`} 
            />
          </div>
          <div className="grid grid-cols-3 gap-3">
            {crops.map((crop, index) => (
              <Button 
                variant="ghost" 
                key={crop} 
                onClick={() => setSelected(index)} 
                className={`aspect-square h-auto overflow-hidden border p-0 transition-colors ${selected === index ? "border-foreground ring-1 ring-foreground" : "border-border hover:border-muted-foreground"}`} 
                aria-label={`View product image ${index + 1}`}
              >
                <img src={heroAsset.url} alt="" className={`h-full w-full scale-[2.5] object-cover ${crop}`} />
              </Button>
            ))}
          </div>
        </div>

        {/* Info Section */}
        <div className="lg:sticky lg:top-28 lg:self-start">
          <div className="flex items-center gap-2 text-sm">
            <div className="flex text-accent">
              {[...Array(5)].map((_, i) => <Star key={i} className="size-3.5 fill-current" />)}
            </div>
            <span className="text-muted-foreground font-medium">4.9/5 (128 Reviews)</span>
          </div>
          
          <h1 className="mt-4 font-display text-4xl leading-tight sm:text-5xl lg:text-6xl">The LIVOARA Travel Vanity</h1>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground/90">A luminous vanity, thoughtful organizer, and travel companion—beautifully designed as one.</p>
          
          <div className="mt-8 flex items-baseline gap-4 border-y border-border py-6">
            <div className="flex flex-col">
              <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Special Launch Price</span>
              <div className="mt-1 flex items-baseline gap-3">
                <span className="text-4xl font-medium tracking-tight">£149.00</span>
                <span className="text-xl text-muted-foreground line-through opacity-60">£199.00</span>
                <span className="rounded-full bg-accent/10 px-3 py-0.5 text-[11px] font-bold uppercase tracking-wider text-accent">Save 25%</span>
              </div>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-3">
            <BenefitCard icon={<Sparkles />} text="Dimmable LED Mirror" />
            <BenefitCard icon={<Check />} text="Anti-Spill Storage" />
            <BenefitCard icon={<Truck />} text="TSA Approved Size" />
            <BenefitCard icon={<ShieldCheck />} text="2-Year Warranty" />
          </div>

          <ul className="mt-8 space-y-3.5">
            {benefits.map((benefit) => (
              <li key={benefit} className="flex gap-3 text-[13px] leading-relaxed text-muted-foreground">
                <Check className="mt-0.5 size-4 shrink-0 text-accent" />
                {benefit}
              </li>
            ))}
          </ul>

          <div className="mt-10 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase tracking-[0.2em] font-medium">Quantity</span>
              <div className="flex h-11 items-center border border-border">
                <Button variant="ghost" size="icon" className="h-full rounded-none px-3" aria-label="Decrease" onClick={() => setQuantity(Math.max(1, quantity - 1))}><Minus className="size-3.5" /></Button>
                <span className="w-10 text-center text-sm font-medium">{quantity}</span>
                <Button variant="ghost" size="icon" className="h-full rounded-none px-3" aria-label="Increase" onClick={() => setQuantity(quantity + 1)}><Plus className="size-3.5" /></Button>
              </div>
            </div>

            <Button id="main-atc" className="h-14 w-full text-base uppercase tracking-[0.15em]" size="lg" onClick={() => add(quantity)}>
              Add to Bag
            </Button>
            <Button className="h-14 w-full text-base uppercase tracking-[0.15em]" size="lg" variant="outline" onClick={() => add(quantity)}>
              Buy it Now
            </Button>
          </div>

          <div className="mt-8 space-y-4 rounded-xl border border-border bg-muted/30 p-5">
            <div className="flex items-start gap-4 text-xs">
              <Truck className="mt-0.5 size-5 shrink-0 text-accent" />
              <div>
                <p className="font-semibold uppercase tracking-wider text-foreground">Fast & Secure Delivery</p>
                <p className="mt-1 text-muted-foreground leading-relaxed">Free tracked shipping on orders over £100. Delivered in 3-5 business days.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 text-xs">
              <RotateCcw className="mt-0.5 size-5 shrink-0 text-accent" />
              <div>
                <p className="font-semibold uppercase tracking-wider text-foreground">90-Day Beauty Trial</p>
                <p className="mt-1 text-muted-foreground leading-relaxed">Not completely in love? We offer hassle-free returns within 90 days of purchase.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Philosophy Section */}
      <section className="border-y border-border bg-muted/40">
        <div className="mx-auto max-w-[1450px] px-6 py-24 lg:px-12">
          <div className="text-center">
            <p className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground">The LIVOARA Philosophy</p>
            <h2 className="mt-6 font-display text-4xl sm:text-5xl lg:text-6xl">One place for your ritual.</h2>
            <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground/90">
              Designed to bring light, order, and ease to the moments you spend getting ready.
            </p>
          </div>
          
          <div className="mt-20 grid gap-12 sm:grid-cols-3">
            <FeatureItem 
              icon={<Battery />} 
              title="Long-Lasting Power" 
              desc="Integrated battery provides weeks of illumination on a single charge via USB-C." 
            />
            <FeatureItem 
              icon={<Layers />} 
              title="Modular Interior" 
              desc="Adjustable dividers allow you to customize the space for your unique collection." 
            />
            <FeatureItem 
              icon={<Wind />} 
              title="Weather Resistant" 
              desc="Durable vegan leather and sealed zippers protect your ritual from the elements." 
            />
          </div>
        </div>
      </section>

      {/* Detailed Accordions */}
      <section className="mx-auto max-w-4xl divide-y divide-border px-6 py-12">
        <InfoRow title="Product Features">
          <div className="space-y-4">
            <p>The LIVOARA Travel Vanity is a masterclass in functional elegance. It integrates high-CRI LED lighting with customizable organization to ensure you look your best in any environment.</p>
            <ul className="grid gap-4 sm:grid-cols-2">
              <li className="flex gap-2"><Check className="size-4 text-accent" /> 3 light temperatures</li>
              <li className="flex gap-2"><Check className="size-4 text-accent" /> Memory function settings</li>
              <li className="flex gap-2"><Check className="size-4 text-accent" /> Shatter-proof glass</li>
              <li className="flex gap-2"><Check className="size-4 text-accent" /> Vegan leather exterior</li>
            </ul>
          </div>
        </InfoRow>
        <InfoRow title="Specifications">
          <dl className="grid gap-x-8 gap-y-6 sm:grid-cols-2">
            <Spec term="Dimensions" value="26cm x 23cm x 11cm" />
            <Spec term="Weight" value="1.2kg (Empty)" />
            <Spec term="Battery Life" value="Up to 7 days of daily use" />
            <Spec term="Charging" value="USB-C (Cable included)" />
            <Spec term="Materials" value="Premium PU Leather, Aluminum, Glass" />
            <Spec term="Light Quality" value="95+ CRI Professional Grade" />
          </dl>
        </InfoRow>
        <InfoRow title="Shipping & Returns">
          <div className="space-y-4">
            <p><strong>Shipping:</strong> We ship worldwide from our UK and EU hubs. Standard shipping is 3-5 days. Express 1-2 days.</p>
            <p><strong>Returns:</strong> We offer a 90-day satisfaction guarantee. If the Travel Vanity isn't for you, return it in original condition for a full refund.</p>
          </div>
        </InfoRow>
        <InfoRow title="FAQ">
          <div className="space-y-6">
            <div>
              <p className="font-semibold text-foreground">Can I bring this on a plane?</p>
              <p className="mt-2 text-muted-foreground">Yes! The Travel Vanity is designed to meet TSA and international airline regulations for carry-on luggage.</p>
            </div>
            <div>
              <p className="font-semibold text-foreground">How long does the light last?</p>
              <p className="mt-2 text-muted-foreground">The built-in battery lasts for approximately 5-7 days based on 20 minutes of daily use at full brightness.</p>
            </div>
          </div>
        </InfoRow>
      </section>

      {/* Sticky Mobile ATC */}
      <div className={`fixed bottom-0 left-0 right-0 z-50 transform border-t border-border bg-background p-4 transition-transform duration-300 lg:hidden ${showSticky ? "translate-y-0" : "translate-y-full"}`}>
        <div className="mx-auto flex max-w-[1450px] items-center gap-4">
          <div className="hidden sm:block">
            <p className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">The LIVOARA Vanity</p>
            <p className="text-sm font-semibold">£149.00</p>
          </div>
          <Button className="w-full uppercase tracking-widest" onClick={() => add(quantity)}>Add to Bag — £149</Button>
        </div>
      </div>
    </div>
  );
}

function InfoRow({ title, children }: { title: string; children: ReactNode }) {
  return (
    <details className="group py-8" open={title === "Product Features"}>
      <summary className="flex cursor-pointer list-none items-center justify-between font-display text-2xl tracking-tight transition-colors hover:text-accent">
        <span>{title}</span>
        <ChevronDown className="size-5 transition-transform duration-300 group-open:rotate-180" />
      </summary>
      <div className="max-w-3xl pt-8 text-sm leading-relaxed text-muted-foreground/90">
        {children}
      </div>
    </details>
  );
}

function Spec({ term, value }: { term: string; value: string }) {
  return (
    <div className="border-b border-border/50 pb-2">
      <dt className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">{term}</dt>
      <dd className="mt-1 text-sm font-medium text-foreground">{value}</dd>
    </div>
  );
}

function BenefitCard({ icon, text }: { icon: ReactNode; text: string }) {
  return (
    <div className="flex items-center gap-3 rounded-lg border border-border bg-muted/20 px-4 py-3 text-[13px] font-medium transition-colors hover:bg-muted/40">
      <span className="text-accent [&>svg]:size-5">{icon}</span>
      <span className="text-foreground/80">{text}</span>
    </div>
  );
}

function FeatureItem({ icon, title, desc }: { icon: ReactNode; title: string; desc: string }) {
  return (
    <div className="text-center">
      <div className="mx-auto flex size-12 items-center justify-center rounded-full bg-accent/10 text-accent [&>svg]:size-6">
        {icon}
      </div>
      <h3 className="mt-6 font-display text-xl">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{desc}</p>
    </div>
  );
}
