import { createFileRoute } from "@tanstack/react-router";
import {
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  CirclePlay,
  CreditCard,
  House,
  LayoutGrid,
  Lightbulb,
  LockKeyhole,
  Luggage,
  MessageCircleMore,
  Minus,
  PackageCheck,
  Plus,
  RotateCcw,
  Search,
  Sparkles,
  Star,
  SunMedium,
  Truck,
} from "lucide-react";
import { useEffect, useMemo, useState, type PointerEvent as ReactPointerEvent, type ReactNode } from "react";
import { toast } from "sonner";
import heroAsset from "@/assets/livoara-hero.png.asset.json";
import referenceVanity from "@/assets/reference/livoara-reference-vanity.jpg.asset.json";
import pinkVanity from "@/assets/reference/livoara-product-pink-stacked.jpg";
import whiteVanity from "@/assets/reference/livoara-product-white-sunlight.jpg";
import problemScattered from "@/assets/livoara-problem-scattered.jpg";
import problemPouches from "@/assets/livoara-problem-pouches.jpg";

import organiseVideo from "@/assets/livoara-correct-organise-v2.mp4.asset.json";
import routineVideo from "@/assets/livoara-correct-routine-v2.mp4.asset.json";
import travelVideo from "@/assets/livoara-correct-travel-v2.mp4.asset.json";
import reviewerAnanya from "@/assets/reviewer-ananya.jpg";
import reviewerIsha from "@/assets/reviewer-isha.jpg";
import reviewerKavya from "@/assets/reviewer-kavya.jpg";
import reviewerMeher from "@/assets/reviewer-meher.jpg";
import reviewerNeha from "@/assets/reviewer-neha.jpg";
import reviewerRiya from "@/assets/reviewer-riya.jpg";
import reviewerSana from "@/assets/reviewer-sana.jpg";
import reviewerAashi from "@/assets/reviewer-aashi.jpg";

import { Button } from "@/components/ui/button";
import { DeliveryChecker } from "@/components/delivery-checker";
import { ReviewWidget, type SampleReview } from "@/components/review-widget";
import { getShopifyProductByHandle, type ShopifyProduct } from "@/lib/shopify";
import { useCartStore } from "@/stores/cartStore";

const benefitImages = [
  { src: pinkVanity, caption: "Illuminated mirror for an even, clear finish" },
  { src: whiteVanity, caption: "Organised sections for everyday essentials" },
  { src: referenceVanity.url, caption: "Everything visible the moment you open it" },
  { src: heroAsset.url, caption: "One compact case from dresser to suitcase" },
] as const;

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
  loader: async () => {
    const product = await getShopifyProductByHandle({ data: { handle: "livoara-makeup-led-box" } });
    return product as ShopifyProduct["node"] | null;
  },
  component: ProductPage,
});

const galleryMedia = [
  { type: "video" as const, src: organiseVideo.url, poster: pinkVanity, alt: "LIVOARA Travel Vanity shown in an everyday organising routine", className: "object-cover object-center", thumb: "object-cover object-center" },
  { type: "image" as const, src: referenceVanity.url, alt: "Pink illuminated travel vanity open with makeup essentials", className: "object-cover object-center", thumb: "object-cover object-center" },
  { type: "image" as const, src: heroAsset.url, alt: "LIVOARA Travel Vanity displayed beside beauty essentials", className: "scale-[1.6] object-cover object-[68%_52%]", thumb: "scale-[2.2] object-cover object-[68%_52%]" },
  { type: "image" as const, src: pinkVanity, alt: "Pink LIVOARA Travel Vanity open with illuminated mirror and organized compartments", className: "object-contain object-center", thumb: "object-cover object-center" },
  { type: "image" as const, src: whiteVanity, alt: "White LIVOARA Travel Vanity open in natural sunlight", className: "object-contain object-center", thumb: "object-cover object-center" },
] as const;

const productFilms = [
  { src: organiseVideo.url, poster: pinkVanity, title: "Organise with ease", copy: "Dedicated compartments bring everyday essentials into one considered place." },
  { src: routineVideo.url, poster: whiteVanity, title: "Create your light", copy: "The illuminated mirror supports your getting-ready routine wherever you set down the case." },
  { src: travelVideo.url, poster: pinkVanity, title: "Pack one beautiful case", copy: "A compact vanity format keeps the mirror and beauty essentials together while travelling." },
] as const;

const benefits = [
  "Illuminated mirror for your beauty ritual",
  "Organised sections for everyday essentials",
  "Compact format designed for travel",
  "Mirror, light and storage in one case",
] as const;

const featuredComments = [
  { initials: "RM", name: "Riya M.", city: "Pune", copy: "Vanity ka size daily makeup ke liye practical lagta hai. Mirror aur compartments ek saath hone se dressing table organised reh sakti hai.", reply: "Thank you, Riya. The all-in-one format is designed around exactly that kind of everyday routine." },
  { initials: "AS", name: "Ananya S.", city: "Bengaluru", copy: "Compact design weekend travel ke liye useful lagta hai. Essentials ek hi case mein rakhne ka idea convenient hai." },
  { initials: "NK", name: "Nisha K.", city: "Jaipur", copy: "Pink finish gifting ke liye elegant choice lagti hai. Illuminated mirror design ka thoughtful feature hai.", reply: "Thank you for noticing the details, Nisha. We wanted the case to feel useful and gift-worthy." },
  { initials: "PS", name: "Priya S.", city: "Delhi", copy: "I like how the mirror and storage are combined in one case. It looks useful for an everyday getting-ready routine." },
  { initials: "AK", name: "Ayesha K.", city: "Lucknow", copy: "Makeup, brushes aur small accessories ko ek jagah organise karne ka idea kaafi convenient hai.", reply: "Bilkul, Ayesha. Different item sizes ka fit individual products par depend karega." },
  { initials: "MT", name: "Meera T.", city: "Chennai", copy: "The structured case looks neat on a dresser and easier to carry than several loose organisers." },
  { initials: "SG", name: "Simran G.", city: "Chandigarh", copy: "Mirror light aur organised storage daily routine ko simpler bana sakte hain." },
  { initials: "RV", name: "Radhika V.", city: "Hyderabad", copy: "The compact format feels like a considered option for home as well as travel.", reply: "Thank you, Radhika. Please follow the supplied product guide and current airline rules when travelling." },
  { initials: "KB", name: "Kavya B.", city: "Kolkata", copy: "Ek hi case mein vanity setup practical lagta hai, especially jab dressing space limited ho." },
  { initials: "JP", name: "Jhanvi P.", city: "Ahmedabad", copy: "The separate spaces for beauty essentials make the inside look easy to arrange and scan." },
  { initials: "FS", name: "Farah S.", city: "Mumbai", copy: "Ready hote waqt mirror aur products ek jagah milna genuinely useful concept lagta hai.", reply: "Thank you, Farah. Light and storage together are central to the LIVOARA design." },
  { initials: "TD", name: "Tanvi D.", city: "Nagpur", copy: "The case has a clean, presentable look that could work well on a compact dressing table." },
  { initials: "PP", name: "Pooja P.", city: "Indore", copy: "Travel ke waqt makeup ko organised rakhne ke liye ye format kaafi sensible lagta hai." },
  { initials: "SR", name: "Sneha R.", city: "Kochi", copy: "I would choose this for the combination of a mirror, light and storage rather than carrying them separately.", reply: "That thoughtful combination is what we set out to create. Thank you, Sneha." },
  { initials: "HM", name: "Harleen M.", city: "Amritsar", copy: "Soft pink colour aur compact shape gifting ke liye achhe lagte hain." },
  { initials: "NB", name: "Neha B.", city: "Bhopal", copy: "Brushes, palettes aur small items ke liye dedicated space hona daily clutter ko manage kar sakta hai." },
  { initials: "DR", name: "Divya R.", city: "Surat", copy: "The full-open format makes the mirror and compartments visible together, which feels practical.", reply: "Thank you, Divya. The open view is intended to keep everyday essentials easier to see." },
  { initials: "IC", name: "Ishita C.", city: "Gurugram", copy: "A thoughtful all-in-one design for anyone who prefers a tidy getting-ready space." },
  { initials: "AP", name: "Aditi P.", city: "Noida", copy: "Mirror ke saamne products search na karne padein, ye organised setup kaafi helpful lagta hai." },
  { initials: "ZS", name: "Zoya S.", city: "Srinagar", copy: "The shape and finish make it feel more polished than carrying several separate pouches.", reply: "Thank you, Zoya. We appreciate your eye for the finish and form." },
  { initials: "MG", name: "Mansi G.", city: "Vadodara", copy: "Everyday makeup aur jewellery ko ek neat case mein rakhne ka concept achha hai." },
  { initials: "KL", name: "Keerthi L.", city: "Mysuru", copy: "The illuminated mirror looks like a useful addition when the room light is not ideal." },
  { initials: "SC", name: "Sakshi C.", city: "Patna", copy: "Dresser par bhi neat lagega aur zarurat par saath carry bhi kiya ja sakta hai.", reply: "Thank you, Sakshi. Home-to-travel versatility is an important part of the design." },
  { initials: "RN", name: "Reema N.", city: "Nashik", copy: "A simple idea, but combining the mirror and organised interior could make daily routines much easier." },
] as const;

type FeaturedComment = (typeof featuredComments)[number];

const commentWeight = (comment: FeaturedComment) =>
  comment.copy.length + ("reply" in comment && comment.reply ? comment.reply.length + 80 : 0);

const commentThreads: FeaturedComment[][] = [[], [], []];
[...featuredComments]
  .sort((a, b) => commentWeight(b) - commentWeight(a))
  .forEach((comment, index) => {
    const threadIndex = [0, 1, 2, 2, 1, 0][index % 6] ?? 0;
    commentThreads[threadIndex]?.push(comment);
  });

const trustedCustomers = [
  { image: reviewerAnanya, name: "Ananya S.", city: "Bengaluru", quote: "The illuminated mirror and organised sections make my everyday routine feel much simpler." },
  { image: reviewerRiya, name: "Riya M.", city: "Pune", quote: "Finally one case that keeps makeup, brushes and small accessories together on my dresser." },
  { image: reviewerNeha, name: "Neha B.", city: "Bhopal", quote: "Compact enough for travel and pretty enough to keep on the vanity. A thoughtful design." },
  { image: reviewerMeher, name: "Meher T.", city: "Chennai", quote: "I appreciate how the mirror and storage are combined in one beautiful case." },
  { image: reviewerKavya, name: "Kavya B.", city: "Kolkata", quote: "Great for anyone who wants a tidy getting-ready space without several pouches." },
  { image: reviewerSana, name: "Sana P.", city: "Mumbai", quote: "The pink finish is elegant and the light is genuinely useful during early mornings." },
  { image: reviewerIsha, name: "Isha C.", city: "Gurugram", quote: "It keeps my essentials organised and looks lovely on a compact dressing table." },
  { image: reviewerAashi, name: "Aashi V.", city: "Hyderabad", quote: "A sensible gift idea for anyone who likes their beauty routine to feel calm and organised." },
] as const;

const comparisonRows = [
  { icon: <SunMedium />, loose: "Separate mirror usually needed", livoara: "Built-in illuminated mirror", pouches: "No built-in light at all" },
  { icon: <LayoutGrid />, loose: "Essentials spread across surfaces", livoara: "Dedicated inner sections", pouches: "Items jumbled in one pouch" },
  { icon: <Search />, loose: "Items move around and get misplaced", livoara: "A place for every essential", pouches: "Digging through one pouch" },
  { icon: <House />, loose: "Mirror and products kept apart", livoara: "Mirror and essentials together", pouches: "No mirror, no organisation" },
  { icon: <Lightbulb />, loose: "Routine depends on room light", livoara: "Consistent light for routines", pouches: "Storage only, nothing more" },
  { icon: <Luggage />, loose: "Multiple pouches to pack", livoara: "One compact vanity case", pouches: "Hard to find things in transit" },
  { icon: <PackageCheck />, loose: "Many pieces carried separately", livoara: "Carried as a single case", pouches: "Several pouches to track" },
  { icon: <Sparkles />, loose: "Surface needs resetting after use", livoara: "Closes back into one case", pouches: "Gather and repack each time" },
];

const routineSteps = [
  { icon: <PackageCheck />, stage: "Day one", title: "Unbox and arrange", copy: "Open the case, place your everyday essentials into the organised sections, and set the mirror where you get ready." },
  { icon: <SunMedium />, stage: "Every day", title: "Light where you need it", copy: "Use the illuminated mirror for your daily routine at your dresser, in a hostel room, or wherever the day starts." },
  { icon: <Luggage />, stage: "On the go", title: "Pack one beautiful case", copy: "When you travel, the mirror and essentials stay together in a single compact case instead of several pouches." },
] as const;

const customerFaqs = [
  { q: "What makes the LIVOARA Travel Vanity different?", a: "It combines an illuminated mirror with organised storage in one compact case, so your everyday essentials stay together at home or while travelling." },
  { q: "Is the mirror light rechargeable?", a: "Please check the product label and the guide supplied in the box for power details and charging instructions." },
  { q: "Can it hold a full makeup collection?", a: "The interior is designed for everyday beauty essentials. How much it holds depends on the size and shape of each item." },
  { q: "Is this suitable for travel?", a: "The compact case format is designed to be travel-friendly. Always check the product label and current airline rules before flying." },
  { q: "What is your return policy?", a: "Eligible return or exchange requests must be emailed to hello@livoara.in within 7 calendar days of delivery, with a clear continuous unboxing video." },
  { q: "When will my order arrive?", a: "Delivery timelines and serviceability are shown at checkout once you enter your address." },
] as const;

function formatPrice(amount: string) {
  const value = parseFloat(amount);
  return `₹${value.toLocaleString("en-IN")}`;
}

function parsePieces(title: string) {
  const match = /^\d+/.exec(title);
  return match ? parseInt(match[0], 10) : 1;
}

function ProductPage() {
  const product = Route.useLoaderData() as ShopifyProduct["node"] | null;
  const [quantity, setQuantity] = useState(1);
  const [selected, setSelected] = useState(0);
  const [zoomPoint, setZoomPoint] = useState<{ x: number; y: number } | null>(null);
  const [offerSeconds, setOfferSeconds] = useState((2 * 60 * 60) + (50 * 60) + 18);
  const [showSticky, setShowSticky] = useState(false);
  const [customerIndex, setCustomerIndex] = useState(0);
  const activeCustomer = trustedCustomers[customerIndex] ?? trustedCustomers[0];

  const addItem = useCartStore((state) => state.addItem);
  const openCart = useCartStore((state) => state.openCart);
  const getCheckoutUrl = useCartStore((state) => state.getCheckoutUrl);
  const isLoading = useCartStore((state) => state.isLoading);

  const variants = useMemo(() => {
    const list = product?.variants?.edges?.map((edge) => edge.node) ?? [];
    return list.sort((a, b) => parsePieces(a.title) - parsePieces(b.title));
  }, [product]);

  const [selectedVariantId, setSelectedVariantId] = useState(variants[0]?.id ?? "");

  const selectedVariant = useMemo(
    () => variants.find((v) => v.id === selectedVariantId) ?? variants[0],
    [variants, selectedVariantId]
  );

  useEffect(() => {
    if (variants.length > 0 && !selectedVariantId) {
      setSelectedVariantId(variants[0]?.id ?? "");
    }
  }, [variants, selectedVariantId]);

  const unitPriceAmount = useMemo(() => {
    const unitVariant = variants.find((v) => parsePieces(v.title) === 1);
    return parseFloat(unitVariant?.price.amount ?? selectedVariant?.price.amount ?? "0");
  }, [variants, selectedVariant]);

  const offerDetails = useMemo(() => {
    if (!selectedVariant) return null;
    const pieces = parsePieces(selectedVariant.title);
    const price = parseFloat(selectedVariant.price.amount);
    const saving = pieces * unitPriceAmount - price;
    const badge = pieces === 2 ? "Popular" : pieces === 3 ? "Best value" : undefined;
    const detail = saving > 0 ? `Save ₹${saving.toLocaleString("en-IN")}` : "Single vanity";
    const label = pieces === 1 ? "1 piece" : `${pieces} pieces`;
    return { pieces, price, saving, badge, detail, label };
  }, [selectedVariant, unitPriceAmount]);

  const selectedMedia = galleryMedia[selected] ?? galleryMedia[0];

  const timerHours = Math.floor(offerSeconds / 3600);
  const timerMinutes = Math.floor((offerSeconds % 3600) / 60);
  const timerSeconds = offerSeconds % 60;

  const handleImagePointerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (event.pointerType !== "mouse" || selectedMedia.type !== "image") return;
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

  const handleAddToCart = async () => {
    if (!product || !selectedVariant) return;
    await addItem({
      product: { node: product },
      variantId: selectedVariant.id,
      variantTitle: selectedVariant.title,
      price: selectedVariant.price,
      quantity,
      selectedOptions: selectedVariant.selectedOptions,
    });
    toast.success("Added to bag");
    openCart();
  };

  const handleBuyNow = async () => {
    if (!product || !selectedVariant) return;
    await addItem({
      product: { node: product },
      variantId: selectedVariant.id,
      variantTitle: selectedVariant.title,
      price: selectedVariant.price,
      quantity,
      selectedOptions: selectedVariant.selectedOptions,
    });
    const checkoutUrl = getCheckoutUrl();
    if (checkoutUrl) {
      window.open(checkoutUrl, "_blank");
    } else {
      toast.error("Checkout link is not ready yet.");
    }
  };

  if (!product || !selectedVariant || !offerDetails) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center px-4 text-center">
        <div>
          <p className="font-display text-2xl">Product details are loading…</p>
          <p className="mt-2 text-sm text-muted-foreground">Please refresh if this takes too long.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="page-reveal max-w-full overflow-x-clip pb-20 lg:pb-0">
      <div className="border-b border-border bg-muted/45 px-5 py-3 text-center text-[10px] uppercase tracking-[0.18em] text-muted-foreground sm:text-xs">
        Home / The LIVOARA Travel Vanity
      </div>


      <section className="mx-auto grid max-w-[1380px] gap-7 px-4 py-5 sm:px-7 lg:grid-cols-[1.04fr_.96fr] lg:items-start lg:gap-10 lg:px-10 lg:py-9">
        <div className="lg:sticky lg:top-24">
          <div className="relative">
            <div className={`group relative aspect-square overflow-hidden border border-border bg-secondary ${selectedMedia.type === "image" ? "cursor-crosshair" : "cursor-default"}`} onPointerEnter={handleImagePointerMove} onPointerMove={handleImagePointerMove} onPointerLeave={() => setZoomPoint(null)}>
              {selectedMedia.type === "video" ? (
                <video src={selectedMedia.src} poster={selectedMedia.poster} aria-label={selectedMedia.alt} className={`h-full w-full ${selectedMedia.className}`} autoPlay muted loop playsInline controls preload="metadata" />
              ) : (
                <img src={selectedMedia.src} alt={selectedMedia.alt} className={`h-full w-full transition-opacity duration-300 ${selectedMedia.className}`} />
              )}
              <span className="absolute left-3 top-3 bg-background/90 px-2.5 py-1.5 text-[9px] font-medium uppercase tracking-[0.14em] backdrop-blur">{selectedMedia.type === "video" ? "Product film" : "Gallery"} {selected + 1} / {galleryMedia.length}</span>
              {zoomPoint && selectedMedia.type === "image" && <span className="pointer-events-none absolute hidden size-32 -translate-x-1/2 -translate-y-1/2 border border-primary/50 bg-background/20 backdrop-brightness-110 lg:block" style={{ left: `${zoomPoint.x}%`, top: `${zoomPoint.y}%` }} aria-hidden="true" />}
            </div>
            {zoomPoint && selectedMedia.type === "image" && <div className="pointer-events-none absolute left-[calc(100%+1rem)] top-0 z-40 hidden aspect-square w-[min(42rem,48vw)] overflow-hidden border border-border bg-background shadow-2xl lg:block" aria-hidden="true"><img src={selectedMedia.src} alt="" className="h-full w-full scale-[2.35] object-cover object-center" style={{ transformOrigin: `${zoomPoint.x}% ${zoomPoint.y}%` }} /></div>}
            <Button variant="ghost" size="icon" aria-label="Previous media" onClick={() => setSelected((selected + galleryMedia.length - 1) % galleryMedia.length)} className="absolute left-2 top-1/2 z-10 size-9 -translate-y-1/2 rounded-full bg-background/85 shadow-sm backdrop-blur hover:bg-background"><ChevronLeft className="size-5" /></Button>
            <Button variant="ghost" size="icon" aria-label="Next media" onClick={() => setSelected((selected + 1) % galleryMedia.length)} className="absolute right-2 top-1/2 z-10 size-9 -translate-y-1/2 rounded-full bg-background/85 shadow-sm backdrop-blur hover:bg-background"><ChevronRight className="size-5" /></Button>
          </div>
          <div className="mt-2 grid grid-cols-5 gap-1.5 sm:gap-2">
            {galleryMedia.map((media, index) => <Button variant="ghost" key={media.src} onPointerEnter={(event) => { if (event.pointerType === "mouse") setSelected(index); }} onFocus={() => setSelected(index)} onClick={() => setSelected(index)} className={`relative aspect-square h-auto overflow-hidden border bg-secondary p-0 ${selected === index ? "border-accent ring-1 ring-accent" : "border-border opacity-70 hover:opacity-100"}`} aria-label={`View product ${media.type} ${index + 1}`} aria-pressed={selected === index}><img src={media.type === "video" ? media.poster : media.src} alt="" className={`h-full w-full ${media.thumb}`} />{media.type === "video" && <span className="absolute inset-0 grid place-items-center bg-primary/15"><CirclePlay className="size-6 fill-background/80 text-primary" /></span>}</Button>)}
          </div>
          <p className="mt-2 text-center text-[11px] text-muted-foreground"><span className="hidden lg:inline">Hover to preview media. Move over a product image to zoom.</span><span className="lg:hidden">Tap to switch between films and photos.</span></p>
        </div>

        <div>
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 border-b border-border pb-3 text-xs"><MessageCircleMore className="size-4 text-accent" aria-hidden="true" /><a href="#reviews" className="font-semibold underline decoration-border underline-offset-4">24 illustrative customer conversations</a><span className="text-muted-foreground">Sample feedback · verified reviews added after collection</span></div>
          <p className="mt-4 text-[11px] uppercase tracking-[0.2em] text-muted-foreground">LIVOARA signature beauty companion</p>
          <h1 className="mt-2 font-display text-4xl leading-tight sm:text-5xl">{product.title}</h1>
          <p className="mt-3 max-w-xl text-sm leading-6 text-muted-foreground sm:text-base">{product.description || "A luminous vanity, thoughtful organizer, and travel companion—beautifully designed as one."}</p>

          <div className="mt-4 border border-accent bg-secondary/45 p-3.5 sm:p-4">
            <div className="mb-3 flex items-start justify-between gap-3 border-b border-accent/35 pb-3"><div><p className="text-[10px] font-bold uppercase tracking-[0.18em] text-accent">Current bundle offer</p><p className="mt-1 font-display text-2xl">Save more when you bundle.</p></div><span className="shrink-0 bg-accent px-2.5 py-2 text-[9px] font-bold uppercase tracking-[0.1em] text-accent-foreground">Save up to ₹698</span></div>
            <div className="mb-2 flex items-center justify-between gap-3"><p className="text-[10px] font-medium uppercase tracking-[0.14em]">Choose your offer</p><span className="bg-background px-2 py-1 text-[9px] font-semibold uppercase tracking-[0.1em] text-accent">Bundle pricing</span></div>
            <div className="grid gap-2" role="group" aria-label="Choose product offer">
              {variants.map((variant) => {
                const pieces = parsePieces(variant.title);
                const saving = pieces * unitPriceAmount - parseFloat(variant.price.amount);
                const badge = pieces === 2 ? "Popular" : pieces === 3 ? "Best value" : undefined;
                const detail = saving > 0 ? `Save ₹${saving.toLocaleString("en-IN")}` : "Single vanity";
                const label = pieces === 1 ? "1 piece" : `${pieces} pieces`;
                const isSelected = selectedVariant.id === variant.id;
                return (
                  <Button
                    key={variant.id}
                    type="button"
                    variant="ghost"
                    aria-pressed={isSelected}
                    disabled={!variant.availableForSale}
                    onClick={() => setSelectedVariantId(variant.id)}
                    className={`h-auto min-h-16 w-full justify-between border px-3 py-3 text-left sm:px-4 ${isSelected ? "border-accent bg-background ring-1 ring-accent" : "border-border bg-background/75 hover:bg-background"}`}
                  >
                    <span className="flex min-w-0 items-center gap-3">
                      <span className={`grid size-5 shrink-0 place-items-center rounded-full border ${isSelected ? "border-accent" : "border-border"}`} aria-hidden="true">{isSelected && <span className="size-2.5 rounded-full bg-accent" />}</span>
                      <span>
                        <span className="flex flex-wrap items-center gap-2"><strong className="text-sm">{label}</strong>{badge && <span className="bg-accent px-2 py-1 text-[9px] font-bold uppercase tracking-[0.08em] text-accent-foreground">{badge}</span>}</span>
                        <span className="mt-0.5 block text-[11px] font-normal text-muted-foreground">{detail}</span>
                      </span>
                    </span>
                    <span className="shrink-0 text-right">
                      {variant.compareAtPrice?.amount && parseFloat(variant.compareAtPrice.amount) > parseFloat(variant.price.amount) && (
                        <span className="mr-2 text-xs text-muted-foreground line-through">{formatPrice(variant.compareAtPrice.amount)}</span>
                      )}
                      <strong className="font-display text-xl">{formatPrice(variant.price.amount)}</strong>
                    </span>
                  </Button>
                );
              })}
            </div>
            <div className="mt-2 flex items-center gap-2 bg-muted/45 px-3 py-2 text-[11px]"><span className="shrink-0 text-accent">₹</span><span>Selected: <strong>{offerDetails.label} for {formatPrice(selectedVariant.price.amount)}</strong> · Inclusive of all taxes</span></div>
          </div>

          <ul className="mt-4 grid grid-cols-2 gap-2">{benefits.map((benefit) => <li key={benefit} className="flex items-start gap-2.5 border border-border bg-secondary/50 px-3 py-3 text-xs font-semibold leading-4 sm:text-sm sm:leading-5"><span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-accent text-accent-foreground"><Check className="size-3" /></span>{benefit}</li>)}</ul>
          <div className="mt-5 flex items-center justify-between gap-4"><span className="text-[11px] uppercase tracking-[0.16em]">Quantity</span><div className="grid grid-cols-3 border border-border"><Button variant="icon" size="icon" aria-label="Decrease quantity" onClick={() => setQuantity(Math.max(1, quantity - 1))}><Minus className="size-4" /></Button><span className="grid min-w-11 place-items-center text-sm" aria-live="polite">{quantity}</span><Button variant="icon" size="icon" aria-label="Increase quantity" onClick={() => setQuantity(quantity + 1)}><Plus className="size-4" /></Button></div></div>
          <div className="mt-4 border border-border bg-muted/45 p-3.5" role="timer" aria-live="off" aria-label={`${timerHours} hours, ${timerMinutes} minutes, ${timerSeconds} seconds remaining`}>
            <div className="flex items-center justify-between gap-3">
              <div><p className="text-[10px] font-bold uppercase tracking-[0.16em] text-accent">Current offer</p><p className="mt-0.5 text-[11px] text-muted-foreground">Bundle pricing ends in</p></div>
              <div className="flex shrink-0 gap-1">{[[timerHours, "hrs"], [timerMinutes, "min"], [timerSeconds, "sec"]].map(([value, label]) => <span key={label as string} className="grid min-w-11 place-items-center bg-primary px-1.5 py-1.5 text-primary-foreground"><strong className="font-display text-lg leading-none tabular-nums">{String(value as number).padStart(2, "0")}</strong><span className="mt-0.5 text-[8px] uppercase tracking-[0.1em] text-primary-foreground/70">{label as string}</span></span>)}</div>
            </div>
          </div>
          <Button id="main-add-to-cart" className="mt-2.5 w-full text-xs uppercase tracking-[0.12em]" size="lg" disabled={!selectedVariant.availableForSale || isLoading} onClick={handleAddToCart}>Add to Cart · {formatPrice(selectedVariant.price.amount)}</Button>
          <Button className="mt-2 w-full text-xs uppercase tracking-[0.12em]" size="lg" variant="outline" disabled={!selectedVariant.availableForSale || isLoading} onClick={handleBuyNow}>Buy Now</Button>
          <div className="mt-3 bg-primary p-4 text-primary-foreground">
            <p className="text-center text-[10px] font-bold uppercase tracking-[0.18em] text-primary-foreground/70">LIVOARA shop promise</p>
            <div className="mt-3 grid grid-cols-2 gap-x-3 gap-y-3.5">
              <Promise icon={<Truck />} title="Fast Shipping" sub="Timeline shown at checkout" />
              <Promise icon={<RotateCcw />} title="Easy Returns" sub="7-day request window" />
              <Promise icon={<CreditCard />} title="Secure Payments" sub="Trusted payment options" />
              <Promise icon={<PackageCheck />} title="Careful Delivery" sub="Tracking where available" />
            </div>
          </div>
          <p className="mt-2 flex items-center justify-center gap-2 text-center text-[10px] text-muted-foreground"><LockKeyhole className="size-3 shrink-0 text-accent" />UPI · RuPay · Visa · Mastercard · G Pay · PhonePe · Paytm · COD where available</p>
          <div className="mt-4"><DeliveryChecker /></div>
          <div className="mt-4 divide-y divide-border border-y border-border">
            <InfoRow title="Product Details" open><div className="space-y-4"><p>{product.description || "The LIVOARA Travel Vanity combines an illuminated mirror with organised compartments in a compact case designed to keep everyday beauty essentials together at home or while travelling. Product colour and finish may vary slightly because of screen settings, photography, manufacturing tolerances, or production batches."}</p><div className="grid grid-cols-2 gap-2">{benefitImages.map((item) => <figure key={item.caption} className="overflow-hidden border border-border bg-background"><img src={item.src} alt={item.caption} className="aspect-[4/3] w-full object-cover" loading="lazy" /><figcaption className="px-2.5 py-2 text-[11px] leading-4 text-foreground">{item.caption}</figcaption></figure>)}</div></div></InfoRow>
            <InfoRow title="Specifications"><dl className="grid gap-4 sm:grid-cols-2"><Spec term="Format" value="Portable vanity case" /><Spec term="Storage" value="Organised interior compartments" /><Spec term="Mirror" value="Integrated illuminated mirror" /><Spec term="Care & operation" value="Follow the label and guide supplied with the product" /></dl></InfoRow>
            <InfoRow title="Shipping & Returns"><p>Delivery estimates, serviceability, and any shipping charge are shown at checkout. Eligible return, refund, or exchange requests must be emailed to hello@livoara.in within 7 calendar days of delivery. A clear, continuous unboxing video is mandatory.</p></InfoRow>
            <InfoRow title="What's Included"><p>The package contains the LIVOARA vanity and the components supplied for its included features. Please check the product, accessories, and enclosed instructions during your continuous unboxing recording.</p></InfoRow>
            <InfoRow title="Product Guidance"><div className="space-y-4"><p><strong className="text-foreground">Light:</strong> Use the controls and power instructions supplied with your vanity.</p><p><strong className="text-foreground">Capacity:</strong> The organised interior is intended for everyday beauty essentials; fit depends on each item.</p><p><strong className="text-foreground">Travel:</strong> Check the product label and current airline rules before flying.</p></div></InfoRow>
          </div>
        </div>
      </section>

      <section id="customer-stories" className="border-b border-border bg-background">
        <div className="mx-auto max-w-[1380px] px-6 py-11 sm:px-10 sm:py-14 lg:px-12">
          <div className="text-center">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Real routines</p>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl">Trusted by Thousands of Customers</h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-muted-foreground">Write your own review below. Sample cards are shown for layout preview until verified customer reviews come in.</p>
          </div>
          <div className="mt-8"><ReviewWidget samples={sampleReviews} formId="product-review-form" /></div>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="mx-auto max-w-[1380px] px-6 py-11 sm:px-10 sm:py-14 lg:px-12">
          <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end"><div><p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">See it in your routine</p><h2 className="mt-2 font-display text-4xl sm:text-5xl">Designed to be used, beautifully.</h2></div><p className="max-w-md text-sm leading-6 text-muted-foreground">Three short LIVOARA films show organisation, light, and travel in one compact vanity format.</p></div>
          <div className="mt-7 grid gap-4 sm:grid-cols-3">{productFilms.map((film) => <ProductFilm key={film.title} {...film} />)}</div>
        </div>
      </section>
      <section className="mx-auto max-w-5xl px-6 py-11 sm:py-14">
        <div className="text-center"><p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">A clearer comparison</p><h2 className="mt-4 font-display text-4xl sm:text-5xl">Why choose LIVOARA?</h2><p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-muted-foreground">A practical comparison of the product format and the everyday problem it is designed to solve.</p></div>
        <div className="mt-7 grid grid-cols-3 items-stretch gap-1.5 sm:gap-4">
          <div className="flex flex-col overflow-hidden rounded-2xl border border-border bg-background transition duration-300 hover:-translate-y-1 hover:border-accent/60 hover:shadow-lg">
            <div className="px-2 pb-3 pt-4 text-center sm:px-4 sm:pt-6"><div className="mx-auto aspect-square w-16 overflow-hidden rounded-2xl border border-border bg-muted/50 sm:w-28"><img src={problemScattered} alt="Makeup essentials scattered loosely across a vanity" className="h-full w-full object-cover" loading="lazy" /></div><p className="mt-2.5 text-[11px] font-semibold leading-4 sm:text-sm">Loose on a vanity</p></div>
            {comparisonRows.map((row) => (
              <div key={row.loose} className="flex flex-1 items-center gap-1.5 border-t border-border px-2 py-2.5 text-[10px] leading-4 text-muted-foreground sm:gap-2.5 sm:px-3.5 sm:py-3.5 sm:text-xs sm:leading-5"><span className="grid size-5 shrink-0 place-items-center rounded-full bg-muted text-muted-foreground sm:size-7 [&>svg]:size-2.5 sm:[&>svg]:size-3.5">{row.icon}</span><span className="min-w-0 hyphens-auto break-words">{row.loose}</span></div>
            ))}
          </div>
          <div className="z-10 -my-2 flex flex-col overflow-hidden rounded-2xl border-2 border-accent bg-secondary shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl">
            <div className="px-2 pb-3 pt-4 text-center sm:px-4 sm:pt-6"><div className="mx-auto aspect-square w-20 overflow-hidden rounded-2xl border border-accent/50 bg-background sm:w-32"><img src={pinkVanity} alt="LIVOARA Travel Vanity open with illuminated mirror" className="h-full w-full object-cover" loading="lazy" /></div><p className="mt-2.5 font-display text-base sm:text-2xl">LIVOARA</p></div>
            {comparisonRows.map((row) => (
              <div key={row.livoara} className="flex flex-1 items-center gap-1.5 border-t border-accent/30 bg-secondary/70 px-2 py-2.5 text-[10px] font-medium leading-4 sm:gap-2.5 sm:px-3.5 sm:py-3.5 sm:text-xs sm:leading-5"><span className="grid size-5 shrink-0 place-items-center rounded-full bg-accent text-accent-foreground sm:size-7 [&>svg]:size-2.5 sm:[&>svg]:size-3.5"><Check /></span><span className="min-w-0 hyphens-auto break-words">{row.livoara}</span></div>
            ))}
          </div>
          <div className="flex flex-col overflow-hidden rounded-2xl border border-border bg-background transition duration-300 hover:-translate-y-1 hover:border-accent/60 hover:shadow-lg">
            <div className="px-2 pb-3 pt-4 text-center sm:px-4 sm:pt-6"><div className="mx-auto aspect-square w-16 overflow-hidden rounded-2xl border border-border bg-muted/50 sm:w-28"><img src={problemPouches} alt="Multiple separate travel pouches for beauty essentials" className="h-full w-full object-cover" loading="lazy" /></div><p className="mt-2.5 text-[11px] font-semibold leading-4 sm:text-sm">Separate pouches</p></div>
            {comparisonRows.map((row) => (
              <div key={row.pouches} className="flex flex-1 items-center gap-1.5 border-t border-border px-2 py-2.5 text-[10px] leading-4 text-muted-foreground sm:gap-2.5 sm:px-3.5 sm:py-3.5 sm:text-xs sm:leading-5"><span className="grid size-5 shrink-0 place-items-center rounded-full bg-muted text-muted-foreground sm:size-7 [&>svg]:size-2.5 sm:[&>svg]:size-3.5">{row.icon}</span><span className="min-w-0 hyphens-auto break-words">{row.pouches}</span></div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-secondary/55">
        <div className="mx-auto max-w-4xl px-6 py-11 sm:px-10 sm:py-14">
          <div className="text-center">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Made for real routines</p>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl">How LIVOARA fits your routine</h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-muted-foreground">One compact case, designed to stay useful from the first unboxing onwards.</p>
          </div>
          <ol className="mt-9 space-y-8 border-l-2 border-border pl-7 sm:pl-9">
            {routineSteps.map((step) => (
              <li key={step.title} className="relative">
                <span className="absolute -left-[2.6rem] top-0 grid size-8 place-items-center rounded-full border-2 border-border bg-background text-accent sm:-left-[3.1rem] [&>svg]:size-4" aria-hidden="true">{step.icon}</span>
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-accent">{step.stage}</p>
                <h3 className="mt-1 font-display text-2xl sm:text-3xl">{step.title}</h3>
                <p className="mt-2 max-w-xl text-sm leading-6 text-muted-foreground">{step.copy}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="reviews" className="border-b border-border bg-secondary/55">
        <div className="mx-auto max-w-[1380px] px-6 py-11 sm:px-10 sm:py-14 lg:px-12">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs uppercase tracking-[0.2em] text-accent">Customer comments</p>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl">What India is saying</h2>
            <p className="mt-4 text-sm leading-6 text-muted-foreground">Illustrative sample comments for layout preview. Verified customer feedback will replace these after collection.</p>
          </div>
          <div className="-mx-6 mt-7 flex snap-x snap-mandatory items-start gap-4 overflow-x-auto px-6 pb-5 sm:-mx-10 sm:px-10 lg:mx-0 lg:grid lg:grid-cols-3 lg:overflow-visible lg:px-0" role="feed" aria-label="Illustrative customer discussion">
            {commentThreads.map((thread, threadIndex) => (
              <div key={threadIndex} className="w-[86vw] max-w-[22rem] shrink-0 snap-start border border-border bg-background px-3 py-4 sm:w-[22rem] lg:w-auto lg:max-w-none" aria-label={`Comment thread ${threadIndex + 1}`}>
                <div className="mb-4 flex items-center justify-between border-b border-border pb-3"><span className="text-xs font-bold">Comments</span><span className="text-[10px] text-muted-foreground">Thread {threadIndex + 1}</span></div>
                <div className="space-y-4">
                  {thread.map((comment) => (
                    <article key={comment.name} className="grid grid-cols-[2rem_minmax(0,1fr)] items-start gap-2">
                      <span className="grid size-8 shrink-0 place-items-center rounded-full bg-accent/25 text-[9px] font-bold text-foreground" aria-hidden="true">{comment.initials}</span>
                      <div className="min-w-0">
                        <div className="rounded-xl rounded-tl-sm bg-muted/75 px-3 py-2.5">
                          <h3 className="text-xs font-bold">{comment.name}</h3>
                          <p className="mt-1 text-xs leading-5 text-foreground/85">{comment.copy}</p>
                        </div>
                        <p className="mt-1 flex flex-wrap items-center gap-x-2 px-2 text-[10px] font-semibold text-muted-foreground"><span>{comment.city}</span><span className="text-accent">Like</span><span>Reply</span><span>Sample</span></p>
                        {"reply" in comment && comment.reply && (
                          <div className="mt-2.5 grid grid-cols-[1.75rem_minmax(0,1fr)] items-start gap-2 pl-1">
                            <span className="grid size-7 shrink-0 place-items-center rounded-full bg-primary text-[8px] font-bold text-primary-foreground" aria-hidden="true">L</span>
                            <div className="min-w-0">
                              <div className="rounded-xl rounded-tl-sm bg-secondary/70 px-3 py-2.5"><h4 className="text-[11px] font-bold">LIVOARA <span className="font-normal text-accent">Author</span></h4><p className="mt-1 text-[11px] leading-4 text-muted-foreground">{comment.reply}</p></div>
                              <p className="mt-1 px-2 text-[10px] font-semibold text-muted-foreground">Like <span aria-hidden="true">·</span> Reply</p>
                            </div>
                          </div>
                        )}
                      </div>
                    </article>
                  ))}
                </div>
                <div className="mt-4 rounded-full border border-border px-3 py-2 text-[10px] text-muted-foreground">Write a comment…</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="customer-faqs" className="border-b border-border bg-background">
        <div className="mx-auto max-w-3xl px-6 py-11 sm:px-10 sm:py-14 lg:px-12">
          <div className="text-center">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Common questions</p>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl">What Customers Ask Most</h2>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-muted-foreground">Quick, honest answers about the LIVOARA Travel Vanity.</p>
          </div>
          <div className="mt-9 divide-y divide-border border-y border-border">
            {customerFaqs.map((faq) => (
              <InfoRow key={faq.q} title={faq.q}>
                <p>{faq.a}</p>
              </InfoRow>
            ))}
          </div>
        </div>
      </section>

      <div className={`fixed inset-x-0 bottom-0 z-50 border-t border-border bg-background/95 p-3 backdrop-blur transition-transform duration-300 lg:hidden ${showSticky ? "translate-y-0" : "translate-y-full"}`}>
        <div className="flex items-center gap-3">
          <div className="min-w-0"><p className="truncate text-xs font-semibold">{product.title}</p><p className="text-[11px] text-muted-foreground">{offerDetails.label} · {formatPrice(selectedVariant.price.amount)}</p></div>
          <Button className="ml-auto shrink-0 text-[11px] uppercase tracking-[0.12em]" disabled={!selectedVariant.availableForSale || isLoading} onClick={handleAddToCart}>Add to Cart</Button>
        </div>
      </div>
    </div>
  );
}

function InfoRow({ title, children, open = false }: { title: string; children: ReactNode; open?: boolean }) {
  return <details className="group py-5" open={open}><summary className="flex cursor-pointer list-none items-center justify-between font-medium"><span>{title}</span><ChevronDown className="size-4 transition-transform group-open:rotate-180" /></summary><div className="max-w-2xl pt-4 text-sm leading-7 text-muted-foreground">{children}</div></details>;
}

function Spec({ term, value }: { term: string; value: string }) { return <div><dt className="font-medium text-foreground">{term}</dt><dd>{value}</dd></div>; }

function Promise({ icon, title, sub }: { icon: ReactNode; title: string; sub: string }) { return <div className="flex items-start gap-2.5"><span className="mt-0.5 shrink-0 text-primary-foreground/80 [&>svg]:size-5">{icon}</span><span className="min-w-0"><strong className="block text-xs font-bold leading-4">{title}</strong><span className="mt-0.5 block text-[10px] leading-3.5 text-primary-foreground/70">{sub}</span></span></div>; }

function ProductFilm({ src, poster, title, copy }: { src: string; poster: string; title: string; copy: string }) { return <article className="overflow-hidden border border-border bg-background"><video src={src} poster={poster} className="aspect-[4/5] w-full object-cover" autoPlay muted loop playsInline controls preload="metadata" aria-label={`${title} product film`} /><div className="p-4"><h3 className="font-display text-2xl">{title}</h3><p className="mt-1.5 text-xs leading-5 text-muted-foreground">{copy}</p></div></article>; }
