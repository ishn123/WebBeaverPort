import Script from 'next/script';
import ServiceTemplate from '@/components/ServiceTemplate';
import { SITE_URL, SITE_NAME, SERVICE_JSON_LD } from '@/lib/seo';

export const metadata = {
    title: 'Web Application Development',
    description:
        'Custom web application development with Next.js, React, and Node.js. Scalable SPAs, server-rendered apps, real-time features, API integrations, and PWAs built for business outcomes.',
    keywords: [
        'web application development',
        'Next.js development',
        'React development',
        'Node.js development',
        'SaaS development',
        'custom web app',
        'PWA development',
        'API integration',
    ],
    alternates: { canonical: '/web-applications' },
    openGraph: {
        title: `Web Application Development | ${SITE_NAME}`,
        description:
            'Scalable, modern web apps built with Next.js, React, and Node.js — designed for performance and business outcomes.',
        url: `${SITE_URL}/web-applications`,
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: `Web Application Development | ${SITE_NAME}`,
        description:
            'Scalable, modern web apps built with Next.js, React, and Node.js — designed for performance and business outcomes.',
    },
};

const WebAppsPage = () => {
    const service = {
        title: "Web Applications",
        tagline: "Build powerful, scalable web applications",
        subtitle: "Modern web apps that solve business challenges",
        description: "We develop custom web applications with React, Next.js, and Node.js that handle complex workflows and scale with your business. Our apps are performant, secure, and deliver exceptional user experiences.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
                <line x1="12" y1="18" x2="12" y2="18"></line>
            </svg>
        ),
        keyFeatures: [
            "Single Page Applications (SPAs)",
            "Server-side rendered apps with Next.js",
            "Real-time functionality with WebSockets",
            "API integration with third-party services",
            "Database design and optimization",
            "Progressive Web App (PWA) capabilities"
        ],
        processSteps: [
            {
                title: "Requirement Analysis",
                description: "We work with you to define the app's core functionality and user stories."
            },
            {
                title: "Technical Planning",
                description: "Architecture design and technology stack selection."
            },
            {
                title: "UI/UX Design",
                description: "Creating intuitive interfaces for complex workflows."
            },
            {
                title: "Development",
                description: "Agile development with regular demos and feedback cycles."
            },
            {
                title: "Quality Assurance",
                description: "Automated and manual testing to ensure reliability."
            },
            {
                title: "Deployment & Scaling",
                description: "CI/CD pipeline setup and performance optimization."
            }
        ],
        ctaText: "Have an idea for a web application? Let's turn it into reality with clean, maintainable code."
    };

    return (
        <>
            <ServiceTemplate service={service} />
            <Script
                id="ld-service-webapps"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(
                        SERVICE_JSON_LD({
                            name: 'Web Application Development',
                            description: service.description,
                            path: '/web-applications',
                        }),
                    ),
                }}
            />
        </>
    );
};

export default WebAppsPage;