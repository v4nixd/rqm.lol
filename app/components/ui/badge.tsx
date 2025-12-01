import { LucideIcon } from "lucide-react";
import { cn } from "@/app/lib/cn";

import { BadgeColor } from "@/app/types/types";
import Text from "@/app/components/ui/text";

interface BadgeProps {
  icon?: LucideIcon;
  children: React.ReactNode;
  color?: BadgeColor;
  className?: string;
}

const colorMap: Record<BadgeColor, string> = {
  green: "text-green-400 bg-green-500/10 border-green-500/20",
  red: "text-red-400 bg-red-500/10 border-red-500/20",
  blue: "text-blue-400 bg-blue-500/10 border-blue-500/20",
  yellow: "text-yellow-400 bg-yellow-500/10 border-yellow-500/20",
  purple: "text-purple-400 bg-purple-500/10 border-purple-500/20",
  neutral: "text-neutral-14 bg-neutral-14/10 border-neutral-14/20",
};

export default function Badge({
  icon: Icon,
  children,
  color = "neutral",
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-3 py-1 rounded-full border transition-colors",
        colorMap[color],
        className
      )}
    >
      {Icon && <Icon className="w-4 h-4" />}
      <Text variant={"small"} color={"none"}>
        {children}
      </Text>
    </span>
  );
}
