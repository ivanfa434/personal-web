import { Box, Container, Grid, GridItem, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";

const Portfolio = () => {
  return (
    <Box mt="10" bgImage="url(/background.png)">
      <Container>
        <Text fontSize="6xl" fontWeight="semibold">
          Portfolio
        </Text>
        <Box>
          <Image src="/line.png" alt="icon" width="110" height={30} />
        </Box>
        <Container mt="10">
          <Stack>
            <Container justifyItems="center" mb="5">
              <Text fontSize="4xl" fontWeight="semibold">Aplikasi Layanan Service Alat Musik</Text>
              <Text color="#909090">Android Studio, Firebase, Kotlin, XML</Text>
            </Container>
            <Grid templateColumns="repeat(2, 1fr)" gap="10">
              <GridItem alignContent="center">
                <Text>
                  Saya mengembangkan aplikasi mobile berbasis Android Studio <br /> dan
                  Firebase untuk membantu pemilik alat musik menemukan layanan
                  service terpercaya. Aplikasi ini memiliki fitur login
                  admin/user, tracking status <br /> service secara real-time, serta
                  pemindaian QR Code untuk melihat <br /> informasi barang. Dengan
                  UI/UX yang ramah pengguna dan backend <br /> yang efisien, aplikasi
                  ini telah digunakan oleh lebih dari 100 pelanggan <br /> dalam 3
                  bulan pertama, meningkatkan efisiensi pencatatan <br /> dan pembaruan
                  status service secara signifikan.
                </Text>
              </GridItem>
              <GridItem>
                <Box justifyItems="center" alignContent="center" height="auto">
                  <Image
                    src="/aplikasiservice.png"
                    alt="aplikasi"
                    width="400"
                    height="400"
                  ></Image>
                </Box>
              </GridItem>
            </Grid>
          </Stack>
        </Container>
      </Container>
    </Box>
  );
};

export default Portfolio;
