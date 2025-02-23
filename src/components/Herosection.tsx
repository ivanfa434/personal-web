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
    <Box py={"24"} bgImage="url(/background.png)">
      <Container>
        <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} pt="-10">
          <GridItem display="flex" alignItems="center">
            <Box>
              <Text>Hello, I,m</Text>
              <Text fontSize="6xl" fontWeight="semibold">
                Ivan Fahrudin Aziz
              </Text>
              <Box>
                <Image src="/line.png" alt="icon" width="110" height={30} />
              </Box>
              <Text pt="10" fontSize="2xl" fontWeight="semibold">
                Service
              </Text>
              <Flex alignItems="center" pt="5">
                <Box>
                  <Image src="/Code.png" alt="icon" width={30} height={30} />
                </Box>
                <Text>Full-Stack Web Developer</Text>
              </Flex>
              <Text pt="5" color="#909090">
                Membangun solusi web yang scalable dan high-performance dengan
                teknologi modern. Memiliki pengalaman dalam pengembangan
                aplikasi berbasis Firebase, mobile development, serta pengolahan
                data secara efisien.
              </Text>
              <Button
                mt="10"
                pt="20"
                bgColor="#303030"
                padding="-10"
                width="32"
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
            >
              <Image
                src="/image.png"
                alt="person profile picture"
                objectFit="contain"
                fill
              />
            </Box>
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
};

export default Herosection;
