import {
  Box,
  Container,
  Flex,
  HStack,
  Stack,
  Text,
  VStack,
}from "@chakra-ui/react";

import Image from "next/image";
import React from "react";
import { Avatar } from "./ui/avatar";

const testimonials = [
  {
    id: 1,
    name: "Matthew Jones",
    role: "CTO, Company",
    image: "https://randomuser.me/api/portraits/men/70.jpg",
    rating: 5,
    review: "Sage is a great software engineer. He is very professional and knowledgeable.",
  },
  {
    id: 2,
    name: "Emily Carter",
    role: "Project Manager, TechCorp",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    rating: 5,
    review: "Working with Sage was a fantastic experience. His attention to detail is remarkable!",
  },
  {
    id: 3,
    name: "Daniel Wright",
    role: "CEO, Startup Inc.",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
    rating: 5,
    review: "Sage delivers high-quality code and meets deadlines efficiently. Highly recommend!",
  },
];

const Testimonials = () => {
  return (
    <Container maxW="container.lg" py={10}>
      <VStack gap={4} textAlign="center">
        <Text fontSize="2xl" color="gray.600" fontFamily="mono">
          Testimonials
        </Text>
        <Image src="/line2.png" alt="divider" width={100} height={10} />
      </VStack>

      <Flex
        direction={{ base: "column", md: "row" }}
        justify="center"
        align="center"
        mt={8}
        gap={6}
      >
        {testimonials.map((testimonial) => (
          <Box
            key={testimonial.id}
            p={6}
            bg="white"
            boxShadow="lg"
            borderRadius="lg"
            maxW="sm"
            textAlign="left"
          >
            <HStack mb={3}>
              {Array.from({ length: testimonial.rating }).map((_, i) => (
                <Text key={i} color="orange.400">★</Text>
              ))}
            </HStack>
            <Text mb={4} color="gray.700">{testimonial.review}</Text>

            <HStack mt={4}>
              <Avatar name={testimonial.name} src={testimonial.image} />
              <Stack gap={0}>
                <Text fontWeight="bold">{testimonial.name}</Text>
                <Text fontSize="sm" color="gray.500">{testimonial.role}</Text>
              </Stack>
            </HStack>
          </Box>
        ))}
      </Flex>
    </Container>
  );
};

export default Testimonials;
