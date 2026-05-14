import Script from 'next/script';
import ServiceTemplate from '@/components/ServiceTemplate';
import { SITE_URL, SITE_NAME, SERVICE_JSON_LD } from '@/lib/seo';

export const metadata = {
    title: 'WordPress Development Services',
    description:
        'Custom WordPress development — bespoke themes and plugins, performance-tuned WooCommerce stores, headless WordPress with Next.js, and ongoing maintenance.',
    keywords: [
        'WordPress development agency',
        'custom WordPress theme',
        'custom WordPress plugin',
        'WooCommerce development',
        'headless WordPress',
        'WordPress maintenance',
        'WordPress speed optimization',
    ],
    alternates: { canonical: '/wordpress-development' },
    openGraph: {
        title: `WordPress Development Services | ${SITE_NAME}`,
        description:
            'Bespoke WordPress themes, plugins, and headless setups built for speed, security, and easy content management.',
        url: `${SITE_URL}/wordpress-development`,
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: `WordPress Development Services | ${SITE_NAME}`,
        description:
            'Bespoke WordPress themes, plugins, and headless setups built for speed, security, and easy content management.',
    },
};

const WordPressPage = () => {
    const service = {
        title: "WordPress Development",
        tagline: "Powerful, flexible websites built on WordPress",
        subtitle: "Custom WordPress solutions tailored to your needs",
        description: "From brochure sites to complex web applications, we build WordPress websites that are fast, secure, and easy to manage. We specialize in custom themes and plugins that extend WordPress beyond its core capabilities.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2v4"></path>
                <path d="m16 6 2-2"></path>
                <path d="M18 12h4"></path>
                <path d="m16 18 2 2"></path>
                <path d="M12 20v-4"></path>
                <path d="m8 18-2 2"></path>
                <path d="M4 12H2"></path>
                <path d="m8 6-2-2"></path>
                <circle cx="12" cy="12" r="4"></circle>
            </svg>
        ),
        keyFeatures: [
            "Custom theme development from scratch",
            "Headless WordPress architecture",
            "Plugin customization and development",
            "Performance optimization",
            "Security hardening",
            "Ongoing maintenance plans"
        ],
        processSteps: [
            {
                title: "Planning",
                description: "We define requirements and choose the right WordPress architecture for your project."
            },
            {
                title: "Design",
                description: "Custom UI/UX design that matches your brand and user needs."
            },
            {
                title: "Development",
                description: "Clean, standards-compliant code implementation with modern PHP and JavaScript."
            },
            {
                title: "Content Strategy",
                description: "We help structure your content for optimal organization and SEO."
            },
            {
                title: "Testing",
                description: "Rigorous testing for performance, security, and cross-browser compatibility."
            },
            {
                title: "Launch & Training",
                description: "We handle deployment and provide training for your team."
            }
        ],
        ctaText: "Ready for a WordPress site that stands out from the crowd? Let's talk about your project."
    };

    return (
        <>
            <ServiceTemplate service={service} />
            <Script
                id="ld-service-wordpress"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(
                        SERVICE_JSON_LD({
                            name: 'WordPress Development Services',
                            description: service.description,
                            path: '/wordpress-development',
                        }),
                    ),
                }}
            />
        </>
    );
};

export default WordPressPage;