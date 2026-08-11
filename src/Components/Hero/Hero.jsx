import React from 'react';
import { motion } from 'framer-motion';
import HeroImage from '../../assets/hero.png'
const Hero = () => {
  return (
    <section 
      className="relative w-full min-h-[85vh] md:min-h-[90vh] flex items-center justify-center bg-cover bg-center px-4 sm:px-6 md:px-12 py-12 overflow-hidden" 
      style={{ backgroundImage: `url(${HeroImage})` }}
    >
      
      <div className="absolute inset-0 bg-black/10"></div>

      <div className="relative z-10 w-full max-w-7xl mx-auto flex justify-end items-center">
        <motion.div 
          initial={{ opacity: 0, x: 100, scale: 0.95 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full sm:w-[480px] md:w-[540px] bg-[#FFF3E3] p-8 sm:p-10 md:p-12 rounded-lg shadow-xl flex flex-col justify-start"
        >
          
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-xs sm:text-sm font-bold tracking-widest text-gray-800 uppercase mb-2"
          >
            New Arrival
          </motion.span>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#B8860B] leading-tight mb-4"
          >
            Discover Our <br /> New Collection
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="text-600 text-sm sm:text-base leading-relaxed mb-8 text-gray-700"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
          >
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#B8860B] hover:bg-[#9d7309] text-white font-bold text-sm tracking-wider uppercase px-8 sm:px-10 py-4 sm:py-5 shadow-lg transition-colors duration-300"
            >
              BUY NOW
            </motion.button>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default Hero;