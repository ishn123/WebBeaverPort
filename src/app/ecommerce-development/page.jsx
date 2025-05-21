"use client";
import ServiceTemplate from '@/components/ServiceTemplate';
const EcommercePage = () => {
    const service = {
        title: "E-commerce Solutions",
        tagline: "Online stores that convert visitors into customers",
        subtitle: "Complete e-commerce development",
        description: "We build high-performing e-commerce stores with WooCommerce, Shopify, and custom solutions. Our stores are optimized for conversions, with streamlined checkouts, mobile-first design, and integrated marketing tools.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="8" cy="21" r="1"></circle>
                <circle cx="19" cy="21" r="1"></circle>
                <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path>
            </svg>
        ),
        keyFeatures: [
            "WooCommerce and Shopify development",
            "Custom checkout experiences",
            "Payment gateway integration",
            "Inventory management systems",
            "Product recommendation engines",
            "Conversion rate optimization"
        ],
        processSteps: [
            {
                title: "Strategy",
                description: "We analyze your products, audience, and competition to create a winning strategy."
            },
            {
                title: "Platform Selection",
                description: "Choosing the right e-commerce platform for your business model."
            },
            {
                title: "Design",
                description: "Creating shopping experiences that reflect your brand and drive sales."
            },
            {
                title: "Development",
                description: "Building with security and scalability in mind from day one."
            },
            {
                title: "Integration",
                description: "Connecting payment processors, ERPs, and marketing tools."
            },
            {
                title: "Optimization",
                description: "Continuous improvement based on analytics and user feedback."
            }
        ],
        ctaText: "Let's build an online store that grows your business and delights your customers."
    };

    return <ServiceTemplate service={service} />;
};

export default EcommercePage;