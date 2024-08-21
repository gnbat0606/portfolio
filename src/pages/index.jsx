import { Header, AboutMe } from "@/components";

const Home = () => {
  return (
    <div className="flex flex-col gap-12 w-[1440] max-w-8xl mx-auto">
      <Header />
      <AboutMe />
    </div>
  );
};

export default Home;
