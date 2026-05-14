export const SITE_URL = "https://webeaver.de";
export const SITE_NAME = "Webeaver";
export const SITE_TAGLINE = "Digital craftsmanship — web design & development agency";
export const SITE_DESCRIPTION =
  "Webeaver is a web design and development agency building fast, conversion-focused websites and web applications. UI/UX design, Next.js & React development, WordPress, e-commerce, and SEO.";
export const SITE_KEYWORDS = [
  "web design agency",
  "web development agency",
  "Next.js development",
  "React development",
  "UI/UX design",
  "WordPress development",
  "e-commerce development",
  "SEO services",
  "freelance web developer",
  "web agency Germany",
  "webeaver",
];
export const OG_IMAGE = `${SITE_URL}/logo.png`;
export const TWITTER_HANDLE = "@Ish_aro";

export const ORG_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  alternateName: "WebBeaver",
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  description: SITE_DESCRIPTION,
  email: "info@webeaver.com",
  telephone: "+49 155 60803727",
  foundingDate: "2023",
  sameAs: [
    "https://x.com/Ish_aro",
    "https://www.instagram.com/ishn__/",
    "https://www.linkedin.com/in/ishan-developer",
  ],
  address: {
    "@type": "PostalAddress",
    addressCountry: "DE",
  },
};

export const WEBSITE_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_NAME,
  url: SITE_URL,
  description: SITE_DESCRIPTION,
  inLanguage: "en",
  publisher: {
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
  },
  potentialAction: {
    "@type": "SearchAction",
    target: `${SITE_URL}/?q={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
};

export const SERVICE_JSON_LD = (params: {
  name: string;
  description: string;
  path: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name: params.name,
  description: params.description,
  url: `${SITE_URL}${params.path}`,
  provider: {
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
  },
  areaServed: {
    "@type": "Place",
    name: "Worldwide",
  },
});
