import { Switch } from '@chakra-ui/react'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Services from '../pages/Services'
import About from '../pages/About'
import Testimonials from '../pages/Testimonials'
import Contact from '../pages/Contact'
import Navbar from '../componet/Navbar'

const MainRouets = () => {
    return (
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>
    )
}

export default MainRouets