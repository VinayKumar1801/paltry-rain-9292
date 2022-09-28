import React from 'react'
import "../Styles/TopSection.css"
const LowerSection = () => {
  return (
    <div>
        <div style={{marginTop:"50px"}}>
            <p style={{fontSize:"32px",color:"#4C525A",textAlign:"center",lineHeight:"45px",fontFamily:"sans-serif",width:"45%",margin:"auto",lineHeight:"50px"}}>Trusted by 500K+ self-employed workers and small businesses</p>
            <p style={{fontSize:"20px",color:"#4C525A",textAlign:"center",lineHeight:"28px",fontFamily:"sans-serif",width:"45%",margin:"auto",lineHeight:"30px"}}>Whether you’re just getting started or your business is booming, Bonsai has you covered.</p>
        </div>
        <div className='lowersection'>
            <div>
                <img src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e5fd7c602ca7ca8ebfeb662_ill_Built%20for_4%20block.svg" alt="" />
            </div>
            <div>
                <img src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e5fd7c602ca7c967efeb661_ill_Global%20Support_4%20block.svg" alt="" />
            </div>
            <div>
                <p style={{fontSize:"22px",fontWeight:"700",lineHeight:"30px",color:"#4C525A"}}>Built for All Work Types</p>
                <p style={{fontWeight:"300",lineHeight:"20px",color:"#4C525A"}}>We proudly back people with wide-ranging businesses—from design and marketing to development, writing, and photography.</p>
            </div>
            <div>
                <p style={{fontSize:"22px",fontWeight:"700",lineHeight:"30px",color:"#4C525A"}}>Built for Global Businesses</p>
                <p style={{fontWeight:"300",lineHeight:"20px",color:"#4C525A"}}>Bonsai has international coverage across the United States, Canada, UK, Australia and more, with 180 currencies supported.</p>
            </div>
        </div>
    </div>
  )
}

export default LowerSection