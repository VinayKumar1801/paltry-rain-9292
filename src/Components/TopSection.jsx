import React from 'react'
import "../Styles/TopSection.css"
const TopSection = () => {
  return (
    <div id='blue-shape'>
        <div className='topsection' >
        <div>
          <p className='heading1'>Everything you need to run your business.</p>
          <p className='heading2'>Bonsai’s all-in-one product suite with smart automation lets you focus on your passion, not your paperwork.</p>
      
          <input type="text" name="" id="" placeholder='Enter your email' style={{width:"300px",border:"2px solid #00A37E",padding:"15px 37px",borderRadius:"10px"}} />
          <button style={{backgroundColor:"#00A37E",padding:"20px 37px",borderRadius:"10px",color:"white",fontSize:"14px",fontWeight:"700"}}>START FREE</button>
        </div>
        <div>
          <img width="120%" src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/60dc499268d597166db997aa_bonsai_hero-opt-2.png" alt="" />
        </div>

        </div>
    </div>
  )
}

export default TopSection