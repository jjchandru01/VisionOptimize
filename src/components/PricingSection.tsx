import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Check } from 'lucide-react';

const PricingSection = () => {
  // We keep the 'isAnnual' state just to prevent breaking the code,
  // but we will hide the toggle and not use the prices.
  const [isAnnual, setIsAnnual] = useState(true); 
  
  const plans = [
    {
      name: 'Strategic Workshop',
      // Prices are no longer used
      monthlyPrice: 0,
      annualPrice: 0,
      description: 'An intensive, high-level analysis to identify and validate your next major revenue opportunity.',
      features: [
        'Executive-Level Discovery Workshop',
        'Internal Asset & Market Analysis',
        'High-Level Opportunity Modeling',
        'Competitive Landscape Review',
        'Actionable Insights Report'
      ],
      isPopular: false,
      ctaText: 'Request Analysis'
    },
    {
      name: 'Full Revenue Blueprint',
      monthlyPrice: 0,
      annualPrice: 0,
      description: 'Our flagship service: a complete blueprint to build and launch a new corporate revenue engine.',
      features: [
        'Comprehensive Financial & Unit Economics Model',
        'Regulatory & Compliance Framework',
        'Digital Platform & Ecosystem Architecture',
        'Phased Go-to-Market & Rollout Plan',
        'Key Partnership Strategy',
        'Based on our Proven, High-Growth Models'
      ],
      isPopular: true,
      ctaText: 'Commission a Blueprint'
    },
    {
      name: 'Long-Term Strategic Partner',
      monthlyPrice: 0,
      annualPrice: 0,
      description: 'A continuous advisory partnership to oversee implementation, optimization, and future growth.',
      features: [
        'Implementation & Project Oversight',
        'Quarterly Strategic Growth Reviews',
        'Ongoing Market & Trend Analysis',
        'Performance Scaling & Optimization Support',
        'New Opportunity Identification',
        'Direct Principal Advisory Access'
      ],
      isPopular: false,
      ctaText: 'Discuss Partnership'
    }
  ];

  return (
    <div className="bg-gradient-to-b from-saas-darkGray to-saas-black py-16 md:py-24">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Strategic <span className="gradient-text">Engagement</span> Models
          </h2>
          <p className="text-gray-400 mb-8">
            We offer tailored strategic partnerships to meet your corporation's goals.
          </p>
          
          {/* NOTE: I have hidden the pricing toggle as requested,
            since pricing is not relevant to this business model.
            The functionality is still in the code, but invisible.
          */}
          {/* <div className="flex items-center justify-center space-x-4 mb-12">
            <span className={`text-sm font-medium ${isAnnual ? 'text-saas-orange' : 'text-gray-400'}`}>
              Annual <span className="text-xs text-saas-orange">(Save 20%)</span>
            </span>
            <button 
              onClick={() => setIsAnnual(!isAnnual)}
              className={`relative inline-flex h-6 w-12 items-center rounded-full transition-colors ${isAnnual ? 'bg-saas-orange' : 'bg-gray-600'}`}
            >
              <span 
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${isAnnual ? 'translate-x-7' : 'translate-x-1'}`}
              />
            </button>
            <span className={`text-sm font-medium ${!isAnnual ? 'text-saas-orange' : 'text-gray-400'}`}>
              Monthly
            </span>
          </div>
          */}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`rounded-2xl p-8 transition-all duration-300 flex flex-col ${ // Added flex flex-col
                plan.isPopular 
                  ? 'bg-gradient-to-b from-saas-orange/20 to-saas-black border border-saas-orange/30 transform hover:-translate-y-2' 
                  : 'bg-saas-darkGray border border-gray-800 transform hover:-translate-y-1'
              }`}
            >
              {plan.isPopular && (
                <span className="bg-saas-orange text-saas-black text-xs font-bold px-3 py-1 rounded-full uppercase mb-4 inline-block self-start"> {/* Changed self-alignment */}
                  Our Flagship
                </span>
              )}
              
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <p className="text-gray-400 mb-6">{plan.description}</p>
              
              {/* NOTE: I have hidden the price display as requested.
              */}
              {/*
              <div className="mb-6">
                <span className="text-4xl font-bold">
                  ${isAnnual ? plan.annualPrice : plan.monthlyPrice}
                </span>
                <span className="text-gray-400"> /month</span>
              </div>
              */}
              
              <ul className="space-y-4 mb-8 flex-grow"> {/* Added flex-grow */}
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <Check className="h-5 w-5 text-saas-orange mr-2 shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button 
                className={`w-full ${
                  plan.isPopular 
                    ? 'bg-saas-orange hover:bg-orange-600 text-white' 
                    : 'bg-secondary border border-saas-orange/30 hover:border-saas-orange text-white'
                }`}
              >
                {plan.ctaText}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingSection;