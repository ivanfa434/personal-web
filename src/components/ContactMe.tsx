import {
  Blockquote,
  Box,
  Circle,
  Container,
  Flex,
  Float,
  Grid,
  GridItem,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import { LuQuote } from "react-icons/lu";

const ContactMe = () => {
  return (
    <Container
      maxW="full"
      roundedTop="4xl"
      marginTop="10"
      alignItems="center"
      height="500px"
      justifyItems="center"
      pt="10"
    >
      <Text color="#909090" fontWeight="bold" fontSize="4xl" mb="12">
        My Perso
        <Text color="#303030" as="span">
          nal Website
        </Text>
      </Text>
      <Blockquote.Root colorPalette="blue" ps="8">
        <Float placement="middle-start">
          <Circle bg="blue.600" size="8" color="white">
            <LuQuote />
          </Circle>
        </Float>
        <Blockquote.Content cite="Uzumaki Naruto" justifyContent="center" color="#909090">
          "Kesuksesan dalam dunia teknologi bukan hanya tentang kode yang
          sempurna, tapi juga tentang keberanian untuk mencoba dan terus
          berkembang."
        </Blockquote.Content>
        <Blockquote.Caption>
          — <cite>Ivan Fahrudin Aziz</cite>
        </Blockquote.Caption>
      </Blockquote.Root>
      <Box mt="10">
        <Image src="/line2.png" alt="icon" height="500" width="900" />
      </Box>
      <Text mt="6" fontWeight="semibold" fontSize="3xl">
        Contact Me
      </Text>
      <Flex gap={"24"} mt="10">
        <Image
          src="/instagram.svg"
          alt="Image Not Found"
          width={80}
          height={80}
        />
        <Image
          src="/facebook.svg"
          alt="Image Not Found"
          width={80}
          height={80}
        />
        <Image
          src="/Twitter.svg"
          alt="Image Not Found"
          width={80}
          height={80}
        />
        <Image
          src="/Linkedin.svg"
          alt="Image Not Found"
          width={80}
          height={80}
        />
      </Flex>
    </Container>
  );
};

export default ContactMe;
