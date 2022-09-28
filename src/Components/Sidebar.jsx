import React from 'react'
import {Tabs,TabList,TabPanel,TabPanels,Tab,Flex,Image,Text,Container} from "@chakra-ui/react"
import {CalendarIcon,CopyIcon,TimeIcon,InfoOutlineIcon,EditIcon,CheckIcon,PlusSquareIcon} from "@chakra-ui/icons"

const Sidebar = () => {
  return (
 <div style={{width:"90%",margin:"auto",marginTop:"50px",padding:'20px',textAlign:"left"}}>
    <Tabs>
        <Flex direction={"row"}  gap="200px"
>
  <TabList>
    <Flex direction={'column'} w={200}  gap={4}>
    <Tab fontSize={20} fontWeight={600}>Proposals</Tab>
    {/* <MenuDivider /> */}
    <Tab fontSize={20}   fontWeight={600}>Contracts</Tab>
    <Tab fontSize={20}   fontWeight={600}>Client CRM</Tab>
    <Tab fontSize={20}  fontWeight={600}>Time Tracking</Tab>
    <Tab fontSize={20}   fontWeight={600}>Invoices</Tab>
    <Tab fontSize={20}   fontWeight={600}>Task Tracking</Tab>
    <Tab fontSize={20}  fontWeight={600}>Accounting & Taxes</Tab>
    <Tab fontSize={20} fontWeight={600}>Forms</Tab>
    </Flex>
  </TabList>

  <TabPanels>
    <TabPanel>
      <Text fontSize={32}  >Win More Work</Text>
      <Text fontWeight={300}>With just a few clicks, you can craft structured proposals with clear estimates to close your deals faster.</Text>
      <Image boxSize={'550px'}  src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/6050acdd031b9f58db100f72_Graphic_Proposal-opt.png"
      />
    </TabPanel>
    <TabPanel>
    <Text fontSize={32}  >Protect Your Business</Text>
      <Text fontWeight={300}>Simply answer a few questions to generate an already vetted contract template. Once you hit send, the contract can be e-signed in minutes.</Text>
      <Image boxSize={'550px'}  src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/6050ad775d1c278c443c76d6_Graphic_Contact-opt.png"
      />
    </TabPanel>
    <TabPanel>
    <Text fontSize={32}  >Stay Organized</Text>
      <Text fontWeight={300}>Manage your clients and ongoing projects all in one place. Organize all the documents, files and payments together for you and your client.</Text>
      <Image boxSize={'550px'}  src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e5fd7c602ca7c5ad3feb65b_Graphic_Projects-min.png"
      />
    </TabPanel>
    <TabPanel>
    <Text fontSize={32}  >Keep It Simple</Text>
      <Text fontWeight={300}>Easily track the time you're working, automatically populate timesheets and seamlessly switch between your projects for the day.</Text>
      <Image boxSize={'550px'}  src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e5fd7c602ca7c4dc9feb654_Graphic_Track%20time-min.png"
      />
    </TabPanel>
    <TabPanel>
    <Text fontSize={32}  >Get Paid Faster</Text>
      <Text fontWeight={300}>Create and customize invoices, receive updates about payment timelines, and have automatic payment reminders sent on your behalf.</Text>
      <Image boxSize={'550px'}  src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/60241fc5e974b72f0865513b_Graphic_Invoice-min.png"
      />
    </TabPanel>
    <TabPanel>
    <Text fontSize={32}  >Be More Effective</Text>
      <Text fontWeight={300}>Give your day more structure with simple task management on your projects. Track time for each task and stay up-to-date.</Text>
      <Image boxSize={'550px'}  src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/6050aec11e1747965bfc16a5_task-management-graphic-opt.png"
      />
    </TabPanel>
    <TabPanel>
    <Text fontSize={32}  >Automate Your Finances</Text>
      <Text fontWeight={300}>Don't worry about freelance finances when you have automatic expense tracking, income reporting and estimated tax planning.</Text>
      <Image boxSize={'550px'}  src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/6050af07c36c35952ad19fbe_Graphic_Accounting-opt.png"
      />
    </TabPanel>
    <TabPanel>
    <Text fontSize={32}  >Ask Your Clients</Text>
      <Text fontWeight={300}>Create your own customized forms and questionnaires for clients and kicking off new projects</Text>
      <Image boxSize={'550px'}  src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/6050af50cd2ff1fc7708d532_home-forms-opt.png"
      />
    </TabPanel>
  </TabPanels>
  </Flex>
</Tabs>
</div>
  )
}

export default Sidebar