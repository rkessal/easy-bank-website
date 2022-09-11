import {
  Box,
  Container,
  Flex,
  HStack,
  Icon,
  Link,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import Image from "next/image";
import NextLink from "next/link";
import logo from "../img/logo-white.svg";
import {
  FaFacebook,
  FaYoutube,
  FaTwitter,
  FaPinterest,
  FaInstagram,
} from "react-icons/fa";
import CustomButton from "./CustomButton";

const iconsList = [
  {
    icon: FaFacebook,
    link: "#",
  },

  {
    icon: FaYoutube,
    link: "#",
  },

  {
    icon: FaTwitter,
    link: "#",
  },

  {
    icon: FaPinterest,
    link: "#",
  },

  {
    icon: FaInstagram,
    link: "#",
  },
];

const navItems = [
  { label: "About us", link: "#" },
  { label: "Contact", link: "#" },
  { label: "Blog", link: "#" },
  { label: "Careers", link: "#" },
  { label: "Support", link: "#" },
  { label: "Privacy Policy", link: "#" },
];

function NavbarItem({ href, children }) {
  return (
    <NextLink href={href} passHref>
      <Link
        _hover={{
          color: "primary.limeGreen",
          cursor: "pointer",
        }}
        color="neutral.white"
      >
        {children}
      </Link>
    </NextLink>
  );
}

function SocialIcon({ icon, link }) {
  return (
    <NextLink href={link} passHref>
      <Link>
        <Icon
          as={icon}
          color="neutral.white"
          fontSize="2xl"
          w={8}
          _hover={{ color: "primary.limeGreen" }}
        />
      </Link>
    </NextLink>
  );
}
function Footer() {
  return (
    <Box bgColor="primary.darkBlue">
      <Container maxW={{ base: "container.sm", lg: "container.lg" }} py={10}>
        <Flex
          direction={{ base: "column", lg: "row" }}
          columnGap={20}
          rowGap={8}
          alignItems="center"
        >
          <VStack spacing={7}>
            <Image src={logo} />
            <HStack>
              {iconsList.map((icon) => (
                <SocialIcon key={icon.icon} icon={icon.icon} link={icon.link} />
              ))}
            </HStack>
          </VStack>
          <SimpleGrid
            textAlign={{ base: "center", lg: "left" }}
            columns={{ base: "1", md: "2" }}
            columnGap={20}
            rowGap={3}
          >
            {navItems.map((navItem) => (
              <NavbarItem key={navItem.href} href={navItem.link}>
                {navItem.label}
              </NavbarItem>
            ))}
          </SimpleGrid>
          <VStack spacing={7}>
            <CustomButton>Request Invite</CustomButton>
            <Text color="neutral.grayishBlue">
              &copy; EasyBank. All Rights Reserved
            </Text>
          </VStack>
        </Flex>
      </Container>
    </Box>
  );
}

export default Footer;
