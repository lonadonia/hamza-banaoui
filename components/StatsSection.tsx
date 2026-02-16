import React from 'react';
import { Quote } from 'lucide-react';

const StatsSection: React.FC = () => {
  const stats = [
    { value: "+150%", label: "Lead Volume" },
    { value: "-40%", label: "CPA Reduction" },
    { value: "3X", label: "Organic Traffic" },
    { value: "12+", label: "Industries Served" },
  ];

  return (
    <section className="py-24 bg-secondary text-white relative overflow-hidden">
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6 md:gap-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center p-6 border border-white/10 rounded-xl bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors">
                <div className="text-4xl lg:text-5xl font-bold text-primary mb-2 font-display">{stat.value}</div>
                <div className="text-xs md:text-sm text-gray-300 uppercase tracking-widest font-medium">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Testimonial */}
          <div className="flex flex-col h-full justify-center">
            <Quote className="text-primary/40 mb-6" size={64} />
            <blockquote className="text-xl lg:text-2xl font-light italic leading-relaxed mb-8 text-gray-100">
              "Mahana didn't just translate our ads; they rebuilt our entire funnel for the Japanese mindset. The difference in engagement was immediate and profound."
            </blockquote>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-secondary font-bold text-lg">
                S
              </div>
              <div>
                <div className="font-bold text-white">Sarah Jenkins</div>
                <div className="text-sm text-primary font-medium">CMO, TechGlobal Solutions</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default StatsSection;