import useDocumentTitle from "../../useDocumentTitle";

import About from "../About/About";
import Hero from "../Hero/Hero";

const Home = () => {
  useDocumentTitle("Home");

  return (
    <>
      <Hero />
      <About />
    </>
  );
};

export default Home;
