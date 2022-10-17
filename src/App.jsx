import React from 'react'
import AllCourse from './components/AllCourse'
import Search from './components/Search'
import Slider from './components/slider'
import TraningCenter from './components/TraningCenter'
import './app.css'

const App = () => {
 return (
  <div className='main'>
   <Search />
   <Slider />
   <AllCourse />
   <TraningCenter />
  </div>
 )
}

export default App