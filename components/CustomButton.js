import { Button } from "@chakra-ui/react";
export default function CustomButton({ children }) {
  return (
    <Button
      px={7}
      py={6}
      rounded="3xl"
      color="neutral.white"
      bgGradient="linear(to-r, primary.limeGreen, primary.brightCyan)"
      _hover={{
        bgGradient: "linear(to-r, primary.limeGreen, primary.brightCyan)",
      }}
    >
      {children}
    </Button>
  );
}
