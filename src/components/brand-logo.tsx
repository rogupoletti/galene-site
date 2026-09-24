import Image from "next/image";

type BrandLogoProps = {
  priority?: boolean;
  className?: string;
};

export function BrandLogo({ priority = false, className }: BrandLogoProps) {
  return (
    <Image
      className={className}
      src="/images/galene-logo.png"
      alt="Galene — Aromas que transformam"
      width={2172}
      height={724}
      priority={priority}
    />
  );
}
