import Aboutme from "@/components/Aboutme";
import ContactMe from "@/components/ContactMe";
import Herosection from "@/components/Herosection";
import Myskills from "@/components/Myskills";


export default function Home() {
  return (
    <div>
      <Herosection />
      <Aboutme />
      <Myskills />
      <ContactMe />
    </div>
  );
}
