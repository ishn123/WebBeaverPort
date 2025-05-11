"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay?: number;
  className?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon,
  delay = 0,
  className,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay }}
      className={cn(
        "relative overflow-hidden rounded-2xl p-6 shadow-lg group hover:shadow-xl transition-all duration-300",
        className
      )}
    >
      {/* Wood grain background with opacity */}
      <div className="absolute inset-0 wood-grain opacity-10 transition-opacity duration-300 group-hover:opacity-20"></div>

      <div className="relative z-10">
        {/* Icon */}
        <div className="mb-4 inline-block p-3 bg-wood/20 rounded-xl text-wood-dark">
          {icon}
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold mb-3 text-wood-dark group-hover:text-bark-dark transition-colors duration-300">
          {title}
        </h3>

        {/* Description */}
        <p className="text-bark mb-4">{description}</p>

        {/* Learn more link */}
        <a
          href="#"
          className="inline-flex items-center text-wood font-medium hover:text-wood-dark transition-colors"
        >
          Learn more
          <svg
            className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </a>
      </div>

      {/* Animated corner detail */}
      <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-wood/10 rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-500"></div>
    </motion.div>
  );
};

export default ServiceCard;
