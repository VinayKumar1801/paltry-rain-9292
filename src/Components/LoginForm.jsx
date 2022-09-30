import React from "react";
import { useState } from "react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Container,
  Heading,
  Text,
  Button,
  Divider,
} from "@chakra-ui/react";
import { Checkbox, CheckboxGroup } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
const LoginForm = () => {
  const history= useNavigate()
  const [inpval, setInpval] = useState({
    email: "",
    password: "",
  });
  console.log(inpval);
  const [data, setData] = useState([]);
  const getData = (e) => {
    const { value, name } = e.target;

    setInpval(() => {
      return {
        ...inpval,
        [name]: value,
      };
    });
  };

  const addData = (e) => {
    e.preventDefault();
    const getuserArr =localStorage.getItem("userData");
    // console.log(getuserArr);
    console.log(getuserArr)
    const { email, password } = inpval;
    if (email === "") {
      alert("EMAIL field required");
    } else if (!email.includes("@")) {
      alert("Please enter valid EMAIL address");
    } else if (password === "") {
      alert("PASSWORD field required");
    } else if (password.length < 5) {
      alert("Please enter PASSWORD more than 5 characters");
    } else {
      if (getuserArr && getuserArr.length) {
        const userDetail = JSON.parse(getuserArr);
        console.log(userDetail)
        const userLogin = userDetail.filter((el, k) => {
          return el.email === email && el.password === password;
        });
        console.log(userLogin);
        if(userLogin.length===0){
          alert("Invalid Details")
        }else{
          console.log("done")
          localStorage.setItem("user_login",JSON.stringify(getuserArr))
          history("/dashboard")
        }
      }
    }
  };

  return (
    <Container
      display={"grid"}
      justifyContent="center"
      borderRadius={5}
      alignItems="center"
      boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
      p={5}
      mt={30}
      mb={30}
    >
      <Text fontSize={26} fontWeight={500} textAlign={"center"} m={10}>
        Sign In
      </Text>
      <Button
        bg={"white"}
        justifySelf={"center"}
        m={5}
        w={400}
        textAlign={"center"}
        color={"#00A37E"}
        border={"1px solid #00A37E"}
      >
        Sign Up with Google
      </Button>
      <Divider />
      <FormControl
        m={"auto"}
        alignItems="center"
        display={"flex"}
        justifyContent="center"
        flexDirection={"column"}
        pb={10}
      >
        <Input
          type="email"
          name="email"
          onChange={getData}
          placeholder="Email"
          w={450}
          m={5}
        />
        <Input
          type="password"
          name="password"
          onChange={getData}
          placeholder="Password"
          w={450}
          m={5}
        />
        <Checkbox
          fontSize={14}
          fontWeight={600}
          textAlign="center"
          defaultChecked
        >
          Remember me
        </Checkbox>
        <Button
          justifySelf={"center"}
          margin="auto"
          backgroundColor={"#00A37E"}
          w={400}
          textAlign={"center"}
          mt={5}
          mb={5}
          color={"white"}
          onClick={addData}
        >
          Log in
        </Button>
        <Text color={"#00A37E"} textAlign={"center"}>
          Reset Password
        </Text>
        <Text color={"#00A37E"} textAlign={"center"}>
          Resend Verification Email
        </Text>
      </FormControl>
    </Container>
  );
};

export default LoginForm;
