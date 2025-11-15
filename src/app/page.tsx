import About from "~/components/About";
import FAQ from "~/components/FAQ";
import Footer from "~/components/Footer";
import Navbar from "~/components/Navbar";
import Prizes from "~/components/Prizes";
import Timeline from "~/components/Timeline";
import HeroSection from "~/components/Hero";
export default function HomePage() {
  return (
    <section>
      <Navbar />
      <HeroSection />
      <About />
      <Timeline />
      <Prizes />
      <FAQ />
      <Footer />
    </section>
  );
}
