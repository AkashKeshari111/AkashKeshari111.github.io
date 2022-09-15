import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";

const Home = () => {
  return (
    <Box>
      <Box w="100%" border="1px solid red">
        <Box
          w="100%"
          h="100px"
          borderRadius="0 0 50% 50%"
          border="1px solid black"
          pt={4}
        >
          <Text fontSize={45} lineHeight={10}>
            AKASH KESHARI
          </Text>
          <Text fontSize={18}>FULL STACK WEB DEVELOPER</Text>
        </Box>
      </Box>

      <Box
        w="100%"
        border="1px solid green"
        display="flex"
        alignItems="center"
        p={2}
        flexDirection="column"
        gap="10px"
      >
        <Box
          w="150px"
          h="150px"
          borderRadius="50%"
          border="1px solid black"
        >


        </Box>
        <Box w="47%" borderRadius="12px" border="1px solid black">
          <Text textAlign="center" >
            I am a passionate learner who's always willing to learn and work
            across technologies and domains. I love to explore new technologies
            and leverage them to solve real-life problems. I'm currently into
            Web Development and working on my Data Structure and Algorithms.
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
