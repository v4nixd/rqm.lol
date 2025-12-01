import { cn } from "@/app/lib/cn";

export default function Divider({
  height = "h-full",
  className,
}: {
  height?: string;
  className?: string;
}) {
  return (
    <div className={cn("w-0.5 bg-neutral-alfa-2 my-auto", height, className)} />
  );
}
