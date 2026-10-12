import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { DemoVideoSection } from './components/DemoVideoSection';
import { Solutions } from './components/Solutions';
import { WorkflowDemo } from './components/WorkflowDemo';
import { Problems } from './components/Problems';
import { Process } from './components/Process';
import { About } from './components/About';
import { CtaBanner } from './components/CtaBanner';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';

export function App() {
  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <Navbar />
      <main id="main">
        <Hero />
        <DemoVideoSection />
        <Solutions />
        <WorkflowDemo />
        <Problems />
        <Process />
        <About />
        <CtaBanner />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}

export default App;
