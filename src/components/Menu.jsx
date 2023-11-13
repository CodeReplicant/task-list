import {
  Box,
  Flex,
  Heading,
  Stack,
  Avatar,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

export function Menu() {
  return (

    <Flex
    flexDirection="Row"
    width="1000px"
    height="200px"
    backgroundColor="gray.200"
    justifyContent="center"
    alignItems="center"
  >
    <Stack
      flexDir= "Row-reverse"
      mb="4"
      justifyContent="center"
      alignItems="center"
      margin = "50 px"
    >
      <Avatar bg="teal.500" />
      <Heading color="teal.400">Menu</Heading>
      <Box minW={{ base: "90%", md: "468px" }}>
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Listaapp">Aplicacion de tareas</Link>
        </li>
      </ul>
    </nav>
    </Box>
      </Stack>
    </Flex>
  );
}