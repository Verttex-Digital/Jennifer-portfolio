import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Portfolio from './components/Portfolio/Portfolio';
import About from './components/AboutUs/About';
import Contact from './components/ContactForm/Contact';
import Footer from './components/Footer/Footer';
import WhatsappButton from './components/WhatsappButton/WhatsappButton';

function App() {
  return (
    <div className="min-h-screen bg-neutral-50">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Portfolio />
        <Contact />
        <WhatsappButton/>
      </main>
      <Footer />
    </div>
  );
}

export default App;