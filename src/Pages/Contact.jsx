import { Box, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { BsLinkedin ,BsFillArrowUpCircleFill} from 'react-icons/bs';
import { FaGithub,FaTwitterSquare } from 'react-icons/fa';
import { AiFillCodeSandboxCircle} from 'react-icons/ai';
import { ImMail} from 'react-icons/im';
import {FiPhoneCall} from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { HashLink} from "react-router-hash-link";

const Contact = () => {
  return (
   <Box  pt={4} display="flex" alignItems="center" flexDirection="column">
    <Image src="tenor.gif" h="120px" borderRadius="50%" />

    <Box w="100%" fontSize={16} height="300px" border="1px solid rgb(46,52,69)" color="white"   borderRadius= "50% 50% 0 0" bg="rgb(46,52,69)" p={6} display="flex" alignItems="center" gap="7px" flexDirection="column">
       <Box display="flex" alignItems="center" gap="7px"><FiPhoneCall/><Text>+91 8299116219</Text></Box>
       <Link to="" >akashkeshari2722000@gmail.com</Link>
       
       <Box display="flex" justifyContent="center" gap="9px" fontSize={35} pt={4}>
       <Link to=""><Text  ><BsLinkedin color="white"/></Text></Link>
        <Link to="//github.com/AkashKeshari111" target="_blank"><Text><FaGithub color="white"/></Text></Link>
   
        <Link to=""><Text><ImMail color="white"/></Text></Link>
        <Link to=""><Text><AiFillCodeSandboxCircle color="white"/></Text></Link>
    
        <Link to=""><Text><FaTwitterSquare color="white"/></Text></Link>
       </Box>
       
       <Box  mt="50px">
        <HashLink to="#home"><Text><BsFillArrowUpCircleFill fontSize="65px"/></Text></HashLink>
       </Box>
     
    </Box>
     
   </Box>
  )
}

export default Contact