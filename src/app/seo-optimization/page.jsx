"use client";
import ServiceTemplate from '@/components/ServiceTemplate';

const SEOPage = () => {
    const service = {
        title: "SEO Optimization",
        tagline: "Get found by the right customers",
        subtitle: "Data-driven search engine optimization",
        description: "Our SEO services help your website rank higher in search results, driving qualified organic traffic. We combine technical excellence with content strategy to improve visibility and conversions.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="m3 11 19-9-9 19-2-8-8-2z"></path>
            </svg>
        ),
        keyFeatures: [
            "Comprehensive SEO audits",
            "Keyword research and strategy",
            "Technical SEO improvements",
            "Content optimization",
            "Backlink strategy",
            "Ongoing performance tracking"
        ],
        processSteps: [
            {
                title: "Audit",
                description: "Detailed analysis of your current SEO performance and opportunities."
            },
            {
                title: "Keyword Research",
                description: "Identifying high-value keywords your target audience is searching for."
            },
            {
                title: "On-Page Optimization",
                description: "Optimizing content, metadata, and site structure."
            },
            {
                title: "Technical SEO",
                description: "Improving site speed, mobile-friendliness, and indexability."
            },
            {
                title: "Content Strategy",
                description: "Creating SEO-optimized content that ranks and converts."
            },
            {
                title: "Reporting",
                description: "Monthly performance reports with actionable insights."
            }
        ],
        ctaText: "Ready to dominate search results? Let's optimize your online presence."
    };

    return <ServiceTemplate service={service} />;
};

export default SEOPage;