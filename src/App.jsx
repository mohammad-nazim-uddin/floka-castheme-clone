import React from 'react';
import CustomCursor from './components/CustomCursor';
import Header from './components/Header';
import Hero from './components/Hero';
import Statement from './components/Statement';
import Expertise from './components/Expertise';
import Portfolio from './components/Portfolio';
import About from './components/About';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Footer from './components/Footer';
import { CeoProfile } from './components/CeoProfile';

function App() {
  return (
    <div className="bg-black min-h-screen text-white select-none">
      <CustomCursor />
      <Header />
      <main>
        <Hero />
        <Statement />
        <CeoProfile/>
        <Expertise />
        <Portfolio />
        <About />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
