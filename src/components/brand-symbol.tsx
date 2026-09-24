import type { ScentCollection } from "@/content/site";

type BrandSymbolProps = {
  symbol: ScentCollection["symbol"];
};

export function BrandSymbol({ symbol }: BrandSymbolProps) {
  if (symbol === "wave") {
    return (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <path d="M8 25c8-12 18-13 23-2 6 12 16 13 25 1M8 34c8-9 17-10 23-1 7 10 16 10 25 1M12 43c8-6 15-6 21 0 7 7 14 7 21 1" />
      </svg>
    );
  }

  if (symbol === "flower") {
    return (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <path d="M31 55V24m0 8c-8-1-13-5-14-12 8 0 13 4 14 12Zm0 7c8-1 13-5 14-12-8 0-13 4-14 12ZM31 24c-5-5-5-11 0-16 5 5 5 11 0 16Z" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 64 64" aria-hidden="true">
      <path d="M15 55c8-17 18-31 34-43M25 39c-8 1-12-2-14-9 8-1 13 2 14 9Zm8-10c-3-7-1-12 6-16 3 8 1 13-6 16Zm6 5c7-3 13-1 16 6-8 3-13 1-16-6Z" />
    </svg>
  );
}
