import {
  Box,
  Container,
  Grid,
  GridItem,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import Image from "next/image";
import SectionTitle from "./SectionTitle";
import confettiImg from "../img/image-confetti.jpg";
import currencyImg from "../img/image-currency.jpg";
import planeImg from "../img/image-plane.jpg";
import restaurantImg from "../img/image-restaurant.jpg";

const articlesList = [
  {
    img: currencyImg,
    author: "Claire Robinson",
    title: "Receive money in any currency with no fees",
    description:
      "The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …",
  },

  {
    img: restaurantImg,
    author: "Wilson Hutton",
    title: "Treat yourself without worrying about money",
    description:
      "Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …",
  },

  {
    img: planeImg,
    author: "Wilson Hutton",
    title: "Take your Easybank card wherever you go",
    description:
      "We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …",
  },

  {
    img: confettiImg,
    author: "Claire Robinson",
    title: "Our invite-only Beta accounts are now live!",
    description:
      "After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ...",
  },
];

function Article({ img, author, title, children }) {
  return (
    <Box bgColor="neutral.white" rounded="2xl" overflow="hidden" maxW="sm">
      <Image src={img} width={1920} height={1280} />
      <VStack p={8} textAlign="left" alignItems="start">
        <Text fontSize="xs" color="neutral.grayishBlue">
          By {author}
        </Text>
        <Text
          as="h5"
          fontSize="xl"
          color="primary.darkBlue"
          _hover={{ color: "primary.limeGreen", cursor: "pointer" }}
        >
          {title}
        </Text>
        <Text fontSize="sm" color="neutral.grayishBlue">
          {children}
        </Text>
      </VStack>
    </Box>
  );
}

function Articles() {
  return (
    <Box bgColor="neutral.veryLightGray">
      <Container maxW={{ base: "container.sm", lg: "container.lg" }} py={20}>
        <VStack
          textAlign={{ base: "center", lg: "left" }}
          spacing={8}
          alignItems={{ base: "center", lg: "start" }}
        >
          <SectionTitle key="1">Latest Articles</SectionTitle>
          <SimpleGrid
            columns={{
              base: "1",
              md: "2",
              lg: "4",
            }}
            gap={6}
          >
            {articlesList.map((article) => (
              <Article
                key={article.title}
                img={article.img}
                title={article.title}
                author={article.author}
              >
                {article.description}
              </Article>
            ))}
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  );
}

export default Articles;
