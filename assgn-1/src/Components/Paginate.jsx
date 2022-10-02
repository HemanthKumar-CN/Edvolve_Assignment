import { Box, HStack, IconButton } from "@chakra-ui/react";
import React, { useState } from "react";
import {
  PhoneIcon,
  AddIcon,
  WarningIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
} from "@chakra-ui/icons";

const Paginate = ({ page, setPage }) => {
  return (
    <HStack justifyContent={"center"}>
      <IconButton
        colorScheme="teal"
        aria-label="Call Segun"
        size="lg"
        icon={<ArrowLeftIcon />}
        onClick={() => setPage(page - 1)}
        disabled={page == 1}
      />{" "}
      <Box
        borderRadius={"8"}
        boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px"}
        p={"5"}
        fontSize={"xl"}
      >
        {page}
      </Box>
      <IconButton
        colorScheme="teal"
        aria-label="Call Segun"
        size="lg"
        onClick={() => setPage(page + 1)}
        icon={<ArrowRightIcon />}
      />{" "}
    </HStack>
  );
};

export default Paginate;
