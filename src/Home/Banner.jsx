// Banner.jsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules'; // ✅ updated for Swiper v9+

// Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

export default function Banner() {
  return (
    <div className='banner w-100'>
      <Swiper
        modules={[Autoplay, Pagination]} // ✅ correct way to register modules in Swiper v9+
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{ delay: 5000 }}
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <img src="images/banner/banner-1.jpg" alt="Slide 1" className="img-fluid banner-img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="images/banner/banner-3.jpg" alt="Slide 2" className="img-fluid banner-img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="images/banner/banner-4.jpg" alt="Slide 3" className="img-fluid banner-img" />
        </SwiperSlide>
      </Swiper>
    </div>
 
  );
}
