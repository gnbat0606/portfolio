import {
  Header,
  AboutMe,
  WebTop,
  Skills,
  Experience,
  Work,
  Contact,
  Footer,
} from "@/components";

const Home = () => {
  return (
    <div className="flex flex-col items-center w-[1440] max-w-8xl mx-auto">
      <Header />
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
