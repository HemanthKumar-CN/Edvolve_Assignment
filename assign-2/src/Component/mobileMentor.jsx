import React from "react";
import {
  Text,
  HStack,
  Container,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
  Grid,
  GridItem,
  Box,
} from "@chakra-ui/react";
const MobileMentor = () => {
  return (
    <Box display={{ base: "grid", md: "none" }} mt={8} p={4}>
      <HStack justifyContent={"space-between"} mb={2}>
        <Text fontWeight={"Bold"}>New mentors on Edvolve</Text>
      </HStack>

      <Container p={4}>
        <Grid templateColumns="repeat(2, 1fr)" gap={6}>
          <GridItem w="100%" h="10">
            <Box padding="6" boxShadow="lg" bg="white">
              <SkeletonCircle size="10" />
              <SkeletonText mt="4" noOfLines={4} spacing="4" />
            </Box>
          </GridItem>
          <GridItem w="100%" h="10">
            <Box padding="6" boxShadow="lg" bg="white">
              <SkeletonCircle size="10" />
              <SkeletonText mt="4" noOfLines={4} spacing="4" />
            </Box>
          </GridItem>
          <GridItem w="100%" h="10">
            <Box padding="6" boxShadow="lg" bg="white">
              <SkeletonCircle size="10" />
              <SkeletonText mt="4" noOfLines={4} spacing="4" />
            </Box>
          </GridItem>
          <GridItem w="100%" h="10">
            <Box padding="6" boxShadow="lg" bg="white">
              <SkeletonCircle size="10" />
              <SkeletonText mt="4" noOfLines={4} spacing="4" />
            </Box>
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
};

export default MobileMentor;
