import React from "react";
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
} from "@chakra-ui/react";
function Signup() {
  const [name, setName] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [confirmpassword, setconfirmpassword] = useState("");
  const [pic, setpic] = useState("");
  const [show, setShow] = useState(false);
  const postDetails = () => {};
  const submitHander = () => {};

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
      >
        Signup
      </Button>
    </VStack>
  );
}

export default Signup;
