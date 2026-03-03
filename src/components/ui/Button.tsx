import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "../../utils/cn"

const buttonVariants = cva(
    "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300",
    {
        variants: {
            variant: {
                default: "bg-brand-blue text-white hover:bg-brand-blue/90",
                destructive:
                    "bg-brand-red text-white hover:bg-brand-red/90",
                outline:
                    "border border-slate-200 bg-white hover:bg-slate-100 hover:text-slate-900 dark:border-slate-800 dark:bg-slate-950 dark:hover:bg-slate-800 dark:hover:text-slate-50",
                secondary:
                    "bg-slate-100 text-slate-900 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-50 dark:hover:bg-slate-800/80",
                ghost: "hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-slate-800 dark:hover:text-slate-50",
                link: "text-brand-blue underline-offset-4 hover:underline dark:text-blue-400",
            },
            size: {
                default: "h-10 px-4 py-2",
                sm: "h-9 rounded-md px-3",
                lg: "h-11 rounded-md px-8",
                icon: "h-10 w-10",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
)

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
    asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, asChild = false, ...props }, ref) => {
        // We are replacing radix Slot with normal element to save dependencies,
        // actually, let's just use normal button for purely UI unless heavily compositing.
        const Comp = asChild ? Slot : "button"
        return (
            <Comp
                className={cn(buttonVariants({ variant, size, className }))}
                ref={ref}
                {...props}
            />
        )
    }
)
Button.displayName = "Button"

export { Button, buttonVariants }
