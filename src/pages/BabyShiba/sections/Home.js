import { useEffect, useState } from 'react'
// import BannerMobile from '../../../assets/baby_banner_mobile.png'
import Banner from '../../../assets/baby_banner_desktop.png'

import './Home.css'

function Home() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth)

    window.addEventListener('resize', handleResize)
  }, [])

  function red() {
    window.location.href = 'https://opensea.io'
  }

  return (
    <section
      id="home-baby"
      className="position-relative content-inner d-flex align-items-end justify-content-center"
    >
      {/* <img src={windowWidth > 992 ? Banner : BannerMobile} alt="" /> */}
      <img src={Banner} alt="" />
      <h1 className='text-uppercase text-center'>The Hunted</h1>
      <div onClick={red} className="mb-only abc">buy on opensea</div>
    </section>
  );
}

export default Home;
