import { Box, Container, VStack } from "@chakra-ui/react";
import Head from "next/head";
import Image from "next/image";
import Articles from "../components/Articles";
import Features from "../components/Features";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
      <Head>
        <title>EasyBank</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Box>
        <Navbar />
        <Hero />
        <Features />
        <Articles />
        <Footer />
      </Box>
    </>
  );
}
