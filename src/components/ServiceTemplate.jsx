// components/ServiceTemplate.jsx
import { motion } from 'framer-motion';
import BeaverCursor from "./BeaverCursor";

const ServiceTemplate = ({ service }) => {
    return (
        <section className="py-24 bg-background">
            <BeaverCursor/>
            <div className="container mx-auto px-4 max-w-7xl">
                {/* Header Section */}
                <motion.div
                    className="flex flex-col items-center text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
          <span className="text-sm tracking-widest text-mono-dark/70 uppercase mb-4">
            Service
          </span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                        {service.title}
                    </h1>
                    <div className="h-0.5 w-16 bg-primary mb-8"></div>
                    <p className="text-mono-dark/80 max-w-2xl text-lg">
                        {service.tagline}
                    </p>
                </motion.div>

                {/* Hero Section */}
                <motion.div
                    className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                >
                    <div className="flex flex-col justify-center">
                        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-primary">
                            {service.subtitle}
                        </h2>
                        <p className="text-mono-dark/80 mb-6 text-lg">
                            {service.description}
                        </p>
                        <ul className="space-y-3 mb-8">
                            {service.keyFeatures.map((feature, index) => (
                                <li key={index} className="flex items-start">
                                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3"></span>
                                    <span className="text-mono-dark/80">{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="bg-mono-light/20 rounded-lg overflow-hidden border border-mono-light">
                        {/* Replace with your actual image component */}
                        <div className="h-full w-full bg-mono-light/10 flex items-center justify-center p-8">
                            {service.icon}
                        </div>
                    </div>
                </motion.div>

                {/* Process Section */}
                <motion.div
                    className="mb-24"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">
                        Our {service.title} Process
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {service.processSteps.map((step, index) => (
                            <motion.div
                                key={index}
                                className="border border-mono-light p-6 rounded-lg"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                            >
                                <div className="text-primary text-lg font-bold mb-3 flex items-center">
                  <span className="inline-block w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                    {index + 1}
                  </span>
                                    {step.title}
                                </div>
                                <p className="text-mono-dark/80">{step.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* CTA Section */}
                <motion.div
                    className="bg-primary/5 border border-primary/10 rounded-lg p-8 text-center"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h3 className="text-2xl font-bold mb-4">Ready to elevate your digital presence?</h3>
                    <p className="text-mono-dark/80 mb-6 max-w-2xl mx-auto">
                        {service.ctaText}
                    </p>
                    <a
                        href="/#contact"
                        className="inline-block bg-primary text-white px-6 py-3 rounded-sm hover:bg-primary-dark transition-colors"
                    >
                        Get Started
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default ServiceTemplate;