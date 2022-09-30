import React from "react";
import { Button, Divider, Flex, Grid, GridItem, Text } from "@chakra-ui/react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

import SliderBox from "./SliderBox";
const Income = () => {
  return (
    <>
      <Grid
        h="400px"
        templateRows="repeat(6, 1fr)"
        templateColumns="repeat(6, 1fr)"
        columnGap={5}
        width="95%"
        margin={"auto"}
        marginBottom="50px"
      >
        <GridItem
          rowSpan={1}
          colSpan={4}
          borderTop="1px solid #AAAAAA"
          borderLeft="1px solid #AAAAAA"
          borderRight="1px solid #AAAAAA"
          borderRadius={5}
        >
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>
              <Text color={"#AAAAAA"} p={5}>
                Income & Expenses
              </Text>
            </div>
            <div>
              <Menu>
                <MenuButton
                  alignSelf={"center"}
                  m={3}
                  as={Button}
                  rightIcon={<ChevronDownIcon />}
                  bg="white"
                  color={"#AAAAAA"}
                >
                  INR
                </MenuButton>
              </Menu>
              <Menu>
                <MenuButton
                  as={Button}
                  bg="white"
                  color={"#AAAAAA"}
                  mr={4}
                  rightIcon={<ChevronDownIcon />}
                >
                  Last Sixth Month
                </MenuButton>
                <MenuList>
                  <MenuItem>This Month</MenuItem>
                  <MenuItem>Last 90 Days</MenuItem>
                  <MenuItem>Last Month</MenuItem>
                  <MenuItem>Last 3 Months</MenuItem>
                  <MenuItem>Last 6 Months</MenuItem>
                  <MenuItem>This Year</MenuItem>
                  <MenuItem>Last Year</MenuItem>
                </MenuList>
              </Menu>
            </div>
          </div>
          <Divider />
        </GridItem>
        <GridItem
          colSpan={2}
          border="1px solid #AAAAAA"
          borderRadius={5}
        >
            <div>
                <p style={{fontWeight:"600",padding:"10px"}}>Activity</p>
            </div>
                <Divider/>
            <div style={{display:"flex",justifyContent:"center",color:"#AAAAAA",padding:"30px"}}>
            <p>No activity yet.</p>
            </div>
        </GridItem>
        <GridItem
          rowSpan={4}
          colSpan={4}
          borderBottom="1px solid #AAAAAA"
          borderLeft="1px solid #AAAAAA"
          borderRight="1px solid #AAAAAA"
          borderRadius={5}
        >
          <Flex justify={"space-around"} color={"#AAAAAA"} p={3}>
            <p>MAR</p>
            <p>APR</p>
            <p>MAY</p>
            <p>JUN</p>
            <p>JUL</p>
            <p>AUG</p>
            <p>SEP</p>
          </Flex>
          <div style={{display:"grid", alignItems:"center",alignContent:"center"}}>
<SliderBox/>

          </div>


        </GridItem>
        <GridItem
          colSpan={4}
          borderBottom="1px solid #AAAAAA"
          borderLeft="1px solid #AAAAAA"
          borderRight="1px solid #AAAAAA"
          borderRadius={5}
          p={3}
        >
          <Flex justify={"space-between"} color={"#AAAAAA"}>
            <p>Outstanding</p>
            <p>Overdue</p>
            <p>Paid & Pending</p>
            <p>Other Income</p>
          </Flex>
          <Flex justify={"space-between"} color={"#AAAAAA"}>
            <p>₹ 0.00</p>
            <p>₹ 0.00</p>
            <p>₹ 0.00</p>
            <p>₹ 0.00</p>
          </Flex>
        </GridItem>
      </Grid>
    </>
  );
};

export default Income;
