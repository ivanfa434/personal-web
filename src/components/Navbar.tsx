"use client"; // Pastikan ini ada

import { Container, Flex, Text, Button, Box } from "@chakra-ui/react";
import Image from "next/image";
import { HiMenu } from "react-icons/hi";
import { Link as ScrollLink } from "react-scroll";
import {
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "@/components/ui/menu";

const sections = ["home", "about", "skills", "portfolio"];

const Navbar = () => {
  return (
    <Container
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      padding="5"
      flexWrap="wrap"
      position="fixed"
      top="0"
      left="0"
      right="0"
      bg="white"
      boxShadow="md"
      zIndex="1000" 
      height="80px" 
    >

      <Text
        color="#909090"
        fontWeight="bold"
        fontSize={{ base: "28px", md: "40px" }}
      >
        My Perso
        <Text color="#303030" as="span">
          nal Website
        </Text>
      </Text>


      <Flex gap="10" display={{ base: "none", md: "flex" }}>
        {sections.map((section) => (
          <ScrollLink
            key={section}
            to={section}
            smooth={true}
            duration={500}
            offset={-80}
            spy={true}
          >
            <Text
              _hover={{ color: "blue.500", cursor: "pointer" }}
              textTransform="capitalize"
            >
              {section}
            </Text>
          </ScrollLink>
        ))}
      </Flex>

      <Flex gap={4} me="32" display={{ base: "none", md: "flex" }}>
        {["instagram", "facebook", "Twitter", "Linkedin"].map((icon) => (
          <Image
            key={icon}
            src={`/${icon}.svg`}
            alt={icon}
            width={24}
            height={24}
          />
        ))}
      </Flex>


      <MenuRoot>
        <MenuTrigger asChild>
          <Button
            variant="outline"
            size="sm"
            display={{ base: "block", md: "none" }}
          >
            <HiMenu />
          </Button>
        </MenuTrigger>
        <MenuContent>
          {sections.map((section) => (
            <ScrollLink
              key={section}
              to={section}
              smooth={true}
              duration={500}
              offset={-80}
              spy={true}
            >
              <MenuItem value={section}>
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </MenuItem>
            </ScrollLink>
          ))}
        </MenuContent>
      </MenuRoot>
    </Container>
  );
};

export default Navbar;
