import React from 'react'
import "../Styles/TopSection.css"
import {Link } from 'react-router-dom'
const Lastbtn = () => {
  return (
    <div className='lastbtn'>
        <div >
            <p>It’s <span style={{color:"#01B289"}}>your </span>business.</p>
            <p>We’re here to help it grow.</p>
        </div>
        <div>
   <Link to="/signup">

        <button style={{backgroundColor:"#00A37E",padding:"20px 37px",borderRadius:"10px",color:"white",fontSize:"14px",fontWeight:"700"}}>START FREE</button>

   </Link>
        </div>
   
   
    </div>
  )
}

export default Lastbtn;