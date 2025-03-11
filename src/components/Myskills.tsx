import { Box, Container, Grid, GridItem, Text } from "@chakra-ui/react";
import Image from "next/image";

const skills = [
  { src: "/1_javascript.png", alt: "JavaScript" },
  { src: "/html.png", alt: "HTML" },
  { src: "/css.png", alt: "CSS" },
  { src: "/next.svg", alt: "Next.js" },
  { src: "/kotlin.png", alt: "Kotlin" },
  { src: "/firebase.png", alt: "Firebase" },
  { src: "/flutter.png", alt: "Flutter" },
  { src: "/python.png", alt: "Python" },
  { src: "/tailwind.png", alt: "Tailwind CSS" },
  { src: "/mysql.png", alt: "MySQL" },
  { src: "/react.png", alt: "React" },
  { src: "/chakraui.png", alt: "Chakra UI" },
];

export default function Myskills() {
  return (
    <section id="skills">
      <Box mt="10" bgImage="url(/background.png)" py={10}>
        <Container maxW="container.lg">
          <Text fontSize="4xl" fontWeight="semibold" textAlign="center">
            My Skills
          </Text>
          <Box display="flex" justifyContent="center" my={4}>
            <Image src="/line.png" alt="icon" width={110} height={30} />
          </Box>

          <Grid
            gap={6}
            templateColumns={{
              base: "repeat(2, 1fr)",
              md: "repeat(3, 1fr)",
              lg: "repeat(4, 1fr)",
            }}
          >
            {skills.map((skill, index) => (
              <GridItem key={index} display="flex" justifyContent="center">
                <Box
                  w={{ base: "120px", md: "180px", lg: "200px" }}
                  h={{ base: "120px", md: "180px", lg: "200px" }}
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  boxShadow="lg"
                  borderRadius="lg"
                  p={4}
                  bg="white"
                >
                  <Image
                    src={skill.src}
                    alt={skill.alt}
                    width={100}
                    height={100}
                  />
                </Box>
              </GridItem>
            ))}
          </Grid>
        </Container>
      </Box>
    </section>
  );
}
