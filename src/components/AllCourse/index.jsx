import React, { useRef, useEffect, useState } from 'react';
import { dumyDatas, dumydatas } from '../../dumyData';
import './style.css';

const AllCourse = () => {
 const [currentSlider, setCurrentSlider] = useState(0);
 const ref = useRef(null);
 const handleTouchStart = (e) => {
  setCurrentSlider(e.$_currentTarget.$__attrs.$_map.current)
 };
 useEffect(() => {
  if (ref) {
   ref.current.addEventListener('change', handleTouchStart)
  }
  return () => {
   ref.current.removeEventListener('change', handleTouchStart)
  }
 }, []);



 return (
  <div className='section allCourse-section'>
   <h2 className='title'>所有课程</h2>
   <div className='tabBar-container'>
    {dumyDatas.map((dumyData, index) => {
     return <div className='tabBar' onClick={() => { setCurrentSlider(index) }}>
      <span className={`tabBar-text ${index === currentSlider && 'selected'}`}>{dumyData.tabName}</span>
     </div>
    })}
   </div>
   <wx-view className='AllCourse-swiper' >
    <wx-swiper ref={ref} current={currentSlider}>
     {dumyDatas.map((dumyData) => {
      return (
       <wx-swiper-item>
        <div className='icon-list'>
         {dumyData.iconList.map((data, index) => {
          const { title, firstIconInfo, lastIconInfo } = data;
          return (
           <div className='icon-info'>
            <div className='icon-info-title-content'>
             <div className='circle-number-contain'>
              <span className='circle-number'>{index + 1}</span>
             </div>
             <span className='icon-info-title'>{title}</span>
            </div>
            <div className='icon-list-content'>
             <div className='single-first-icon single-icon'>
              <img src={firstIconInfo.iconLink} />
              <span>{firstIconInfo.name}</span>
             </div>
             <div className='single-middle-icon single-icon'>
              <img src='https://ucarecdn.com/253c9936-7581-4a70-9981-7bd21abd6a76/lian_he.svg' />
              {/* <span></span> */}
             </div>
             <div className='single-last-icon single-icon'>
              <img src={lastIconInfo.iconLink} />
              <span>{lastIconInfo.name}</span>
             </div>
            </div>
           </div>
          );
         })}
        </div >
       </wx-swiper-item >
      );
     })}
    </wx-swiper>
   </wx-view>
  </div >
 );
};

export default AllCourse;
