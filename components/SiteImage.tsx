/* BasePath-aware image. Next's basePath prefixes Link hrefs, but NOT raw
 * <img> src/srcSet, so every image URL is prefixed with
 * NEXT_PUBLIC_BASE_PATH (set to /udyog-house-website only for the Pages
 * build; empty for the basePath-free main build). */
export default function SiteImage(props: {
  src: string;
  alt: string;
  width?: number | string;
  height?: number | string;
  sizes?: string;
  srcSet?: string;
  loading?: "lazy" | "eager";
  fetchPriority?: "high" | "low" | "auto";
  className?: string;
  decoding?: "async" | "sync" | "auto";
}) {
  const base = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const prefix = (u: string) => (u.startsWith("/") ? `${base}${u}` : u);
  const srcSet = props.srcSet
    ? props.srcSet
        .split(",")
        .map((part) => {
          const [u, ...rest] = part.trim().split(/\s+/);
          return [prefix(u), ...rest].join(" ");
        })
        .join(", ")
    : undefined;
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={prefix(props.src)}
      srcSet={srcSet}
      sizes={props.sizes}
      alt={props.alt}
      width={props.width}
      height={props.height}
      loading={props.loading}
      fetchPriority={props.fetchPriority}
      decoding={props.decoding ?? "async"}
      className={props.className}
    />
  );
}

/* One image per page, never repeated across pages (D11).
   srcset sizes recomputed from the NEW layout: figures sit in a ~55vw
   column at desktop, full width below 1080px. */
export function imgSet(name: string, widths: number[]) {
  return widths.map((w) => `/img/${name}-${w}.webp ${w}w`).join(", ");
}
export const FIGURE_SIZES = "(max-width: 1080px) 100vw, 55vw";
