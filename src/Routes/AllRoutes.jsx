import { Box } from '@chakra-ui/react'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from '../Pages/About'
import Contact from '../Pages/Contact'
import Home from '../Pages/Home'
import Project from '../Pages/Project'
import Skill from '../Pages/Skill'

const AllRoutes = () => {
  return (
    <Box>
        <Box id="home"><Home/></Box>
        <Box id="project"><Project/></Box>
        <Box id="skill"><Skill/></Box>
        <Box id="contact"><Contact/></Box>
    </Box>
  )
}

export default AllRoutes