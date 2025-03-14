import { Box, Heading, Text, Flex } from "@chakra-ui/react";
import Image from "next/image";
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
      width={{ base: "100%", sm: "250px" }}
      height="auto"
      mx="auto"
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
