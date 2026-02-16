import React from 'react';
import { TrendingUp, MousePointerClick, FileEdit, Handshake } from 'lucide-react';

const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: <TrendingUp size={24} />,
      title: "Japan SEO",
      desc: "Technical and content SEO optimized for Yahoo! Japan and Google Japan algorithms."
    },
    {
      icon: <MousePointerClick size={24} />,
      title: "Localized PPC",
      desc: "High-performing ad campaigns on Google Ads, Yahoo! Ads, and Facebook/Instagram."
    },
    {
      icon: <FileEdit size={24} />,
      title: "Content Localization",
      desc: "More than translation—transcreation of blogs, LPs, and whitepapers for local impact."
    },
    {
      icon: <Handshake size={24} />,
      title: "Trade Support",
      desc: "Digital support for trade shows, B2B lead generation, and sales enablement assets."
    }
  ];

  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-display font-bold text-secondary">
            Comprehensive Market Entry Services
          </h2>
          <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
            End-to-end support for your Japanese digital expansion.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => (
            <div 
              key={idx} 
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 group cursor-default"
            >
              <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-white transition-colors text-secondary">
                {service.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;