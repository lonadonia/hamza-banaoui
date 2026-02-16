import React from 'react';

const ComparisonSection: React.FC = () => {
  const rows = [
    { feature: "Content Strategy", global: "Direct Translation", mahana: "Cultural Transcreation" },
    { feature: "Platform Expertise", global: "Google Only", mahana: "Google + Yahoo! Japan + LINE" },
    { feature: "Reporting", global: "Automated English Dashboards", mahana: "Bilingual Analysis & Insights" },
    { feature: "Local Presence", global: "Outsourced / None", mahana: "Based in Tokyo" },
  ];

  return (
    <section className="py-24 bg-white border-y border-gray-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-display font-bold text-secondary">
            Why Partner with Mahana?
          </h2>
        </div>

        <div className="overflow-hidden bg-white shadow-xl rounded-2xl border border-gray-100">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200">
                <th className="p-4 sm:p-6 text-sm font-semibold text-gray-500 w-1/3 uppercase tracking-wider">Feature</th>
                <th className="p-4 sm:p-6 text-sm font-bold text-gray-400 w-1/3 text-center uppercase tracking-wider">Typical Global Agency</th>
                <th className="p-4 sm:p-6 text-sm font-bold text-secondary bg-primary/10 w-1/3 text-center border-l-2 border-primary uppercase tracking-wider">Mahana</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {rows.map((row, idx) => (
                <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                  <td className="p-4 sm:p-6 text-sm font-medium text-gray-900">{row.feature}</td>
                  <td className="p-4 sm:p-6 text-center text-sm text-gray-500">{row.global}</td>
                  <td className="p-4 sm:p-6 text-center text-sm font-bold text-secondary bg-primary/5 border-l-2 border-primary">
                    {row.mahana}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;