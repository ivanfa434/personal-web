"use client";

import { sendGAEvent } from "@/utils/google-analytics";
import {
  Box,
  Button,
  Container,
  Flex,
  Grid,
  GridItem,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";

const Herosection = () => {
  return (
    <section id="home">
      <Box py={{ base: "12", md: "24" }} bgImage="url(/background.png)">
        <Container maxW="container.xl">
          <Grid
            templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
            gap={8}
            alignItems="center"
          >
            <GridItem>
              <Box textAlign={{ base: "center", md: "left" }}>
                <Text fontSize={{ base: "md", md: "lg" }}>Hello, I'm</Text>
                <Text
                  fontSize={{ base: "4xl", md: "6xl" }}
                  fontWeight="semibold"
                >
                  Ivan Fahrudin Aziz
                </Text>
                <Box mx={{ base: "auto", md: "0" }} mt={2}>
                  <Image src="/line.png" alt="icon" width="110" height={30} />
                </Box>
                <Text
                  pt="6"
                  fontSize={{ base: "xl", md: "2xl" }}
                  fontWeight="semibold"
                >
                  Service
                </Text>
                <Flex
                  alignItems="center"
                  pt="4"
                  justify={{ base: "center", md: "flex-start" }}
                >
                  <Box mr="2">
                    <Image src="/Code.png" alt="icon" width={30} height={30} />
                  </Box>
                  <Text fontSize={{ base: "md", md: "lg" }}>
                    Full-Stack Web Developer
                  </Text>
                </Flex>
                <Text
                  pt="4"
                  color="#909090"
                  fontSize={{ base: "sm", md: "md" }}
                >
                  Membangun solusi web yang scalable dan high-performance dengan
                  teknologi modern. Memiliki pengalaman dalam pengembangan
                  aplikasi berbasis Firebase, mobile development, serta
                  pengolahan data secara efisien.
                </Text>
                <Button
                  mt="6"
                  bgColor="#303030"
                  color="white"
                  width="36"
                  size="lg"
                  _hover={{ bg: "#505050" }}
                  onClick={() =>
                    sendGAEvent(
                      "ini adalah contact",
                      "ini bukan apa apa",
                      "jangan di pencet"
                    )
                  }
                >
                  Contact Me
                </Button>
              </Box>
            </GridItem>

            <GridItem>
              <Box
                position="relative"
                w="100%"
                h={{ base: "300px", md: "646px" }}
                mx="auto"
              >
                <Image
                  src="/image.png"
                  alt="person profile picture"
                  objectFit="cover"
                  fill
                  priority
                />
              </Box>
            </GridItem>
          </Grid>
        </Container>
      </Box>
    </section>
  );
};

export default Herosection;
