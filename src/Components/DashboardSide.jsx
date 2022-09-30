import { BellIcon, EditIcon, UpDownIcon } from '@chakra-ui/icons'
import React from 'react'

const DashboardSide = () => {
  return (
    <div style={{padding:"10px",position:"fixed",top:"0px"}}>
        <div style={{display:"flex", justifyContent:"space-around"}}>
            <img src="https://app.hellobonsai.com/packs/static/bonsai-623ed86a47a195e7f9e2.svg" width={150} alt="" />
            {/* <button style={{padding:"3px 7px",border:"1px solid #009E79",fontSize:"30",fontWeight:"900",color:"#009E79"}}>+</button> */}
        </div>
            <div style={{display:"flex",flexDirection:"column",gap:"10px",cursor:"pointer",marginLeft:"8%"}}>
                <p style={{fontWeight:"700",margin:" 10px 0px"}}>
                    <EditIcon mr={3} alignSelf="center"/>
                    Dashboard</p>
                <p>Clients</p>
                <p>Projects</p>
                <p>Tasks</p>
            </div>
            <div style={{display:"flex",flexDirection:"column",gap:"10px",cursor:"pointer",marginLeft:"8%"}}>
                <p style={{fontWeight:"700",margin:" 10px 0px"}}>
                    <BellIcon mr={3}/>
                Tools

                </p>
                <p>Invoices</p>
                <p>Proposals</p>
                <p>Contracts</p>
                <p>Time Trackings</p>
                <p>Services</p>
                <p>Forms</p>
            </div >
                <div  style={{display:"flex",flexDirection:"column",gap:"10px",cursor:"pointer",color:"#292A2D",marginLeft:"8%"}}>
                    <p style={{fontWeight:"700",margin:" 10px 0px"}}><UpDownIcon mr={3}/>Finances</p>
                    <p>Cash</p>
                    <p>Accounting</p>
                    <p>Taxes</p>
                </div>

    </div>
  )
}

export default DashboardSide