import MintBanner from "../../../../assets/baby_feature_pic.jpg";

import "./features.css";

function Features() {
  return (
    <>
      <section id="features" className='section--spacing pt-0'>
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-lg-5 col-12 features--content">
              <h6 className="text-uppercase">features</h6>
              <h2 className="d-block mb-4 text-uppercase f-akira">
                Welcome to The Hunted
                <br/>
              </h2>
              <p>
              Collection of unique NFTs that bring to light the plight of animals hunted in the wild, and species that have been pushed towards extinction. Pouched and sought after, these animals are killed for their horns, scales, tusks and skin, believed to contain medicinal properties or bring health and fortune.
 <br/><br/>

 5,000 randomly generated digital rare collectibles minted on the Ethereum blockchain as ERC-1155 tokens. The collection features artist drawn images, modeled in full 3d for Metaverse capability.

What makes "The Hunted" so amazing, is with each NFT sold a percentage of proceeds of the original sale goes to support conservatory groups around the world that seek to protect these exact endangered animals. In Africa, "The Hunted" works to support boots on the ground efforts and para military in their fight against poachers. 
              </p>

              <a href="https://discord.gg" target='_blank' rel='noreferrer' className='gradient-btn'>join us</a>
            </div>
            <div className="col-lg-6 col-12 features--image-wrapper">
              <img src={MintBanner} alt="Shiba Watches" className="features--image" loading="lazy" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Features;
