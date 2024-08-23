import {
  Header,
  AboutMe,
  WebTop,
  Skills,
  Experience,
  Work,
  Contact,
  Footer,
  Navigation,
} from "@/components";
import { useState } from "react";

const Home = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col items-center w-[1440] max-w-8xl mx-auto">
      <Header setOpen={setOpen} />
      <Navigation open={open} />
      <WebTop />
      <AboutMe />
      <Skills />
      <Experience />
      <Work />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
