import { useState } from "react";
import { CheckCircle2, Loader2, MapPin, PackageCheck, Truck } from "lucide-react";
import { useServerFn } from "@tanstack/react-start";
import { Button } from "@/components/ui/button";
import { checkDeliveryPincode, type DeliveryLookup } from "@/lib/delivery.functions";

// Editable placeholder — replace with your courier's confirmed timeline.
const ESTIMATED_TIMELINE = "Usually arrives in 2-4 business days";

export function DeliveryChecker() {
  const lookup = useServerFn(checkDeliveryPincode);
  const [pincode, setPincode] = useState("");
  const [result, setResult] = useState<DeliveryLookup | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setError(null);
    setResult(null);
    setLoading(true);
    try {
      const data = await lookup({ data: { pincode } });
      setResult(data);
    } catch (submitError) {
      setError(submitError instanceof Error ? submitError.message : "Please enter a valid 6-digit pincode.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="border border-border bg-muted/40 p-4">
      <p className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.16em] text-accent">
        <MapPin className="size-3.5" aria-hidden="true" /> Check delivery availability
      </p>
      <form onSubmit={handleSubmit} className="mt-3 flex gap-2">
        <label className="sr-only" htmlFor="delivery-pincode">Enter 6-digit pincode</label>
        <input
          id="delivery-pincode"
          value={pincode}
          onChange={(event) => setPincode(event.target.value.replace(/\D/g, "").slice(0, 6))}
          inputMode="numeric"
          placeholder="Enter 6-digit pincode"
          className="min-w-0 flex-1 border border-border bg-background px-3 py-2.5 text-sm outline-none focus:border-accent"
        />
        <Button type="submit" disabled={loading || pincode.length !== 6} className="shrink-0 text-[11px] uppercase tracking-[0.12em]">
          {loading ? <Loader2 className="size-4 animate-spin" /> : "Check"}
        </Button>
      </form>

      {error && <p className="mt-3 text-xs text-destructive">{error}</p>}

      {result && (
        <div className="mt-3 space-y-2 border-t border-border pt-3 text-xs" aria-live="polite">
          {result.serviceable ? (
            <>
              <p className="flex items-center gap-2 font-semibold"><CheckCircle2 className="size-4 shrink-0 text-accent" />Delivering to {result.city}{result.state ? `, ${result.state}` : ""}</p>
              <p className="flex items-center gap-2 text-muted-foreground"><Truck className="size-4 shrink-0 text-accent" />{ESTIMATED_TIMELINE} · exact timeline and any shipping charge shown at checkout</p>
              <p className="flex items-center gap-2 text-muted-foreground"><PackageCheck className="size-4 shrink-0 text-accent" />Cash on Delivery availability is confirmed at checkout</p>
            </>
          ) : (
            <p className="text-muted-foreground">{result.message}</p>
          )}
        </div>
      )}
    </div>
  );
}
