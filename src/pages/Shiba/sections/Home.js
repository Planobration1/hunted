import { useEffect, useState } from 'react'
import BannerMobile from '../../../assets/baby_banner_mobile.png'
import Banner from '../../../assets/baby_banner_desktop.png'

import './Home.css'

function Home() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth)

    window.addEventListener('resize', handleResize)
  }, [])

  return (
    <section
      id="home-baby"
      className="position-relative content-inner d-flex align-items-end justify-content-center"
    >
      <img src={windowWidth > 992 ? Banner : BannerMobile} alt="" />
      <h1 className='text-uppercase text-center'>baby shiba social club</h1>
    </section>
  );
}

export default Home;
