import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import ShopHeader from './ShopHeader'
import ShopProducts from './ShopProduct'
import Features from './Features'
import Footer from '../../Components/Footer/Footer'
import { useState } from 'react'
import { useEffect } from 'react'
function ShopMain() {
  const [allProducts, setAllProducts] = useState([]);
  
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  const [itemsPerPage, setItemsPerPage] = useState(16);
  const [sortOption, setSortOption] = useState('default');
  console.log(sortOption);


  const sortedProduct = [...allProducts]

  if (sortOption == "low-to-high") {
    sortedProduct.sort((a, b) => a.price - b.price)
  } else if (sortOption == "high-to-low") {
    sortedProduct.sort((a, b) => b.price - a.price)
  } else if (sortOption == "name") {
    sortedProduct.sort((a, b) => a.title.localeCompare(b.title))

  }
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProducts = sortedProduct.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(allProducts.length / itemsPerPage);

  const handlePageChange = (pageNum) => {
    setCurrentPage(pageNum);
    window.scrollTo({ top: 0, behavior: 'smooth' }); 
  };


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
        setCurrentPage={setCurrentPage}
      />
      <Features />
      <Footer />
    </div>
  )
}

export default ShopMain