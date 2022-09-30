import { QuestionOutlineIcon } from '@chakra-ui/icons'
import React from 'react'

const FreeTrail = () => {
  return (
    <div>
        <div style={{backgroundColor:"#F2FAFF",borderLeft:"5px solid #E2F3FF",width:"95%",margin:"auto",padding:"20px 20px 22px 50px",marginBottom:"40px",borderRight:"1px solid #E2F3FF",borderTop:"1px solid #E2F3FF",borderBottom:"1px solid #E2F3FF"}}>
            <p>
                <QuestionOutlineIcon mr={3}/>
                Start 7 Day Free Trial</p>
            <p style={{fontSize:"14px"}}>You currently don’t have an active subscription.
                <span style={{color:"blue",fontSize:"14px",cursor:"pointer"}}>Start your Free Trial now!</span>
            </p>
        </div>
    </div>
  )
}

export default FreeTrail