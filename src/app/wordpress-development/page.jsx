"use client";
import ServiceTemplate from '@/components/ServiceTemplate';

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

    return <ServiceTemplate service={service} />;
};

export default WordPressPage;