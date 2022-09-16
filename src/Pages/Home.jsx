import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";

const Home = () => {
  return (
    <Box color="rgb(210,223,205)" pb={4}>
      <Box w="100%">
        <Box
          w="100%"
          h="170px"
          borderRadius="0 0 10% 10%"
          pt={3}
          pb={1}
          bg="rgb(46,52,69)"
        >
          <Text fontSize={[30, 45, 55, 65]} fontWeight={500} letterSpacing={13}>
            AKASH KESHARI
          </Text>
          <Text
            fontSize={[16, 18, 25]}
            lineHeight={8}
            letterSpacing={[1, 3]}
            color="white"
            
          >
            FULL STACK WEB DEVELOPER
          </Text>
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
          w={["200px", "220px"]}
          h={["200px", "220px"]}
          borderRadius="50%"
          overflow="hidden"
        >
          <Image src="Akash_pic.jpg"></Image>
        </Box>
        <Box
        mt={5}
          w={["95%", "85%", "75%", "65%", "55%"]}
          borderRadius="12px"
          p={4}
          pb={6}
          boxShadow="rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset"
        >
          <Text
            textAlign="center"
            fontSize={21}
            _hover={{ color: "white", transition: ".4s" }}
            fontFamily="Calibri Light"
          >
            <span style={{ fontSize: "55px", lineHeight:"1",fontFamily:"Brush Script MT",color:"white"  }}> Hii... </span> <span style={{fontFamily:"Levenim MT",fontSize:"30px"}}> I </span> am Akash Keshari, a
            Passionate aspiring Full Stack Developer skilled in MERN stack,
            moulded and shaped by Masai school’s intensive and immersive
            learning. Look forward to joining a company where I will be able to
            contribute towards individual and company growth.
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
