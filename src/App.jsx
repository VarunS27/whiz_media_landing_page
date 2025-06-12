import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./section/About";
import ClientsSection from "./section/Clients";
import ContactForm from "./section/contact";
import Hero from "./section/Hero";
import OfferingsPage from "./section/offer";
import GoalsSection from "./section/Ourgoals";
import AgencyResultsShowcase from "./section/Results";
import NichesSection from "./section/Services";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <NichesSection />
      <ClientsSection />
      <GoalsSection />
      <OfferingsPage />
      <AgencyResultsShowcase />
      <ContactForm />
      <Footer />
      
    </div>

    
  );
}

export default App;
