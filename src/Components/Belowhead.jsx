import React from 'react'
import '../Styles/TopSection.css'
import {
    List,
    ListItem,
    ListIcon,
    OrderedList,
    UnorderedList,Flex,Text
  } from '@chakra-ui/react'
const Belowhead = () => {
  return (
    <>
      <UnorderedList w="70%" margin="auto" >
<Flex direction={"row"} gap={10} justifyContent={"center"} fontSize="12px" fontWeight={600} lineHeight="17px" color="#AAAAAA">
  <ListItem>Contact Us</ListItem>
  <ListItem>Help Center</ListItem>
  <ListItem>About Us</ListItem>
  <ListItem>Plans & Pricing</ListItem>
  <ListItem>Privacy Policy</ListItem>
   </Flex>
</UnorderedList>
<Text fontSize="12px" fontWeight={600} lineHeight="17px" color="#AAAAAA" textAlign={"center"} width={"70%"} margin={"auto"} mb="50px">©2022 Bonsai Technologies Inc — Payments, banking, and issuing services are provided by Stripe Payments Company, Evolve Bank & Trust (Member FDIC), and Celtic Bank (Member FDIC), respectively. Bonsai is not a law firm, and does not provide legal services, advice, or representation.   Terms    Credits</Text>
</>
  )
}

export default Belowhead