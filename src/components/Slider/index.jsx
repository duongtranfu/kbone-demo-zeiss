import React from 'react'
import './style.css'

const Slider = () => {
  return (
    <div>
      <wx-view>
        <wx-swiper className='slider' indicator-dots="true" indicator-active-color='blue' indicator-color='#eeeeee'>
          <wx-swiper-item>
            <div className='slider-picture'>
              <wx-image className='image' src="https://ucarecdn.com/02672f37-8876-451e-abcd-c94227a9a7b6/banner1.PNG"></wx-image>
            </div>
          </wx-swiper-item>
          <wx-swiper-item>
            <div className='slider-picture'>
              <wx-image className='image' src="https://ucarecdn.com/ec1f8f8f-9de9-4687-b3cd-ea19b5a68e2d/banner2.PNG"></wx-image>
            </div>
          </wx-swiper-item>
        </wx-swiper>
      </wx-view>
    </div>
  )
}

export default Slider