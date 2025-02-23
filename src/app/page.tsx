import Aboutme from "@/components/Aboutme";
import ContactMe from "@/components/ContactMe";
import Experience from "@/components/Experience";
import Herosection from "@/components/Herosection";
import Myskills from "@/components/Myskills";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";


export default function Home() {
  return (
    <div>
      <Herosection />
      <Aboutme />
      <Myskills />
      <Portfolio />
      <Experience />
      <Testimonials />
      <ContactMe />
    </div>
  );
}
