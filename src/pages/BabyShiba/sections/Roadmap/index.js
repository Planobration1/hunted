import "./roadmap.css";

const roadmapData = [
  {
    id: 1,
    percent: "10%",
    subBold:
      " Phase 1: Launch initiated",
    content: `Our number one objective is to deliver the high quality NFTs that provide our holders with value. Each Hunted NFT undergoes  precision creative and quality process to bring incredible next level art to our community.  
    
    We will announce the release date of our mint, giving equal access to all those looking to hold our NFTs..
    `,
  },
  {
    id: 2,
    percent: "30%",
    subBold:
      "The Hunted are taking over the metaverse",
    content: `The Hunted sanctuary will be featured in the metaverse as the first Rhino conservatory. While owning "The Hunted" brings great value to our holders and the community, each NFT can be used within the metaverse - but will also help in raising awareness about Rhinos. 

    Only 5000 pieces will be available for the public mint giving the possibility to the members to be part of it. All members are encouraged to participate in conversations. Having genuine connections with each other will be rewarded.`,
  },
  {
    id: 3,
    percent: "60%",
    subBold:
      "Revealing Legendary and Extinct Ultra Rare NFTs ",
    content: `Each collection has a centerpiece, and our Rhino Hunted collection features extinct Rhinos, and albino Rhinos.

    Only a handful of them presently still exist in the world. The same number of actual albino rhinos will match the mint for our Legendary Rhinos.  

    We will be releasing legendary "The Hunted" Rhinos, 1/1 NFTs. The majority of the legendaries in this collection we believe will resell for great value. Everyone will have a chance to get one as our Legendary and Extinct NFTs will be randomly assigned. This encourages new investors to join our community, even in the weeks after the reveal.  
    `,
  },
  {
    id: 5,
    percent: "80%",
    subBold:
      "Metaverse ",
    content: `Our NFTs will be more than just a digital image in your wallet. All Hunted Rhino NFTs will be equipped for full use in the Metaverse. The high quality 3D design will give you the ability to use your NFT the way you want, whether in the Metaverse, social gatherings or in games. 

    Our quality standards are among the best in the NFT world. Your Baby Shiba will be a true realistic avatar among unpolished designs.
    `,
  },
  {
    id: 6,
    percent: "100%",
    subBold:
      "Access to privileges",
    content: `In order to bring value to every one of our holders, "The Hunted: will be hosting a number of exclusive events. Ranging from poker tournaments, to galas featuring celebrities and activists. 
    
    Holders of "The Hunted" Rhinos will have pre access to early mints of our coming collections highlighting Elephants that are pouched for ivory, and pangolins that are on the verge of extinction. Tiny dragon like creates killed because people feel their scales carry medicinal purposes.
    `,
  }
];

function RoadMap() {
  return (
    <section id="roadmap" className="section--spacing">
      <div className="container">
        <div className="row justify-content-center">
          <h2 className="h1 text-uppercase roadmap--title f-akira col-12 text-center">
            roadmap
          </h2>
          <div className="roadmap--container col-xl-10 col-12">
            <div className="roadmap--line"></div>
            <div className="roadmap--wrapper">
              {roadmapData.map(({ id, percent, subBold, content }) => (
                <div key={id} className="roadmap--item">
                  <h2 className="h1 roadmap--item-title f-akira">
                    {percent}
                  </h2>
                  <span className="roadmap--point"></span>
                  <h4>
                    <b className='f-akira h5 title '>{subBold}</b>
                    <br />
                    <br />
                    <span className='new-line'>{content}</span>
                  </h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RoadMap;
