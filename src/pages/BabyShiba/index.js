import { useState, useEffect } from "react";
import { default as HomeSection } from "./sections/Home";
import RoadMap from "./sections/Roadmap";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Mint from "./sections/Mint";
import Features from "./sections/Features";
import Support from "./sections/Support";
import GoldenGuests from "./sections/GoldenGuests";
import Team from "./sections/Team";
import About from "./sections/About";
import FAQ from "./sections/FAQ";
import useScrollToHash from '../../scrollToHash';
import {
  connectWallet,
  getCurrentWalletConnected,
} from "../../util/interactV2";
import { toast, ToastContainer } from 'react-toastify'

import Logo from '../../assets/HuntedLogo.png'
import 'react-toastify/dist/ReactToastify.css'

// import { ReactComponent as Brand } from "../../assets/brand.svg";

const Loading = () => (
  <div className="loading--container">
    <img src={Logo} alt="logo" style={{width: 300}}></img>
  </div>
)
function BabyShiba() {
  useScrollToHash()

  const [isFontLoaded, setIsFontLoaded] = useState(false);

  useEffect(() => {
    let timeout
    document.fonts.ready.then(() => {
      timeout = setTimeout(() => {
        setIsFontLoaded(true)
      }, 1200)
    })

    return () => {
      clearTimeout(timeout);
    }
  })


  if(!isFontLoaded) return <Loading/>;

  return (
    <>
      <Header connectWalletPressed={connectWallet} walletAddress={getCurrentWalletConnected}/>
      <HomeSection />
      <Mint />
      <Features />
      <About />
      <Support />
      <GoldenGuests/>
      <RoadMap />
      <Team/>
      <FAQ /> 
      <Footer />
      <ToastContainer pauseOnFocusLoss={false} limit={1} />
    </>
  );
}

export default BabyShiba;
