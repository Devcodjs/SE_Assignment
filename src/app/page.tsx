import About from "./components/About";
import FAQ from "./components/FAQ";
import Prizes from "./components/Prizes";
import Timeline from "./components/Timeline";

export default function HomePage() {
  return (
    <section>
      <About />
      <Timeline />
      <Prizes />
      <FAQ />
    </section>
  );
}
