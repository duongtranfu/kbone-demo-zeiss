import React, { useState, useRef } from 'react'
import './style.css'

const Search = () => {
 const [isFocus, setForcus] = useState(false)
 const ref = useRef(null)
 const onFocus = () => {
  setForcus(true)
 }
 const onBlur = () => {
  setForcus(false)
 }

 return (
  <div className={`seachContain ${isFocus && 'on-focus'}`} >
   <img className='seach-logo' src="https://ucarecdn.com/26f306ca-4e02-47df-a960-4e5e4091c338/zeisslogorgb.svg" />
   <div className='input-container' onClick={() => { ref.current.focus() }}>
    <div className='input-container-wrapper' >
     <wx-icon className="icon-small" color='blue' type="search" size="10"></wx-icon>
     <input ref={ref} onFocus={onFocus} onBlur={onBlur} placeholder={`${isFocus ? '' : '讲师/设备/疾病'}`} />
    </div>
   </div>
   <button className='search-button'>搜索</button>
  </div >
 )
}

export default Search