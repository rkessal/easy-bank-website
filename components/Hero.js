import { Box, Container, Flex, Heading, Text, VStack } from "@chakra-ui/react";
import Image from "next/image";
import mockups from "../img/image-mockups.png";
import CustomButton from "./CustomButton";
import { motion } from "framer-motion";

function Hero() {
  const MotionContainer = motion(Container);
  const variants = {
    hidden: { opacity: 0, x: 0, y: 20 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: -0, y: 20 },
  };
  return (
    <Box bg="neutral.veryLightGray">
      <MotionContainer
        mt={{ base: "-20", lg: "20" }}
        maxW={{ base: "container.sm", lg: "container.lg" }}
        py={20}
        initial="hidden"
        animate="enter"
        exit="exit"
        variants={variants}
        transition={{ duration: 0.4, type: "easeInOut" }}
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
      </MotionContainer>
    </Box>
  );
}

export default Hero;
