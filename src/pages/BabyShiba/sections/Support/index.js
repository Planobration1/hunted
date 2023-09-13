import './index.css'

function Team() {
  return (
    <>
      <section className="section--spacing pb-6">
        <div className="container">
          <div className="row align-items-center justify-content-end">
            <div className="col-12 team--content mb-4">
              <h2 className="d-block text-uppercase f-akira">
                THE CAUSES WE SUPPORT
              </h2>
            </div>
            {/* <div className="col-12 team--wrapper pt-3 pt-lg-5"> */}
              <h5 className="roadmapHeading">
                <span className='new-line'>
                  Our collection was created in part with Janna Giacoppo, a photographer and documentarian working in Africa. Her documentary "One But Many" highlights the war raging between wildlife and human population. From crop raiding and loss of livestock to urban development and climate change, humans and wildlife find themselves desperately fighting over the same resources. 
                  <br />
                  <br />
                  In Africa a controversial question arises; could human-wildlife conflict be the very thing fueling wildlife crime and trophy hunting, propelling many species to extinction?
                </span>
                <br />
                <br />
              </h5>
            {/* </div> */}
            <a
              className="nav-link nav-link_icon supportLink"
              href="https://discord.gg"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-discord"></i>
            </a>
            <a
              className="nav-link nav-link_icon supportLink"
              href="https://discord.gg"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Team;