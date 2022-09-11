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
} from "@chakra-ui/react";
import { HiMenu } from "react-icons/hi";
import Image from "next/image";
import logo from "../img/logo.svg";
import NextLink from "next/link";
import CustomButton from "./CustomButton";

const navItems = [
  { label: "Home", link: "#" },
  { label: "About", link: "#" },
  { label: "Contact", link: "#" },
  { label: "Blog", link: "#" },
  { label: "Careers", link: "#" },
];

function NavbarItem({ href, children }) {
  return (
    <Show above="md">
      <NextLink href={href} passHref>
        <Link
          py={5}
          _hover={{
            marginBottom: "-2px",
            borderBottom: "2px",
            borderColor: "primary.limeGreen",
          }}
          color="neutral.grayishBlue"
        >
          {children}
        </Link>
      </NextLink>
    </Show>
  );
}

function Navbar() {
  return (
    <Box bg="neutral.white" position="relative" zIndex={1}>
      <Container
        maxW={{
          base: "container.sm",
          lg: "container.lg",
        }}
      >
        <Flex as="nav" h={20} align="center" justify="space-between">
          <Image src={logo} alt="logo" loading="lazy" />
          <HStack spacing={{ md: "2", lg: "10" }}>
            {navItems.map((item) => (
              <NavbarItem key={item.link} href={item.link}>
                {item.label}
              </NavbarItem>
            ))}
          </HStack>
          <Show above="md">
            <CustomButton>Request Invite</CustomButton>
          </Show>
          <Hide above="md">
            <IconButton
              m={1}
              icon={<HiMenu />}
              color="neutral.grayishBlue"
              bg="neutral.white"
            />
          </Hide>
        </Flex>
      </Container>
    </Box>
  );
}

export default Navbar;
