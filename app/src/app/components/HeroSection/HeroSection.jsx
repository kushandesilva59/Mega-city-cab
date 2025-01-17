'use client'
import React from 'react'
import styles from './HeroSection.module.css'
import {Swiper, SwiperSlide} from 'swiper/react';
import {A11y, Navigation, Pagination, Scrollbar} from 'swiper/modules'
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


const HeroSection = () => {
  return (
    <div className="container px-16 py-4 ">
      HeroSection
      <div className={`absolute top-0 left-0 ${styles.heroSection}`}>
        <img className='image' src="./hero1.jpg" alt="" />
      </div>
      <div className="relative text-white z-10 py-10">
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          loop={true}
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          className={styles.swiperMain}
          navigation
        >
          <SwiperSlide>
            <div className={`text-center ${styles.swiperSlide}`}>
              <h4>Bentota taxi & tours</h4>
              <p>Enjoy your comfortable trip with bentota taxi</p>
              <button>Learn more</button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={`text-center ${styles.swiperSlide}`}>
              <h4>Cheap, trusted and tour company</h4>
              <p>Enjoy your comfortable trip with bentota taxi</p>
              <button>Learn more</button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={`text-center ${styles.swiperSlide}`}>
              <h4>Guranteed drivers</h4>
              <p>Enjoy your comfortable trip with bentota taxi</p>
              <button>Learn more</button>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default HeroSection