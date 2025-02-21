import { Box, Card, Container, Grid, GridItem, Text } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

const Myskills = () => {
  return (
    <Box mt="10" bgImage="url(/background.png)">
      <Container>
        <Text fontSize="6xl" fontWeight="semibold">My Skills</Text>
        <Box>
            <Image src="/line.png" alt="icon" width="110" height={30} />
        </Box>
        <Grid templateColumns="repeat(4, 1fr)"  mt="16" gap="4" alignItems="center">
            <GridItem>
                <Card.Root w="300px" h="300px" overflow="hidden" alignItems="center" justifyContent="center">
                    <Image src="/1_javascript.png" alt="icon resource" width="300" height="300"/>
                </Card.Root>
            </GridItem>
            <GridItem>
                <Card.Root w="300px" h="300px" overflow="hidden" alignItems="center" justifyContent="center">
                    <Image src="/html.png" alt="icon resource" width="160" height="160"/>
                </Card.Root>
            </GridItem>
            <GridItem>
                <Card.Root w="300px" h="300px" overflow="hidden" alignItems="center" justifyContent="center">
                    <Image src="/css.png" alt="icon resource" width="160" height="250"/>
                </Card.Root>
            </GridItem>
            <GridItem>
                <Card.Root w="300px" h="300px" overflow="hidden" alignItems="center" justifyContent="center">
                    <Image src="/next.svg" alt="icon resource" width="250" height="250"/>
                </Card.Root>
            </GridItem>
        </Grid>
        <Grid templateColumns="repeat(4, 1fr)"  mt="16" gap="4" alignItems="center">
            <GridItem>
                <Card.Root w="300px" h="300px" overflow="hidden" alignItems="center" justifyContent="center">
                    <Image src="/kotlin.png" alt="icon resource" width="250" height="250"/>
                </Card.Root>
            </GridItem>
            <GridItem>
                <Card.Root w="300px" h="300px" overflow="hidden" alignItems="center" justifyContent="center">
                    <Image src="/firebase.png" alt="icon resource" width="250" height="250"/>
                </Card.Root>
            </GridItem>
            <GridItem>
                <Card.Root w="300px" h="300px" overflow="hidden" alignItems="center" justifyContent="center">
                    <Image src="/flutter.png" alt="icon resource" width="250" height="250"/>
                </Card.Root>
            </GridItem>
            <GridItem>
                <Card.Root w="300px" h="300px" overflow="hidden" alignItems="center" justifyContent="center">
                    <Image src="/python.png" alt="icon resource" width="250" height="250"/>
                </Card.Root>
            </GridItem>
        </Grid>
        <Grid templateColumns="repeat(4, 1fr)"  mt="16" gap="4" alignItems="center">
            <GridItem>
                <Card.Root w="300px" h="300px" overflow="hidden" alignItems="center" justifyContent="center">
                    <Image src="/tailwind.png" alt="icon resource" width="250" height="250"/>
                </Card.Root>
            </GridItem>
            <GridItem>
                <Card.Root w="300px" h="300px" overflow="hidden" alignItems="center" justifyContent="center">
                    <Image src="/mysql.png" alt="icon resource" width="250" height="250"/>
                </Card.Root>
            </GridItem>
            <GridItem>
                <Card.Root w="300px" h="300px" overflow="hidden" alignItems="center" justifyContent="center">
                    <Image src="/react.png" alt="icon resource" width="250" height="250"/>
                </Card.Root>
            </GridItem>
            <GridItem>
                <Card.Root w="300px" h="300px" overflow="hidden" alignItems="center" justifyContent="center">
                    <Image src="/chakraui.png" alt="icon resource" width="250" height="250"/>
                </Card.Root>
            </GridItem>
        </Grid>
      </Container>
    </Box>
  );
};

export default Myskills;
