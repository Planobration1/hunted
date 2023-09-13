import { useRef, useEffect } from "react";
import { Link, useLocation } from 'react-router-dom'
import Logo from '../assets/HuntedLogo.png'
import './Header.css'

function Header({connectWalletPressed, walletAddress}) {
  const location = useLocation()
  const activeLinkRef = useRef(null);
  const burgerRef = useRef(null);
  const modalContentRef = useRef(null);

  const handleBurgerClick = (e) => {
    const target = e.currentTarget;
    if (target.classList.contains("active")) {
      target.classList.remove("active");
      return;
    }
    target.classList.add("active");
  };

  const handleLinkClick = (e) => {
    if (activeLinkRef.current?.classList.contains("active")) {
      activeLinkRef.current.classList.remove("active");
    }
    burgerRef.current?.classList.remove("active");

    e.currentTarget.classList.add("active");
    activeLinkRef.current = e.currentTarget;
  };

  const handleConnectWalletClick = (e) => {

    if (activeLinkRef.current?.classList.contains("active")) {
      activeLinkRef.current.classList.remove("active");
    }
    burgerRef.current?.classList.remove("active");

    e.currentTarget.classList.add("active");
    connectWalletPressed() 
  }

  const handleOutsideClick = (e) => {
    if (
      (modalContentRef.current &&
        modalContentRef.current?.contains(e.target)) ||
      window.innerWidth > 992
    ) {
      return;
    }

    burgerRef.current.classList.remove("active");
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  });
  return (
    <header>
      <div className="container-fluid">
        <nav
          ref={modalContentRef}
          className="navbar navbar-expand-xl justify-content-between "
        >
          <Link to="/#root" className="navbar-brand flex-grow-1">
            <img src={Logo} alt="logo" className="logoImg"></img>
          </Link>
          <div className="flex-grow-1">
            <div
              ref={burgerRef}
              className="burger_bar_container"
              onClick={handleBurgerClick}
            >
              <div className="bar1 bars"></div>
              <div className="bar2 bars"></div>
              <div className="bar3 bars"></div>
            </div>
            <div
              className="navbar-collapse header--content"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mb-2 mb-lg-0 align-items-center flex-grow-1 flex-shrink-0 navigation">
                <li className="nav-item">
                  <a
                    onClick={handleLinkClick}
                    className="nav-link"
                    href="#features"
                  >
                    <span>Features</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    onClick={handleLinkClick}
                    className="nav-link"
                    href="#about"
                  >
                    <span>About</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    onClick={handleLinkClick}
                    className="nav-link"
                    href="#roadmap"
                  >
                    <span>Roadmap</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    onClick={handleLinkClick}
                    className="nav-link"
                    href="#team"
                  >
                    <span>Team</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a 
                  onClick={handleLinkClick} 
                  className="nav-link" 
                  href="#faq"
                  >
                    <span>FAQ</span>
                  </a>
                </li>
                <li className="nav-item nav--social ms-auto">
                  <a
                    className="nav-link nav-link_icon"
                    href="https://www.instagram.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a
                    className="nav-link nav-link_icon"
                    href="https://twitter.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a
                    className="nav-link nav-link_icon"
                    href="https://discord.gg"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fab fa-discord"></i>
                  </a>
                </li>
                <li className={`nav-item nav--social flex-shrink-0 ms-3`}>
                  {
                    location.pathname.includes('originalshiba') ?
                    <a 
                    href='https://opensea.io'
                    className="jdl nav-link nav-link_icon nav-link_icon-fluid d-flex align-items-center justify-content-center">
                      <span className="text-uppercas">buy on opensea</span>
                    </a> :
                      <a
                      onClick={handleConnectWalletClick}
                      className="jdl nav-link nav-link_icon nav-link_icon-fluid d-flex align-items-center justify-content-center"
                      style={{cursor: 'pointer'}}
                      >
                        {walletAddress?.length > 0 ? (
                          String(walletAddress).substring(0, 6) +
                          "..." +
                          String(walletAddress).substring(38)
                        ) : (
                          <span className="text-uppercas">Connect wallet</span>
                        )}
                      </a>
                      // walletAddress ?
                      // <a
                      // onClick={disconnectWallet}
                      // className="jdl nav-link nav-link_icon nav-link_icon-fluid d-flex align-items-center justify-content-center"
                      // style={{cursor: 'pointer'}}
                      // >
                      //     {String(walletAddress).substring(0, 6) +
                      //     "..." +
                      //     String(walletAddress).substring(38)}
                        
                      // </a> :
                      // <a
                      // onClick={handleConnectWalletClick}
                      // className="jdl nav-link nav-link_icon nav-link_icon-fluid d-flex align-items-center justify-content-center"
                      // style={{cursor: 'pointer'}}
                      // >
                      //     <span className="text-uppercas">Connect wallet</span>
                      // </a>
                      
                  }
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
