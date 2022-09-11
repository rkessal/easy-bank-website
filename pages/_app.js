import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";

const colors = {
  primary: {
    darkBlue: "hsl(233, 26%, 24%)",
    limeGreen: "hsl(136, 65%, 51%)",
    brightCyan: "hsl(192, 70%, 51%)",
  },
  neutral: {
    grayishBlue: "hsl(233, 8%, 62%)",
    lightGrayishBlue: "hsl(220, 16%, 96%)",
    veryLightGray: "hsl(0, 0%, 98%)",
    white: "hsl(0, 0%, 100%)",
  },
};

const theme = extendTheme({ colors });

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
