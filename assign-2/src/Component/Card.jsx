import { StarIcon } from "@chakra-ui/icons";
import { Badge, Box, Button, Image } from "@chakra-ui/react";

export default function Card() {
  return (
    <Box
      maxW="20em"
      display={{ base: "none", md: "grid" }}
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
    >
      <Image
        src="https://images.unsplash.com/photo-1581488613801-68d36242d412?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aGFtcGl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
        w={"100%"}
      />

      <Box p="6">
        <Box display="flex" alignItems="baseline">
          <Badge borderRadius="full" px="2" colorScheme="red">
            Live Now
          </Badge>
        </Box>

        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          noOfLines={1}
        >
          Learn about history of Hampi and the architecture
        </Box>

        <Box>
          <Box as="span" color="gray.600" fontSize="sm">
            By Itihas Chronicles
          </Box>
          {"    "}
        </Box>

        <Box mt={"2"}>
          <Button colorScheme={"green"}>Join now</Button>
        </Box>
      </Box>
    </Box>
  );
}
