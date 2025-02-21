import { Box, Button, Card, Flex } from "@chakra-ui/react";
import React, { FC } from "react";
import { Avatar } from "./ui/avatar";
import Image from "next/image";

interface AboutMeCard {
  title: string;
  description: string;
}
const Aboutmecard: FC<AboutMeCard> = ({title, description}) => {
  return (
    <Card.Root width="250px" height="48">
      <Card.Body gap="2">
        <Flex alignItems="center">
          <Box>
            <Image src="/Code.png" alt="icon" width={30} height={30} />
          </Box>
          <Card.Title ms="5" fontWeight="semibold">{title}</Card.Title>
        </Flex>

        <Card.Description color="#909090">{description}</Card.Description>
      </Card.Body>
    </Card.Root>
  );
};

export default Aboutmecard;
