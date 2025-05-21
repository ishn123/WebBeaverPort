"use client";
import ServiceTemplate from '@/components/ServiceTemplate';

const UIDesignPage = () => {
    const service = {
        title: "UI/UX Design",
        tagline: "Crafting intuitive experiences that users love",
        subtitle: "Human-centered design for digital products",
        description: "We create interfaces that are not just beautiful but highly functional. Our design process focuses on understanding user behavior to deliver seamless experiences that drive engagement and conversions.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                <line x1="8" y1="21" x2="16" y2="21"></line>
                <line x1="12" y1="17" x2="12" y2="21"></line>
            </svg>
        ),
        keyFeatures: [
            "User research and persona development",
            "Wireframing and interactive prototyping",
            "Information architecture planning",
            "Accessibility-focused design",
            "Design system creation",
            "Usability testing and iteration"
        ],
        processSteps: [
            {
                title: "Discovery",
                description: "We conduct user interviews and market research to understand your audience and business goals."
            },
            {
                title: "Wireframing",
                description: "Low-fidelity prototypes help us establish the information hierarchy and user flows."
            },
            {
                title: "Visual Design",
                description: "We create high-fidelity mockups with your brand identity and design system."
            },
            {
                title: "Prototyping",
                description: "Interactive prototypes allow for user testing before development begins."
            },
            {
                title: "Testing",
                description: "We validate designs through usability testing and iterate based on feedback."
            },
            {
                title: "Handoff",
                description: "Detailed design specs and assets are delivered for implementation."
            }
        ],
        ctaText: "Let's create an interface that delights your users and achieves your business objectives."
    };

    return <ServiceTemplate service={service} />;
};

export default UIDesignPage;