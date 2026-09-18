import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Loader2, Star } from "lucide-react";
import { useServerFn } from "@tanstack/react-start";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { listApprovedReviews, submitReview, type PublicReview } from "@/lib/reviews.functions";

export type SampleReview = {
  image?: string;
  name: string;
  city: string;
  quote: string;
};

function Stars({ rating, className = "size-3.5" }: { rating: number | null; className?: string }) {
  return (
    <div className="flex gap-0.5" aria-label={rating ? `${rating} out of 5 stars` : "Rating pending verification"}>
      {Array.from({ length: 5 }).map((_, index) => (
        <Star
          key={index}
          className={`${className} ${rating && index < rating ? "fill-accent text-accent" : "fill-muted-foreground/15 text-muted-foreground/30"}`}
        />
      ))}
    </div>
  );
}

export function ReviewWidget({ samples, formId = "review-form" }: { samples: readonly SampleReview[]; formId?: string }) {
  const fetchReviews = useServerFn(listApprovedReviews);
  const sendReview = useServerFn(submitReview);
  const scroller = useRef<HTMLDivElement>(null);

  const [reviews, setReviews] = useState<PublicReview[]>([]);
  const [loading, setLoading] = useState(true);
  const [sending, setSending] = useState(false);
  const [formOpen, setFormOpen] = useState(false);
  const [rating, setRating] = useState(5);
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [body, setBody] = useState("");

  const load = () => {
    setLoading(true);
    fetchReviews()
      .then((data) => setReviews(data ?? []))
      .catch(() => setReviews([]))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const scrollBy = (direction: 1 | -1) => {
    const node = scroller.current;
    if (!node) return;
    node.scrollBy({ left: direction * Math.min(node.clientWidth * 0.85, 420), behavior: "smooth" });
  };

  const average = reviews.length
    ? Math.round((reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length) * 10) / 10
    : null;

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setSending(true);
    try {
      await sendReview({ data: { name, city, rating, body } });
      toast.success("Thank you! Your review was sent for approval.");
      setName("");
      setCity("");
      setBody("");
      setRating(5);
      setFormOpen(false);
      load();
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Please try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3 text-xs text-muted-foreground">
          <Stars rating={average ? Math.round(average) : null} className="size-4" />
          <span>
            {average ? `${average} average from ${reviews.length} customer review${reviews.length === 1 ? "" : "s"}` : "Verified ratings added after collection"}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" onClick={() => setFormOpen(!formOpen)} aria-expanded={formOpen} aria-controls={formId}>
            {formOpen ? "Close" : "Write a review"}
          </Button>
          <Button variant="icon" size="icon" aria-label="Scroll reviews left" onClick={() => scrollBy(-1)} className="rounded-full border border-border">
            <ChevronLeft className="size-4" />
          </Button>
          <Button variant="icon" size="icon" aria-label="Scroll reviews right" onClick={() => scrollBy(1)} className="rounded-full border border-border">
            <ChevronRight className="size-4" />
          </Button>
        </div>
      </div>

      {formOpen && (
        <form id={formId} onSubmit={handleSubmit} className="mt-5 border border-border bg-background p-4 sm:p-5">
          <p className="text-xs uppercase tracking-[0.16em] text-accent">Share your experience</p>
          <div className="mt-3 grid gap-3 sm:grid-cols-2">
            <label className="text-xs">
              <span className="font-medium">Your name</span>
              <input value={name} onChange={(event) => setName(event.target.value)} required maxLength={60} className="mt-1 w-full border border-border bg-background px-3 py-2 text-sm outline-none focus:border-accent" placeholder="e.g. Ananya S." />
            </label>
            <label className="text-xs">
              <span className="font-medium">City (optional)</span>
              <input value={city} onChange={(event) => setCity(event.target.value)} maxLength={60} className="mt-1 w-full border border-border bg-background px-3 py-2 text-sm outline-none focus:border-accent" placeholder="e.g. Pune" />
            </label>
          </div>
          <fieldset className="mt-3">
            <legend className="text-xs font-medium">Your rating</legend>
            <div className="mt-1.5 flex gap-1">
              {[1, 2, 3, 4, 5].map((value) => (
                <button key={value} type="button" onClick={() => setRating(value)} aria-label={`${value} star${value === 1 ? "" : "s"}`} aria-pressed={rating === value} className="p-1">
                  <Star className={`size-6 ${value <= rating ? "fill-accent text-accent" : "fill-muted-foreground/15 text-muted-foreground/40"}`} />
                </button>
              ))}
            </div>
          </fieldset>
          <label className="mt-3 block text-xs">
            <span className="font-medium">Your review</span>
            <textarea value={body} onChange={(event) => setBody(event.target.value)} required minLength={10} maxLength={1200} rows={4} className="mt-1 w-full border border-border bg-background px-3 py-2 text-sm outline-none focus:border-accent" placeholder="Tell other customers how you use your LIVOARA vanity." />
          </label>
          <div className="mt-3 flex flex-wrap items-center gap-3">
            <Button type="submit" disabled={sending}>{sending ? <Loader2 className="size-4 animate-spin" /> : "Submit review"}</Button>
            <p className="text-[11px] text-muted-foreground">Reviews appear on the site once our team approves them.</p>
          </div>
        </form>
      )}

      <div ref={scroller} className="-mx-6 mt-6 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-4 sm:-mx-10 sm:px-10 lg:mx-0 lg:px-0">
        {loading && (
          <div className="flex w-full items-center justify-center py-8 text-muted-foreground"><Loader2 className="size-5 animate-spin" /></div>
        )}
        {!loading && reviews.map((review) => (
          <article key={review.id} className="w-[78vw] max-w-[20rem] shrink-0 snap-start rounded-2xl border border-border bg-background p-4 sm:w-[20rem]">
            <div className="flex items-center gap-3">
              <span className="grid size-11 shrink-0 place-items-center rounded-full bg-accent/20 text-xs font-bold">{review.name.slice(0, 2).toUpperCase()}</span>
              <div className="min-w-0">
                <p className="truncate text-xs font-bold">{review.name}</p>
                {review.city && <p className="truncate text-[11px] text-muted-foreground">{review.city}</p>}
              </div>
            </div>
            <div className="mt-3"><Stars rating={review.rating} /></div>
            <blockquote className="mt-3 text-sm leading-6 text-foreground/85">{review.body}</blockquote>
            <p className="mt-3 border-t border-border pt-2.5 text-[10px] uppercase tracking-[0.12em] text-accent">Customer review</p>
          </article>
        ))}
        {!loading && samples.map((sample) => (
          <article key={sample.name} className="w-[78vw] max-w-[20rem] shrink-0 snap-start rounded-2xl border border-border bg-secondary/40 p-4 sm:w-[20rem]">
            <div className="flex items-center gap-3">
              {sample.image ? (
                <img src={sample.image} alt="Illustrative customer portrait" className="size-11 shrink-0 rounded-full object-cover" loading="lazy" />
              ) : (
                <span className="grid size-11 shrink-0 place-items-center rounded-full bg-accent/20 text-xs font-bold">{sample.name.slice(0, 2).toUpperCase()}</span>
              )}
              <div className="min-w-0">
                <p className="truncate text-xs font-bold">{sample.name}</p>
                <p className="truncate text-[11px] text-muted-foreground">{sample.city}</p>
              </div>
            </div>
            <div className="mt-3"><Stars rating={null} /></div>
            <blockquote className="mt-3 text-sm leading-6 text-foreground/85">“{sample.quote}”</blockquote>
            <p className="mt-3 border-t border-border pt-2.5 text-[10px] uppercase tracking-[0.12em] text-muted-foreground">Sample feedback · rating pending verification</p>
          </article>
        ))}
      </div>
    </div>
  );
}
