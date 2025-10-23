import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What types of companies benefit most from your blueprints?",
    answer: "Our strategies are designed for large-scale corporations, typically in sectors like energy, finance, or retail, that possess existing networks (physical outlets, distributors, large customer databases) and are looking to build major new revenue streams."
  },
  {
    question: "How is your engagement model structured?",
    answer: "We act as strategic partners. Engagements typically begin with a high-level Strategic Workshop to identify the opportunity. From there, we can develop a 'Full Revenue Blueprint' and, if desired, remain as long-term advisors to oversee implementation."
  },
  {
    question: "Are your strategic blueprints customized?",
    answer: "Yes, 100%. While our *principles* of leveraging assets are proven, the final blueprint is a bespoke strategy, meticulously tailored to your company's unique assets, customer data, market position, and regulatory landscape."
  },
  {
    question: "What is the typical timeline for a 'Full Revenue Blueprint'?",
    answer: "A full, actionable blueprint is a comprehensive strategic document, not a simple report. While each project's scope varies, a typical blueprint is delivered in 8-12 weeks, followed by a phased 6-18 month implementation roadmap."
  },
  {
    question: "How do you handle our sensitive corporate data and strategy?",
    answer: "Confidentiality is paramount. All engagements are governed by a strict mutual non-disclosure agreement (NDA) to ensure your proprietary data, internal operations, and the resulting strategic plan are fully protected."
  },
  {
    question: "How is your firm compensated for its services?",
    answer: "We structure our partnerships for mutual success. This often involves a fixed fee for the initial 'Strategic Workshop' or 'Full Revenue Blueprint,' combined with a success-based commission tied to the new revenue generated from our implemented strategy."
  }
];

const FaqSection = () => {
  return (
    <div className="bg-saas-black py-16 md:py-24 border-t border-gray-800">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Engagement <span className="gradient-text">Process</span>
          </h2>
          <p className="text-gray-400">
            Answers to key questions about our strategic partnership and blueprint development process.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto bg-saas-darkGray rounded-xl p-6 md:p-8 border border-gray-800 card-shadow">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-800 last:border-0">
                <AccordionTrigger className="text-left text-white hover:text-saas-orange py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-400 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default FaqSection;
