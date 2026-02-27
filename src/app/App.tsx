import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { CurrentWork } from './components/CurrentWork';
import { Recommendations } from './components/Recommendations';
import { ProofOfImpact } from './components/ProofOfImpact';
import { Projects } from './components/Projects';
import { Toolkit } from './components/Toolkit';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Music } from './components/Music';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-11">
        <Hero />
        <CurrentWork />
        <Recommendations />
        <ProofOfImpact />
        <Toolkit />
        <Projects />
        <Music />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
