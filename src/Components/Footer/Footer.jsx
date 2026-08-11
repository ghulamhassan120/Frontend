import React from 'react';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

const Footer = () => {
  return (
    <footer className="w-full bg-white border-t border-gray-200 pt-16 pb-8 px-4 sm:px-6 md:px-12">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16"
      >
        
        <motion.div variants={itemVariants} className="flex flex-col gap-6">
          <h2 className="text-2xl font-bold tracking-wider text-black">Funiro.</h2>
          <p className="text-[#9F9F9F] text-sm leading-relaxed max-w-xs">
            400 University Drive Suite 200 Coral Gables, <br />
            FL 33134 USA
          </p>
        </motion.div>

        <motion.div variants={itemVariants} className="flex flex-col gap-6">
          <h3 className="text-[#9F9F9F] font-medium text-sm">Links</h3>
          <ul className="flex flex-col gap-5 text-black font-medium text-sm">
            <li><a href="#home" className="hover:text-[#B8860B] transition-colors">Home</a></li>
            <li><a href="#shop" className="hover:text-[#B8860B] transition-colors">Shop</a></li>
            <li><a href="#about" className="hover:text-[#B8860B] transition-colors">About</a></li>
            <li><a href="#contact" className="hover:text-[#B8860B] transition-colors">Contact</a></li>
          </ul>
        </motion.div>

        <motion.div variants={itemVariants} className="flex flex-col gap-6">
          <h3 className="text-[#9F9F9F] font-medium text-sm">Help</h3>
          <ul className="flex flex-col gap-5 text-black font-medium text-sm">
            <li><a href="#payment" className="hover:text-[#B8860B] transition-colors">Payment Options</a></li>
            <li><a href="#returns" className="hover:text-[#B8860B] transition-colors">Returns</a></li>
            <li><a href="#privacy" className="hover:text-[#B8860B] transition-colors">Privacy Policies</a></li>
          </ul>
        </motion.div>

        <motion.div variants={itemVariants} className="flex flex-col gap-6">
          <h3 className="text-[#9F9F9F] font-medium text-sm">Newsletter</h3>
          <form onSubmit={(e) => e.preventDefault()} className="flex items-center gap-2">
            <div className="flex flex-col">
              <input 
                type="email" 
                placeholder="Enter Your Email Address" 
                className="text-xs sm:text-sm text-black placeholder-[#9F9F9F] bg-transparent border-b border-black pb-1 focus:outline-none focus:border-[#B8860B] transition-colors w-full"
              />
            </div>
            <button 
              type="submit" 
              className="text-xs font-bold uppercase tracking-wider text-black border-b border-black pb-1 hover:text-[#B8860B] hover:border-[#B8860B] transition-colors whitespace-nowrap"
            >
              SUBSCRIBE
            </button>
          </form>
        </motion.div>

      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="max-w-7xl mx-auto border-t border-gray-200 pt-6 text-sm text-black font-normal"
      >
        <p>2023 furino. All rights reverved</p>
      </motion.div>
    </footer>
  );
};

export default Footer;