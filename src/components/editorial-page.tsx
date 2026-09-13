import type { ReactNode } from "react";

export function EditorialPage({ eyebrow, title, intro, children }: { eyebrow: string; title: string; intro: string; children: ReactNode }) {
  return <div className="page-reveal"><header className="border-b border-border bg-secondary px-6 py-20 sm:px-10 lg:py-28"><div className="mx-auto max-w-4xl"><p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{eyebrow}</p><h1 className="mt-5 font-display text-5xl leading-tight sm:text-7xl">{title}</h1><p className="mt-7 max-w-2xl text-lg leading-8 text-muted-foreground">{intro}</p></div></header><div className="mx-auto max-w-4xl px-6 py-16 sm:px-10 lg:py-24">{children}</div></div>;
}

export function CopySection({ title, children }: { title: string; children: ReactNode }) {
  return <section className="border-b border-border py-9 first:pt-0 last:border-0"><h2 className="font-display text-3xl">{title}</h2><div className="mt-5 space-y-4 text-sm leading-7 text-muted-foreground">{children}</div></section>;
}