import React from 'react'
import { Grid, GridItem,Container, Box, Button, Divider,Text } from '@chakra-ui/react'
import "../Styles/TopSection.css"
import SignForm from '../Components/SignForm'
import Belowhead from '../Components/Belowhead'

const SignUp = () => {
  return (
<>
        <Grid
  templateRows='20% 80%'
  templateColumns='3fr 3fr 3fr'
  w="700px"
  m={"auto"}
//   border="1px solid #878787"
  boxShadow= "rgba(0, 0, 0, 0.24) 0px 3px 8px"
  borderRadius={10}
//   p={5}
  mt={100}
  mb={100}
>
  <GridItem rowSpan={2} colSpan={1} p={10} borderRight={"1px solid RGBA(0, 0, 0, 0.16)"} >
    <img src='https://app.hellobonsai.com/assets/logos/bonsai-0fe7c417d79806408d8117d5a0ca871f0be3afb1104d54b53f59f53cbda2f28b.svg'/>
    <Text fontSize={14}  fontWeight={600} m={3}>Join 500,000+ freelancers and agencies using Bonsai.</Text>
  </GridItem>
  <GridItem colSpan={2} p={10}>
    <Text className='formheading' fontSize={28} fontWeight={600}>Try Bonsai free with your Workflow today</Text>
    <Button mb={4} w={400} textAlign={"center"} mt={5} color={"#00A37E"} border={"1px solid #00A37E"}>Sign Up with Google</Button>
    <Divider w={400}/>
  </GridItem>
  <GridItem colSpan={2} p={10}>
    <SignForm/>
  </GridItem>
</Grid>
<Belowhead/>
</>
  )
}

export default SignUp