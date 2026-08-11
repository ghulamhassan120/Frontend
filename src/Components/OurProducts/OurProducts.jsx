import React, { useEffect, useState } from 'react';
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

const OurProducts = () => {
    const [visibleCount, setVisibleCount] = useState(8);
    const [allProducts, setAllProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/product')
                const data = await response.json()
                console.log(data.data);

                setAllProducts(data.data)
                setLoading(false)

            } catch (error) {

                console.error("Error fetching products:", err);
                setLoading(false);
            }

        }
        fetchData()

    }, [])

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
        <Link to={`/product/${allProducts.map((item)=>{item._id})}`}>
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
                                key={product.id}
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
                                        <span className={`absolute top-4 right-4 w-11 h-11 rounded-full text-white text-xs font-semibold flex items-center justify-center z-10 ${product.badge.type === 'discount' ? 'bg-[#E97171]' : 'bg-[#2EC1AC]'
                                            }`}>
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

        </Link>
    );
};

export default OurProducts;