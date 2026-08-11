import React from 'react'
import AboutBanner from './AboutBannar'
import Navbar from '../../Components/Navbar/Navbar'
import BlogSection from './BlogSection'
import Features from '../Shop/Features'
import Footer from '../../Components/Footer/Footer'

export default function About() {
  return (
    <div>
        <Navbar/>
        <AboutBanner/>
        <BlogSection/>
        <Features/>
        <Footer/>
    </div>
  )
}
