import { cn } from "@/lib/utils";

interface RadialBackgroundProps {
  className?: string;
}

export const RadialBackground = ({ className }: RadialBackgroundProps) => {
  return (
    <div
      className={cn(
        "absolute inset-0 -z-10 size-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#2563eb_100%)]",
        className
      )}
    />
  );
};
