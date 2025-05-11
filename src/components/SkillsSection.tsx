"use client";
import React, {useEffect, useRef, useState} from 'react';
import { motion, useInView } from 'framer-motion';
import { Code, Layers, Globe, Database, Smartphone, Layout, FileCode } from 'lucide-react';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100, damping: 10 }
  }
};



// Skill categories with their respective skills
const skillCategories = [
  {
    title: "Frontend Development",
    icon: <Code size={24} />,
    skills: ["React.js", "TypeScript", "JavaScript", "HTML5", "CSS3/SCSS", "Tailwind CSS"]
  },
  {
    title: "UI/UX Design",
    icon: <Layers size={24} />,
    skills: ["Figma", "Adobe XD", "Wireframing", "Prototyping", "User Research", "Design Systems"]
  },
  {
    title: "WordPress",
    icon: <Globe size={24} />,
    skills: ["Custom Themes", "Plugin Development", "WooCommerce", "Elementor", "ACF", "Performance Optimization"]
  },
  {
    title: "Backend & CMS",
    icon: <Database size={24} />,
    skills: ["Node.js", "PHP", "Headless CMS", "REST API", "GraphQL", "Database Design"]
  },
  {
    title: "Mobile & Responsive",
    icon: <Smartphone size={24} />,
    skills: ["Responsive Design", "Progressive Web Apps", "Mobile-First Approach", "Cross-Browser Testing"]
  },
  {
    title: "Tools & Deployment",
    icon: <FileCode size={24} />,
    skills: ["Git", "CI/CD", "Webpack", "Docker", "AWS/Vercel", "Performance Testing"]
  }
];

const SkillBar = ({ skill, index }: { skill: string; index: number }) => {
   // Random value between 85-99%
  const [randomPercentage,setRandomPercentage] = useState<number>(0);
  useEffect(() => {
    const randomPercentage = Math.floor(Math.random() * 15) + 85;
    setRandomPercentage(randomPercentage);
  }, []);
  
  return (
    <motion.div 
      className="mb-2"
      variants={itemVariants}
      custom={index}
    >
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium">{skill}</span>
        <span className="text-xs text-mono-dark/60">{randomPercentage}%</span>
      </div>
      <div className="h-1.5 bg-mono-dark/10 rounded-full overflow-hidden">
        <motion.div 
          className="h-full bg-primary rounded-full" 
          initial={{ width: 0 }}
          animate={{ width: `${randomPercentage}%` }}
          transition={{ duration: 1, delay: 0.2 + (index * 0.1), ease: "easeOut" }}
        />
      </div>
    </motion.div>
  );
};

const SkillCard = ({ category, index }: { category: any; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  return (
    <motion.div
      ref={ref}
      className="relative bg-background border border-mono-dark/10 p-6 h-full"
      variants={itemVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={{ delay: index * 0.1 }}
    >
      <div className="flex items-center mb-4 text-primary">
        {category.icon}
        <h3 className="ml-2 text-lg font-bold">{category.title}</h3>
      </div>
      
      <div className="space-y-4">
        {category.skills.map((skill: string, skillIndex: number) => (
          <SkillBar key={skillIndex} skill={skill} index={skillIndex} />
        ))}
      </div>

      {/* Interactive hover effect */}
      <div className="absolute inset-0 border-2 border-primary opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </motion.div>
  );
};

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [boxes, setBoxes] = useState([]);


  useEffect(() => {
    const generatedBoxes = [...Array(6)].map(() => ({
      width: Math.random() * 400 + 100,
      height: Math.random() * 400 + 100,
      left: Math.random() * 100,
      top: Math.random() * 100,
      opacity: Math.random() * 0.5 + 0.5,
    }));
    setBoxes(generatedBoxes);
  }, [])


  return (
    <section id="skills" className="py-24 bg-accent/5 relative overflow-hidden">
      {/* Geometric background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-5 pointer-events-none">
        {boxes.map((box, i) => (
            <div
                key={i}
                className="absolute border border-mono-dark transform rotate-45"
                style={{
                  width: `${box.width}px`,
                  height: `${box.height}px`,
                  left: `${box.left}%`,
                  top: `${box.top}%`,
                  opacity: box.opacity,
                }}
            />
        ))}
      </div>
      
      <div className="container mx-auto px-4">
        <div ref={ref} className="flex flex-col items-center text-center mb-16">
          <motion.span 
            className="text-sm tracking-widest text-mono-dark/70 uppercase mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Expertise
          </motion.span>
          
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Professional Skills
          </motion.h2>
          
          <motion.div 
            className="h-0.5 w-16 bg-primary mb-8"
            initial={{ width: 0 }}
            animate={isInView ? { width: 64 } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
          
          <motion.p 
            className="text-mono-dark/80 max-w-2xl text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Comprehensive expertise across digital design and development,
            combining technical proficiency with creative problem-solving.
          </motion.p>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {skillCategories.map((category, index) => (
            <SkillCard key={index} category={category} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
