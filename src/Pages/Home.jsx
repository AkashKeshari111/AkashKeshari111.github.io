import { Box, Image, Text, transition } from "@chakra-ui/react";
import React from "react";


const Home = () => {
  return (
    <Box  color="rgb(210,223,205)" pb={4} >
      <Box w="100%"  >
        <Box
          w="100%"
          h="180px"
          borderRadius="0 0 10% 10%"
      
          pt={6}
          pb={1}
          bg="rgb(46,52,69)"
         
        >
          <Text fontSize={[30,45,55,65]} fontWeight={500} letterSpacing={13}>
            AKASH KESHARI
          </Text>
          <Text fontSize={[16,18,25]} lineHeight={8} letterSpacing={[1,3]}  color="white">FULL STACK WEB DEVELOPER</Text>
        </Box>
      </Box>

      <Box
        w="100%"
    
        display="flex"
        alignItems="center"
        p={2}
        flexDirection="column"
        gap="10px"
     
      >
        <Box
          w={["200px","220px"]}
          h={["200px","220px"]}
          borderRadius="50%"
        
          overflow="hidden" 
        >
<Image src="Akash_pic.jpg" ></Image>

        </Box>
        <Box w={["95%","85%","75%","65%","55%"]} borderRadius="12px"  p={4} boxShadow= "rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset">
          <Text textAlign="center" fontSize={21} _hover={{color:"white", transition:".4s"}}>
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
