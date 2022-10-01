import React, { useEffect, useState } from 'react'

const getData= JSON.parse(localStorage.getItem("user_login"))


let currDate= new Date().toDateString();
let curDate= new Date();
curDate= curDate.getHours()
console.log(curDate)
let greeting=''


if(curDate>=1 && curDate<12){
greeting='Good Morning'
}else if(curDate>=12 && curDate<19){
    greeting="Good Afternoon"

}


else{
    greeting="Good Evening"
}


const DateGreet = () => {
const [user,setUser] = useState("");
useEffect(()=>{
setUser(getData.name)
},[])

  return (
    <div>
    <div style={{display:"flex",alignItems:"center",gap:"20px",marginBottom:"50px"}}>
        <img src="https://app.hellobonsai.com/packs/static/good-afternoon-b0990cefb6300b05f216.svg" alt="" />
       <p style={{fontSize:"28px",fontWeight:"700"}}>
         {greeting} , {user.toUpperCase()} !
        
        </p>
        <span  style={{fontSize:"20px",fontWeight:"300"}}>{currDate}  </span> 


        </div>
        </div>

  )
}

export default DateGreet