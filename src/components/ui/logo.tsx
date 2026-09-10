import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  height?: number;
  priority?: boolean;
  asLink?: boolean;
  href?: string;
}

export const Logo = ({
  className,
  height = 24,
  priority = true,
  asLink = true,
  href = "/",
}: LogoProps) => {
  // Natural logo aspect ratio is 249 / 30 ~ 8.3
  const width = Math.round(height * 8.3);

  const content = (
    <div
      className={cn(
        "inline-flex items-center select-none transition-all duration-200 ease-out hover:opacity-95 active:scale-[0.98]",
        className
      )}
    >
      <Image
        src="/logo.png"
        alt="COMMERCIAX"
        width={width}
        height={height}
        priority={priority}
        className="h-5 md:h-6 w-auto object-contain brightness-95 contrast-125"
      />
    </div>
  );

  if (asLink) {
    return (
      <Link
        href={href}
        className="group inline-flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded-lg"
        aria-label="COMMERCIAX Home"
      >
        {content}
      </Link>
    );
  }

  return content;
};
