import React from "react";
import {
  Box,
  HStack,
  Stack,
  Text,
  Flex,
  Container,
  SkeletonCircle,
  SkeletonText,
} from "@chakra-ui/react";
import { Grid, GridItem } from "@chakra-ui/react";
import Card from "./Card";
import OtherCards from "./OtherCards";

const Body_Content = () => {
  return (
    <Grid
      p={8}
      h="105vh"
      templateRows="repeat(3, 1fr)"
      templateColumns="repeat(2, 1fr)"
      gap={4}
    >
      <GridItem rowSpan={2} p={4} colSpan={1} border={"1px  red"}>
        <HStack justifyContent={"space-between"} mb={2}>
          <Text fontWeight={"Bold"}>Your upcoming experiences</Text>
          <Text
            fontWeight={"Bold"}
            cursor={"pointer"}
            _hover={{ textDecoration: "underline" }}
          >
            see all
          </Text>
        </HStack>
        <Flex gap={2}>
          <Card />
          <OtherCards />
          <OtherCards />
        </Flex>
      </GridItem>
      <GridItem
        p={4}
        colSpan={1}
        rowSpan={1}
        display={{ base: "none", md: "grid" }}
        border={"1px  blue"}
      >
        <HStack mb={2}>
          <Text fontWeight={"Bold"}>Your Stats</Text>
        </HStack>
        <Flex gap={4}>
          <Container borderRadius={20} bg={"gray.100"} p={8}>
            <Text fontSize={"2xl"} fontWeight={"Bold"}>
              12
            </Text>
            <Text>Experiences this week</Text>
          </Container>
          <Container borderRadius={20} bg={"gray.100"} p={8}>
            <Text fontSize={"2xl"} fontWeight={"Bold"}>
              24
            </Text>
            <Text>Experiences overall</Text>
          </Container>
          <Container borderRadius={20} bg={"gray.100"} p={8}>
            <Text fontSize={"2xl"} fontWeight={"Bold"}>
              12
            </Text>
            <Text>Experiences this week</Text>
          </Container>
        </Flex>
      </GridItem>
      <GridItem
        display={{ base: "none", md: "grid" }}
        p={4}
        rowSpan={2}
        colSpan={1}
        border={"1px  green"}
      >
        <HStack justifyContent={"space-between"} mb={2}>
          <Text fontWeight={"Bold"}>New mentors on Edvolve</Text>
        </HStack>

        <Box width={"60%"} padding="6" boxShadow="lg" bg="white">
          <SkeletonCircle size="10" />
          <SkeletonText mt="4" noOfLines={4} spacing="4" />
        </Box>
        <Box width={"60%"} padding="6" boxShadow="lg" bg="white">
          <SkeletonCircle size="10" />
          <SkeletonText mt="4" noOfLines={4} spacing="4" />
        </Box>
      </GridItem>
      <GridItem
        colSpan={1}
        rowSpan={2}
        display={{ base: "none", md: "grid" }}
        p={4}
        border={"1px  pink"}
      >
        <HStack justifyContent={"space-between"} mb={2}>
          <Text fontWeight={"Bold"}>Your upcoming classes of courses</Text>
          <Text
            fontWeight={"Bold"}
            cursor={"pointer"}
            _hover={{ textDecoration: "underline" }}
          >
            see all
          </Text>
        </HStack>
        <Flex gap={2}>
          <Card />
          <OtherCards />
          <OtherCards />
        </Flex>
      </GridItem>
    </Grid>
  );
};

export default Body_Content;
