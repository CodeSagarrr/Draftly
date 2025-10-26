import { Process } from "./_Components/Process";
import Hero from "./_Components/Hero";
import Testimonial from "./_Components/Testimonial";
import { Features } from "./_Components/Features";
import FAQ from "./_Components/FAQ";
import Footer from "./_Components/Footer";

export default function Home() {

  return (
    <>
      <div>
          <Hero/>
          <Testimonial/>
          <Process/>
          <Features/>
          <FAQ/>
          <Footer/>
      </div>
    </>
  );
}
