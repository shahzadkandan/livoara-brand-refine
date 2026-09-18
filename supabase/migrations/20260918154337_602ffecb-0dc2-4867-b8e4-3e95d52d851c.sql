CREATE TABLE public.product_reviews (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name text NOT NULL,
  city text,
  rating integer NOT NULL,
  body text NOT NULL,
  status text NOT NULL DEFAULT 'pending',
  created_at timestamp with time zone NOT NULL DEFAULT now()
);

CREATE OR REPLACE FUNCTION public.validate_product_review()
RETURNS TRIGGER
LANGUAGE plpgsql
SET search_path = public
AS $$
BEGIN
  IF NEW.rating < 1 OR NEW.rating > 5 THEN
    RAISE EXCEPTION 'rating must be between 1 and 5';
  END IF;
  IF length(btrim(NEW.name)) < 2 OR length(btrim(NEW.name)) > 60 THEN
    RAISE EXCEPTION 'name must be between 2 and 60 characters';
  END IF;
  IF length(btrim(NEW.body)) < 10 OR length(btrim(NEW.body)) > 1200 THEN
    RAISE EXCEPTION 'review must be between 10 and 1200 characters';
  END IF;
  IF NEW.city IS NOT NULL AND length(NEW.city) > 60 THEN
    RAISE EXCEPTION 'city too long';
  END IF;
  IF NEW.status NOT IN ('pending', 'approved', 'rejected') THEN
    RAISE EXCEPTION 'invalid status';
  END IF;
  RETURN NEW;
END;
$$;

CREATE TRIGGER validate_product_review_trigger
BEFORE INSERT OR UPDATE ON public.product_reviews
FOR EACH ROW EXECUTE FUNCTION public.validate_product_review();

CREATE INDEX product_reviews_status_created_at_idx ON public.product_reviews (status, created_at DESC);

GRANT SELECT, INSERT ON public.product_reviews TO anon;
GRANT SELECT, INSERT ON public.product_reviews TO authenticated;
GRANT ALL ON public.product_reviews TO service_role;

ALTER TABLE public.product_reviews ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Approved reviews are public" ON public.product_reviews
FOR SELECT TO anon, authenticated
USING (status = 'approved');

CREATE POLICY "Anyone can submit a pending review" ON public.product_reviews
FOR INSERT TO anon, authenticated
WITH CHECK (status = 'pending');
