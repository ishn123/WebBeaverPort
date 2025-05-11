"use client";
import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-bark-dark text-white relative overflow-hidden">
      {/* Wood texture overlay */}
      <div className="absolute inset-0 wood-grain opacity-5"></div>
      
      {/* Log decorations */}
      <div className="absolute left-0 top-0 w-full h-8 bg-bark-light opacity-20 transform -skew-y-2"></div>
      
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and about */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="h-10 w-10 rounded-full bg-wood flex items-center justify-center">
                <span className="text-white font-bold text-lg">WB</span>
              </div>
              <span className="text-xl font-bold">WebBeaver</span>
            </div>
            <p className="text-gray-300 mb-4">
              Building digital dams of distinction. We craft websites that stand the test of time.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="text-gray-300 hover:text-wood transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-wood transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-wood transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-wood transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-4 border-b border-wood pb-2">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-wood transition-colors">UI/UX Design</a></li>
              <li><a href="#" className="text-gray-300 hover:text-wood transition-colors">WordPress Development</a></li>
              <li><a href="#" className="text-gray-300 hover:text-wood transition-colors">Web Applications</a></li>
              <li><a href="#" className="text-gray-300 hover:text-wood transition-colors">E-commerce Solutions</a></li>
              <li><a href="#" className="text-gray-300 hover:text-wood transition-colors">SEO Optimization</a></li>
            </ul>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 border-b border-wood pb-2">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-wood transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-wood transition-colors">Portfolio</a></li>
              <li><a href="#" className="text-gray-300 hover:text-wood transition-colors">Testimonials</a></li>
              <li><a href="#" className="text-gray-300 hover:text-wood transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-300 hover:text-wood transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4 border-b border-wood pb-2">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-wood" />
                <a href="mailto:info@webbeaver.com" className="text-gray-300 hover:text-wood transition-colors">
                  info@webbeaver.com
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-wood" />
                <a href="tel:+1234567890" className="text-gray-300 hover:text-wood transition-colors">
                  +1 (234) 567-890
                </a>
              </li>
              <li className="mt-4">
                <a 
                  href="#contact" 
                  className="px-4 py-2 bg-wood text-white rounded-lg inline-block hover:bg-wood-dark transition-colors"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom bar */}
        <div className="border-t border-gray-700 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} WebBeaver. All rights reserved. 
          </p>
          <p className="text-gray-400 text-sm mt-2 md:mt-0">
            Crafted with 🌲 by the Beaver Colony
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
