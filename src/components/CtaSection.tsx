import React from 'react';
import { Button } from "@/components/ui/button";

const CtaSection = () => {
  return (
    <div className="bg-saas-darkGray py-16 md:py-20">
      <div className="section-container">
        <div className="bg-gradient-to-r from-saas-orange/20 to-amber-600/20 rounded-2xl p-8 md:p-12 relative overflow-hidden">
          {/* Abstract glow effect */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-saas-orange opacity-20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-600 opacity-10 rounded-full blur-3xl"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="md:w-2/3">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to build your next revenue engine?
              </h2>
              <p className="text-gray-300 mb-6 max-w-xl">
                Let's discuss how a proven, data-backed blueprint can leverage your existing corporate assets to unlock new, 9-figure revenue streams.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                {/* MODIFIED: Replaced two buttons with one "mailto" link styled as a button */}
                <a href="mailto:jayachandranj@visionoptimize.com">
                  <Button className="bg-saas-orange hover:bg-orange-600 text-white font-semibold">
                   Discuss Your Innovation
                  </Button>
                </a>
                {/* Removed the second button */}
              </div>
            </div>
            
            <div className="md:w-1/3">
              <img 
                src="https://images.unsplash.com/photo-1606857521015-7f9fcf423740?auto=format&fit=crop&w=300&h=300&q=80"
                alt="Corporate Strategy Meeting" // Changed alt text
                className="rounded-lg w-full card-shadow"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CtaSection;
