import React from 'react';
import { motion } from 'framer-motion';
import { BiTrophy, BiCheckShield, BiSupport } from 'react-icons/bi';
import { FiTruck } from 'react-icons/fi';

const featuresData = [
    {
        id: 1,
        icon: <BiTrophy className="w-12 h-12 text-[#242424]" />,
        title: 'High Quality',
        description: 'crafted from top materials',
    },
    {
        id: 2,
        icon: <BiCheckShield className="w-12 h-12 text-[#242424]" />,
        title: 'Warranty Protection',
        description: 'Over 2 years',
    },
    {
        id: 3,
        icon: <FiTruck className="w-12 h-12 text-[#242424]" />,
        title: 'Free Shipping',
        description: 'Order over 150 $',
    },
    {
        id: 4,
        icon: <BiSupport className="w-12 h-12 text-[#242424]" />,
        title: '24 / 7 Support',
        description: 'Dedicated support',
    },
];

const Features = () => {
    return (
        <section className="w-full bg-[#FAF3EA] py-20 px-4 sm:px-6 md:px-12">
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {featuresData.map((feature, index) => (
                    <motion.div
                        key={feature.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        className="flex items-center gap-4 justify-start"
                    >
                        <div className="flex-shrink-0">
                            {feature.icon}
                        </div>

                        <div className="flex flex-col">
                            <h4 className="text-xl font-semibold text-[#242424]">{feature.title}</h4>
                            <p className="text-sm font-medium text-[#898989]">{feature.description}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Features;