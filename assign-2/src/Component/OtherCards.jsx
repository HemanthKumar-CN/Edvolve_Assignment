import { StarIcon } from "@chakra-ui/icons";
import { Badge, Box, Button, Image, Heading, Text } from "@chakra-ui/react";
import { FiBell } from "react-icons/fi";

export default function OtherCards({}) {
  return (
    <Box maxW="20em" borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Image
        src="https://images.unsplash.com/photo-1581488613801-68d36242d412?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aGFtcGl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
        w={"100%"}
      />

      <Box p="4">
        <Box display="flex" alignItems="baseline">
          <Text fontWeight={"Bold"}>26 February 2021, 9 am</Text>
        </Box>

        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          noOfLines={1}
        >
          How does Organic Farming work, and why it's earth friendly
        </Box>

        <Box>
          <Box as="span" color="gray.600" fontSize="sm">
            By Lavika Sundar
          </Box>
          {"    "}
        </Box>

        <Box mt={"2"}>
          <Button leftIcon={<FiBell />}>Remind me</Button>
        </Box>
      </Box>
    </Box>
  );
}
