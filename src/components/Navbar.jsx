import React from 'react'
import {Box, ListItem, UnorderedList} from "@chakra-ui/react"
import { HashLink as Link } from "react-router-hash-link";


const Navbar = () => {
  return (
<Box  bg='rgb(82,94,101)' w='100%' p={2} color='white' fontSize="12px" fontWeight={400} position="fixed" top="0px" >
<UnorderedList listStyleType="none" display={"flex"} justifyContent="center" alignItems={"center"} gap="2%">
  <Link to="#home"><ListItem>Home</ListItem></Link>
  <Link to="#project"><ListItem>Web</ListItem></Link>
  <Link to="#skill"><ListItem>Tech</ListItem></Link>
  <Link to="#contact"><ListItem>Contact</ListItem></Link>
  <Link to="#resume"><ListItem>Resume</ListItem></Link>
</UnorderedList>
</Box>
  )
}

export default Navbar