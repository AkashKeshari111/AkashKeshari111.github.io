import React from 'react'
import {Box, ListItem, UnorderedList} from "@chakra-ui/react"
import { HashLink as Link } from "react-router-hash-link";


const Navbar = () => {
  return (
<Box bg='rgb(56,50,100)' w='100%' p={2} color='white' fontSize="12px" fontWeight={400} fontFamily={"Titillium Web"}>
<UnorderedList listStyleType="none" display={"flex"} justifyContent="center" alignItems={"center"} gap="2%">
  <Link to="#home"><ListItem>Home</ListItem></Link>
  <Link to="#project"><ListItem>Web</ListItem></Link>
  <Link to="#skill"><ListItem>Skill</ListItem></Link>
  <Link to="#contact"><ListItem>Contact</ListItem></Link>
  <Link to="#resume"><ListItem>About</ListItem></Link>
</UnorderedList>
</Box>
  )
}

export default Navbar