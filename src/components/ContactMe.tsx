import {
  Box,
  Circle,
  Container,
  Flex,
  Text,
  VStack,
} from "@chakra-ui/react";
import Image from "next/image";
import { LuQuote } from "react-icons/lu";

const ContactMe = () => {
  return (
    <Container maxW="container.xl" py={12} textAlign="center">
      <Text fontSize={{ base: "3xl", md: "4xl" }} fontWeight="bold" color="gray.700">
        My <Text as="span" color="black">Personal Website</Text>
      </Text>
      
      <VStack gap={4} mt={6} px={4} maxW="2xl" mx="auto">
        <Flex align="center" gap={2}>
          <Circle bg="blue.600" size={8} color="white">
            <LuQuote size={20} />
          </Circle>
          <Text fontSize={{ base: "md", md: "lg" }} color="gray.600" fontStyle="italic">
            "Kesuksesan dalam dunia teknologi bukan hanya tentang kode yang sempurna, tapi juga tentang keberanian untuk mencoba dan terus berkembang."
          </Text>
        </Flex>
        <Text fontSize="sm" fontWeight="medium" color="gray.500">
          — Ivan Fahrudin Aziz
        </Text>
      </VStack>
      
      <Box mt={8}>
        <Image src="/line2.png" alt="divider" width={1500} height={10} />
      </Box>
      
      <Text mt={10} fontSize={{ base: "2xl", md: "3xl" }} fontWeight="semibold">
        Contact Me
      </Text>
      
      <Flex justify="center" gap={6} mt={6} flexWrap="wrap">
        {['instagram', 'facebook', 'twitter', 'linkedin'].map((platform) => (
          <Image
            key={platform}
            src={`/${platform}.svg`}
            alt={`${platform} logo`}
            width={60}
            height={60}
          />
        ))}
      </Flex>
    </Container>
  );
};

export default ContactMe;
