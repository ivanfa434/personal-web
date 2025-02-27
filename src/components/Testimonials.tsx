import {
  Avatar,
  Box,
  Container,
  HStack,
  RatingGroup,
  Stack,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

const Testimonials = () => {
  return (
    <Container justifyItems="center" mt="10">
      <Text fontSize="2xl" color="#909090" fontFamily="mono">
        Testimonials
      </Text>
      <Box mt="4">
        <Image src="/line2.png" alt="icon" height="500" width="400" />
      </Box>
      <Container mt="5">
        <Stack maxW="320px" gap="4" color="black">
          <RatingGroup.Root
            colorPalette="orange"
            readOnly
            count={5}
            defaultValue={5}
            size="xs"
          >
            <RatingGroup.HiddenInput />
            <RatingGroup.Control>
              {Array.from({ length: 5 }).map((_, index) => (
                <RatingGroup.Item key={index} index={index + 1}>
                  <RatingGroup.ItemIndicator />
                </RatingGroup.Item>
              ))}
            </RatingGroup.Control>
          </RatingGroup.Root>

          <Text>
            Sage is a great software engineer. He is very professional and
            knowledgeable.
          </Text>

          <HStack gap="4">
            <Avatar.Root>
              <Avatar.Fallback name="Matthew Jones" />
              <Avatar.Image src="https://randomuser.me/api/portraits/men/70.jpg" />
            </Avatar.Root>
            <Stack textStyle="sm" gap="0">
              <Text fontWeight="medium">Matthew Jones</Text>
              <Text color="fg.muted">CTO, Company</Text>
            </Stack>
          </HStack>
        </Stack>
      </Container>
    </Container>
  );
};

export default Testimonials;
