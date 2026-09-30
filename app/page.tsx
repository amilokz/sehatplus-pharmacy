import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import Catalog from "@/components/Catalog";
import PrescriptionUpload from "@/components/PrescriptionUpload";
import HowItWorks from "@/components/HowItWorks";
import Trust from "@/components/Trust";
import HealthTips from "@/components/HealthTips";
import ServiceAreas from "@/components/ServiceAreas";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative bg-white">
      <Navbar />
      <Hero />
      <Categories />
      <Catalog />
      <PrescriptionUpload />
      <HowItWorks />
      <Trust />
      <HealthTips />
      <ServiceAreas />
      <Faq />
      <Footer />
    </main>
  );
}
