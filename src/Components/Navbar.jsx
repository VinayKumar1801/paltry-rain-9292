import React from 'react'
import "../Styles/Navbar.css"
import { Flex,Button,ButtonGroup } from '@chakra-ui/react'
import DropDown from './DropDown'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='navbartop'>
        <div className='navbar'>
            <div>
                <img className='logo' src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e5fd7c602ca7cd432feb68e_bonsai-logo.svg" alt="logo" />
            </div>
            <div><DropDown/></div>
            <div>
                <Flex minWidth='max-content' alignItems='center' gap='2'>
 
  <ButtonGroup gap='2'>
    <Link to="/login">
    
    <Button border={"2px solid #00A37E"} bg="white"  p={"12px  22px"} color="#00A37E" fontSize={13}>Login</Button>
    </Link>
    
    <Link to="/signup">
    
    <Button bg='#00A37E' p={"12px 27px"} fontSize={13} color="white">START FREE</Button>
    </Link>
   
    
 
  </ButtonGroup>
</Flex></div>
        </div>

    </div>
  )
}

export default Navbar