import { Box, Heading, Text, Flex, Image } from "@chakra-ui/react";
import React, { FC } from "react";

interface AboutMeCard {
  title: string;
  description: string;
}

const Aboutmecard: FC<AboutMeCard> = ({ title, description }) => {
  return (
    <Box
      border="1px solid #e2e8f0"
      borderRadius="md"
      p="4"
      width="250px"
      height="auto"
    >
      <Flex alignItems="center" mb="2">
        <Box>
          <Image src="/Code.png" alt="icon" width={30} height={30} />
        </Box>
        <Heading fontSize="lg" ml="5">
          {title}
        </Heading>
      </Flex>
      <Text color="#909090">{description}</Text>
    </Box>
  );
};

export default Aboutmecard;
