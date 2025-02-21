import { Box, Container, Grid, GridItem, Text } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import ExperienceCard from "./ExperienceCard";

const Experience = () => {
  return (
    <Box  mt="10" bgImage="url(/background.png)">
      <Container>
        <Text fontSize="6xl" fontWeight="semibold">
          My Experience
        </Text>
        <Box>
          <Image src="/line.png" alt="icon" width="110" height={30} />
        </Box>
        <Container>
            <ExperienceCard />
        </Container>
      </Container>
    </Box>
  );
};

export default Experience;
