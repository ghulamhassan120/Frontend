import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiShare2, FiHeart } from 'react-icons/fi';
import { IoGitCompareOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.4, ease: 'easeOut' },
    },
    exit: { opacity: 0, scale: 0.9, transition: { duration: 0.2 } }
};

// Dummy Products Data (Aap ke design ke mutabiq)
const dummyProducts = [
    {
        _id: '1',
        title: 'Syltherine',
        description: 'Stylish cafe chair',
        price: 'Rp 2.500.000',
        oldPrice: 'Rp 3.500.000',
        image: 'https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=600&q=80',
        badge: { type: 'discount', text: '-30%' }
    },
    {
        _id: '2',
        title: 'Leviosa',
        description: 'Stylish cafe chair',
        price: 'Rp 2.500.000',
        oldPrice: 'Rp 7.000.000',
        image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=600&q=80',
        badge: null
    },
    {
        _id: '3',
        title: 'Lolita',
        description: 'Luxury big sofa',
        price: 'Rp 7.000.000',
        oldPrice: 'Rp 14.000.000',
        image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=600&q=80',
        badge: { type: 'discount', text: '-50%' }
    },
    {
        _id: '4',
        title: 'Respira',
        description: 'Outdoor bar table and stool',
        price: 'Rp 500.000',
        oldPrice: '',
        image: 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=600&q=80',
        badge: { type: 'new', text: 'New' }
    },
    {
        _id: '5',
        title: 'Grifo',
        description: 'Night lamp',
        price: 'Rp 1.500.000',
        oldPrice: '',
        image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=600&q=80',
        badge: null
    },
    {
        _id: '6',
        title: 'Muggo',
        description: 'Small mug',
        price: 'Rp 150.000',
        oldPrice: '',
        image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=600&q=80',
        badge: { type: 'new', text: 'New' }
    },
    {
        _id: '7',
        title: 'Pingky',
        description: 'Cute bed set',
        price: 'Rp 7.000.000',
        oldPrice: 'Rp 14.000.000',
        image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=600&q=80',
        badge: { type: 'discount', text: '-50%' }
    },
    {
        _id: '8',
        title: 'Potty',
        description: 'Minimalist flower pot',
        price: 'Rp 500.000',
        oldPrice: '',
        image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=600&q=80',
        badge: { type: 'new', text: 'New' }
    },
    {
        _id: '9',
        title: 'Pingky Extra',
        description: 'Cute bed set',
        price: 'Rp 6.000.000',
        oldPrice: 'Rp 12.000.000',
        image: 'https://images.unsplash.com/photo-1540518614846-7ede433c4ef0?auto=format&fit=crop&w=600&q=80',
        badge: { type: 'discount', text: '-50%' }
    }
];

const OurProducts = () => {
    const [visibleCount, setVisibleCount] = useState(8);
    const [allProducts] = useState(dummyProducts);
    const [loading] = useState(false); // Dummy mein loading ki zaroorat nahi

    if (loading) {
        return <p className="text-center py-10">Loading products from database...</p>;
    }

    const handleShowMore = () => {
        setVisibleCount((prevCount) => Math.min(prevCount + 4, allProducts.length));
    };

    const handleShowLess = () => {
        setVisibleCount(8);
    };

    const displayedProducts = allProducts.slice(0, visibleCount);
    const hasMoreProducts = visibleCount < allProducts.length;

    return (
        <section className="w-full bg-white py-16 px-4 sm:px-6 md:px-12">
            <div className="max-w-7xl mx-auto flex flex-col items-center">

                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-extrabold text-[#3a3a3a] tracking-tight">
                        Our Products
                    </h2>
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 w-full"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <AnimatePresence>
                        {displayedProducts.map((product) => (
                            <Link key={product._id} to={`/product/${product._id}`}>
                                <motion.div
                                    variants={cardVariants}
                                    initial="hidden"
                                    animate="visible"
                                    exit="exit"
                                    layout
                                    className="group relative bg-[#F4F5F7] overflow-hidden flex flex-col shadow-sm hover:shadow-xl transition-all duration-300"
                                >
                                    <div className="relative w-full h-72 bg-gray-200 overflow-hidden">
                                        <img
                                            src={product.image}
                                            alt={product.title}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                        />

                                        {product.badge && (
                                            <span className={`absolute top-4 right-4 w-11 h-11 rounded-full text-white text-xs font-semibold flex items-center justify-center z-10 ${
                                                product.badge.type === 'discount' ? 'bg-[#E97171]' : 'bg-[#2EC1AC]'
                                            }`}>
                                                {product.badge.text}
                                            </span>
                                        )}

                                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-4 z-20">
                                            <button 
                                                onClick={(e) => { e.preventDefault(); alert(`Added ${product.title} to cart`); }}
                                                className="bg-white text-[#B8860B] font-bold text-sm px-8 py-3 hover:bg-[#B8860B] hover:text-white transition-colors duration-300 shadow-md"
                                            >
                                                Add to cart
                                            </button>
                                            <div className="flex items-center gap-4 text-white text-sm font-semibold" onClick={(e) => e.preventDefault()}>
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
                                                <span className="text-sm text-[#B0B0B0] line-nowrap line-through">{product.oldPrice}</span>
                                            )}
                                        </div>
                                    </div>
                                </motion.div>
                            </Link>
                        ))}
                    </AnimatePresence>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="mt-12"
                >
                    {hasMoreProducts ? (
                        <button
                            onClick={handleShowMore}
                            className="border-2 border-[#B8860B] text-[#B8860B] hover:bg-[#B8860B] hover:text-white font-semibold px-16 py-3 transition-all duration-300 shadow-sm"
                        >
                            Show More
                        </button>
                    ) : (
                        <button
                            onClick={handleShowLess}
                            className="border-2 border-[#B8860B] text-[#B8860B] hover:bg-[#B8860B] hover:text-white font-semibold px-16 py-3 transition-all duration-300 shadow-sm"
                        >
                            Show Less
                        </button>
                    )}
                </motion.div>

            </div>
        </section>
    );
};

export default OurProducts;