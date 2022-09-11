import { Box, Container, Flex, Heading, Text, VStack } from "@chakra-ui/react";
import Image from "next/image";
import mockups from "../img/image-mockups.png";
import CustomButton from "./CustomButton";
import SectionTitle from "./SectionTitle";
import bgIntro from "../img/bg-intro-desktop.svg";

function Hero() {
  return (
    <Box
      bgColor="neutral.veryLightGray"
      bgImage="url('../img/bg-intro-desktop.svg')"
      bgPosition="center"
    >
      <Container
        mt={{ base: "-40", lg: "-10" }}
        maxW={{ base: "container.sm", lg: "container.lg" }}
        pb={20}
      >
        <Flex
          direction={{ base: "column", lg: "row-reverse" }}
          alignItems="center"
          justifyContent="center"
          textAlign={{ base: "center", lg: "left" }}
          gap={{ base: "5", lg: "20" }}
        >
          <Image src={mockups} />
          <VStack spacing={8} alignItems={{ base: "center", lg: "start" }}>
            <Heading as="h3" size="3xl" fontWeight="medium">
              Next generation digital banking
            </Heading>
            <Text color="neutral.grayishBlue">
              Take your financial life online. Your Easybank account will be a
              one-stop-shop for spending, saving, budgeting, investing, and much
              more.
            </Text>
            <CustomButton>Request Invite</CustomButton>
          </VStack>
        </Flex>
      </Container>
    </Box>
  );
}

export default Hero;
