
import React from 'react';
import { motion } from 'framer-motion';
import { Hero } from './components/Hero';
import { ValueDetail } from './components/ValueDetail';
import { Proof } from './components/Proof';
import { CTASection } from './components/CTASection';
import { Navbar } from './components/Navbar';
import { CustomCursor } from './components/CustomCursor';
import { MercuryBackground } from './components/MercuryBackground';

const FadeInSection: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 1.2, ease: [0.21, 0.45, 0.32, 0.9] }}
  >
    {children}
  </motion.div>
);

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen selection:bg-blue-600 selection:text-white bg-black">
      <CustomCursor />
      <MercuryBackground />
      <Navbar />
      
      <main className="relative z-10">
        {/* Hook / Value Prop */}
        <Hero />
        
        {/* Detailed Value Proposition */}
        <FadeInSection>
          <ValueDetail />
        </FadeInSection>
        
        {/* Proof */}
        <FadeInSection>
          <Proof />
        </FadeInSection>

        {/* Final CTA */}
        <FadeInSection>
          <CTASection />
        </FadeInSection>
      </main>

      <footer className="relative z-10 py-32 bg-black border-t border-white/5 overflow-hidden">
        <div className="px-8 md:px-24">
          <div className="text-[15vw] font-black text-white/5 leading-none tracking-tighter text-center select-none uppercase mb-20 pointer-events-none">
            KUSH ALCHEMY
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-600 text-[10px] uppercase tracking-[0.4em] font-black">
            <p>© {new Date().getFullYear()} Molecular Manufacturing.</p>
            <div className="flex space-x-12 mt-8 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">Lab Certification</a>
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
