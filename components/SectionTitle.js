import { Heading } from "@chakra-ui/react";

const SectionTitle = ({ children }) => {
  return (
    <Heading as="h2" size="2xl" fontWeight="medium" color="primary.darkBlue">
      {children}
    </Heading>
  );
};

export default SectionTitle;
