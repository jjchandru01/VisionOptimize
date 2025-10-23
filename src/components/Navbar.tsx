import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Function to check if a link is active
  const isActive = (path: string) => {
    // MODIFIED: Check against the hash as well
    return location.pathname + location.hash === path;
  };

  // NEW FUNCTION: Handles the smooth scroll
  const handleScrollToContact = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    // We don't need e.preventDefault() because the <Link> component
    // will handle the hash change in the URL. We just add the scroll.
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    // Close mobile menu if open
    if (isOpen) {
      setIsOpen(false);
    }
  };

  // NEW FUNCTION: Handles scrolling to the top
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    // Close mobile menu if open
    if (isOpen) {
      setIsOpen(false);
    }
  };

  return (
    <nav className="bg-saas-black bg-opacity-90 backdrop-blur-sm sticky top-0 z-50 border-b border-saas-darkGray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center" onClick={handleScrollToTop}>
              <span className="text-2xl font-bold bg-gradient-to-r from-saas-orange to-amber-500 bg-clip-text text-transparent">
                {/* CONTENT CHANGED */}
                J Jayachandran 
              </span>
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-4">
              <Link
                to="/"
                // ADDED: onClick handler
                onClick={handleScrollToTop}
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  isActive("/")
                    ? "text-saas-orange"
                    : "text-white hover:text-saas-orange"
                }`}
              >
                Home
              </Link>
              
              {/* REMOVED: Roadmap Link */}
              {/* REMOVED: Pricing Link */}

              <Link
                // UPDATED: Changed path to a hash link
                to="/#contact" 
                // ADDED: onClick handler
                onClick={handleScrollToContact}
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  isActive("/#contact") // UPDATED: Matched hash path
                    ? "text-saas-orange"
                    : "text-white hover:text-saas-orange"
                }`}
              >
                Contact
              </Link>

              {/* REMOVED: Blog Link */}

              {/* ADDED: LinkedIn Link (opens in new tab) */}
              <a
                // IMPORTANT: Replace this with your boss's actual LinkedIn URL
                href="https://www.linkedin.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-2 text-sm font-medium text-white hover:text-saas-orange transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* CTA Button (Removed, as it was invisible) */}

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-white focus:outline-none"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-saas-darkGray">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              // FIXED: This link now correctly points to Home
              to="/"
              // ADDED: onClick handler
              onClick={handleScrollToTop}
              className={`block px-3 py-2 text-base font-medium ${
                isActive("/") 
                  ? "text-saas-orange"
                  : "text-white hover:text-saas-orange"
              }`}
            >
              Home
            </Link>

            {/* REMOVED: Roadmap Link */}
            {/* REMOVED: Pricing Link */}

            <Link
              // UPDATED: Path is now a hash link
              to="/#contact"
              // ADDED: onClick handler
              onClick={handleScrollToContact}
              className={`block px-3 py-2 text-base font-medium ${
                isActive("/#contact") // UPDATED: Matched hash path
                  ? "text-saas-orange"
                  : "text-white hover:text-saas-orange"
              }`}
            >
              Contact
            </Link>

            {/* REMOVED: Blog Link */}

            {/* ADDED: LinkedIn Link (opens in new tab) */}
            <a
              // IMPORTANT: Replace this with your boss's actual LinkedIn URL
              href="https://www.linkedin.com/in/jayachandran-jayaraman-a14138110?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app "
              target="_blank"
              rel="noopener noreferrer"
              className="block px-3 py-2 text-base font-medium text-white hover:text-saas-orange"
              onClick={() => setIsOpen(false)}
            >
              LinkedIn
            </a>
            
            {/* REMOVED: "Get Template" button */}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

