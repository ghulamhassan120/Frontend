import React, { useState } from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import ShopHeader from './ShopHeader';
import ShopProducts from './ShopProduct';
import Features from './Features';
import Footer from '../../Components/Footer/Footer';

// Dummy Products Data
const dummyProductsList = [
    {
        _id: '1',
        id: '1',
        title: 'Syltherine',
        description: 'Stylish cafe chair',
        price: 2500000,
        oldPrice: 'Rp 3.500.000',
        image: 'https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=600&q=80',
        badge: '-30%',
        badgeColor: 'bg-[#E97171]'
    },
    {
        _id: '2',
        id: '2',
        title: 'Leviosa',
        description: 'Stylish cafe chair',
        price: 2500000,
        oldPrice: '',
        image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=600&q=80',
        badge: null,
        badgeColor: ''
    },
    {
        _id: '3',
        id: '3',
        title: 'Lolita',
        description: 'Luxury big sofa',
        price: 7000000,
        oldPrice: 'Rp 14.000.000',
        image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=600&q=80',
        badge: '-50%',
        badgeColor: 'bg-[#E97171]'
    },
    {
        _id: '4',
        id: '4',
        title: 'Respira',
        description: 'Outdoor bar table and stool',
        price: 500000,
        oldPrice: '',
        image: 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=600&q=80',
        badge: 'New',
        badgeColor: 'bg-[#2EC1AC]'
    },
    {
        _id: '5',
        id: '5',
        title: 'Grifo',
        description: 'Night lamp',
        price: 1500000,
        oldPrice: '',
        image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=600&q=80',
        badge: null,
        badgeColor: ''
    },
    {
        _id: '6',
        id: '6',
        title: 'Muggo',
        description: 'Small mug',
        price: 150000,
        oldPrice: '',
        image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=600&q=80',
        badge: 'New',
        badgeColor: 'bg-[#2EC1AC]'
    },
    {
        _id: '7',
        id: '7',
        title: 'Pingky',
        description: 'Cute bed set',
        price: 7000000,
        oldPrice: 'Rp 14.000.000',
        image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=600&q=80',
        badge: '-50%',
        badgeColor: 'bg-[#E97171]'
    },
    {
        _id: '8',
        id: '8',
        title: 'Potty',
        description: 'Minimalist flower pot',
        price: 500000,
        oldPrice: '',
        image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=600&q=80',
        badge: 'New',
        badgeColor: 'bg-[#2EC1AC]'
    }
];

function ShopMain() {
  const [allProducts] = useState(dummyProductsList);
  const [loading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(16);
  const [sortOption, setSortOption] = useState('default');

  const sortedProduct = [...allProducts];

  if (sortOption === "low-to-high") {
    sortedProduct.sort((a, b) => a.price - b.price);
  } else if (sortOption === "high-to-low") {
    sortedProduct.sort((a, b) => b.price - a.price);
  } else if (sortOption === "name") {
    sortedProduct.sort((a, b) => a.title.localeCompare(b.title));
  }

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProducts = sortedProduct.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(allProducts.length / itemsPerPage);

  const handlePageChange = (pageNum) => {
    setCurrentPage(pageNum);
    window.scrollTo({ top: 0, behavior: 'smooth' }); 
  };

  return (
    <div>
      <Navbar />
      <ShopHeader
        totalProducts={sortedProduct.length}
        indexOfFirstItem={indexOfFirstItem}
        indexOfLastItem={indexOfLastItem}
        sortOption={sortOption}
        setSortOption={setSortOption}
        itemsPerPage={itemsPerPage}
        setItemsPerPage={setItemsPerPage}
      />
      <ShopProducts
        currentProducts={currentProducts}
        loading={loading}
        currentPage={currentPage}
        totalPages={totalPages}
        setCurrentPage={handlePageChange}
      />
      <Features />
      <Footer />
    </div>
  );
}

export default ShopMain;