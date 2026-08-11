import React from 'react';
import { motion } from 'framer-motion';
import Image1 from '../../assets/FuniroFurnitureImage/1.png'
import Image2 from '../../assets/FuniroFurnitureImage/2.png'
import Image3 from '../../assets/FuniroFurnitureImage/3.png'
import Image4 from '../../assets/FuniroFurnitureImage/4.png'
import Image5 from '../../assets/FuniroFurnitureImage/5.png'
import Image6 from '../../assets/FuniroFurnitureImage/6.png'
import Image7 from '../../assets/FuniroFurnitureImage/7.png'
import Image8 from '../../assets/FuniroFurnitureImage/8.png'
import Image9 from '../../assets/FuniroFurnitureImage/9.png'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

const FuniroFurniture = () => {
  return (
    <section className="w-full bg-white py-16 px-4 sm:px-6 overflow-hidden">
      
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-10"
      >
        <p className="text-gray-600 text-sm sm:text-base font-semibold tracking-wide mb-1">
          Share your setup with
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-[40px] font-bold text-[#3a3a3a]">
          #FuniroFurniture
        </h2>
      </motion.div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-[1780px] mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 items-center"
      >
        
        <motion.div variants={itemVariants} className="flex flex-col gap-4">
          <div className="w-full h-[250px] sm:h-[380px] overflow-hidden rounded-md shadow-sm">
            <img src={Image1} alt="Setup 1" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
          </div>
          <div className="w-full h-[200px] sm:h-[323px] overflow-hidden rounded-md shadow-sm">
            <img src={Image2} alt="Setup 2" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="flex flex-col gap-4 justify-center">
          <div className="w-full h-[220px] sm:h-[312px] overflow-hidden rounded-md shadow-sm">
            <img src={Image3} alt="Setup 3" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
          </div>
          <div className="w-full h-[180px] sm:h-[242px] overflow-hidden rounded-md shadow-sm">
            <img src={Image4}alt="Setup 4" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="col-span-2 sm:col-span-1 md:col-span-2 w-full">
          <div className="w-full h-[300px] sm:h-[392px] overflow-hidden rounded-md shadow-sm">
            <img src={Image5} alt="Setup Center" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="flex flex-col gap-4 justify-center">
          <div className="w-full h-[220px] sm:h-[348px] overflow-hidden rounded-md shadow-sm">
            <img src={Image6} alt="Setup 6" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
          </div>
          <div className="w-full h-[160px] sm:h-[242px] overflow-hidden rounded-md shadow-sm">
            <img src={Image7} alt="Setup 7" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="flex flex-col gap-4">
          <div className="w-full h-[250px] sm:h-[433px] overflow-hidden rounded-md shadow-sm">
            <img src={Image8} alt="Setup 8" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
          </div>
          <div className="w-full h-[150px] sm:h-[196px] overflow-hidden rounded-md shadow-sm">
            <img src={Image9}alt="Setup 9" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
          </div>
        </motion.div>

      </motion.div>
    </section>
  );
};

export default FuniroFurniture;