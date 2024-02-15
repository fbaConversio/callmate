import { cn } from "@/lib/utils";

export default function Avatar({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "h-6 w-6 flex items-center justify-center rounded-sm border text-[12px]",
        className
      )}
    >
      {name.split(" ").map((n) => n[0])}
    </div>
  );
}
