import React, { useEffect } from "react";
import Login from "../components/authentication/Login";
import Signup from "../components/authentication/Signup";
import {
  Box,
  Container,
  Text,
  Tab,
  Tabs,
  TabList,
  TabPanels,
  TabPanel,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate=useNavigate();
  useEffect(() => {
    const user = localStorage.getItem("userInfo");
    console.log(user);
    if (user) {
      navigate("/chat")
    }
  }, [navigate]);

  return (
    <Container maxWidth="xl" centerContent>
      <Box
        d="flex"
        justifyContent={"center"}
        bgColor={"white"}
        p={"3"}
        w={"100%"}
        m={"40px 0 15px 0"}
        borderRadius={"lg"}
        borderWidth={"1px"}
      >
        <Text fontSize={"4xl"} fontFamily={"Work sans"} color="black">
          Talk-A-Tive
        </Text>
      </Box>
      <Box bg={"white"} w="100%" p={4} borderRadius={"lg"} borderWidth={"1px"}>
        <Tabs variant="soft-rounded">
          <TabList mb={"1em"}>
            <Tab w={"50%"}>Login</Tab>
            <Tab w={"50%"}>Sign Up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              <Signup />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
};

export default Home;
