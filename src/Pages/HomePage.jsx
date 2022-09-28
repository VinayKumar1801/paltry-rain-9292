import React from 'react'
import TopSection from '../Components/TopSection'
import MidSection from '../Components/MidSection'
import Navbar from '../Components/Navbar'
import Sidebar from '../Components/Sidebar'
import LowerSection from '../Components/LowerSection'
import Footer from '../Components/Footer'
import Lastbtn from '../Components/Lastbtn'
const HomePage = () => {
  return (
    <div>
        <Navbar/>
        <TopSection/>
        <MidSection/>
        <Sidebar/>
        <LowerSection/>
        <Lastbtn/>
        <Footer/>
    </div>
  )
}

export default HomePage