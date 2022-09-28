import React from 'react'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,Text,Button,Spacer
  } from '@chakra-ui/react'
  import{ChevronDownIcon} from "@chakra-ui/icons"

  import {CalendarIcon,CopyIcon,TimeIcon,InfoOutlineIcon,EditIcon,CheckIcon,PlusSquareIcon} from "@chakra-ui/icons"

const DropDown = () => {
  return (
    <div>
        <Menu>
  <MenuButton
    px={4}
    py={2}
    border="none"
    transition='all 0.2s'
    borderRadius='md'
    borderWidth='1px'
    _hover={{ bg: 'gray.400',color:"white" }}
    _expanded={{ bg: '#38A169' }}
    // _focus={{ boxShadow: 'outline' }}
  >
   Product <ChevronDownIcon />
  </MenuButton>
  <MenuList>
    <MenuItem>Bonsai Workflow</MenuItem>
    <Text w={300} p={3}>Look professional, win more clients and manage your business from one place</Text>
    <MenuDivider />
    <MenuItem>Bonsai Tax</MenuItem>
    <Text w={300} p={3}>Track expenses,maximize tax write-offs,and estimate taxtes without the headache</Text>
    <MenuDivider />

    <MenuItem>Bonsai Cash</MenuItem>
    <Text w={300} p={3}>Bonsai's all in one finanical hub. No fees and lightning fast payouts.</Text>
  </MenuList>
</Menu>
        <Menu>
  <MenuButton
    px={4}
    py={2}
    border="none"
    transition='all 0.2s'
    borderRadius='md'
    borderWidth='1px'
    _hover={{ bg: 'gray.400',color:"white" }}
    _expanded={{ bg: '#38A169' }}
    // _focus={{ boxShadow: 'outline' }}
  >
   Templates <ChevronDownIcon />
  </MenuButton>

  <MenuList>
    <MenuItem><CalendarIcon margin={2}/>Contract Templates</MenuItem>
    <MenuItem> <PlusSquareIcon margin={2}/>Proposal Templates</MenuItem>
    <MenuItem><CopyIcon margin={2}/>Invoice Templates</MenuItem>
    <MenuItem><CheckIcon margin={2}/>Agreement Templates</MenuItem>
    <MenuItem><EditIcon margin={2}/>Quote Templates</MenuItem>
    <MenuItem><TimeIcon margin={2}/>Scope of Work Templates</MenuItem>
    <MenuItem><InfoOutlineIcon margin={2}/>Brief Templates</MenuItem>
  </MenuList>
  <Menu>
  <MenuButton  px={4}
    py={2}>Pricing</MenuButton>

  </Menu>
  <Menu>
  <MenuButton  px={4}
    py={2}>Reviews</MenuButton>

  </Menu>


  
</Menu>

    </div>
  )
}

export default DropDown