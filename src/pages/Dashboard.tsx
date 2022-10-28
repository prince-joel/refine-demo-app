import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";

import "./styles.css";
import img1 from '../assets/img1.png'
import img2 from '../assets/img2.png'
import img3 from '../assets/img3.png'
import img4 from '../assets/img4.png'
import img5 from '../assets/img5.png'
import img6 from '../assets/img6.png'
import img7 from '../assets/img7.png'
import img8 from '../assets/img8.png'
import img9 from '../assets/img9.png'
import img10 from '../assets/img10.png'
import img11 from '../assets/img11.png'
import img12 from '../assets/img12.png'
import img13 from '../assets/img13.png'
import img14 from '../assets/img14.png'
import img15 from '../assets/img15.png'
import img16 from '../assets/img16.png'
import img17 from '../assets/img17.png'
import img18 from '../assets/img18.png'

// import required modules
import { EffectCards } from "swiper";
import { Pagination } from "swiper";
export default function Dashboard() {
  const pagination = {
    clickable: true,
    renderBullet: function (index: number, className: string) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };
  

  return (
    <div>
      <div className="hero">
        <div className="brand">
          <svg width="40" height="35" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.845 10.454h-3.18a.5.5 0 0 1-.342-.145.49.49 0 0 1-.146-.337V9.39c-.001-2.427 1.114-3.64 3.347-3.64a5.307 5.307 0 0 1 2.15.429.866.866 0 0 0 .974-.187.848.848 0 0 0 .185-.293l1.342-3.664a.847.847 0 0 0-.44-1.063 8.745 8.745 0 0 0-1.79-.617A13.71 13.71 0 0 0 9.806 0C6.695 0 4.282.84 2.57 2.52.856 4.2 0 6.472 0 9.333V31.36c0 .966.388 1.892 1.077 2.574a3.698 3.698 0 0 0 4.009.79 3.682 3.682 0 0 0 1.193-.79 3.607 3.607 0 0 0 1.077-2.574V16.544a.499.499 0 0 1 .496-.491h2.993c.75 0 1.47-.295 2-.82.53-.525.828-1.237.828-1.98 0-.742-.298-1.454-.828-1.98a2.844 2.844 0 0 0-2-.82Z" fill="url(#a)"></path><path d="M20.3 12c.929 0 1.741.638 1.994 1.532.082.293.179.627.29 1.003.06.2.167.546.31 1H37.57a2 2 0 0 1 1.95 2.45l-2.078 9a2 2 0 0 1-1.949 1.55H25.117a2 2 0 0 1-1.931-1.48l-1.006-3.736-3.209-8.784h-2.704a1.267 1.267 0 0 1 0-2.535H20.3Z" fill="url(#b)"></path><path d="M37.084 32.035a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z" fill="url(#c)"></path><path d="M25.584 34.535a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" fill="url(#d)"></path><defs><linearGradient id="a" x1="3.742" y1="17.5" x2="34.688" y2="17.5" gradientUnits="userSpaceOnUse"><stop stop-color="#3FDCF7"></stop><stop offset="1" stop-color="#1890FF"></stop></linearGradient><linearGradient id="b" x1="3.742" y1="17.5" x2="34.688" y2="17.5" gradientUnits="userSpaceOnUse"><stop stop-color="#3FDCF7"></stop><stop offset="1" stop-color="#1890FF"></stop></linearGradient><linearGradient id="c" x1="3.742" y1="17.5" x2="34.688" y2="17.5" gradientUnits="userSpaceOnUse"><stop stop-color="#3FDCF7"></stop><stop offset="1" stop-color="#1890FF"></stop></linearGradient><linearGradient id="d" x1="3.742" y1="17.5" x2="34.688" y2="17.5" gradientUnits="userSpaceOnUse"><stop stop-color="#3FDCF7"></stop><stop offset="1" stop-color="#1890FF"></stop></linearGradient></defs></svg>
          <h1>Refine Demo Dashboard</h1>
        </div>
        <Swiper
          pagination={pagination}
          autoplay={{
            delay: 4000,
            disableOnInteraction: true,
          }} modules={[Navigation, Autoplay, Pagination]}
        >
          <SwiperSlide><img src={img1} loading="lazy" alt="Slide 1" /></SwiperSlide>
          <SwiperSlide><img src={img2} loading="lazy" alt="Slide 2" /></SwiperSlide>
          <SwiperSlide><img src={img3} loading="lazy" alt="Slide 3" /></SwiperSlide>
          <SwiperSlide><img src={img4} loading="lazy" alt="Slide 4" /></SwiperSlide>
        </Swiper>
      </div>
      <div className="main">
          <Swiper effect={"cards"} grabCursor={true} modules={[EffectCards]} className="mySwiper center-main" >
            <SwiperSlide>
              <img src={img5} loading="lazy" alt="Product 1" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img6} loading="lazy" alt="Product 1" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img7} loading="lazy" alt="Product 1" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img8} loading="lazy" alt="Product 1" />
            </SwiperSlide>
          </Swiper>
        <h1>Let's start shopping!</h1>
        <div className="grid">
          <Swiper navigation={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }} modules={[Navigation, Autoplay]} className="mySwiper">
            <SwiperSlide>
              <img src={img9} loading="lazy" alt="Product 1" />
              <div className="btns">
                <button><img src="https://api.iconify.design/flat-color-icons:like.svg?color=%23888888" alt="like" /></button>
                <button><img src="https://api.iconify.design/icon-park:buy.svg?color=%23888888" alt="add" /></button>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img src={img5} loading="lazy" alt="Product 1" />
              <div className="btns">
                <button><img src="https://api.iconify.design/flat-color-icons:like.svg?color=%23888888" alt="like" /></button>
                <button><img src="https://api.iconify.design/icon-park:buy.svg?color=%23888888" alt="add" /></button>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img src={img6} loading="lazy" alt="Product 1" />
              <div className="btns">
                <button><img src="https://api.iconify.design/flat-color-icons:like.svg?color=%23888888" alt="like" /></button>
                <button><img src="https://api.iconify.design/icon-park:buy.svg?color=%23888888" alt="add" /></button>
              </div>
            </SwiperSlide>
          </Swiper>

          <Swiper navigation={true}
            autoplay={{
              delay: 2700,
              disableOnInteraction: false,
            }} modules={[Navigation, Autoplay]} className="mySwiper">
            <SwiperSlide>
              <img src={img15} loading="lazy" alt="Product 1" />
              <div className="btns">
                <button><img src="https://api.iconify.design/flat-color-icons:like.svg?color=%23888888" alt="like" /></button>
                <button><img src="https://api.iconify.design/icon-park:buy.svg?color=%23888888" alt="add" /></button>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img src={img10} loading="lazy" alt="Product 1" />
              <div className="btns">
                <button><img src="https://api.iconify.design/flat-color-icons:like.svg?color=%23888888" alt="like" /></button>
                <button><img src="https://api.iconify.design/icon-park:buy.svg?color=%23888888" alt="add" /></button>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img src={img11} loading="lazy" alt="Product 1" />
              <div className="btns">
                <button><img src="https://api.iconify.design/flat-color-icons:like.svg?color=%23888888" alt="like" /></button>
                <button><img src="https://api.iconify.design/icon-park:buy.svg?color=%23888888" alt="add" /></button>
              </div>
            </SwiperSlide>
          </Swiper>

          <Swiper navigation={true}
              autoplay={{
              delay: 2900,
              disableOnInteraction: false,
            }} modules={[Navigation, Autoplay]} className="mySwiper">
            <SwiperSlide>
              <img src={img12} loading="lazy" alt="Product 1" />
              <div className="btns">
                <button><img src="https://api.iconify.design/flat-color-icons:like.svg?color=%23888888" alt="like" /></button>
                <button><img src="https://api.iconify.design/icon-park:buy.svg?color=%23888888" alt="add" /></button>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img src={img7} loading="lazy" alt="Product 1" />
              <div className="btns">
                <button><img src="https://api.iconify.design/flat-color-icons:like.svg?color=%23888888" alt="like" /></button>
                <button><img src="https://api.iconify.design/icon-park:buy.svg?color=%23888888" alt="add" /></button>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img src={img13} loading="lazy" alt="Product 1" />
              <div className="btns">
                <button><img src="https://api.iconify.design/flat-color-icons:like.svg?color=%23888888" alt="like" /></button>
                <button><img src="https://api.iconify.design/icon-park:buy.svg?color=%23888888" alt="add" /></button>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        <div className="gallery">
          <div className="col">
            <img src={img14} loading="lazy" alt="Product 1" />
            <p>iWatch Series 6</p>
            <div className="btns">
              <button><img src="https://api.iconify.design/flat-color-icons:like.svg?color=%23888888" alt="like" /></button>
              <button><img src="https://api.iconify.design/icon-park:buy.svg?color=%23888888" alt="add" /></button>
            </div>
          </div>
          <div className="col">
            <img src={img15} loading="lazy" alt="Product 1" />
            <p>Sony Headset</p>
            <div className="btns">
              <button><img src="https://api.iconify.design/flat-color-icons:like.svg?color=%23888888" alt="like" /></button>
              <button><img src="https://api.iconify.design/icon-park:buy.svg?color=%23888888" alt="add" /></button>
            </div>
          </div>
          <div className="col">
            <img src={img8} loading="lazy" alt="Product 1" />
            <p>Logitech Webcam</p>
            <div className="btns">
              <button><img src="https://api.iconify.design/flat-color-icons:like.svg?color=%23888888" alt="like" /></button>
              <button><img src="https://api.iconify.design/icon-park:buy.svg?color=%23888888" alt="add" /></button>
            </div>
          </div>
          <div className="col">
            <img src={img16} loading="lazy" alt="Product 1" />
            <p>Logitech Webcam</p>
            <div className="btns">
              <button><img src="https://api.iconify.design/flat-color-icons:like.svg?color=%23888888" alt="like" /></button>
              <button><img src="https://api.iconify.design/icon-park:buy.svg?color=%23888888" alt="add" /></button>
            </div>
          </div>
          <div className="col">
            <img src={img17} loading="lazy" alt="Product 1" />
            <p>Make Over forever</p>
            <div className="btns">
              <button><img src="https://api.iconify.design/flat-color-icons:like.svg?color=%23888888" alt="like" /></button>
              <button><img src="https://api.iconify.design/icon-park:buy.svg?color=%23888888" alt="add" /></button>
            </div>
          </div>
          <div className="col">
            <img src={img18} loading="lazy" alt="Product 1" />
            <p>Milk Magic butter</p>
            <div className="btns">
              <button><img src="https://api.iconify.design/flat-color-icons:like.svg?color=%23888888" alt="like" /></button>
              <button><img src="https://api.iconify.design/icon-park:buy.svg?color=%23888888" alt="add" /></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
