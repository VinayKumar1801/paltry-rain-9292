import React from 'react'
import { Flex, Spacer,Box, Heading, ButtonGroup, Button,Image, Divider } from '@chakra-ui/react'
import Belowhead from '../Components/Belowhead'
import LoginForm from '../Components/LoginForm'

const Login = () => {
  return (
   <>
   <Flex minWidth='max-content' alignItems='center' gap='2' p={"10px 2%"}>
  <Box p='2'>
    <Image boxSize={"35px"} src="https://app.hellobonsai.com/assets/logo-icon-6263c52498bd8749917ac337dfcb797432a7d3df25bc04e1a5ce2b0e7451268e.png"/>
  </Box>
  <Spacer />
  <ButtonGroup gap='2'>
    <Button color={"#AAAAAA"} bg={"white"}>Login</Button>
    <Button color={"#AAAAAA"} bg={"white"}>Sign up</Button>
  </ButtonGroup>
</Flex>
  <Divider/>
  <LoginForm/>
   <Belowhead/>
   </>
  )
}

export default Login