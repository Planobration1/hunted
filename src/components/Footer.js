import Logo from '../assets/HuntedLogo.png'

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row  align-items-center ">
                  <div className="col-lg-6 col-12 footer--social-container">

            <div className="social--wrapper">
              <h6 className="text-uppercase mb-4 fw-bold">follow us</h6>
              <div className="d-flex align-items-center">
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
              </div>
              <a
                className="nav-link nav-link_icon nav-link_icon-fluid mb-5"
                href="https://discord.gg"
                target="_blank"
                rel="noreferrer"
              >
                <span className="text-uppercas">join our discord</span>
              </a>
            </div>
          </div>
          <div className="col-lg-6 col-12 footer--brand">
            <div>
              <a href="/#root" className="navbar-brand mb-3 pt-4">
                <img src={Logo} alt="logo" className="logoImg"></img>
              </a>
              <h6>© 2023 The Hunted. All rights reserved</h6>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

