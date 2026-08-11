import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaUser, FaCalendarAlt, FaTag } from 'react-icons/fa';
import { FiSearch } from 'react-icons/fi';
import image04 from '../../assets/AboutImage/4.png'
import image05 from '../../assets/AboutImage/5.png'
import image06 from '../../assets/AboutImage/6.png'
import image07 from '../../assets/AboutImage/7.png'
import image08 from '../../assets/AboutImage/8.png'
import image09 from '../../assets/AboutImage/9.png'
import image10 from '../../assets/AboutImage/10.png'
import image11 from '../../assets/AboutImage/11.png'
const allBlogPosts = [
    {
        id: 1,
        title: 'Going all-in with millennial design',
        image: image04,
        admin: 'Admin',
        date: '14 Oct 2022',
        tag: 'Wood',
        excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices...'
    },
    {
        id: 2,
        title: 'Exploring new ways of decorating',
        image: image05,
        admin: 'Admin',
        date: '14 Oct 2022',
        tag: 'Handmade',
        excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices...'
    },
    {
        id: 3,
        title: 'Handmade pieces that took time to make',
        image: image06,
        admin: 'Admin',
        date: '14 Oct 2022',
        tag: 'Handmade',
        excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices...'
    }
];

const categories = [
    { name: 'Crafts', count: 2 },
    { name: 'Design', count: 8 },
    { name: 'Handmade', count: 7 },
    { name: 'Interior', count: 1 },
    { name: 'Wood', count: 6 }
];

const recentPosts = [
    { id: 1, title: 'Going all-in with millennial design', date: '03 Oct 2022', image: image07 },
    { id: 2, title: 'Exploring new ways of decorating', date: '03 Oct 2022', image: image08},
    { id: 3, title: 'Handmade pieces that took time to make', date: '03 Oct 2022', image: image09 },
    { id: 4, title: 'Modern home in Milan', date: '03 Oct 2022', image: image10},
    { id: 5, title: 'Colorful office redesign', date: '03 Oct 2022', image:image11}
];

const BlogSection = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 3; 

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = allBlogPosts.slice(indexOfFirstPost, indexOfLastPost);
    const totalPages = Math.ceil(allBlogPosts.length / postsPerPage);

    const handlePageChange = (pageNum) => {
        setCurrentPage(pageNum);
        window.scrollTo({ top: 400, behavior: 'smooth' });
    };

    return (
        <section className="w-full bg-white py-16 px-4 sm:px-6 md:px-12">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">

                
                <div className="lg:col-span-2 flex flex-col justify-between">
                    <div className="flex flex-col gap-16">
                        <AnimatePresence mode="wait">
                            {currentPosts.map((post) => (
                                <motion.article
                                    key={post.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.4 }}
                                    className="flex flex-col gap-4"
                                >
                                    <div className="w-full h-72 sm:h-96 rounded-lg overflow-hidden bg-gray-200">
                                        <img
                                            src={post.image}
                                            alt={post.title}
                                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                        />
                                    </div>

                                    <div className="flex flex-wrap items-center gap-6 text-sm text-[#9F9F9F]">
                                        <span className="flex items-center gap-2"><FaUser className="text-[#B8860B]" /> {post.admin}</span>
                                        <span className="flex items-center gap-2"><FaCalendarAlt className="text-[#B8860B]" /> {post.date}</span>
                                        <span className="flex items-center gap-2"><FaTag className="text-[#B8860B]" /> {post.tag}</span>
                                    </div>

                                    <h2 className="text-2xl sm:text-3xl font-semibold text-[#3a3a3a]">
                                        {post.title}
                                    </h2>

                                    <p className="text-[#9F9F9F] text-sm sm:text-base leading-relaxed">
                                        {post.excerpt}
                                    </p>

                                    <div>
                                        <a
                                            href="#"
                                            className="inline-block text-black font-medium border-b-2 border-black pb-1 hover:text-[#B8860B] hover:border-[#B8860B] transition-colors"
                                        >
                                            Read more
                                        </a>
                                    </div>
                                </motion.article>
                            ))}
                        </AnimatePresence>
                    </div>

                    <div className="flex items-center justify-center lg:justify-center gap-4 mt-16">
                        {[1, 2, 3].map((num) => (
                            <button
                                key={num}
                                onClick={() => handlePageChange(num)}
                                className={`w-12 h-12 sm:w-14 sm:h-14 rounded-lg font-normal text-base transition-all duration-300 ${currentPage === num
                                        ? 'bg-[#B8860B] text-white shadow-md'
                                        : 'bg-[#F9F1E7] text-black hover:bg-[#B8860B] hover:text-white'
                                    }`}
                            >
                                {num}
                            </button>
                        ))}

                        <button
                            onClick={() => {
                                const nextPage = currentPage < 3 ? currentPage + 1 : 1;
                                handlePageChange(nextPage);
                            }}
                            className="px-6 h-12 sm:h-14 bg-[#F9F1E7] text-black hover:bg-[#B8860B] hover:text-white rounded-lg font-normal text-base transition-all duration-300 shadow-sm"
                        >
                            Next
                        </button>
                    </div>
                </div>

                <aside className="flex flex-col gap-10">
                    <div className="relative">
                        <input
                            type="text"
                            className="w-full border border-[#9F9F9F] rounded-lg px-4 py-3 pr-12 focus:outline-none focus:border-black transition"
                        />
                        <button className="absolute right-4 top-1/2 -translate-y-1/2 text-black text-lg">
                            <FiSearch />
                        </button>
                    </div>

                    <div className="px-4">
                        <h3 className="text-xl font-bold text-[#3a3a3a] mb-6">Categories</h3>
                        <ul className="flex flex-col gap-6">
                            {categories.map((cat, index) => (
                                <li key={index} className="flex items-center justify-between text-[#9F9F9F] hover:text-black cursor-pointer transition">
                                    <span>{cat.name}</span>
                                    <span>{cat.count}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="px-4">
                        <h3 className="text-xl font-bold text-[#3a3a3a] mb-6">Recent Posts</h3>
                        <div className="flex flex-col gap-6">
                            {recentPosts.map((recent) => (
                                <div key={recent.id} className="flex items-center gap-4 group cursor-pointer">
                                    <div className="w-20 h-20 rounded-lg overflow-hidden bg-gray-200 flex-shrink-0">
                                        <img
                                            src={recent.image}
                                            alt={recent.title}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                        />
                                    </div>
                                    <div className="flex flex-col justify-center">
                                        <h4 className="text-sm font-medium text-[#3a3a3a] group-hover:text-[#B8860B] transition line-clamp-2">
                                            {recent.title}
                                        </h4>
                                        <span className="text-xs text-[#9F9F9F] mt-1">{recent.date}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </aside>

            </div>
        </section>
    );
};

export default BlogSection;