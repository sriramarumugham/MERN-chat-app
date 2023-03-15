import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  FormControl,
  Input,
  FormLabel,
  VStack,
  InputGroup,
  InputRightAddon,
  InputRightElement,
  Button,
  useToast,
} from "@chakra-ui/react";
import  axios from 'axios';

function Signup() {
  const navigate = useNavigate();
  const toast = useToast();

  const [name, setName] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [confirmpassword, setconfirmpassword] = useState("");
  const [pic, setPic] = useState("");
  const [show, setShow] = useState(false);
  const [picLoading, setPicLoading] = useState(false);

  const postDetails = (pics) => {
    setPicLoading(true);
    if (pics == undefined) {
      toast({
        title: "Please Select an Image!",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      setPicLoading(false);
      return;
    }
    if (pics.type === "image/jpeg" || pics.type === "image/png") {
      // ml_default
      // dpweifq0b
      // https://api.cloudinary.com/v1_1/dpweifq0b

      const data = new FormData();
      data.append("file", pics);
      data.append("upload_preset", "zt4pfmpk");
      data.append("cloud_name", "dpweifq0b");
      fetch("https://api.cloudinary.com/v1_1/dpweifq0b/image/upload", {
        method: "post",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          setPic(data.url.toString());
          console.log(data.url.toString());
          setPicLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setPicLoading(false);
        });
    } else {
      toast({
        title: "Please Select an Image!",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      return;
    }
  };
  const submitHander = async () => {
    setPicLoading(true);
    if (!name || !email || !password || !confirmpassword) {
      toast({
        title: "Please Fill all the Feilds",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      setPicLoading(false);
      return;
    }
    if (password !== confirmpassword) {
      toast({
        title: "Passwords Do Not Match",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      return;
    }
    try {
      const contentHeader = {
        headers: {
          "Content-type": "application/json",
        },
      };
      const { data } = await axios.post(
        "/api/user",
        { name, email, password, pic },
        contentHeader
      );
      console.log(data);

      toast({
        title: "Registration Successful",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      localStorage.setItem("userInfo", JSON.stringify(data));
      navigate("/");
      setPicLoading(false);
    } catch (error) {
      console.log(error)
      toast({
        title: "Error Occured!",
        description: error.response.data.message,
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      setPicLoading(false);
    }
  };

  return (
    <VStack spacing="5px" color={"black"}>
      <FormControl id="first-name" isRequired>
        <FormLabel>Name</FormLabel>
        <Input
          value={name}
          placeholder="Enter Your Name"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </FormControl>

      <FormControl id="email" isRequired>
        <FormLabel>Email</FormLabel>
        <Input
          value={email}
          placeholder="Enter Your email"
          onChange={(e) => {
            setemail(e.target.value);
          }}
        />
      </FormControl>

      <FormControl id="password" isRequired>
        <FormLabel>password</FormLabel>
        <InputGroup size={"md"}>
          <Input
            value={password}
            type={show ? "text" : "password"}
            placeholder="Enter Your Password"
            onChange={(e) => {
              setpassword(e.target.value);
            }}
          />

          <InputRightElement width={"4.5rem"}>
            <Button
              h="1.7rem"
              size={"sm"}
              onClick={() => {
                setShow(!show);
              }}
            >
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
      <FormControl id="confirmpassword">
        <InputGroup size={"md"}>
          <Input
            value={confirmpassword}
            type={show ? "text" : "password"}
            placeholder="Confirm Password"
            onChange={(e) => {
              setconfirmpassword(e.target.value);
            }}
          />

          <InputRightElement width={"4.5rem"}>
            <Button
              h="1.7rem"
              size={"sm"}
              onClick={() => {
                setShow(!show);
              }}
            >
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
      <FormControl id="pic">
        <FormLabel>Upload your Picture</FormLabel>
        <Input
          type="file"
          p={1.5}
          accept="image/*"
          onChange={(e) => postDetails(e.target.files[0])}
        />
      </FormControl>

      <Button
        colorScheme="blue"
        width={"100%"}
        style={{ maeginTop: 15 }}
        onClick={submitHander}
        isLoading={picLoading}
      >
        Signup
      </Button>
    </VStack>
  );
}

export default Signup;
