"use client";
import React, { useEffect } from 'react';

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ServicesSection from '@/components/ServicesSection';
import ProjectsSection from '@/components/ProjectsSection';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import SkillsSection from '@/components/SkillsSection';

const Index = () => {
    // Smooth scroll effect for anchor links
    useEffect(() => {
        const handleAnchorClick = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
                e.preventDefault();
                const id = target.getAttribute('href')?.substring(1);
                const element = document.getElementById(id || '');

                if (element) {
                    window.scrollTo({
                        behavior: 'smooth',
                        top: element.offsetTop - 80 // Account for header height
                    });

                    // Update URL without page reload
                    history.pushState(null, '', target.getAttribute('href') || '');
                }
            }
        };

        document.addEventListener('click', handleAnchorClick);
        return () => document.removeEventListener('click', handleAnchorClick);
    }, []);

    return (
        <div className="min-h-screen overflow-x-hidden bg-background">
            <Navbar />
            <Hero />
            <ProjectsSection />
            <SkillsSection />
            <ServicesSection />

            {/* Process Section */}
            <section id="process" className="py-24 bg-accent/5">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="flex flex-col items-center text-center mb-16">
                        <span className="text-sm tracking-widest text-mono-dark/70 uppercase mb-4">Our Approach</span>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Process</h2>
                        <div className="h-0.5 w-16 bg-primary mb-8"></div>
                        <p className="text-mono-dark/80 max-w-2xl text-lg">
                            Our structured approach ensures every project delivers exceptional results
                            while maintaining efficiency and clear communication.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-12">
                        {[
                            {
                                number: "01",
                                title: "Discovery",
                                description: "We begin with thorough research to understand your business, audience, and objectives."
                            },
                            {
                                number: "02",
                                title: "Strategy",
                                description: "Based on insights gathered, we craft a strategic plan tailored to your specific goals."
                            },
                            {
                                number: "03",
                                title: "Design",
                                description: "Our designers create visual concepts that embody your brand and engage users."
                            },
                            {
                                number: "04",
                                title: "Development",
                                description: "We build your solution using modern technologies and best practices."
                            },
                            {
                                number: "05",
                                title: "Testing",
                                description: "Rigorous quality assurance ensures everything works flawlessly before launch."
                            },
                            {
                                number: "06",
                                title: "Launch & Support",
                                description: "We deploy your project and provide ongoing maintenance and support."
                            }
                        ].map((step, index) => (
                            <div
                                key={step.number}
                                className="group"
                            >
                                <div className="flex flex-col h-full relative">
                  <span className="block text-6xl font-bold text-mono-dark/10 group-hover:text-mono-dark/20 transition-colors duration-300 mb-4">
                    {step.number}
                  </span>
                                    <h3 className="text-xl font-bold mb-3 text-primary">
                                        {step.title}
                                    </h3>
                                    <p className="text-mono-dark/70">
                                        {step.description}
                                    </p>
                                    <div className="absolute top-0 left-0 h-full w-px bg-mono-light transform -translate-x-4 hidden md:block"></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section id="cta" className="py-24 bg-primary text-background relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute w-40 h-40 border rounded-full top-0 left-0 transform -translate-x-1/2 -translate-y-1/2"></div>
                    <div className="absolute w-60 h-60 border rounded-full bottom-0 right-0 transform translate-x-1/2 translate-y-1/2"></div>
                    <div className="absolute w-80 h-80 border-2 rounded-full top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2"></div>
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl md:text-5xl font-bold mb-8">
                            Ready to Create Something Exceptional?
                        </h2>
                        <p className="text-lg mb-10 opacity-80 max-w-2xl mx-auto">
                            Let's collaborate to transform your vision into a digital reality that stands apart
                            through thoughtful design and flawless execution.
                        </p>
                        <a
                            href="#contact"
                            className="relative group overflow-hidden border-2 border-background px-10 py-4 inline-block text-lg font-medium"
                        >
              <span className="relative z-10 text-background group-hover:text-primary transition-colors duration-300">
                Start a Conversation
              </span>
                            <div className="absolute inset-0 bg-background transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></div>
                        </a>
                    </div>
                </div>
            </section>

            <ContactForm />
            <Footer />
        </div>
    );
};

export default Index;