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

function Login() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [show, setShow] = useState(false);

  const submitHander = () => {};

  return (
    <VStack spacing="5px" color={"black"}>
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

      <Button
        colorScheme="blue"
        width={"100%"}
        style={{ maeginTop: 15 }}
        onClick={submitHander}
      >
        Signin
      </Button>
      <Button
        colorScheme="red"
        width={"100%"}
        style={{ maeginTop: 15 }}
        onClick={() => {
          setemail("guest@example.com");
          setpassword("123455");
        }}
      >
        Get guest user credentials
      </Button>
    </VStack>
  );
}

export default Login;
