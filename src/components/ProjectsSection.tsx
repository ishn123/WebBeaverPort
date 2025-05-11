56"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ExternalLink, Github } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  link: string;
  github?: string;
}

const projects: Project[] = [
  {
    id: 'project1',
    title: 'Hotel Odisej',
    description: 'A minimalist portfolio design with focus on typography and white space. Built with React and Framer Motion.',
    tags: ['React', 'Typescript', 'Framer Motion'],
    image: 'https://cdn.sanity.io/images/mk7d8ghl/production/59f79428a6f9c4b65155d4f48b424427a5e5615a-427x184.gif',
    link: 'https://ishn123.github.io/Hotel-Odisej/',
    github: 'https://github.com/ishn123/Hotel-Odisej',
  },
  {
    id: 'project2',
    title: 'Academia Veneria',
    description: 'An elegant admin dashboard with data visualization, dark mode, and responsive layout using modern CSS techniques.',
    tags: ['Dashboard', 'Charts', 'Responsive'],
    image: 'https://cdn.sanity.io/images/mk7d8ghl/production/9f1325c7c230a2e61454b87c446015687ef858ab-614x264.gif',
    link: 'https://ishn123.github.io/b13FinalProject/',
  },
  {
    id: 'project3',
    title: 'Typographic Exploration',
    description: 'A study in typographic hierarchies and layouts, combining classic and modern fonts in an interactive showcase.',
    tags: ['Typography', 'CSS', 'Animation'],
    image: 'data:image/svg+xml,%3Csvg width="800" height="600" xmlns="http://www.w3.org/2000/svg"%3E%3Crect width="100%25" height="100%25" fill="%23f0f0f0"/%3E%3Cpath d="M200,100 L600,100 L600,500 L200,500 Z" stroke="%23333" stroke-width="40" opacity="0.1" fill="none"/%3E%3C/svg%3E',
    link: '#',
    github: 'https://github.com',
  }
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 bg-gradient-to-b from-background to-accent/5">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div 
          className="flex flex-col mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-sm tracking-widest text-mono-dark/70 uppercase mb-4">Selected Work</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Projects</h2>
          <div className="h-0.5 w-16 bg-primary mb-8"></div>
          <p className="text-mono-dark/80 max-w-2xl text-lg">
            A curated selection of projects that showcase our approach to design and development.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="group relative overflow-hidden rounded-md border border-accent2-light"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-accent-light">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <div className="flex space-x-2">
                    {project.github && (
                      <a href={project.github} className="text-mono-dark/60 hover:text-mono-dark transition-colors p-1" aria-label="GitHub repo">
                        <Github size={18} />
                      </a>
                    )}
                    <a href={project.link} className="text-mono-dark/60 hover:text-mono-dark transition-colors p-1" aria-label="Visit project">
                      <ArrowUpRight size={18} />
                    </a>
                  </div>
                </div>
                
                <p className="text-mono-dark/80 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs px-2 py-1 bg-accent1-light text-mono-dark/70 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              
              <motion.div 
                className="absolute bottom-0 left-0 h-1 bg-primary"
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
              />
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
            href="#contact" 
            className="relative group overflow-hidden border border-mono-dark px-8 py-3 inline-flex items-center gap-2"
          >
            <span className="relative z-10 text-mono-dark group-hover:text-white transition-colors duration-300">
              Start a Project
            </span>
            <ExternalLink className="w-4 h-4 relative z-10 text-mono-dark group-hover:text-white transition-colors duration-300" />
            <div className="absolute inset-0 bg-mono-dark transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></div>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
