import React from 'react';
import { motion } from 'framer-motion';
import ImageOne from '../../assets/BrowseRangeImage/1.png'
import ImageTwo from '../../assets/BrowseRangeImage/2.png'
import ImageThree from '../../assets/BrowseRangeImage/3.png'

const categories = [
  {
    id: 1,
    image: ImageOne, 
    title: 'Dining',
    alt: 'Dining room setup with table and woven rug'
  },
  {
    id: 2,
    image: ImageTwo, 
    title: 'Living',
    alt: 'Living room with beige sofa and pampas grass'
  },
  {
    id: 3,
    image: ImageThree, 
    title: 'Bedroom',
    alt: 'Bedroom with wooden headboard and striped sheets'
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3, // Delay between each child animation
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
};

const BrowseRange = () => {
  return (
    <section className="w-[80%] bg-white m-auto py-16 px-4 sm:px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3 tracking-tight">
            Browse The Range
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible" 
          viewport={{ once: true, amount: 0.3 }} 
        >
          {categories.map((category) => (
            <motion.div 
              key={category.id}
              className="flex flex-col items-center group"
              variants={itemVariants}
            >
              <div className="w-full aspect-w-1 aspect-h-1 bg-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-500 mb-5">
                <motion.img 
                  whileHover={{ scale: 1.05 }} 
                  transition={{ duration: 0.4 }}
                  src={category.image} 
                  alt={category.alt}
                  className="w-full h-full object-cover object-center block"
                />
              </div>
              
              {/* Title */}
              <h3 className="text-xl md:text-2xl font-semibold text-gray-800 group-hover:text-[#B8860B] transition-colors duration-300">
                {category.title}
              </h3>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default BrowseRange;