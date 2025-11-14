import About from "~/components/About";
import FAQ from "~/components/FAQ";
import Prizes from "~/components/Prizes";
import Timeline from "~/components/Timeline";
import HeroSection from "~/components/Hero";
export default function HomePage() {
  return (
    <section>
      <HeroSection />
      <About />
      <Timeline />
      <Prizes />
      <FAQ />
    </section>
  );
}
