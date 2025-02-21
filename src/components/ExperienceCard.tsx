import { Button, Card, Grid, GridItem, List } from "@chakra-ui/react";
import React from "react";
import { Avatar } from "./ui/avatar";

const ExperienceCard = () => {
  return (
    <Grid
      mt="10"
      templateColumns="repeat{2, 1fr}"
      display="flex"
      gap="10"
    >
      <GridItem>
        <Card.Root w="500px" p="4">
          <Card.Body gap="2">
            <Card.Title mt="2">
              Full-Stack Developer (Freelance) | 2023 - Sekarang
            </Card.Title>
            <Card.Description>
              <List.Root>
                <List.Item>
                  Mengerjakan berbagai proyek web dan mobile, termasuk aplikasi
                  berbasis Firebase dan React.
                </List.Item>
                <List.Item>
                  Mengerjakan berbagai proyek web dan mobile, termasuk aplikasi
                  berbasis Firebase dan React.
                </List.Item>
                <List.Item>
                  Mengintegrasikan sistem pembayaran online dalam aplikasi
                  e-commerce.
                </List.Item>
              </List.Root>
            </Card.Description>
          </Card.Body>
          <Card.Footer justifyContent="flex-end"></Card.Footer>
        </Card.Root>
      </GridItem>
      <GridItem>
        <Card.Root w="500px" p="4">
          <Card.Body gap="2">
            <Card.Title mt="2">
              Software Engineer - Digital Forensics Research | 2024
            </Card.Title>
            <Card.Description>
              <List.Root>
                <List.Item>
                  Mengembangkan sistem rekonstruksi file yang hilang dalam
                  sistem Windows.
                </List.Item>
                <List.Item>
                  Menggunakan hashing untuk memastikan integritas data
                  investigasi.
                </List.Item>
                <List.Item>
                  Melakukan analisis dan dokumentasi proses investigasi digital.
                </List.Item>
              </List.Root>
            </Card.Description>
          </Card.Body>
          <Card.Footer justifyContent="flex-end"></Card.Footer>
        </Card.Root>
      </GridItem>
    </Grid>
  );
};

export default ExperienceCard;
