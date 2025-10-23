import React from "react";
import { Link } from "react-router-dom"; // Link is not used for scrolling
import { Linkedin, Mail, ArrowUpCircle } from "lucide-react"; // Import new icons
import { Button } from "@/components/ui/button"; // Import your button

const Footer = () => {

  // Function to handle scrolling to the top
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer id="contact" className="bg-saas-black border-t border-gray-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* New 2-Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          
          {/* Column 1: Info, Address, Socials */}
          <div className="col-span-1">
            <a 
              href="#" 
              onClick={handleScrollToTop} // Scrolls to top on click
              className="inline-block mb-4"
            >
              <span className="text-2xl font-bold bg-gradient-to-r from-saas-orange to-amber-500 bg-clip-text text-transparent">
                Jayachandran J
              </span>
            </a>
            <p className="text-gray-400 mb-6">
              A corporate strategist and revenue architect who partners with large-scale enterprises to design and build new, highly-profitable business verticals.</p>
            
            {/* Address */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2 text-white">Contact Info</h3>
              <p className="text-gray-400">
                jayachandranj@visionoptimize.com
                <br/>
                Chennai - 600018,
                <br />
                Tamil Nadu, India
              </p>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 mb-8">
              <a
                href="mailto:jayachandranj@visionoptimize.com"
                className="text-gray-400 hover:text-saas-orange transition-colors"
                aria-label="Email"
              >
                <Mail className="h-6 w-6" />
              </a>
              <a
                // IMPORTANT: Replace with your boss's LinkedIn URL
                href="https://www.linkedin.com/in/jayachandran-jayaraman-a14138110?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app " 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-saas-orange transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-6 w-6" />
              </a>
            </div>

            {/* Back to Top Button */}
            <Button
              variant="outline"
              className="border-saas-orange text-saas-orange hover:bg-saas-orange hover:text-white"
              onClick={handleScrollToTop}
            >
              <ArrowUpCircle className="mr-2 h-4 w-4" />
              Back to Top
            </Button>
          </div>

          {/* Column 2: Contact Form */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4 text-white">Write to Us</h3>
            <p className="text-gray-400 mb-6">
             Want to discuss a custom revenue plan for your company or explore its feasibility?
            </p>
            
            {/* IMPORTANT: This form needs a service like Formspree.
              1. Go to formspree.io and create a new form.
              2. Replace the 'action' URL below with your unique Formspree URL.
            */}
            <form 
              action="https://formspree.io/f/xpwygvzo" // <-- REPLACE THIS
              method="POST" 
              className="space-y-4"
            >
              <div>
                <label htmlFor="organization" className="block text-sm font-medium text-gray-300 mb-2">
                  Organization Name
                </label>
                <input
                  type="text"
                  name="organization"
                  id="organization"
                  className="w-full bg-saas-darkGray border-gray-700 text-white rounded-lg p-3 border focus:border-saas-orange focus:ring-saas-orange"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="w-full bg-saas-darkGray border-gray-700 text-white rounded-lg p-3 border focus:border-saas-orange focus:ring-saas-orange"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Discussion Topic / Innovation
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  className="w-full bg-saas-darkGray border-gray-700 text-white rounded-lg p-3 border focus:border-saas-orange focus:ring-saas-orange"
                  required
                ></textarea>
              </div>
              <div>
                <Button 
                  type="submit"
                  className="bg-saas-orange hover:bg-orange-600 text-white font-semibold w-full"
                >
                  Submit Proposal
                </Button>
              </div>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>
            © {new Date().getFullYear()} Jayachandran J. All rights reserved.
            {/* The broken <img> tag was here and has been removed. */}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

