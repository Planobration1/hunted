import Banner from '../../../assets/banner-1.jpg'
import useScrollToHash from '../../../scrollToHash'

function Home() {
  function red() {
    window.location.href = 'https://opensea.io/collection/shiba-social-club/'
  }

  useScrollToHash()

  return (
    <section
      id="home"
      className="position-relative content-inner d-flex align-items-end justify-content-center"
    >
      <img src={Banner} alt="" />
      <h1 className='text-uppercase text-center' style={{ width: '90%'}}>shiba social club</h1>
      <div onClick={red} className="mb-only abc">buy on opensea</div>
    </section>
  );
}

export default Home;
