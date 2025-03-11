import {
  Box,
  Container,
  Grid,
  Text,
  ListItem,
  Flex,
  List,
} from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

const experiences = [
  {
    id: 1,
    title: "Full-Stack Developer (Freelance) | 2023 - Sekarang",
    details: [
      "Mengerjakan berbagai proyek web dan mobile, termasuk aplikasi berbasis Firebase dan React.",
      "Menggunakan teknologi seperti React, Next.js, dan Chakra UI.",
      "Membuat aplikasi yang responsif dan performa tinggi.",
    ],
  },
  {
    id: 2,
    title: "Software Engineer - Digital Forensics Research | 2024",
    details: [
      "Mengembangkan sistem rekonstruksi file yang hilang dalam sistem Windows.",
      "Menggunakan hashing untuk memastikan integritas data investigasi.",
      "Melakukan analisis dan dokumentasi proses investigasi digital.",
    ],
  },
];

const Experience = () => {
  return (
    <Box mt={10} bgImage="url(/background.png)" py={10}>
      <Container maxW="container.lg" textAlign="center">
        <Text fontSize={{ base: "3xl", md: "5xl" }} fontWeight="bold">
          My Experience
        </Text>
        <Flex justify="center" mt={2}>
          <Image src="/line.png" alt="icon" width={110} height={30} />
        </Flex>
        <Grid mt={16} templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={8}>
          {experiences.map((exp) => (
            <Flex
              key={exp.id}
              direction="column"
              align="center"
              textAlign="left"
            >
              <Text fontSize="5xl" fontWeight="bold">
                {exp.id}
              </Text>
              <Box my={2}>
                <Image src="/line.png" alt="icon" width={40} height={5} />
              </Box>
              <Box p={6} boxShadow="lg" borderRadius="lg" bg="white" w="full">
                <Text fontSize="xl" fontWeight="bold">
                  {exp.title}
                </Text>
                <ul style={{ marginTop: "8px", paddingLeft: "20px" }}>
                  {exp.details.map((detail, index) => (
                    <li
                      key={index}
                      style={{ fontSize: "16px", color: "gray.700" }}
                    >
                      {detail}
                    </li>
                  ))}
                </ul>
              </Box>
            </Flex>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Experience;
