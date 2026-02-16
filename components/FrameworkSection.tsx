import React from 'react';

const FrameworkSection: React.FC = () => {
  const steps = [
    {
      num: 1,
      title: "Audit",
      desc: "Current asset analysis and competitor benchmarking within the local JP market.",
      active: true,
    },
    {
      num: 2,
      title: "Adaptation",
      desc: "Cultural localization of messaging, UI/UX adjustments, and keyword mapping.",
      active: false,
    },
    {
      num: 3,
      title: "Execution",
      desc: "Launch of PPC campaigns, content publication, and social media activation.",
      active: false,
    },
    {
      num: 4,
      title: "Optimization",
      desc: "Weekly data review, A/B testing, and continuous ROI improvement.",
      active: false,
    },
  ];

  return (
    <section id="framework" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl font-display font-bold text-secondary mb-4">
            Our 4-Step Japan Market Entry Framework
          </h2>
          <div className="h-1.5 w-24 bg-primary rounded-full"></div>
        </div>

        <div className="relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-[2.5rem] left-0 w-full h-0.5 bg-gray-200 -z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, idx) => (
              <div
                key={idx}
                className={`bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center md:text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-md`}
              >
                <div
                  className={`w-14 h-14 rounded-full flex items-center justify-center font-bold text-xl mb-6 mx-auto md:mx-0 shadow-sm ring-4 ring-white ${
                    step.active
                      ? 'bg-secondary text-white'
                      : 'bg-white text-secondary border-2 border-secondary'
                  }`}
                >
                  {step.num}
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h4>
                <p className="text-sm text-gray-500 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameworkSection;