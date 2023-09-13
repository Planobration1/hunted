import "./index.css";

function Mint(
  { balance, 
    mintPressed, 
    setBearNumber, 
    bearNumber, 
    mintedNew, 
    mintedId, 
    mintLoading
  }) {
  return (
    <section className="section--spacing">
      <div className="container">
        <div className="row justify-content-center">
          <h2 className="h1 text-uppercase roadmap--title f-akira col-12 text-center">
            Mint
          </h2>
          <div className="container mt-5 col-xl-6 col-12" style={{textAlign: "center"}}>
            <h4 style={{textAlign: "center"}}>
              <span><b className='f-akira h5 title ' style={{float: "left"}}>Eth Balance</b></span>
              <span><b className='f-akira h5 title' style={{float: 'right'}}>{(balance/1e18).toFixed(4)} ETH </b></span>
            </h4>
            <br />
            <br />
            <h4 style={{textAlign: "center"}}>
              <span style={{float: "left"}}><b className='f-akira h5 title '>Amount</b></span>
              <span>
                <input type="button" className="incDecButton" value="-" onClick={() => (bearNumber > 1) && setBearNumber(bearNumber - 1)} />
                <span style={{fontFamily: "Akira"}}>{bearNumber}</span>
                <input type="button" className="incDecButton" value="+" onClick={() => (bearNumber < 20) && setBearNumber(bearNumber + 1)} />
              </span>
              <span style={{float: "right"}}>
                <a
                  className="nav-link"
                  onClick={() => setBearNumber(20)}
                  style={{cursor: "pointer", background: "white", color: "black"}}
                >
                  <span className="text-uppercas">max</span>
                </a>
              </span>
            </h4>
            <br />
            <h4>
              <b className='f-akira h5 title ' style={{float: "left"}}>Total Cost</b>
              <b className='f-akira h5 title' style={{float: 'right'}}>{(0.08 * bearNumber).toFixed(2)} ETH </b>
            </h4>
            
            {mintedNew &&
              <div>
                <br />
                <br />
                <h4>
                  <b className='f-akira h5 title ' style={{float: "left"}}>Minted Id</b>
                  <b className='f-akira h5 title' style={{float: 'right'}}>{mintedId}</b>
                </h4>
              </div>
            }
            <div onClick={() => mintPressed(bearNumber)} className="mintButton">{mintLoading ? "Loading..." : "Mint"}</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Mint;
