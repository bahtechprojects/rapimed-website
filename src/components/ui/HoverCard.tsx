import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps } from "framer-motion";

interface HoverCardProps extends HTMLMotionProps<"div"> {
    children: React.ReactNode;
    gradientColor?: string; // Optional custom gradient class (e.g. "from-blue-500 via-purple-500 to-transparent")
}

export function HoverCard({ children, className, gradientColor, ...props }: HoverCardProps) {
    return (
        <motion.div
            className={cn(
                "relative group overflow-hidden rounded-xl bg-card border border-border shadow-md transition-all duration-300",
                "hover:shadow-lg hover:scale-105 hover:-translate-y-1 cursor-pointer",
                className
            )}
            {...props}
        >
            <div
                className={cn(
                    "absolute top-0 left-0 w-full h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300",
                    // Default gradient if none provided (from user requirement)
                    !gradientColor && "bg-gradient-to-r from-primary via-[#2a6365] to-transparent",
                    gradientColor // Overlay logic: if gradientColor is full "bg-gradient...", it works. If it's just colors "from-..." it needs "bg-gradient-to-r"
                )}
            >
                {/* If gradientColor is provided, we assume it contains the full 'bg-gradient-...' or at least colors. 
            To be safe and flexible, if gradientColor is passed, we apply it directly.
            If generic colors are passed (like inside Solucoes.tsx: "from-primary to-primary-dark"), 
            we might need to prepend bg-gradient-to-r.
            However, looking at Solucoes.tsx, it passes "gradientColor" prop which is used as `bg-gradient-to-r ${gradientColor}`.
        */}
                {gradientColor && (
                    <div className={cn("absolute inset-0 bg-gradient-to-r", gradientColor)} />
                )}
                {!gradientColor && (
                    <div className="absolute inset-0 bg-gradient-to-r from-primary via-[#2a6365] to-transparent" />
                )}
            </div>
            {children}
        </motion.div>
    );
}
