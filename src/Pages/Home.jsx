import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";

const Home = () => {
  return (
    <Box  color="rgb(210,223,205)" pb={4}>
      <Box w="100%" border="1px solid red" >
        <Box
          w="100%"
          h="120px"
          borderRadius="0 0 50% 50%"
          border="1px solid black"
          pt={[5,2]}
          pb={1}
          bg="rgb(46,52,69)"
         
        >
          <Text fontSize={[20,45]} fontWeight={500} letterSpacing={10}>
            AKASH KESHARI
          </Text>
          <Text fontSize={[12,18]} lineHeight={[9,4]}>FULL STACK WEB DEVELOPER</Text>
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
          overflow="hidden" 
        >
<Image src="Akash_pic.jpg" ></Image>

        </Box>
        <Box w="55%" borderRadius="12px"  p={4} boxShadow= "rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset">
          <Text textAlign="center"  >
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
