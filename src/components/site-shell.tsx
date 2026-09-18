import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, Minus, Plus, ShoppingBag, Trash2, X, ExternalLink, Loader2 } from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { useCartStore } from "@/stores/cartStore";
import { useHydrated } from "@/hooks/use-hydrated";
import { toast } from "sonner";

const mainLinks = [
  { to: "/product", label: "Shop" },
  { to: "/about", label: "Our Story" },
  { to: "/shipping-returns", label: "Shipping & Returns" },
  { to: "/contact", label: "Contact" },
] as const;

const announcements = [
  "7-day return request window",
  "Organise · Simplify · Elevate",
  "Thoughtful products for everyday living",
  "Customer care · hello@livoara.in",
] as const;

export function SiteShell({ children }: { children: ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  const hydrated = useHydrated();

  const items = useCartStore((state) => state.items);
  const isLoading = useCartStore((state) => state.isLoading);
  const isSyncing = useCartStore((state) => state.isSyncing);
  const updateQuantity = useCartStore((state) => state.updateQuantity);
  const removeItem = useCartStore((state) => state.removeItem);
  const getCheckoutUrl = useCartStore((state) => state.getCheckoutUrl);
  const syncCart = useCartStore((state) => state.syncCart);
  const cartOpen = useCartStore((state) => state.cartOpen);
  const setCartOpen = useCartStore((state) => state.setCartOpen);

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = items.reduce(
    (sum, item) => sum + parseFloat(item.price.amount) * item.quantity,
    0
  );
  const formatCartPrice = (amount: string) => `₹${parseFloat(amount).toLocaleString("en-IN", { minimumFractionDigits: 0, maximumFractionDigits: 2 })}`;

  useEffect(() => {
    if (cartOpen) syncCart();
  }, [cartOpen, syncCart]);

  const handleCheckout = () => {
    const checkoutUrl = getCheckoutUrl();
    if (checkoutUrl) {
      window.open(checkoutUrl, "_blank");
      setCartOpen(false);
    } else {
      toast.error("Checkout link is not ready. Please add an item to the cart.");
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="announcement-bar overflow-hidden bg-primary py-2 text-[11px] uppercase tracking-[0.18em] text-primary-foreground" aria-label="Store announcements">
        <div className="announcement-track flex w-max items-center">
          {[false, true].map((duplicate) => (
            <div key={String(duplicate)} className="flex shrink-0 items-center" aria-hidden={duplicate || undefined}>
              {announcements.map((message, index) => (
                <span key={`${message}-${index}`} className="flex items-center whitespace-nowrap px-8 sm:px-12">
                  {message}<span className="ml-12 text-accent" aria-hidden="true">★</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
      <header className="sticky top-0 z-40 border-b border-border/70 bg-background/95 backdrop-blur">
        <div className="mx-auto grid h-18 max-w-[1450px] grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3 px-4 sm:px-7 lg:px-12">
          <Button variant="icon" size="icon" className="lg:hidden" aria-label="Open menu" onClick={() => setMenuOpen(true)}>
            <Menu className="size-5" />
          </Button>
          <Link to="/" className="font-display text-2xl tracking-[0.22em] lg:text-3xl" aria-label="LIVOARA home">
            LIVOARA
          </Link>
          <nav className="hidden items-center justify-center gap-8 lg:flex" aria-label="Main navigation">
            {mainLinks.map((item) => (
              <Link key={item.to} to={item.to} className="text-xs uppercase tracking-[0.12em] text-muted-foreground transition-colors hover:text-foreground" activeProps={{ className: "text-foreground" }}>
                {item.label}
              </Link>
            ))}
          </nav>
          <Button variant="icon" size="icon" className="relative justify-self-end" aria-label={`Open cart with ${hydrated ? totalItems : 0} items`} onClick={() => setCartOpen(true)}>
            <ShoppingBag className="size-5" />
            {hydrated && totalItems > 0 && <span className="absolute right-0 top-0 grid size-5 place-items-center rounded-full bg-accent text-[10px] font-bold text-accent-foreground">{totalItems}</span>}
          </Button>
        </div>
      </header>

      {menuOpen && (
        <div className="fixed inset-0 z-50 bg-foreground/20 lg:hidden" role="presentation" onClick={() => setMenuOpen(false)}>
          <aside className="h-full w-[min(88vw,380px)] bg-background p-6" onClick={(event) => event.stopPropagation()}>
            <div className="flex items-center justify-between border-b border-border pb-6">
              <span className="font-display text-2xl tracking-[0.2em]">LIVOARA</span>
              <Button variant="icon" size="icon" aria-label="Close menu" onClick={() => setMenuOpen(false)}><X className="size-5" /></Button>
            </div>
            <nav className="flex flex-col py-7" aria-label="Mobile navigation">
              <Link to="/" onClick={() => setMenuOpen(false)} className="border-b border-border py-5 font-display text-2xl">Home</Link>
              {mainLinks.map((item) => <Link key={item.to} to={item.to} onClick={() => setMenuOpen(false)} className="border-b border-border py-5 font-display text-2xl">{item.label}</Link>)}
            </nav>
          </aside>
        </div>
      )}

      <main key={pathname}>{children}</main>
      <Footer />

      <Sheet open={cartOpen} onOpenChange={setCartOpen}>
        <SheetContent className="flex w-full flex-col sm:max-w-lg" aria-label="Shopping cart">
          <SheetHeader className="flex-shrink-0">
            <SheetTitle className="font-display text-3xl">Your bag</SheetTitle>
            <SheetDescription>
              {totalItems === 0 ? "Your bag is empty" : `${totalItems} item${totalItems !== 1 ? "s" : ""} in your bag`}
            </SheetDescription>
          </SheetHeader>

          <div className="flex flex-1 flex-col pt-6 min-h-0">
            {items.length === 0 ? (
              <div className="flex flex-1 flex-col items-center justify-center text-center">
                <ShoppingBag className="mx-auto size-8 text-muted-foreground" />
                <p className="mt-4 font-display text-2xl">Your bag is waiting</p>
              </div>
            ) : (
              <>
                <div className="flex-1 overflow-y-auto pr-2 min-h-0">
                  <div className="space-y-4">
                    {items.map((item) => (
                      <div key={item.variantId} className="flex gap-4 p-2">
                        <div className="w-16 h-16 bg-secondary/20 rounded-md overflow-hidden flex-shrink-0">
                          {item.product.node?.images?.edges?.[0]?.node?.url && (
                            <img
                              src={item.product.node.images.edges[0].node.url}
                              alt={item.product.node.title}
                              className="h-full w-full object-cover"
                            />
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-medium truncate">{item.product.node?.title}</h4>
                          <p className="text-sm text-muted-foreground">{item.variantTitle}</p>
                          <p className="font-semibold">{item.price.currencyCode} {parseFloat(item.price.amount).toFixed(2)}</p>
                        </div>
                        <div className="flex flex-col items-end gap-2 flex-shrink-0">
                          <Button variant="ghost" size="icon" className="h-6 w-6" onClick={() => removeItem(item.variantId)} aria-label={`Remove ${item.variantTitle}`}>
                            <Trash2 className="h-3 w-3" />
                          </Button>
                          <div className="flex items-center gap-1">
                            <Button variant="outline" size="icon" className="h-6 w-6" onClick={() => updateQuantity(item.variantId, item.quantity - 1)} aria-label="Decrease quantity">
                              <Minus className="h-3 w-3" />
                            </Button>
                            <span className="w-8 text-center text-sm">{item.quantity}</span>
                            <Button variant="outline" size="icon" className="h-6 w-6" onClick={() => updateQuantity(item.variantId, item.quantity + 1)} aria-label="Increase quantity">
                              <Plus className="h-3 w-3" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex-shrink-0 space-y-4 pt-4 border-t bg-background">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold">Total</span>
                    <span className="text-xl font-bold">{currencyCode} {totalPrice.toFixed(2)}</span>
                  </div>
                  <Button onClick={handleCheckout} className="w-full" size="lg" disabled={items.length === 0 || isLoading || isSyncing}>
                    {isLoading || isSyncing ? <Loader2 className="w-4 h-4 animate-spin" /> : <><ExternalLink className="w-4 h-4 mr-2" />Checkout with Shopify</>}
                  </Button>
                </div>
              </>
            )}
          </div>
          <Button variant="outline" className="mt-3 flex-shrink-0" onClick={() => setCartOpen(false)}>Continue browsing</Button>
        </SheetContent>
      </Sheet>
    </div>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-[1450px] gap-12 px-6 py-16 md:grid-cols-[1.4fr_1fr_1fr] lg:px-12">
        <div><Link to="/" className="font-display text-3xl tracking-[0.2em]">LIVOARA</Link><p className="mt-5 max-w-sm text-sm leading-7 text-primary-foreground/70">A thoughtful vanity made to hold the little things that make every moment yours.</p></div>
        <div><h2 className="text-xs uppercase tracking-[0.18em]">Explore</h2><div className="mt-5 flex flex-col gap-3 text-sm text-primary-foreground/70"><Link to="/product">Shop the Vanity</Link><Link to="/about">Our Story</Link><Link to="/contact">Contact Us</Link></div></div>
        <div><h2 className="text-xs uppercase tracking-[0.18em]">Policies & Customer Care</h2><div className="mt-5 flex flex-col gap-3 text-sm text-primary-foreground/70"><Link to="/contact">Contact Us</Link><Link to="/shipping-returns">Shipping & Returns</Link><Link to="/privacy">Privacy Policy</Link><Link to="/terms">Terms of Service</Link><a href="mailto:hello@livoara.in">hello@livoara.in</a></div></div>
      </div>
      <div className="border-t border-primary-foreground/15 px-6 py-5 text-center text-[11px] uppercase tracking-[0.16em] text-primary-foreground/55">© 2026 LIVOARA · A brand of ARINJJOY VENTURES · GSTIN 21ACMFA2803PIZE · All rights reserved</div>
    </footer>
  );
}
