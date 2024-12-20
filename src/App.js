import "./App.css";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import ServicesSection from "./components/ServicesSection";
import Team from "./components/Team";
import Testimonials from "./components/Testimonials";

function App() {


  return (
    <div>
      <Navbar />
      <Hero />
      <Team />
      <ServicesSection />
      <Projects />
      <Testimonials />
      {/* WhatsApp Button */}
      <section id="contact" className="py-20 text-center">
        <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
        <a
          href={`https://api.whatsapp.com/send/?phone=%2B923308684458&text&type=phone_number&app_absent=0`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition duration-300"
        >
          Contact via WhatsApp
        </a>
      </section>
      <Footer />
    </div>
  );
}

export default App;
