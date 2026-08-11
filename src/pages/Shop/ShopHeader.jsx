import React, { useState } from 'react';
import { FiSliders, FiGrid } from 'react-icons/fi';
import { BsViewList } from 'react-icons/bs';
import { MdKeyboardArrowRight } from 'react-icons/md';
import ShopBanner from '../../assets/ShopImage/1.png'
import { motion, AnimatePresence } from 'framer-motion';
const ShopHeader = ({
  totalProducts,
  indexOfFirstItem,
  indexOfLastItem,
  sortOption,
  setSortOption,
  itemsPerPage,
  setItemsPerPage
}) => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  return (
    <div className="w-full">

      <section
        className="relative w-full h-[250px] sm:h-[300px] md:h-[320px] bg-cover bg-center flex flex-col items-center justify-center px-4"
        style={{ backgroundImage: `url(${ShopBanner})` }}
      >
        <div className="absolute inset-0 bg-white/30 backdrop-blur-[2px]"></div>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 flex flex-col items-center text-center"
        >
          <h1 className="text-4xl sm:text-5xl font-medium text-black mb-2 tracking-wide">
            Shop
          </h1>

          <div className="flex items-center gap-2 text-sm sm:text-base font-medium text-black">
            <span className="font-semibold">Home</span>
            <MdKeyboardArrowRight className="text-lg text-black" />
            <span className="font-light text-gray-800">Shop</span>
          </div>
        </motion.div>
      </section>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="w-full bg-[#F9F1E7] py-6 px-4 sm:px-8 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6"
      >
        <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-black">
          <button 
          onClick={()=>setIsFilterOpen(true)}
          className="flex items-center gap-2 text-base font-normal hover:text-[#B8860B] transition">
            <FiSliders className="text-xl" /> Filter
          </button>

          <button className="text-xl hover:text-[#B8860B] transition">
            <FiGrid />
          </button>

          <button className="text-xl hover:text-[#B8860B] transition">
            <BsViewList />
          </button>

          <div className="hidden sm:block h-6 w-[1px] bg-[#9F9F9F]"></div>

          <span className="text-xs sm:text-sm text-black font-normal">
            Showing {totalProducts > 0 ? indexOfFirstItem + 1 : 0}–{Math.min(indexOfLastItem, totalProducts)} of {totalProducts} results
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-black">

          <div className="flex items-center gap-3">
            <span className="text-sm sm:text-base font-normal">Show</span>
            <select
              value={itemsPerPage}
              onChange={(e) => setItemsPerPage(Number(e.target.value))}
              className="w-16 h-12 bg-white flex items-center justify-center text-black text-sm sm:text-base font-normal shadow-sm px-3 focus:outline-none cursor-pointer"
            >
              <option value={8}>8</option>
              <option value={12}>12</option>
              <option value={16}>16</option>
              <option value={20}>20</option>
            </select>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-sm sm:text-base font-normal">Short by</span>
            <select
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
              className="px-4 h-12 bg-white flex items-center justify-center text-black text-sm sm:text-base font-normal shadow-sm min-w-[140px] focus:outline-none cursor-pointer"
            >
              <option value="default">Default</option>
              <option value="low-to-high">Price: Low to High</option>
              <option value="high-to-low">Price: High to Low</option>
              <option value="name">Name (A-Z)</option>
            </select>
          </div>

        </div>
      </motion.section>
<AnimatePresence>
    {isFilterOpen && (
        <div className="fixed inset-0 z-50 flex justify-start">
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                onClick={() => setIsFilterOpen(false)}
                className="absolute inset-0 bg-black/50"
            />

            <motion.div 
                initial={{ x: "-100%" }}
                animate={{ x: 0 }}
                exit={{ x: "-100%" }}
                transition={{ type: "tween", duration: 0.3, ease: "easeInOut" }}
                className="relative bg-white w-full max-w-sm h-full p-6 shadow-2xl flex flex-col justify-between overflow-y-auto z-10"
            >
                <div>
                    <div className="flex items-center justify-between mb-6">
                        <h3 className="text-xl font-bold">Filter Products</h3>
                        <button 
                            onClick={() => setIsFilterOpen(false)}
                            className="text-gray-500 hover:text-black text-xl font-bold"
                        >
                            &times;
                        </button>
                    </div>
                    
                    <div className="flex flex-col gap-4">
                        <label className="text-sm font-semibold text-gray-700">Sort By:</label>
                        <select 
                            onChange={(e) => {
                                setSortOption(e.target.value)
                                setIsFilterOpen(false); 
                            }}
                            className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:border-[#B8860B]"
                        >
                            <option value="">Select Option</option>
                            <option value="low-to-high">Price: Low to High</option>
                            <option value="high-to-low">Price: High to Low</option>
                            <option value="name">Name</option>
                        </select>
                    </div>
                </div>

               
            </motion.div>
        </div>
    )}
</AnimatePresence>
    </div>
  );
};

export default ShopHeader;