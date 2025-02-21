import { Box, Container, Grid, GridItem, Text } from "@chakra-ui/react";
import Image from "next/image";
import Aboutmecard from "./Aboutmecard";

const Aboutme = () => {
  return (
    <Box bgImage="url(/background.png)" mt="10">
      <Container>
        <Text fontSize="6xl" fontWeight="semibold">
          About Me
        </Text>
        <Box>
          <Image src="/line.png" alt="icon" width="110" height={30} />
        </Box>
        <Text pt="10" color="#909090">
          Saya adalah seorang Full-Stack Web Developer dengan pengalaman dalam
          pengembangan aplikasi mobile dan web berbasis Firebase, React, dan
          teknologi modern lainnya. Saya juga memiliki latar belakang di bidang
          digital forensik dan telah mengerjakan berbagai proyek terkait
          keamanan data serta rekonstruksi file.
        </Text>
        <Text pt="10" fontSize="2xl" fontWeight="semibold">
          Keahlian Utama :
        </Text>
        <Grid templateColumns="repeat(5, 1fr)" pt="10" gap="4">
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
        <Container justifyItems="center">
          <Text mt="12" justifyContent="center" color="#909090">
            Ketepatan waktu dalam pengerjaan proyek, Perhatian terhadap detail
            dan kualitas, kode Komunikasi yang jelas dengan klien
          </Text>
          <Box mt="5">
            <Image src="/line2.png" alt="icon" height="500" width="700"/>
          </Box>
        </Container>
      </Container>
    </Box>
  );
};

export default Aboutme;
