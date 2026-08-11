import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Hero from '../../Components/Hero/Hero'
import BrowseRange from '../../Components/BrowseRange/BrowseRange'
import OurProduct from '../../Components/OurProducts/OurProducts'
import Footer from '../../Components/Footer/Footer'
import FuniroFurniture from '../../Components/FuniroFurniture/FuniroFurniture'
import RoomsInspiration from '../../Components/RoomsInspiration/RoomsInspiration'
export default function Home() {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <BrowseRange/>
        <OurProduct/>
        <RoomsInspiration/>
        <FuniroFurniture/>
        <Footer/>
    </div>
  )
}
