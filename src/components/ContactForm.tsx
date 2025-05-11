"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import { Send } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Please fill in all fields');
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate form submission
    try {
      // In a real app, this would be an API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      await fetch("/api/sendEmail",{
        method:"POST",
        body:JSON.stringify(formData),
      })

      toast.success('Message sent! We will get back to you soon.');
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        message: '',
      });
    } catch (error) {
      toast.error('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 wood-grain opacity-10 -z-10"></div>
      
      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-wood-dark">Build With Us</h2>
            <p className="text-bark max-w-2xl mx-auto">
              Ready to create something amazing? Let's collaborate and build your digital dam together. 
              Fill out the form below and we'll gnaw through the details.
            </p>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-6 md:p-10 relative">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-20 h-20 -translate-x-1/2 -translate-y-1/2">
              <div className="w-full h-full bg-wood rounded-full opacity-20"></div>
            </div>
            <div className="absolute bottom-0 right-0 w-32 h-32 translate-x-1/4 translate-y-1/4">
              <div className="w-full h-full bg-water rounded-full opacity-10"></div>
            </div>
            
            {/* Log decorations */}
            <div className="absolute -top-3 left-10 w-32 h-6 bg-bark-light rounded-full transform -rotate-12 opacity-70"></div>
            <div className="absolute -bottom-3 right-20 w-40 h-6 bg-bark-light rounded-full transform rotate-6 opacity-70"></div>
            
            <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block mb-2 text-sm font-medium text-bark-dark">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Beaver"
                    className="bg-white/50 border-wood/30 focus:border-wood focus:ring-wood"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-bark-dark">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="bg-white/50 border-wood/30 focus:border-wood focus:ring-wood"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block mb-2 text-sm font-medium text-bark-dark">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project..."
                  rows={5}
                  className="bg-white/50 border-wood/30 focus:border-wood focus:ring-wood"
                />
              </div>
              
              <div className="flex justify-center">
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="bg-wood hover:bg-wood-dark text-white px-8 py-6 rounded-full text-lg flex items-center gap-2 transition-all duration-300 hover:shadow-lg"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin h-5 w-5 border-2 border-t-transparent border-white rounded-full"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </Button>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactForm;
