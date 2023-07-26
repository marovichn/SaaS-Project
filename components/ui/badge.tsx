import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground",
        premium: "bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 text-white",
        golden: "bg-gradient-to-r from-yellow-100 via-yellow-300 to-yellow-500",
        blueSteel: "bg-gradient-to-r from-gray-400 via-gray-600 to-blue-800",
        gunmetal:
          "bg-gradient-to-r from-gray-200 via-emerald-300 to-emerald-500",
        iconBased: "bg-gradient-to-r from-sky-300 via-pink-500 to-emerald-500",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
