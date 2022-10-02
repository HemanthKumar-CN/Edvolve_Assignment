import { Box, HStack, Text } from "@chakra-ui/react";
import React from "react";

const Navbar = () => {
  return (
    <Box>
      <HStack p={"5"} justifyContent={"center"}>
        <Text
          fontWeight={"extrabold"}
          fontSize={"2xl"}
          fontFamily={"monospace"}
          textShadow={"1px 1px 2px teal, 0 0 1em grey, 0 0 0.2em grey"}
        >
          Git repo Issues
        </Text>
      </HStack>
    </Box>
  );
};

export default Navbar;
