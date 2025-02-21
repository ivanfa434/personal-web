import { Container, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <Container
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      padding="5"
    >
      <Flex gap={"10"}>
        <Text>Home</Text>
        <Text>About</Text>
        <Text>Skills</Text>
        <Text>Portfolio</Text>
      </Flex>
        <Text
          color="#909090"
          fontWeight="bold"
          fontSize="25px"
        >
          My Perso
          <Text color="#303030" as="span">nal Website</Text>
        </Text>

      <Flex gap={4} me="32">
        <Image
          src="/instagram.svg"
          alt="Image Not Found"
          width={24}
          height={24}
        />
        <Image
          src="/facebook.svg"
          alt="Image Not Found"
          width={24}
          height={24}
        />
        <Image
          src="/Twitter.svg"
          alt="Image Not Found"
          width={24}
          height={24}
        />
        <Image
          src="/Linkedin.svg"
          alt="Image Not Found"
          width={24}
          height={24}
        />
      </Flex>
    </Container>
  );
};

export default Navbar;
