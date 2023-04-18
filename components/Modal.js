/* eslint-disable @next/next/no-img-element */
// Import Swiper React components
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper'

export default function Modal ({ open, onClose }) {
  if (!open) return null

  return (
    <div className='overlay'>
      <div className='modalContainer'>
        <p onClick={onClose} className='closeBtn'>
          X
        </p>
        <Swiper
          className='slider'
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          onSlideChange={() => console.log('slide change')}
          onSwiper={swiper => console.log(swiper)}
        >
          <SwiperSlide className='slide'>
            <img alt='alt' src='images/portfolio/img5.png' />
          </SwiperSlide>
          <SwiperSlide className='slide'>
            <img alt='alt' src='images/portfolio/img6.png' />
          </SwiperSlide>
          <SwiperSlide className='slide'>
            <img alt='alt' src='images/portfolio/img7.png' />
          </SwiperSlide>
          <SwiperSlide className='slide'>
            <img alt='alt' src='images/portfolio/img8.png' />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}
