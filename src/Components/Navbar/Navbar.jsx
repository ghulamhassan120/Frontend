import React, { useState, useEffect, useRef } from 'react';
import { FiUser, FiSearch, FiHeart, FiShoppingCart, FiMenu, FiX, FiLogOut, FiChevronDown } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';
import AuthModal from '../../pages/Signup';

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); 
  
  const dropdownRef = useRef(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    const storedUser = localStorage.getItem('user');
    
    if (token && storedUser) {
      setIsLoggedIn(true);
      setUserData(JSON.parse(storedUser));
    }

    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLoginSuccess = () => {
    const storedUser = localStorage.getItem('user');
    
    if (storedUser) {
      setUserData(JSON.parse(storedUser));
    }
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setIsLoggedIn(false);
    setUserData(null);
    setIsDropdownOpen(false);
  };

  return (
    <>
      <header className="w-full bg-white shadow-sm py-4 px-4 sm:px-6 md:px-12 relative z-50">
        <div className="flex items-center justify-between">
          
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-2xl text-black focus:outline-none"
          >
            {isMobileMenuOpen ? <FiX /> : <FiMenu />}
          </button>

          <div className="flex items-center gap-2">
            <img src={Logo} alt="Logo" className="w-8 sm:w-10 object-contain" />
            <span className="text-xl font-bold tracking-wider text-black">
              Furniro
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-black">
            <Link to="/" className="hover:text-gray-600 transition">Home</Link>
            <Link to="/shop" className="hover:text-gray-600 transition">Shop</Link>
            <Link to="/about" className="hover:text-gray-600 transition">About</Link>
            <Link to="/contact" className="hover:text-gray-600 transition">Contact</Link>
          </nav>

          <div className="flex items-center gap-3 sm:gap-6 text-black">
            <button className="hover:text-gray-600 transition text-lg hidden sm:block"><FiSearch /></button>
            <button className="hover:text-gray-600 transition text-lg hidden sm:block"><FiHeart /></button>
            <button className="hover:text-gray-600 transition text-lg hidden sm:block"><FiShoppingCart /></button>

            <div className="flex items-center gap-2 sm:gap-3 border-l pl-3 sm:pl-4 border-gray-300 relative" ref={dropdownRef}>
              {isLoggedIn ? (
                <div>
                  <button 
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 px-3 py-1.5 rounded-full transition cursor-pointer focus:outline-none"
                  >
                    <span className="text-[#B8860B] text-lg"><FiUser /></span>
                    <span className="text-xs font-semibold text-gray-800">
                    </span>
                    <FiChevronDown className={`text-xs text-gray-600 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                  </button>

                  <AnimatePresence>
                    {isDropdownOpen && (
                      <motion.div 
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-gray-100 py-2 z-50 overflow-hidden"
                      >
                        <div className="px-4 py-2 border-b border-gray-100 ">
                          <p className="text-xs font-bold text-gray-800">{userData?.name}</p>
                          <p className="text-[10px] text-gray-500 truncate">{userData?.email}</p>
                        </div>
                        <button 
                          onClick={handleLogout}
                          className="w-full flex items-center gap-2 px-4 py-2.5 text-xs font-medium text-red-600 hover:bg-red-50 transition text-left"
                        >
                          <FiLogOut className="text-sm" /> Logout
                        </button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <div className="flex items-center gap-2 sm:gap-3">
                  <button 
                    onClick={() => setIsAuthModalOpen(true)}
                    className="hover:text-gray-600 transition text-xl"
                    title="Login"
                  >
                    <FiUser />
                  </button>
                  <button 
                    onClick={() => setIsAuthModalOpen(true)}
                    className="bg-black text-white text-xs font-semibold px-3 py-1.5 sm:px-4 sm:py-2 rounded-full hover:bg-gray-800 transition whitespace-nowrap"
                  >
                    Sign Up
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.nav 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              className="md:hidden absolute top-full left-0 w-full bg-white shadow-md py-6 px-6 flex flex-col gap-4 text-sm font-medium text-black border-t border-gray-100"
            >
              <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-gray-600 transition">Home</Link>
              <Link to="/shop" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-gray-600 transition">Shop</Link>
              <Link to="/about" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-gray-600 transition">About</Link>
              <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-gray-600 transition">Contact</Link>
               <div className="flex items-center gap-3 sm:gap-6 text-black">
            <button className="hover:text-gray-600 transition text-lg "><FiSearch /></button>
            <button className="hover:text-gray-600 transition text-lg "><FiHeart /></button>
            <button className="hover:text-gray-600 transition text-lg"><FiShoppingCart /></button>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>

      {/* Auth Modal Component */}
      <AuthModal 
        isOpen={isAuthModalOpen} 
        onClose={() => setIsAuthModalOpen(false)} 
        onLoginSuccess={handleLoginSuccess} 
      />
    </>
  );
};

export default Navbar;