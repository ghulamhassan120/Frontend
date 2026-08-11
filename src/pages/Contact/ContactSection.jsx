import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhoneAlt, FaClock } from 'react-icons/fa';

const ContactSection = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Submitted:', formData);
        alert('Thank you for contacting us!');
    };

    return (
        <section className="w-full bg-white py-20 px-4 sm:px-6 md:px-12">
            <div className="max-w-6xl mx-auto flex flex-col items-center">

                <motion.div 
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-2xl mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#3a3a3a] mb-3">
                        Get In Touch With Us
                    </h2>
                    <p className="text-[#9F9F9F] text-sm sm:text-base leading-relaxed">
                        For More Information About Our Product & Services, Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!
                    </p>
                </motion.div>

                <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">

                    <motion.div 
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="flex flex-col gap-10 px-4 sm:px-8"
                    >
                        <div className="flex items-start gap-4">
                            <FaMapMarkerAlt className="text-xl text-[#3a3a3a] mt-1 flex-shrink-0" />
                            <div>
                                <h3 className="text-xl font-bold text-[#3a3a3a] mb-1">Address</h3>
                                <p className="text-[#9F9F9F] text-sm leading-relaxed">
                                    236 5th SE Avenue, New York NY10000, United States
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <FaPhoneAlt className="text-xl text-[#3a3a3a] mt-1 flex-shrink-0" />
                            <div>
                                <h3 className="text-xl font-bold text-[#3a3a3a] mb-1">Phone</h3>
                                <p className="text-[#9F9F9F] text-sm leading-relaxed">
                                    Mobile: +(84) 546-6789<br />
                                    Hotline: +(84) 456-6789
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <FaClock className="text-xl text-[#3a3a3a] mt-1 flex-shrink-0" />
                            <div>
                                <h3 className="text-xl font-bold text-[#3a3a3a] mb-1">Working Time</h3>
                                <p className="text-[#9F9F9F] text-sm leading-relaxed">
                                    Monday-Friday: 9:00 - 22:00<br />
                                    Saturday-Sunday: 9:00 - 21:00
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.form 
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        onSubmit={handleSubmit}
                        className="flex flex-col gap-6"
                    >
                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-semibold text-[#3a3a3a]">Your name</label>
                            <input 
                                type="text" 
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Abc" 
                                required
                                className="w-full border border-[#9F9F9F] rounded-lg px-4 py-4 text-sm text-[#3a3a3a] focus:outline-none focus:border-[#B8860B] transition"
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-semibold text-[#3a3a3a]">Email address</label>
                            <input 
                                type="email" 
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Abc@def.com" 
                                required
                                className="w-full border border-[#9F9F9F] rounded-lg px-4 py-4 text-sm text-[#3a3a3a] focus:outline-none focus:border-[#B8860B] transition"
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-semibold text-[#3a3a3a]">Subject</label>
                            <input 
                                type="text" 
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                placeholder="This is an optional" 
                                className="w-full border border-[#9F9F9F] rounded-lg px-4 py-4 text-sm text-[#3a3a3a] focus:outline-none focus:border-[#B8860B] transition"
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-semibold text-[#3a3a3a]">Message</label>
                            <textarea 
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Hi! i'd like to ask about" 
                                rows="4"
                                required
                                className="w-full border border-[#9F9F9F] rounded-lg px-4 py-4 text-sm text-[#3a3a3a] focus:outline-none focus:border-[#B8860B] transition resize-none"
                            ></textarea>
                        </div>

                        <div>
                            <button 
                                type="submit"
                                className="bg-[#B8860B] text-white font-medium text-sm px-12 py-4 rounded-md hover:bg-[#a67709] transition-colors duration-300 shadow-md"
                            >
                                Submit
                            </button>
                        </div>
                    </motion.form>

                </div>

            </div>
        </section>
    );
};

export default ContactSection;