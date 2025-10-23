import React from 'react';
import { Check, Search, Settings, User, Home, Calendar } from 'lucide-react';

const features = [
  {
    icon: <Search className="h-6 w-6 text-saas-orange" />,
    title: 'Data-Driven Opportunity Analysis',
    description: 'We identify and validate new, high-margin revenue opportunities hidden within your existing customer and asset data.'
  },
  {
    icon: <Settings className="h-6 w-6 text-saas-orange" />,
    title: 'FinTech & Payments Architecture',
    description: 'Design for low-cost, cloud-native payment systems that slash legacy FX costs and leverage existing real-time rails.'
  },
  {
    icon: <User className="h-6 w-6 text-saas-orange" />,
    title: 'Network Monetization Strategy',
    description: 'Transform your physical/digital networks  into new business verticals.'
  },
  {
    icon: <Home className="h-6 w-6 text-saas-orange" />,
    title: 'Digital Ecosystem Blueprint',
    description: 'A complete architectural plan for your new digital platform.'
  },
  {
    icon: <Calendar className="h-6 w-6 text-saas-orange" />,
    title: 'Phased MVP Roadmap',
    description: 'An actionable 6-18 month plan to take your concept from Phase 1  to Phase 3 (Scale & Monetize) for rapid market entry.'
  },
  {
    icon: <Check className="h-6 w-6 text-saas-orange" />,
    title: 'Regulatory & Financial Modeling',
    description: 'We deliver verifiable financial models  and clear roadmaps for regulatory compliance .'
  }
];

const FeaturesSection = () => {
  return (
    <div className="bg-saas-black py-16 md:py-24">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Core Components of Our <span className="gradient-text">Revenue Blueprints</span>
          </h2>
          <p className="text-gray-400">
            We deliver complete, data-backed strategies to help large 
            corporations unlock new revenue streams and optimise existing assets.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-saas-darkGray p-6 rounded-xl border border-gray-800 hover:border-saas-orange/50 transition-all duration-300 card-shadow"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="bg-saas-orange/10 w-12 h-12 flex items-center justify-center rounded-lg mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;