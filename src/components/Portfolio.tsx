import {
  Badge,
  Box,
  Button,
  Card,
  Container,
  HStack,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

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
          <Card.Root flexDirection="column" overflow="hidden" maxW="full">
            <Card.Title
              mt="10"
              fontSize="4xl"
              fontWeight="semibold"
              justifyContent="center"
              alignSelf="center"
            >
              Aplikasi Layanan Service Alat Musik
            </Card.Title>
            <Text color="#909090" alignSelf="center" mt="5" mb="10">
              Android Studio, Firebase, Kotlin, XML
            </Text>
            <Card.Root flexDirection="row" overflow="hidden" maxW="full" p="14">
              <Box>
                <Card.Body>
                  <Card.Title mb="2">Situation:</Card.Title>
                  <Card.Description mb="2">
                    Banyak pemilik alat musik kesulitan mencari tempat service
                    terpercaya. Saya <br /> mengembangkan aplikasi yang menghubungkan
                    pelanggan dengan penyedia layanan <br /> service alat musik,
                    termasuk fitur tracking status service secara real-time.
                  </Card.Description>
                  <Card.Title mb="2">Task:</Card.Title>
                  <Card.Description mb="2">
                    Membangun aplikasi mobile dengan UI/UX yang ramah pengguna
                    serta backend <br /> berbasis Firebase untuk manajemen data
                    pelanggan dan barang yang diperbaiki.
                  </Card.Description>
                  <Card.Title mb="2">Action:</Card.Title>
                  <Card.Description mb="2">
                    Menggunakan Android Studio untuk mengembangkan aplikasi
                    android desain modern. <br />
                    Mengimplementasikan Firebase Authentication untuk login
                    admin dan user. <br />
                    Menggunakan Firebase Realtime Database untuk menyimpan data
                    service. <br />
                    Mengembangkan fitur scan QR Code barang untuk melihat data
                    barang. <br />
                  </Card.Description>
                  <Card.Title mb="2">Result:</Card.Title>
                  <Card.Description mb="2">
                    Aplikasi digunakan oleh lebih dari 100 pelanggan dalam 3
                    bulan pertama. <br />
                    Proses pencatatan dan update status service menjadi lebih
                    efisien. <br />
                    Feedback positif dari pengguna mengenai kemudahan akses
                    layanan. <br />
                  </Card.Description>
                </Card.Body>
              </Box>
              <Box>
                <Image
                  objectFit="cover"
                  width="500"
                  height="600"
                  src="/aplikasiservice.png"
                  alt="Caffe Latte"
                />
              </Box>
            </Card.Root>
          </Card.Root>
        </Container>
      </Container>
    </Box>
  );
};

export default Portfolio;
