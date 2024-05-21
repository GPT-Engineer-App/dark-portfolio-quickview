import { useState } from "react";
import { Container, VStack, Text, Box, IconButton, useColorMode, useColorModeValue, HStack, Link, Button } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaSun, FaMoon, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Index = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue("white", "gray.900");
  const color = useColorModeValue("black", "white");

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center" bg={bg} color={color} p={4}>
      <VStack spacing={8} width="100%" as={motion.div} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        <Box textAlign="center" as={motion.div} whileHover={{ scale: 1.05 }}>
          <Text fontSize="4xl" fontWeight="bold">
            John Doe
          </Text>
          <Text fontSize="xl">Full Stack Developer</Text>
        </Box>
        <Box textAlign="center" as={motion.div} whileHover={{ scale: 1.05 }}>
          <Text fontSize="2xl" fontWeight="bold">
            Projects
          </Text>
          <VStack spacing={4}>
            <Box borderWidth="1px" borderRadius="lg" overflow="hidden" width="100%" p={4}>
              <Text fontSize="xl" fontWeight="bold">
                Project 1
              </Text>
              <Text>Description of project 1.</Text>
              <Link href="https://example.com" isExternal color="teal.500">
                View Project
              </Link>
            </Box>
            <Box borderWidth="1px" borderRadius="lg" overflow="hidden" width="100%" p={4}>
              <Text fontSize="xl" fontWeight="bold">
                Project 2
              </Text>
              <Text>Description of project 2.</Text>
              <Link href="https://example.com" isExternal color="teal.500">
                View Project
              </Link>
            </Box>
          </VStack>
        </Box>
        <Box textAlign="center" as={motion.div} whileHover={{ scale: 1.05 }}>
          <Text fontSize="2xl" fontWeight="bold">
            Contact Me
          </Text>
          <HStack spacing={4} justifyContent="center">
            <Link href="https://github.com" isExternal>
              <IconButton aria-label="GitHub" icon={<FaGithub />} size="lg" />
            </Link>
            <Link href="https://linkedin.com" isExternal>
              <IconButton aria-label="LinkedIn" icon={<FaLinkedin />} size="lg" />
            </Link>
            <Link href="mailto:john.doe@example.com" isExternal>
              <IconButton aria-label="Email" icon={<FaEnvelope />} size="lg" />
            </Link>
          </HStack>
        </Box>
        <Box textAlign="center" as={motion.div} whileHover={{ scale: 1.05 }}>
          <Button as={Link} href="/path/to/resume.pdf" isExternal colorScheme="teal" size="lg">
            Download Resume
          </Button>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
