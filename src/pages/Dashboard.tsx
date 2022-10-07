import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
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
          <img src="https://i.postimg.cc/MpDFvYtF/image.png" alt="Logo" />
          <h1>ProLive Trader</h1>
        </div>
        <Swiper
          pagination={pagination}
          autoplay={{
            delay: 4000,
            disableOnInteraction: true,
          }} modules={[Navigation, Autoplay, Pagination]}
        >
          <SwiperSlide><img src="https://i.postimg.cc/bN8Hnsz2/image.png" alt="Slide 1" /></SwiperSlide>
          <SwiperSlide><img src="https://i.postimg.cc/Pr23rmmq/image.png" alt="Slide 2" /></SwiperSlide>
          <SwiperSlide><img src="https://i.postimg.cc/Pr4cvGkT/image.png" alt="Slide 3" /></SwiperSlide>
          <SwiperSlide><img src="https://i.postimg.cc/kGjQ9vk3/image.png" alt="Slide 4" /></SwiperSlide>
        </Swiper>
      </div>
      <div className="main">
        <h1>Let's start shopping!</h1>
        <div className="grid">
          <Swiper navigation={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }} modules={[Navigation, Autoplay]} className="mySwiper">
            <SwiperSlide>
              <img src="https://i.postimg.cc/dtL2zBMR/image.png" alt="Product 1" />
              <div className="btns">
                <button><img src="https://api.iconify.design/flat-color-icons:like.svg?color=%23888888" alt="like" /></button>
                <button><img src="https://api.iconify.design/icon-park:buy.svg?color=%23888888" alt="add" /></button>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://i.postimg.cc/1zGRXLFG/image.png" alt="Product 1" />
              <div className="btns">
                <button><img src="https://api.iconify.design/flat-color-icons:like.svg?color=%23888888" alt="like" /></button>
                <button><img src="https://api.iconify.design/icon-park:buy.svg?color=%23888888" alt="add" /></button>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://i.postimg.cc/Pr71Q8R6/image.png" alt="Product 1" />
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
              <img src="https://i.postimg.cc/Pr71Q8R6/image.png" alt="Product 1" />
              <div className="btns">
                <button><img src="https://api.iconify.design/flat-color-icons:like.svg?color=%23888888" alt="like" /></button>
                <button><img src="https://api.iconify.design/icon-park:buy.svg?color=%23888888" alt="add" /></button>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://i.postimg.cc/4ddJPwyq/image.png" alt="Product 1" />
              <div className="btns">
                <button><img src="https://api.iconify.design/flat-color-icons:like.svg?color=%23888888" alt="like" /></button>
                <button><img src="https://api.iconify.design/icon-park:buy.svg?color=%23888888" alt="add" /></button>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://i.postimg.cc/vH1tkdCH/image.png" alt="Product 1" />
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
              <img src="https://i.postimg.cc/Zn07RvR1/image.png" alt="Product 1" />
              <div className="btns">
                <button><img src="https://api.iconify.design/flat-color-icons:like.svg?color=%23888888" alt="like" /></button>
                <button><img src="https://api.iconify.design/icon-park:buy.svg?color=%23888888" alt="add" /></button>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://i.postimg.cc/pTycVcs2/image.png" alt="Product 1" />
              <div className="btns">
                <button><img src="https://api.iconify.design/flat-color-icons:like.svg?color=%23888888" alt="like" /></button>
                <button><img src="https://api.iconify.design/icon-park:buy.svg?color=%23888888" alt="add" /></button>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://i.postimg.cc/B6QbjHFZ/image.png" alt="Product 1" />
              <div className="btns">
                <button><img src="https://api.iconify.design/flat-color-icons:like.svg?color=%23888888" alt="like" /></button>
                <button><img src="https://api.iconify.design/icon-park:buy.svg?color=%23888888" alt="add" /></button>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        <div className="gallery">
          <div className="col">
            <img src="https://i.postimg.cc/G207QNV7/image.png" alt="Product 1" />
            <p>iWatch Series 6</p>
            <div className="btns">
              <button><img src="https://api.iconify.design/flat-color-icons:like.svg?color=%23888888" alt="like" /></button>
              <button><img src="https://api.iconify.design/icon-park:buy.svg?color=%23888888" alt="add" /></button>
            </div>
          </div>
          <div className="col">
            <img src="https://i.postimg.cc/D0yJsfvq/image.png" alt="Product 1" />
            <p>Sony Headset</p>
            <div className="btns">
              <button><img src="https://api.iconify.design/flat-color-icons:like.svg?color=%23888888" alt="like" /></button>
              <button><img src="https://api.iconify.design/icon-park:buy.svg?color=%23888888" alt="add" /></button>
            </div>
          </div>
          <div className="col">
            <img src="https://i.postimg.cc/25QVKL3Q/image.png" alt="Product 1" />
            <p>Logitech Webcam</p>
            <div className="btns">
              <button><img src="https://api.iconify.design/flat-color-icons:like.svg?color=%23888888" alt="like" /></button>
              <button><img src="https://api.iconify.design/icon-park:buy.svg?color=%23888888" alt="add" /></button>
            </div>
          </div>
          <div className="col">
            <img src="https://i.postimg.cc/sXZZsfjm/image.png" alt="Product 1" />
            <p>Logitech Webcam</p>
            <div className="btns">
              <button><img src="https://api.iconify.design/flat-color-icons:like.svg?color=%23888888" alt="like" /></button>
              <button><img src="https://api.iconify.design/icon-park:buy.svg?color=%23888888" alt="add" /></button>
            </div>
          </div>
          <div className="col">
            <img src="https://i.postimg.cc/HnnSzydz/image.png" alt="Product 1" />
            <p>Make Over forever</p>
            <div className="btns">
              <button><img src="https://api.iconify.design/flat-color-icons:like.svg?color=%23888888" alt="like" /></button>
              <button><img src="https://api.iconify.design/icon-park:buy.svg?color=%23888888" alt="add" /></button>
            </div>
          </div>
          <div className="col">
            <img src="https://i.postimg.cc/1XkPGPwW/image.png" alt="Product 1" />
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
