import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { forwardRef, type ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex min-h-11 items-center justify-center gap-2 border text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "border-primary bg-primary px-6 text-primary-foreground hover:bg-primary/88",
        primary: "border-primary bg-primary px-6 text-primary-foreground hover:bg-primary/88",
        destructive: "border-destructive bg-destructive px-6 text-destructive-foreground hover:bg-destructive/88",
        secondary: "border-secondary bg-secondary px-6 text-secondary-foreground hover:bg-secondary/75",
        link: "min-h-0 border-transparent px-0 text-primary underline-offset-4 hover:underline",
        outline: "border-border bg-transparent px-6 text-foreground hover:bg-secondary",
        ghost: "border-transparent px-3 text-foreground hover:bg-secondary",
        soft: "border-secondary bg-secondary px-6 text-secondary-foreground hover:bg-accent",
        icon: "size-11 border-transparent bg-transparent text-foreground hover:bg-secondary",
      },
      size: {
        default: "h-12",
        sm: "h-10 min-h-10 text-xs",
        lg: "h-14 px-8",
        icon: "size-11 min-h-11 p-0",
      },
    },
    defaultVariants: { variant: "default", size: "default" },
  },
);

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & { asChild?: boolean };

const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button({ className, variant, size, asChild, ...props }, ref) {
  const Comp = asChild ? Slot : "button";
  return <Comp ref={ref} className={cn(buttonVariants({ variant, size }), className)} {...props} />;
});

export { Button, buttonVariants };