import React from 'react';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
          <div className="p-8 sm:p-12">
            <h2 className="text-3xl font-display font-bold text-secondary mb-3 text-center">
              Ready to Conquer the Japanese Market?
            </h2>
            <p className="text-gray-500 text-center mb-10">
              Fill out the form below. Our strategists will review your site and provide a preliminary market assessment.
            </p>
            
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    className="bg-gray-50 focus:bg-white block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm py-3 px-4 border transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">Company Name</label>
                  <input
                    type="text"
                    id="company"
                    className="bg-gray-50 focus:bg-white block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm py-3 px-4 border transition-colors"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Work Email</label>
                <input
                  type="email"
                  id="email"
                  className="bg-gray-50 focus:bg-white block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm py-3 px-4 border transition-colors"
                />
              </div>

              <div>
                <label htmlFor="objective" className="block text-sm font-medium text-gray-700 mb-1">Primary Market Objective</label>
                <div className="relative">
                  <select
                    id="objective"
                    className="bg-gray-50 focus:bg-white block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm py-3 px-4 border appearance-none transition-colors"
                  >
                    <option>Market Entry / Launch</option>
                    <option>Lead Generation Growth</option>
                    <option>Brand Awareness</option>
                    <option>E-commerce Expansion</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="w-full flex justify-center py-4 px-4 border border-transparent rounded-md shadow-md text-base font-bold text-white bg-primary hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all mt-4"
              >
                Request Consultation
              </button>
              
              <p className="text-xs text-center text-gray-400 mt-4">
                By submitting this form, you agree to our privacy policy. We respect your inbox.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;