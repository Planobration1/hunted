import { useEffect, useState } from "react";
import Empty from "../../../../assets/empty1.jpg";
import Swiper from 'swiper';
import 'swiper/swiper.min.css';
import 'swiper/swiper-bundle.min.css'

import "./index.css";

const data = [
  {
    id: `1_Guest`,
    name: "Coming soon",
    img: Empty,
  },
  {
    id: `2_Guest`,
    name: "Coming soon",
    img: Empty,
  },
  {
    id: `3_Guest`,
    name: "Coming soon",
    img: Empty,
  },
  {
    id: `4_Guest`,
    name: "Coming soon",
    img: Empty,
  },
  {
    id: `5_Guest`,
    name: "Coming soon",
    img: Empty,
  },
  {
    id: `6_Guest`,
    name: "Coming soon",
    img: Empty,
  },
  {
    id: `7_Guest`,
    name: "Coming soon",
    img: Empty,
  },
  {
    id: `8_Guest`,
    name: "Coming soon",
    img: Empty,
  },
  {
    id: `9_Guest`,
    name: "Coming soon",
    img: Empty,
  },
  {
    id: `10_Guest`,
    name: "Coming soon",
    img: Empty,
  }
];

function GoldenGuests() {
  const [slider, setSlider] = useState(null)

  useEffect(() => {
    const slider = document.querySelector(".custom-slider");
    const initSlider = new Swiper(slider, {
      spaceBetween: 30,
      slidesPerView: 2,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        992: {
          spaceBetween: 30,
          slidesPerView: 7,
        },
        768: {
          spaceBetween: 30,
          slidesPerView: 4,
        }
      }
    });

    setSlider(initSlider)
  }, []);

  return (
    <>
      <section id="guests" className="section--spacing">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-12 guests--content mb-5">
              <h2 className="d-block mb-4 text-uppercase f-akira">
                OUR MOST UNIQUE COLLECTION
              </h2>
              <p className="">
                Discover our special legendary collection, they are the rarest
                and unique.
              </p>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="col-12 guests--wrapper">
            <div className="swiper-button-next custom-next-slider-button" onClick={() => slider.slideNext()}></div>
            <div className="swiper-button-prev custom-previous-slider-button" onClick={() => slider.slidePrev()}></div>
            <div className="swiper-container custom-slider">
              <div className="swiper-wrapper">
                {data.map(({ id, name, img }) => (
                  <div key={id} className="guest--item swiper-slide">
                    <img src={img} alt={name} />
                    <h6>{name}</h6>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default GoldenGuests;