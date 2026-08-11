import React from 'react'
import ContactBanner from './ContactBanner'
import Navbar from '../../Components/Navbar/Navbar'
import ContactSection from './ContactSection'
import Features from '../Shop/Features'
import Footer from '../../Components/Footer/Footer'

export default function Contact() {
  return (
    <div>
        <Navbar/>
        <ContactBanner/>
        <ContactSection/>
         <Features/>
        <Footer/>
    </div>
  )
}
