import React from 'react';
import { Languages, Search, ShieldAlert } from 'lucide-react';

const ProblemSection: React.FC = () => {
  const problems = [
    {
      icon: <Languages size={32} />,
      title: "Direct Translation Fails",
      description: "Japanese consumers distrust direct translations. Nuance, honorifics (Keigo), and context are critical for building brand authority.",
      colorClass: "bg-blue-100 text-secondary",
    },
    {
      icon: <Search size={32} />,
      title: "Unique Keyword Behavior",
      description: "Japanese users search differently. They use unique phrasing and combinations that Western keyword tools often miss completely.",
      colorClass: "bg-orange-100 text-primary",
    },
    {
      icon: <ShieldAlert size={32} />,
      title: "Risk-Averse Culture",
      description: "Trust is the currency of Japan. Without specific trust signals and detailed information, conversion rates remain stagnant.",
      colorClass: "bg-purple-100 text-purple-700",
    },
  ];

  return (
    <section id="problem" className="py-24 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary mb-4">
            Why Most Foreign Companies Struggle in Japan
          </h2>
          <p className="text-gray-500 text-lg">
            It's rarely about the product quality. It's about a fundamental disconnect in communication.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {problems.map((prob, idx) => (
            <div
              key={idx}
              className="p-8 rounded-xl bg-gray-50 border border-gray-100 hover:shadow-xl hover:bg-white transition-all duration-300 group"
            >
              <div className={`w-14 h-14 ${prob.colorClass} rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110`}>
                {prob.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{prob.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {prob.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;