import { cn } from "@/app/lib/cn";

export default function HeaderLight({ color }: { color?: string }) {
  return (
    <div
      className={cn(
        "absolute opacity-35 size-128 top-0 left-1/2 -translate-x-1/2 rounded-full blur-[512px] -z-10",
        color
      )}
    />
  );
}
