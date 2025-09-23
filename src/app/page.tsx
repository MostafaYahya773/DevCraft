import Hero from './_Components/Hero';
import Gallery from './_Components/Gallery';
import Services from './_Components/Services';
import Projects from './_Components/Projects';
import OurTeam from './_Components/OurTeam';
import Reviews from './_Components/Reviews';

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Projects />
      <OurTeam />
      <Reviews />
      <Gallery />
    </>
  );
}
