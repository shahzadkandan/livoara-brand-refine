import { createServerFn } from "@tanstack/react-start";
import { createClient } from "@supabase/supabase-js";
import type { Database } from "@/integrations/supabase/types";

export type PublicReview = {
  id: string;
  name: string;
  city: string | null;
  rating: number;
  body: string;
  created_at: string;
};

function serverClient() {
  const url = process.env["SUPABASE_URL"]!;
  const key = process.env["SUPABASE_PUBLISHABLE_KEY"]!;
  return createClient<Database>(url, key, {
    auth: { persistSession: false, autoRefreshToken: false },
    global: {
      fetch: (input, init) => {
        const headers = new Headers(init?.headers);
        if (key.startsWith("sb_") && headers.get("Authorization") === `Bearer ${key}`) headers.delete("Authorization");
        headers.set("apikey", key);
        return fetch(input, { ...init, headers });
      },
    },
  });
}

export const listApprovedReviews = createServerFn({ method: "GET" }).handler(async (): Promise<PublicReview[]> => {
  const supabase = serverClient();
  const { data, error } = await supabase
    .from("product_reviews")
    .select("id, name, city, rating, body, created_at")
    .eq("status", "approved")
    .order("created_at", { ascending: false })
    .limit(60);
  if (error) return [];
  return (data ?? []) as PublicReview[];
});

export const submitReview = createServerFn({ method: "POST" })
  .inputValidator((input: { name: string; city: string; rating: number; body: string }) => {
    const name = String(input.name ?? "").trim();
    const city = String(input.city ?? "").trim();
    const body = String(input.body ?? "").trim();
    const rating = Math.round(Number(input.rating));
    if (name.length < 2 || name.length > 60) throw new Error("Please enter your name (2-60 characters).");
    if (body.length < 10 || body.length > 1200) throw new Error("Please write at least 10 characters.");
    if (!Number.isFinite(rating) || rating < 1 || rating > 5) throw new Error("Please choose a rating from 1 to 5 stars.");
    if (city.length > 60) throw new Error("City name is too long.");
    return { name, city, rating, body };
  })
  .handler(async ({ data }) => {
    const supabase = serverClient();
    const { error } = await supabase.from("product_reviews").insert({
      name: data.name,
      city: data.city || null,
      rating: data.rating,
      body: data.body,
      status: "pending",
    });
    if (error) throw new Error("We could not save your review right now. Please try again.");
    return { ok: true };
  });
