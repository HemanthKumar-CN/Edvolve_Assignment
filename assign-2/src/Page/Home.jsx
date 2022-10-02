import React from "react";
import Body_Content from "../Component/Body_Content";
import Card from "../Component/Card";
import Navbar from "../Component/Navbar";
import OtherCards from "../Component/OtherCards";
import { Text, Box } from "@chakra-ui/react";
import MobileMentor from "../Component/mobileMentor";

const Home = () => {
  return (
    <>
      <Navbar />
      <Box border={"1px  red"} paddingLeft={"3em"} textAlign={"left"}>
        <Text fontWeight={"Bold"}>👋 Welcome back, Ahila</Text>
        <Text> What's it going to be today?</Text>
      </Box>
      <Body_Content />
      <MobileMentor />
    </>
  );
};

export default Home;
