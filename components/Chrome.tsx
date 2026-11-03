import Link from "next/link";
import { PREVIEW } from "../lib/site";

/** Visible breadcrumbs (every subpage) + JSON-LD. Preview URLs only;
 *  never udyoghouse.com before launch. */
export function Breadcrumbs({ items }: { items: { label: string; href?: string }[] }) {
  return (
    <nav className="crumbs" aria-label="Breadcrumb">
      <ol>
        <li><Link href="/">Home</Link></li>
        {items.map((item, i) =>
          item.href && i < items.length - 1 ? (
            <li key={item.label}><Link href={item.href}>{item.label}</Link></li>
          ) : (
            <li key={item.label}><span aria-current="page">{item.label}</span></li>
          ),
        )}
      </ol>
    </nav>
  );
}

export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}

export function LinkedInIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
    </svg>
  );
}

export function orgSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Udyog House",
    url: `${PREVIEW}/`,
    slogan: "Capability, on record.",
  };
}

export function webPageSchema(path: string, name: string, description: string) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name,
    description,
    url: `${PREVIEW}${path}`,
    isPartOf: { "@type": "WebSite", name: "Udyog House", url: `${PREVIEW}/` },
  };
}

export function breadcrumbSchema(items: { label: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${PREVIEW}/` },
      ...items.map((item, i) => ({
        "@type": "ListItem",
        position: i + 2,
        name: item.label,
        item: `${PREVIEW}${item.path}`,
      })),
    ],
  };
}
