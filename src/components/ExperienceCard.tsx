import {
  Box,
  Card,
  Grid,
  GridItem,
  List,
  ListItem,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";

const ExperienceCard = () => {
  return (
    <Grid mt="10" templateColumns="repeat{4, 1fr}" display="flex" gap="10">
      <GridItem>
        <Text fontSize="6xl">1</Text>
        <Box>
          <Image src="/line.png" alt="icon" width="40" height="60" />
        </Box>
      </GridItem>
      <GridItem>
        <Card.Root w="500px" p="4">
          <Card.Body gap="2">
            <Card.Title mt="2">
              Full-Stack Developer (Freelance) | 2023 - Sekarang
            </Card.Title>
            <List.Root>
              <ListItem>
                Mengerjakan berbagai proyek web dan mobile, termasuk aplikasi
                berbasis Firebase dan React.
              </ListItem>
              <ListItem>
                Menggunakan teknologi seperti React, Next.js, dan Chakra UI.
              </ListItem>
              <ListItem>
                Membuat aplikasi yang responsif dan performa tinggi.
              </ListItem>
            </List.Root>
          </Card.Body>
          <Card.Footer justifyContent="flex-end"></Card.Footer>
        </Card.Root>
      </GridItem>
      <GridItem>
        <Text fontSize="6xl">2</Text>
        <Box>
          <Image src="/line.png" alt="icon" width="40" height="60" />
        </Box>
      </GridItem>
      <GridItem>
        <Card.Root w="450px" p="4">
          <Card.Body gap="2">
            <Card.Title mt="2">
              Software Engineer - Digital Forensics Research | 2024
            </Card.Title>
              <List.Root>
                <ListItem>
                  Mengembangkan sistem rekonstruksi file yang hilang dalam
                  sistem Windows.
                </ListItem>
                <ListItem>
                  Menggunakan hashing untuk memastikan integritas data
                  investigasi.
                </ListItem>
                <ListItem>
                  Melakukan analisis dan dokumentasi proses investigasi digital.
                </ListItem>
              </List.Root>
          </Card.Body>
          <Card.Footer justifyContent="flex-end"></Card.Footer>
        </Card.Root>
      </GridItem>
    </Grid>
  );
};

export default ExperienceCard;
