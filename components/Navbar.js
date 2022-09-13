import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Hide,
  HStack,
  IconButton,
  Link,
  Show,
  Text,
  VStack,
} from "@chakra-ui/react";
import { HiMenu, HiX } from "react-icons/hi";
import Image from "next/image";
import logo from "../img/logo.svg";
import NextLink from "next/link";
import CustomButton from "./CustomButton";
import { useState } from "react";

const navItems = [
  { label: "Home", link: "#" },
  { label: "About", link: "#" },
  { label: "Contact", link: "#" },
  { label: "Blog", link: "#" },
  { label: "Careers", link: "#" },
];

function NavbarItem({ href, children }) {
  return (
    <NextLink href={href} passHref>
      <Link
        py={{ base: "1", md: "6" }}
        _hover={{
          marginBottom: "-2px",
          borderBottom: "2px",
          borderColor: "primary.limeGreen",
          color: "primary.darkBlue",
        }}
        color={{ base: "primary.darkBlue", md: "neutral.grayishBlue" }}
      >
        {children}
      </Link>
    </NextLink>
  );
}

function Navbar() {
  const [nav, setNav] = useState(false);
  return (
    <Box
      bg="neutral.white"
      position="fixed"
      zIndex={20}
      top={0}
      left={0}
      right={0}
    >
      <Container
        maxW={{
          base: "container.sm",
          lg: "container.lg",
        }}
      >
        <Flex
          as="nav"
          h={20}
          align="center"
          justify="space-between"
          position="relative"
        >
          <Image src={logo} alt="logo" loading="lazy" />
          <Show above="md">
            <HStack spacing={{ md: "2", lg: "10" }}>
              {navItems.map((item) => (
                <NavbarItem key={item.label} href={item.link}>
                  {item.label}
                </NavbarItem>
              ))}
            </HStack>
            <CustomButton>Request Invite</CustomButton>
          </Show>
          <Hide above="md">
            <IconButton
              onClick={() =>
                setNav((prev) => {
                  console.log("nav : " + nav);
                  return !prev;
                })
              }
              m={1}
              icon={nav ? <HiX /> : <HiMenu />}
              color="neutral.grayishBlue"
              bg="neutral.white"
            />
            <Box
              bgColor="neutral.white"
              position="fixed"
              top={20}
              left={nav ? 0 : 600}
              right={nav ? 0 : -600}
              transition="all .80s ease"
              p={7}
              roundedBottom="xl"
              boxShadow="xl"
            >
              <VStack>
                {navItems.map((item) => (
                  <NavbarItem key={item.label} href={item.link}>
                    {item.label}
                  </NavbarItem>
                ))}
              </VStack>
            </Box>
          </Hide>
        </Flex>
      </Container>
    </Box>
  );
}

export default Navbar;
