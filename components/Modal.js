/* eslint-disable @next/next/no-img-element */
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper'
// Import Swiper styles
import 'swiper/css'

export default function Modal ({ open, onClose }) {
  if (!open) return null
  return (
    <div className='overlay'>
      <div className='modalContainer'>
        <p onClick={onClose} className='closeBtn'>
          CLOSE
        </p>
        <Swiper
          className='slider'
          spaceBetween={50}
          slidesPerView={3}
          onSlideChange={() => console.log('slide change')}
          onSwiper={swiper => console.log(swiper)}
        >
          <SwiperSlide className='slide'>Slide 1</SwiperSlide>
          <SwiperSlide className='slide'>Slide 2</SwiperSlide>
          <SwiperSlide className='slide'>Slide 3</SwiperSlide>
          <SwiperSlide className='slide'>Slide 4</SwiperSlide>
          ...
        </Swiper>
      </div>
    </div>
  )
}

{
}
