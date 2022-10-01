import {
  Button,
  Container,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Select,
  Text,  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Stack
} from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const vinay = JSON.parse(localStorage.getItem("userData"))||[]
console.log(vinay)
const SignForm = () => {
  const history= useNavigate()
  const [inpval, setInpval] = useState({
    email: "",
    name: "",
    password: "",
    country: "",
    currency: "",
  });

  const [data,setData] = useState([])
  // console.log(inpval)
  const getData = (e) => {
    // console.log(e.target.value)
    const { value, name } = e.target;
    // console.log(value,name)

    setInpval(() => {
      return {
        ...inpval,
        [name]: value,
      };
    });
  };

  const addData = (e) => {
    e.preventDefault();
    // console.log(inpval)

    const { email, name, password, country, currency } = inpval;
    if (email === "") {
      alert("EMAIL field required");
      <Stack>

    <Alert status='error'>
    <AlertIcon />
    There was an error processing your request
  </Alert>

      </Stack>



    } else if (!email.includes("@")) {
      alert("Please enter valid EMAIL address");
    } else if (name === "") {
      alert("NAME field required");
    } else if (password === "") {
      alert("PASSWORD field required");
    } else if (password.length < 5) {
      alert("Please enter PASSWORD more than 5 characters");
    } else if (country === "") {
      alert("COUNTRY field required");
    } else if (currency === "") {
      alert("CURRENCY field required");
    } else {
      console.log("done");
      vinay.push(inpval)
      localStorage.setItem("userData",JSON.stringify(vinay))
      history("/login")
    }
  };

  return (
    <FormControl>
      <FormLabel fontSize={12} fontWeight={500} color="#878787">
        EMAIL
      </FormLabel>
      <Input
        w={400}
        type="email"
        placeholder="your@email.com"
        onChange={getData}
        name="email"
        m={2}
      />

      <FormLabel fontSize={12} fontWeight={500} color="#878787">
        FULL NAME
      </FormLabel>
      <Input
        w={400}
        type="text"
        name="name"
        placeholder="Jane Smith"
        onChange={getData}
        m={2}
      />

      <FormLabel fontSize={12} fontWeight={500} color="#878787">
        PASSWORD
      </FormLabel>
      <Input
        w={400}
        type="password"
        placeholder=".........."
        onChange={getData}
        name="password"
        m={2}
      />

      <FormLabel fontSize={12} fontWeight={500} color="#878787">
        COUNTRY
      </FormLabel>
      <Select
        w={400}
        name="country"
        placeholder="Select option"
        onChange={getData}
        m={2}
      >
        <option value="in">India</option>
        <option value="us">USA</option>
        <option value="eng">England</option>
        <option value="ch">China</option>
        <option value="gr">Germany</option>
      </Select>

      <FormLabel fontSize={12} fontWeight={500} color="#878787">
        CURRENCY
      </FormLabel>
      <Select
        w={400}
        name="currency"
        placeholder="Select option"
        onChange={getData}
        m={2}
      >
        <option value="₹">INR</option>
        <option value="$">USD</option>
        <option value="€">EUR</option>
      </Select>

      <Text
        textAlign={"center"}
        m={"auto"}
        w={250}
        mt={3}
        className="formlabel"
      >
        By creation an account,you accept our Terms & Conditions{" "}
      </Text>
      <Button
        backgroundColor={"#00A37E"}
        w={400}
        onClick={addData}
        textAlign={"center"}
        mt={5}
        mb={5}
        color={"white"}
      >
        Create Free Account
      </Button>
      <Text textAlign={"center"} className="formlabel">
        Already have an account
      </Text>
      <NavLink to="/login">
      <Button
        w={400}
        textAlign={"center"}
        mt={5}
        color={"#00A37E"}
        border={"1px solid #00A37E"}
      >
        Login
      </Button>
      </NavLink>
    </FormControl>
  );
};

export default SignForm;
