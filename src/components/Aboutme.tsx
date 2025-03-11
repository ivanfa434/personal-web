import { Box, Container, Grid, GridItem, Text } from "@chakra-ui/react";
import Image from "next/image";
import Aboutmecard from "./Aboutmecard";

const Aboutme = () => {
  return (
    <section id="about">
      <Box bgImage="url(/background.png)" mt="10" px={4}>
        <Container maxW="container.lg">
          <Text
            fontSize={{ base: "3xl", md: "4xl", lg: "6xl" }}
            fontWeight="semibold"
            textAlign="center"
          >
            About Me
          </Text>
          <Box display="flex" justifyContent="center">
            <Image src="/line.png" alt="icon" width="110" height={30} />
          </Box>
          <Text
            pt="6"
            color="#909090"
            textAlign="center"
            fontSize={{ base: "sm", md: "md" }}
          >
            Saya adalah seorang Full-Stack Web Developer dengan pengalaman dalam
            pengembangan aplikasi mobile dan web berbasis Firebase, React, dan
            teknologi modern lainnya. Saya juga memiliki latar belakang di
            bidang digital forensik dan telah mengerjakan berbagai proyek
            terkait keamanan data serta rekonstruksi file.
          </Text>
          <Text
            pt="10"
            fontSize={{ base: "xl", md: "2xl" }}
            fontWeight="semibold"
            textAlign="center"
          >
            Keahlian Utama :
          </Text>

          <Grid
            templateColumns={{
              base: "repeat(1, 1fr)",
              sm: "repeat(2, 1fr)",
              md: "repeat(3, 1fr)",
              lg: "repeat(5, 1fr)",
            }}
            pt="10"
            gap="4"
            justifyContent="center"
          >
            <GridItem>
              <Aboutmecard
                title="Front-End"
                description="ReactJS, Next.js, Flutter, Tailwind CSS"
              />
            </GridItem>
            <GridItem>
              <Aboutmecard
                title="Back-End"
                description="Node.js, Firebase, Express.js"
              />
            </GridItem>
            <GridItem>
              <Aboutmecard
                title="Mobile"
                description="Flutter, Kotlin (Android Studio)"
              />
            </GridItem>
            <GridItem>
              <Aboutmecard
                title="Database"
                description="Firebase Realtime Database, MongoDB, PHP My Admin"
              />
            </GridItem>
            <GridItem>
              <Aboutmecard title="DevOps" description="Git" />
            </GridItem>
          </Grid>

          <Container maxW="container.md" textAlign="center">
            <Text mt="12" color="#909090" fontSize={{ base: "sm", md: "md" }}>
              Ketepatan waktu dalam pengerjaan proyek, Perhatian terhadap detail
              dan kualitas, kode Komunikasi yang jelas dengan klien
            </Text>
            <Box mt="5" display="flex" justifyContent="center">
              <Image src="/line2.png" alt="icon" height="300" width="500" />
            </Box>
          </Container>
        </Container>
      </Box>
    </section>
  );
};

export default Aboutme;
