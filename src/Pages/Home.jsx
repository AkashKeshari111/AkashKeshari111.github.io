import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";
import styles from "./home.module.css";

const Home = () => {
  return (
    <Box pb={4}>
      <Box w="100%">
        <Box
          w="100%"
          h="170px"
          borderRadius="0 0 10% 10%"
          pt={3}
          pb={1}
          bg="rgb(46,52,69)"
        >
          <Text
            fontSize={[30, 45, 55, 65]}
            fontWeight={500}
            letterSpacing={13}
            color="rgb(210,223,205)"
          >
            AKASH KESHARI
          </Text>

          <Text
            textStyle="h1"
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
          mt={2}
          w={["95%", "85%", "75%", "65%", "55%"]}
          borderRadius="12px"
          p={4}
          pb={6}
          boxShadow="rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset"
        >
          <Text
            fontWeight={600}
            textAlign={["justify","center"]}
            fontSize={21}
            color="rgb(210,223,205)"
            fontFamily="Calibri Light"
          >
            <div className={styles.type} Style="--n:53">
              <h2>
                {" "}
                <span
                  style={{
                    fontSize: "55px",
                    lineHeight: "1",
                    fontFamily: "Brush Script MT",
                    color: "white",
                    fontWeight: "500",
                  }}
                >
                  {" "}
                  Hii...{" "}
                </span>{" "}
                <span
                  style={{
                    fontFamily: "Levenim MT",
                    fontSize: "30px",
                    fontWeight: 500,
                  }}
                >
                  {" "}
                  I{" "}
                </span>{" "}
                am Akash Keshari, a Passionate aspiring Full Stack Developer
                skilled in MERN stack & building my logic on Data Structure &
                algorithms as well as developing problem-solving and
                collaboration and teamwork skills, moulded and shaped by Masai
                school’s intensive and immersive learning. Look forward to
                joining a company where I will be able to contribute to my and the company's growth and progress.
              </h2>{" "}
            </div>{" "}
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
