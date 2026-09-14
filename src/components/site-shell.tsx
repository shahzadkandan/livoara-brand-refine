import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, ShoppingBag, X } from "lucide-react";
import { createContext, useContext, useState, type ReactNode } from "react";
import { Button } from "@/components/ui/button";

type CartContextValue = { quantity: number; add: (count?: number) => void; open: () => void };
const CartContext = createContext<CartContextValue>({ quantity: 0, add: () => undefined, open: () => undefined });
export const useCart = () => useContext(CartContext);

const mainLinks = [
  { to: "/product", label: "Shop" },
  { to: "/about", label: "Our Story" },
  { to: "/shipping-returns", label: "Shipping & Returns" },
  { to: "/contact", label: "Contact" },
] as const;

const announcements = [
  "30-day easy returns",
  "Organise · Simplify · Elevate",
  "Free shipping on prepaid orders",
  "30-day easy returns",
] as const;

export function SiteShell({ children }: { children: ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [quantity, setQuantity] = useState(0);
  const pathname = useRouterState({ select: (state) => state.location.pathname });

  const add = (count = 1) => {
    setQuantity((value) => value + count);
    setCartOpen(true);
  };

  return (
    <CartContext.Provider value={{ quantity, add, open: () => setCartOpen(true) }}>
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
            <Button variant="icon" size="icon" className="relative justify-self-end" aria-label={`Open cart with ${quantity} items`} onClick={() => setCartOpen(true)}>
              <ShoppingBag className="size-5" />
              {quantity > 0 && <span className="absolute right-0 top-0 grid size-5 place-items-center rounded-full bg-accent text-[10px] font-bold text-accent-foreground">{quantity}</span>}
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

        {cartOpen && (
          <div className="fixed inset-0 z-50 bg-foreground/25" role="presentation" onClick={() => setCartOpen(false)}>
            <aside className="ml-auto flex h-full w-[min(92vw,440px)] flex-col bg-background p-6 shadow-2xl" role="dialog" aria-modal="true" aria-label="Shopping cart" onClick={(event) => event.stopPropagation()}>
              <div className="flex items-center justify-between border-b border-border pb-5">
                <h2 className="font-display text-3xl">Your bag</h2>
                <Button variant="icon" size="icon" aria-label="Close cart" onClick={() => setCartOpen(false)}><X className="size-5" /></Button>
              </div>
              <div className="flex flex-1 flex-col justify-center text-center">
                {quantity ? (
                  <><p className="font-display text-2xl">LIVOARA Travel Vanity</p><p className="mt-2 text-sm text-muted-foreground">Quantity: {quantity}</p><p className="mt-5 border-y border-border py-4 text-sm text-muted-foreground">Price and checkout connection pending.</p></>
                ) : <><ShoppingBag className="mx-auto size-8 text-muted-foreground" /><p className="mt-4 font-display text-2xl">Your bag is waiting</p></>}
              </div>
              {quantity > 0 && <Button disabled>Checkout — coming soon</Button>}
              <Button variant="outline" className="mt-3" onClick={() => setCartOpen(false)}>Continue browsing</Button>
            </aside>
          </div>
        )}
      </div>
    </CartContext.Provider>
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