import Hero from './_Components/Hero';
import Gallery from './_Components/Gallery';
import Services from './_Components/Services';
import Projects from './_Components/Projects';
import Reviews from './_Components/Reviews';
import WhyUs from './_Components/WhyUs';

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Projects />
      <WhyUs />
      <Reviews />
      <Gallery />
    </>
  );
}
