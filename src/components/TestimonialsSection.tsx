import React from 'react';

// NEW CONTENT: Changed from 'testimonials' to 'principles'
// Added <span> tags for visual highlighting
const principles = [
  {
    text: "We forge certainty, we don't entertain guesses. Our strategies are built on <span class=\"text-saas-orange font-medium\">a brilliant, definitive analysis of your data, the most exciting market trends, and the maximum value hidden in your assets.</span> We unlock the true, prosperous opportunity first, then design the plan for your guaranteed breakthrough.",
    author: "Confident Validation",
    position: "Principle 01",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto-format&fit=crop&w=100&h=100" // Abstract data/charts
  },
  {
    text: "Why start over when you can power up? The shortest, most profitable distance to success is <span class=\"text-saas-orange font-medium\">exponentially leveraging the assets you already own: your magnetic network, your proprietary goldmine of data, and your deep-rooted customer loyalty.</span>",
    author: "Strategy Must Be Data-Driven",
    position: "Principle 02",
    image: "https://images.unsplash.com/photo-1542744173-05336fcc7ad4?auto-format&fit=crop&w=100&h=100" // Abstract network/connections
  },
  {
    text: "We bypass theory for tangible wins. We don't deliver lengthy reports,<span class=\"text-saas-orange font-medium\"> we hand you inspiring, phased roadmaps,from a powerful 6-month launch to a thriving 3-year scaled ecosystem</span>. We provide the strategic how that fuels immediate action, making your future a vibrant reality.",
    author: "Leverage Existing Assets",
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

