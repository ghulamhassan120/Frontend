import React from 'react';
import { motion } from 'framer-motion';
import { MdKeyboardArrowRight } from 'react-icons/md';
import contactBanner from '../../assets/ShopImage/1.png'


const ContactBanner = ({ title = "Contact", currentPage = "Contact", backgroundImage = contactBanner }) => {
    return (
        <section 
            className="relative w-full h-72 sm:h-80 md:h-96 bg-cover bg-center flex items-center justify-center"
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            <div className="absolute inset-0 bg-white/40 backdrop-blur-[2px]"></div>

            <motion.div 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="relative z-10 flex flex-col items-center justify-center text-center px-4"
            >
                <div className="w-12 h-12 mb-2 flex items-center justify-center text-[#B8860B]">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
                        <path d="M12 2L2 19h20L12 2zm0 3.8l6.7 12.2H5.3L12 5.8z" />
                    </svg>
                </div>

                <h1 className="text-4xl sm:text-5xl font-medium text-[#3a3a3a] mb-2">
                    {title}
                </h1>

                <div className="flex items-center gap-2 text-sm sm:text-base font-medium text-[#3a3a3a]">
                    <a href="/" className="font-semibold hover:text-[#B8860B] transition">
                        Home
                    </a>
                    <MdKeyboardArrowRight className="text-xl text-[#3a3a3a]" />
                    <span className="font-light text-[#3a3a3a]">
                        {currentPage}
                    </span>
                </div>
            </motion.div>
        </section>
    );
};

export default ContactBanner;