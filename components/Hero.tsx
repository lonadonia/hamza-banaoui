import React from 'react';
import { CheckCircle2, Mail } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden min-h-screen flex items-center bg-white">
      
      {/* Professional Background Layer */}
      <div className="absolute inset-0 z-0">
        {/* Base Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50/20"></div>
        
        {/* Subtle Dot Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03] pointer-events-none" 
          style={{ 
            backgroundImage: 'radial-gradient(#0F2C59 1.5px, transparent 1.5px)', 
            backgroundSize: '32px 32px' 
          }}
        ></div>

        {/* Ambient Glows */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[100px] pointer-events-none"></div>

        {/* Integrated Hero Image */}
        <div className="absolute top-0 right-0 w-full lg:w-[60%] h-full overflow-hidden pointer-events-none">
          <div className="relative w-full h-full">
            {/* Gradient Overlays for smooth blending */}
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent z-10"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent z-10"></div>
            
            {/* High-quality Tokyo Architecture Image */}
            <img
              src="https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=2070&auto=format&fit=crop"
              alt="Modern Tokyo Architecture"
              className="w-full h-full object-cover object-center opacity-40 mix-blend-multiply filter contrast-125 saturate-0" 
            />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Content */}
          <div className="lg:col-span-7 space-y-8 animate-fade-in-up">
            <span className="inline-block px-3 py-1 rounded-full bg-blue-50 text-secondary text-xs font-bold tracking-wider uppercase mb-2 border border-blue-100">
              Japan Market Specialists
            </span>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-display font-bold text-secondary leading-[1.1]">
              Entering Japan Is Not a <span className="text-primary">Marketing Problem</span>. <br className="hidden lg:block" />
              It’s a Market <span className="relative inline-block after:content-[''] after:absolute after:bottom-2 after:left-0 after:w-full after:h-4 after:bg-primary/20 after:-z-10">Adaptation</span> Problem.
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl leading-relaxed">
              We bridge the gap between global ambition and local reality. Mahana helps foreign executives navigate Japan's unique digital ecosystem with data-backed localization strategies.
            </p>
            
            <div className="space-y-4 pt-2">
              {[
                "Native Japanese SEO & Content Strategy",
                "Bilingual Account Management & Reporting",
                "Culturally Compliant UX Adaptation"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <CheckCircle2 className="text-green-500 flex-shrink-0" size={20} />
                  <span className="text-gray-800 font-medium">{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-6">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-md text-white bg-secondary hover:bg-[#0a2145] shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
              >
                Request Japan Market Assessment
              </a>
              <p className="mt-3 text-sm text-gray-500">No commitment required. Confidential analysis.</p>
            </div>
          </div>

          {/* Right Content - Form Card */}
          <div className="lg:col-span-5">
            <div className="bg-white p-8 rounded-xl shadow-2xl border border-gray-100 relative overflow-hidden group hover:shadow-3xl transition-shadow duration-500">
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-primary to-secondary"></div>
              
              <h3 className="text-xl font-bold text-secondary mb-2">Get Your Free Strategy Brief</h3>
              <p className="text-sm text-gray-500 mb-6">Enter your work email to schedule a preliminary consultation call.</p>
              
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label htmlFor="email-hero" className="block text-sm font-medium text-gray-700 mb-1">Work Email</label>
                  <div className="relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail className="text-gray-400" size={18} />
                    </div>
                    <input
                      type="email"
                      name="email-hero"
                      id="email-hero"
                      className="bg-gray-50 focus:bg-white focus:ring-2 focus:ring-primary focus:border-primary block w-full pl-10 sm:text-sm border-gray-300 rounded-md py-3 text-gray-900 placeholder-gray-400 border transition-colors"
                      placeholder="name@company.com"
                    />
                  </div>
                </div>
                <button
                  type="button"
                  className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-bold text-white bg-primary hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors"
                >
                  Get Strategy Call
                </button>
              </form>

              <div className="mt-6 pt-6 border-t border-gray-100 flex items-center justify-center gap-3">
                <div className="flex -space-x-3">
                  <img
                    className="w-9 h-9 rounded-full border-2 border-white object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuC7euwAs7t1YDMw6SVyzusDRpESCKtBmhCufjgR0WvKUNfg-dNzfGeO5X1fOa5W94sZcZFpZRBKY3FIoNlxmbxjjhDqobku1vCdsmmrflrnfL6zJVhSpumPt9zn9TNSDIcD38Znnx1rj0HZA9bu0hxh0CNJguuF9thGltx6rK10CHdDtIF1ZF17gJDEwD_9juibZlsQ7KLrAImSVRnUze1KnFIvt_-ezlLVDeQU-WrWC3xaaGg8247VZd_vh5E36Az4asn7HjpjYUs"
                    alt="Advisor 1"
                  />
                  <img
                    className="w-9 h-9 rounded-full border-2 border-white object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBLDsyc7JNSfcdYO2tLZuXPaZDLjiWrmWeUnAyu9e1EmF6vWaDfS54E8FF7kqKMySMio0YpmF3KWyfT_3CH0YRIDZZ_0fDmH-U5AbNwl-c4uLP1Vl7Sy2qdTZqiGi3akeVMJ8nzSc-TrTzK0CT0Z8ye6omrYZoVq9brK2OYJjNoxKerePeLKUoARZwNgKVOMQudxfQIx3_ZjIUgUKzHY_Le4bMvXvGpFT1ehHer2-DECzR_tmz9sKiWV_RV4oVUYVYA4ZFwwaiNP9I"
                    alt="Advisor 2"
                  />
                </div>
                <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Join 200+ Execs</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;