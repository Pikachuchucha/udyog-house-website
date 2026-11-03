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
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
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
