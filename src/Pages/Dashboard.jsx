import React from "react";
import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  Grid,
  GridItem,
  Heading,
  Input,
  MenuButton,
  MenuDivider,
  MenuGroup,
  MenuItem,
  MenuList,
  Spacer,
  Menu,
  Divider,
} from "@chakra-ui/react";
import { ChevronDownIcon, StarIcon} from "@chakra-ui/icons";
import DashboardSide from "../Components/DashboardSide";
import FreeTrail from "../Components/FreeTrail";
import DateGreet from "../Components/Date";
import TaskAdd from "../Components/TaskAdd";
import Belowhead from "../Components/Belowhead";
import Income from "../Components/Income";
const Dashboard = () => {

const userDetails = JSON.parse(localStorage.getItem("user_login"))
console.log(userDetails.name)

  return (
    <>
      <Grid
        h="200px"
        templateRows="2fr 5fr"
        templateColumns="repeat(5, 1fr)"
        gap={4}
      >
        <GridItem rowSpan={2} colSpan={1}>
          <DashboardSide/>
        </GridItem>

        <GridItem colSpan={4} p={2}>
          <Menu>
            <Flex justifyContent={"right"} gap={3} direction={"row-reverse"}>
              <MenuButton as={Button} bg="#00B289" color={"white"}>
             { userDetails.name } <ChevronDownIcon />
              </MenuButton>
             
              <Button as={Button} bg="#00B289" color={"white"}>
                <StarIcon m={2}/>
                Start Free Trail 
              </Button>
            </Flex>
            <MenuList>
              <MenuGroup title="Get Bonsai Fre">
                {/* <MenuItem>Get Bonsai Free</MenuItem> */}
                <MenuDivider />
                <MenuItem>Help Center</MenuItem>
                <MenuItem>Whats's New</MenuItem>
                <MenuDivider />
                <MenuItem>My Subscription</MenuItem>
                <MenuItem>Apps & Integrations</MenuItem>
                <MenuItem>Payments</MenuItem>
                <MenuItem>Settings</MenuItem>
                <MenuItem>Logout</MenuItem>
              </MenuGroup>
            </MenuList>
          </Menu>
        </GridItem>

        <GridItem colSpan={4}>
          <FreeTrail/>
        <DateGreet/>
        <TaskAdd/>
        <Income/>
        <Divider w={"90%"} m={10}/>


        <Belowhead/>
        </GridItem>
      </Grid>
    </>
  );
};

export default Dashboard;
