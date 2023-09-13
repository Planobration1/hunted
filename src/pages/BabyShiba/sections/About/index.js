import About1 from "../../../../assets/baby_about1.jpg";
import About2 from "../../../../assets/baby_about2.jpg";
import About3 from "../../../../assets/baby_about3.jpg";
import About4 from "../../../../assets/baby_about4.jpg";

import "./about.css";

function About() {
  return (
    <>
      <section id="about" className="section--spacing">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-lg-6 col-12 about--image-wrapper">
              <img src={About3} alt="Shiba Watches" loading="lazy" className="about--image" />
              <img src={About3} alt="Shiba Watches" loading="lazy" className="about--image" />
              <img src={About3} alt="Shiba Watches" loading="lazy" className="about--image" />
              <img src={About3} alt="Shiba Watches" loading="lazy" className="about--image" />
            </div>
            <div className="col-lg-5 col-12 about--content">
              <h6 className="text-uppercase">About</h6>
              <h2 className="d-block mb-4 text-uppercase f-akira">
              ANOTHER REASON TO JOIN THE CLUB!<br />{" "}
              </h2>
              <p>
              While each Hunted is unique in its own way:<br /><br />

              Some are rare<br />
              Some are super rare<br />
              Some are legendary<br />
              And a very small few Extinct.<br /><br />

              We believe through this collection we can build value for our community, but also tell a much needed story. 
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
