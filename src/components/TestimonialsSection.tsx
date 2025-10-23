import React from 'react';

// NEW CONTENT: Changed from 'testimonials' to 'principles'
// Added <span> tags for visual highlighting
const principles = [
  {
    text: "We don't guess; we validate. Our blueprints are built on a <span class=\"text-saas-orange font-medium\">rigorous analysis of your data</span>, market trends, and hidden asset value. We find the real opportunity before building the plan.",
    author: "Strategy Must Be Data-Driven",
    position: "Principle 01",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto-format&fit=crop&w=100&h=100" // Abstract data/charts
  },
  {
    text: "Why build from scratch? The fastest, most profitable path is <span class=\"text-saas-orange font-medium\">monetizing the assets you already own</span>: your network, your data, and your customer trust.",
    author: "Leverage Existing Assets",
    position: "Principle 02",
    image: "https://images.unsplash.com/photo-1542744173-05336fcc7ad4?auto-format&fit=crop&w=100&h=100" // Abstract network/connections
  },
  {
    text: "A 100-page report is useless. We deliver <span class=\"text-saas-orange font-medium\">actionable, phased roadmaps</span>—from a 6-month MVP to a 3-year scaled ecosystem. We provide the *how*, not just the *what*.",
    author: "Action Over Theory",
    position: "Principle 03",
    image: "https://images.unsplash.com/photo-1542744173-05336fcc7ad4?auto-format&fit=crop&w=100&h=100" // People in a meeting/planning
  }
];

const TestimonialsSection = () => {
  return (
    <div className="bg-saas-black py-16 md:py-24">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Guiding <span className="gradient-text">Strategic</span> Principles
          </h2>
          <p className="text-gray-400">
            Our blueprints are founded on a core philosophy that delivers consistent, scalable results.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* CONTENT CHANGED: Looping over 'principles' now */}
          {principles.map((principle, index) => (
            <div 
              key={index}
              // MODIFIED: Added transform, transition, and hover:scale properties for a smooth hover effect
              className="bg-gradient-to-b from-saas-darkGray to-saas-black border border-gray-800 rounded-xl p-6 card-shadow transform transition-all duration-300 ease-in-out hover:scale-105"
              // ADDED: Staggered animation delay, matching your other component
              style={{animationDelay: `${index * 0.1}s`}}
            >
              {/* NOTE: The 5-star rating was removed as it does not apply 
                to principles. This does not affect the design or layout.
              */}
              
              {/* MODIFIED: Using dangerouslySetInnerHTML to render the highlighted <span> tags */}
              <p 
                className="text-gray-300 mb-6 italic"
                dangerouslySetInnerHTML={{ __html: `"${principle.text}"` }}
              />
              
              <div className="flex items-center">
                <img 
                  src={principle.image}
                  alt={principle.author}
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                />
                <div>
                  <p className="font-semibold text-white">{principle.author}</p>
                  <p className="text-gray-400 text-sm">{principle.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;

