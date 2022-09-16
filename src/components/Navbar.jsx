import React from 'react'
import {Box, ListItem, Text, UnorderedList} from "@chakra-ui/react"
import { HashLink as Link } from "react-router-hash-link";



const Navbar = () => {
  return (
<Box  bg='rgb(82,94,101)' w='100%' p={[2]} pl={[1,2]} pr={[1,2]} color='white' fontSize={["17px","20px"]} fontWeight={400} zIndex={1000} position="fixed" top="0px" borderBottom="1px solid white" boxShadow="rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px">
<UnorderedList  listStyleType="none" display={"flex"} justifyContent="center" alignItems={"center"} gap={["4.5%","3%"]} >
  <Link  to="#home"><ListItem>Home</ListItem></Link>
  <Link to="#skill"><ListItem>Tech</ListItem></Link>
  <Link to="#project"><ListItem>Web</ListItem></Link>
  <Link to="#contact"><ListItem>Contact</ListItem></Link>
  <a href="Akash_Keshari_Resume.pdf" download><ListItem>Resume</ListItem></a>

</UnorderedList>
</Box>
  )
}

export default Navbar