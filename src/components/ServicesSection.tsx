"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Code, Palette, Globe, Database, Layers, Shuffle } from 'lucide-react';

const services = [
  {
    icon: <Palette className="w-6 h-6" />,
    title: "Design",
    description: "UI/UX, Brand Strategy, Design Systems",
    details: [
      "User Interface Design",
      "User Experience Research",
      "Design Systems",
      "Brand Identity",
      "Prototyping & Testing"
    ]
  },
  {
    icon: <Code className="w-6 h-6" />,
    title: "Development",
    description: "Web, Mobile, Full-stack Solutions",
    details: [
      "Frontend Development",
      "Backend Engineering",
      "API Integration",
      "Mobile Apps",
      "Performance Optimization"
    ]
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: "CMS & E-commerce",
    description: "WordPress, Shopify, Custom Solutions",
    details: [
      "WordPress Development",
      "E-commerce Platforms",
      "Content Management",
      "Payment Integration",
      "Subscription Systems"
    ]
  },
  {
    icon: <Database className="w-6 h-6" />,
    title: "Web Applications",
    description: "Dashboards, SaaS Products, Tools",
    details: [
      "Custom Web Applications",
      "SaaS Product Development",
      "Admin Dashboards",
      "Real-time Applications",
      "Progressive Web Apps"
    ]
  },
  {
    icon: <Layers className="w-6 h-6" />,
    title: "Strategy",
    description: "Product Strategy, Roadmapping, Audits",
    details: [
      "Digital Strategy",
      "Product Roadmapping",
      "Technical Audits",
      "SEO Optimization",
      "Analytics & Insights"
    ]
  },
  {
    icon: <Shuffle className="w-6 h-6" />,
    title: "Maintenance",
    description: "Updates, Support, Hosting",
    details: [
      "Site Maintenance",
      "Performance Monitoring",
      "Security Updates",
      "Hosting Solutions",
      "24/7 Support"
    ]
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div
          className="flex flex-col items-center text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-sm tracking-widest text-mono-dark/70 uppercase mb-4">What We Do</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Services</h2>
          <div className="h-0.5 w-16 bg-primary mb-8"></div>
          <p className="text-mono-dark/80 max-w-2xl text-lg">
            We specialize in creating thoughtful digital experiences 
            through clean design and elegant development.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="group border border-mono-light hover:border-primary transition-colors duration-300 p-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ 
                y: -5, 
                transition: { duration: 0.2 } 
              }}
            >
              <div className="mb-6 flex justify-between items-center">
                <div className="p-3 bg-accent text-primary rounded-sm">
                  {service.icon}
                </div>
                <motion.div 
                  className="h-px bg-mono-light flex-1 ml-4 origin-left"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                />
              </div>
              
              <h3 className="text-xl font-bold mb-2 text-primary group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              
              <p className="text-mono-dark/70 mb-5">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.details.map((detail, i) => (
                  <li key={i} className="flex items-center text-sm text-mono-dark/80">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mr-3"></span>
                    {detail}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 flex justify-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <a 
            href="#process" 
            className="relative group after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 group-hover:after:w-full"
          >
            <span className="text-mono-dark group-hover:text-primary transition-colors duration-300">
              Learn more about our process
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
