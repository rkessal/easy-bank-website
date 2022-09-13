import {
  Box,
  Center,
  Container,
  Flex,
  Heading,
  SlideFade,
  Text,
  VStack,
} from "@chakra-ui/react";
import Image from "next/image";
import SectionTitle from "./SectionTitle";
import onlineBankingIcon from "../img/icon-online.svg";
import apiIcon from "../img/icon-api.svg";
import onboardingIcon from "../img/icon-onboarding.svg";
import budgetingIcon from "../img/icon-budgeting.svg";
import { useInViewport } from "react-in-viewport";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const featuresList = [
  {
    icon: onlineBankingIcon,
    title: "Online Banking",
    description:
      "Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.",
  },
  {
    icon: budgetingIcon,
    title: "Simple budgeting",
    description:
      "See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.",
  },

  {
    icon: onboardingIcon,
    title: "Fast Onboarding",
    description:
      "We don’t do branches. Open your account in minutes online and start taking control of your finances right away.",
  },

  {
    icon: apiIcon,
    title: "Open API",
    description:
      "Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.",
  },
];

const Feature = ({ title, icon, children }) => {
  const ref = useRef();
  const { inViewport } = useInViewport(
    ref,
    { rootMargin: "-200px" },
    { disconnectOnLeave: false },
    {}
  );
  const [anim, setAnim] = useState(false);

  useEffect(() => {
    if (inViewport) setAnim(true);
  }, [inViewport]);

  return (
    <SlideFade offsetY="50px" in={anim}>
      <VStack
        ref={ref}
        spacing={5}
        textAlign={{ base: "center", lg: "left" }}
        alignItems={{ base: "center", lg: "start" }}
      >
        <Image src={icon} />
        <Heading as="h4" size={{ base: "lg" }} fontWeight="medium">
          {title}
        </Heading>
        <Text>{children}</Text>
      </VStack>
    </SlideFade>
  );
};

const Features = () => {
  return (
    <Box bgColor="neutral.lightGrayishBlue">
      <Container maxW={{ base: "container.sm", lg: "container.lg" }} py={20}>
        <VStack
          mb={20}
          textAlign={{ base: "center", lg: "left" }}
          spacing={8}
          alignItems={{ base: "center", lg: "start" }}
          maxW="xl"
        >
          <SectionTitle key="0">Why choose EasyBank?</SectionTitle>
          <Text color="neutral.grayishBlue">
            {" "}
            We leverage Open Banking to turn your bank account into your
            financial hub. Control your finances like never before.
          </Text>
        </VStack>

        <Flex direction={{ base: "column", lg: "row" }} gap={45}>
          {featuresList.map((feature) => (
            <Feature
              key={feature.title}
              title={feature.title}
              icon={feature.icon}
            >
              {feature.description}
            </Feature>
          ))}
        </Flex>
      </Container>
    </Box>
  );
};

export default Features;
