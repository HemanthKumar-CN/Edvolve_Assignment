import { ReactNode } from "react";
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { Image, Text, Input } from "@chakra-ui/react";
import { MdOutlinePlayCircleFilled, MdSearch } from "react-icons/md";

const Links = ["Dashboard", "Experience Zone", "Learning Zone"];

const TabLink = ({ children }) => (
  <Tab
    px={2}
    py={1}
    rounded={"md"}
    fontWeight={"Bold"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
    href={"#"}
  >
    {children}
  </Tab>
);

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex
          h={16}
          alignItems={"center"}
          justifyContent={{ md: "space-between", base: "start" }}
        >
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={10} border={"1px  red"} alignItems={"center"}>
            <Box>
              {" "}
              <Image
                boxSize="3em"
                objectFit="cover"
                src="https://app.edvolve.in/logo_public.png"
                alt=""
                display={{ base: "none", md: "flex" }}
              />
              <Image
                boxSize="3em"
                w={"100%"}
                objectFit="cover"
                src="https://app.edvolve.in/edvolve_full.png"
                alt=""
                display={{ base: "flex", md: "none" }}
              />
            </Box>
            <Tabs>
              <TabList
                as={"nav"}
                spacing={4}
                display={{ base: "none", md: "flex" }}
              >
                {Links.map((link) => (
                  <TabLink key={link}>{link}</TabLink>
                ))}
              </TabList>
            </Tabs>
          </HStack>
          <HStack display={{ base: "none", md: "flex" }}>
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                children={<MdSearch color="gray.100" />}
              />
              <Input type="text" placeholder="Search" />
            </InputGroup>
          </HStack>

          <Flex
            alignItems={"center"}
            // display={{ sm: "none" }}
            border={"1px  red"}
            gap="3"
            display={{ base: "none", md: "flex" }}
          >
            <Button
              leftIcon={<MdOutlinePlayCircleFilled />}
              colorScheme="pink"
              variant="solid"
            >
              Discovery Zone
            </Button>
            <Menu>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}
              >
                <Avatar
                  size={"sm"}
                  src={
                    "https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
                  }
                />
              </MenuButton>
              <MenuList>
                <MenuItem>Link 1</MenuItem>
                <MenuItem>Link 2</MenuItem>
                <MenuDivider />
                <MenuItem>Link 3</MenuItem>
              </MenuList>
            </Menu>
            <Box p={2}>
              <Text fontWeight={"Bold"}>Harshita Shukla</Text>
            </Box>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link) => (
                <TabLink key={link}>{link}</TabLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
