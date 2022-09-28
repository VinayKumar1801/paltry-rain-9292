import { Heading , Text} from '@chakra-ui/react'
import React from 'react'
import "../Styles/TopSection.css"
const MidSection = () => {
  return (
    <div className='midsection'>
        <div >
            <p className='midheading'>
            Make more, manage less
            </p>
            <p className='midpara'>Bonsai integrates and automates every step of your business so it runs seamlessly - from proposal to tax season.</p>
        </div>
        <div className='midimgbox'>
            <div>
                <p>Without Bonsai</p>
                <img src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e5fd7c602ca7c6c51feb665_ill_before_2n%20block.svg" alt="" /></div>
            <div>
                <p>Without Bansoi</p>
            <img src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e5fd7c602ca7c9ed8feb675_ill_after_2nd%20block.svg" alt="" />
            </div>
        </div>
    </div>
  )
}

export default MidSection