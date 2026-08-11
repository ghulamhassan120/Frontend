import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiShare2, FiHeart } from 'react-icons/fi';
import { IoGitCompareOutline } from 'react-icons/io5';
import { useEffect } from 'react';



const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.05 } },
};

const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: 'easeOut' } },
};

const ShopProducts = ({ currentProducts, loading, currentPage, totalPages, setCurrentPage }) => {
    const handlePageChange = (pageNum) => {
    setCurrentPage(pageNum);
    window.scrollTo({ top: 0, behavior: 'smooth' }); 
  };


    if (loading) {
        return (
            <div className="w-full bg-white py-32 flex items-center justify-center">
                <p className="text-lg font-semibold text-gray-500 animate-pulse">Loading products from database...</p>
            </div>
        );
    }
    return (
        <section className="w-full bg-white py-16 px-4 sm:px-6 md:px-12">
            <div className="max-w-7xl mx-auto flex flex-col items-center">

                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 w-full"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    key={currentPage} 
                >
                    <AnimatePresence mode="wait">
                        {currentProducts.map((product) => (
                            <motion.div
                                key={product.id}
                                variants={cardVariants}
                                initial="hidden"
                                animate="visible"
                                exit="hidden"
                                className="group relative bg-[#F4F5F7] overflow-hidden flex flex-col shadow-sm hover:shadow-xl transition-all duration-300"
                            >
                                <div className="relative w-full h-72 bg-gray-200 overflow-hidden">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />

                                    {product.badge && (
                                        <span className={`absolute top-4 right-4 w-11 h-11 rounded-full text-white text-xs font-semibold flex items-center justify-center z-10 ${product.badgeColor}`}>
                                            {product.badge}
                                        </span>
                                    )}

                                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-4 z-20">
                                        <button className="bg-white text-[#B8860B] font-bold text-sm px-8 py-3 hover:bg-[#B8860B] hover:text-white transition-colors duration-300 shadow-md">
                                            Add to cart
                                        </button>
                                        <div className="flex items-center gap-4 text-white text-sm font-semibold">
                                            <button className="flex items-center gap-1 hover:text-[#B8860B] transition"><FiShare2 /> Share</button>
                                            <button className="flex items-center gap-1 hover:text-[#B8860B] transition"><IoGitCompareOutline /> Compare</button>
                                            <button className="flex items-center gap-1 hover:text-[#B8860B] transition"><FiHeart /> Like</button>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-4 flex flex-col gap-1 bg-[#F4F5F7]">
                                    <h3 className="text-xl font-bold text-[#3a3a3a]">{product.title}</h3>
                                    <p className="text-sm text-[#898989] font-medium">{product.description}</p>
                                    <div className="flex items-center justify-between mt-2">
                                        <span className="text-lg font-bold text-[#3a3a3a]">{product.price}</span>
                                        {product.oldPrice && (
                                            <span className="text-sm text-[#B0B0B0] line-through">{product.oldPrice}</span>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* Bottom Pagination (1, 2, 3, Next matching the image) */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="flex items-center justify-center gap-4 sm:gap-6 mt-16"
                >
                    {/* Dynamic Page Numbers based on total products */}
                    {Array.from({ length: Math.min(totalPages, 3) }, (_, index) => {
                        const pageNum = index + 1;
                        return (
                            <button
                                key={pageNum}
                                onClick={() => handlePageChange(pageNum)}
                                className={`w-12 h-12 sm:w-14 sm:h-14 rounded-lg font-normal text-base transition-all duration-300 ${currentPage === pageNum
                                    ? 'bg-[#B8860B] text-white shadow-md'
                                    : 'bg-[#F9F1E7] text-black hover:bg-[#B8860B] hover:text-white'
                                    }`}
                            >
                                {pageNum}
                            </button>
                        );
                    })}

                    {/* Next Button */}
                    <button
                        onClick={() => {
                            const nextPage = currentPage < totalPages ? currentPage + 1 : 1;
                            handlePageChange(nextPage);
                        }}
                        className="px-6 h-12 sm:h-14 bg-[#F9F1E7] text-black hover:bg-[#B8860B] hover:text-white rounded-lg font-normal text-base transition-all duration-300 shadow-sm"
                    >
                        Next
                    </button>
                </motion.div>

            </div>
        </section>
    );
};

export default ShopProducts;