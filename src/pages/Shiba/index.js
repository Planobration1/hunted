import { default as HomeSection } from "./sections/Home";
import RoadMap from "./sections/Roadmap";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Features from "./sections/Features";
import GoldenGuests from "./sections/GoldenGuests";
import Team from "./sections/Team";
import About from "./sections/About";
import FAQ from "./sections/FAQ";

function Shiba() {
  return (
    <>
      <Header />
      <HomeSection />
      {/* <Mint/> */}
      <Features />
      <About />
      <GoldenGuests/>
      <RoadMap />
      <Team/>
      <FAQ />
      <Footer />
    </>
  );
}

export default Shiba;
