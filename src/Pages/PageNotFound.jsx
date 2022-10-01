import React from "react";
import "../Styles/Navbar.css";
import { Flex, Button, ButtonGroup, Image, Container } from "@chakra-ui/react";
import DropDown from "../Components/DropDown";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer";
const PageNotFound = () => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          padding: "10px",
        }}
      >
        <div>
          <img
            className="logo"
            src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e5fd7c602ca7cd432feb68e_bonsai-logo.svg"
            alt="logo"
          />
        </div>
        <div>
          <DropDown />
        </div>
        <div>
          <ButtonGroup gap="2">
            <Link to="/dashboard">
              <Button
                border={"2px solid #00A37E"}
                bg="white"
                p={"12px  22px"}
                color="#00A37E"
                fontSize={13}
              >
                GO TO DASHBOARD
              </Button>
            </Link>
          </ButtonGroup>
        </div>
      </div>
        <div style={{width:"70%",margin:"auto",marginTop:"50px"}}>
            <div>
                <img width={"8%"} src="https://assets-global.website-files.com/static/page-not-found.211a85e40c.svg" alt="" />
            </div>
            <p style={{fontSize:"32px",fontWeight:"700",lineHeight:"38px",margin:"20px"}}>Have you typed the right URL?</p>
            <div style={{fontSize:"14px",lineHeight:"20px",color:"#AAAAAA"}}>
            <p style={{margin:"20px"}}>The page you are looking for doesn't exist or has been moved.</p>
            <p style={{margin:"20px"}}>----</p>
            <p style={{margin:"20px"}}>If you believe that this is a mistake, please contact us at team@hellobonsai.com</p>
            </div>
        </div>
        <Footer/>
    </div>
  );
};

export default PageNotFound;
{
  /* <DropDown /> */
}
