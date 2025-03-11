import { Box, Container, Flex, Grid, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <Box mt={10} bgImage="url(/background.png)" bgSize="cover" py={10}>
        <Container maxW="6xl">
          <Stack gap={3} textAlign="center">
            <Text fontSize={{ base: "4xl", md: "6xl" }} fontWeight="semibold">
              Portfolio
            </Text>
            <Flex justify="center">
              <Image src="/line.png" alt="icon" width={110} height={30} />
            </Flex>
          </Stack>

          <Stack mt={10} gap={6}>
            <Box textAlign="center">
              <Text fontSize={{ base: "2xl", md: "4xl" }} fontWeight="semibold">
                Aplikasi Layanan Service Alat Musik
              </Text>
              <Text color="gray.500">
                Android Studio, Firebase, Kotlin, XML
              </Text>
            </Box>

            <Grid
              templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
              gap={10}
              alignItems="center"
            >
              <Box>
                <Text fontSize="lg" lineHeight="tall">
                  Saya mengembangkan aplikasi mobile berbasis Android Studio dan
                  Firebase untuk membantu pemilik alat musik menemukan layanan
                  service terpercaya. Aplikasi ini memiliki fitur login
                  admin/user, tracking status service secara real-time, serta
                  pemindaian QR Code untuk melihat informasi barang. Dengan
                  UI/UX yang ramah pengguna dan backend yang efisien, aplikasi
                  ini telah digunakan oleh lebih dari 100 pelanggan dalam 3
                  bulan pertama, meningkatkan efisiensi pencatatan dan pembaruan
                  status service secara signifikan.
                </Text>
              </Box>

              <Flex justify="center">
                <Image
                  src="/aplikasiservice.png"
                  alt="Aplikasi"
                  width={400}
                  height={400}
                  style={{ borderRadius: "10px" }}
                />
              </Flex>
            </Grid>
          </Stack>
        </Container>
      </Box>
    </section>
  );
};

export default Portfolio;
