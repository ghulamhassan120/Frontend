import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { FaStar, FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import Navbar from "../Navbar/Navbar";

// Dummy Products Data (Shop/OurProducts page se match karta hua)
const dummyProductsData = [
    {
        _id: '1',
        title: 'Syltherine',
        description: 'Stylish cafe chair with comfortable seating and sleek modern legs.',
        price: 250000,
        oldPrice: 'Rp 3.500.000',
        image: 'https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=600&q=80',
        images: [
            'https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=600&q=80',
            'https://images.unsplash.com/photo-1580481077494-e3299acae5e7?auto=format&fit=crop&w=600&q=80',
            'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=600&q=80',
            'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=600&q=80'
        ],
        badge: { type: 'discount', text: '-30%' }
    },
    {
        _id: '2',
        title: 'Leviosa',
        description: 'Stylish cafe chair designed for maximum comfort and durability.',
        price: 250000,
        oldPrice: '',
        image: 'https://images.unsplash.com/photo-1580481077494-e3299acae5e7?auto=format&fit=crop&w=600&q=80',
        images: [
            'https://images.unsplash.com/photo-1580481077494-e3299acae5e7?auto=format&fit=crop&w=600&q=80',
            'https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=600&q=80',
            'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=600&q=80',
            'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=600&q=80'
        ],
        badge: null
    },
    {
        _id: '3',
        title: 'Lolita',
        description: 'Luxury big sofa with premium fabric cushioning for your living room.',
        price: 7000000,
        oldPrice: 'Rp 14.000.000',
        image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=600&q=80',
        images: [
            'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=600&q=80',
            'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=600&q=80',
            'https://images.unsplash.com/photo-1540518614846-7ede433c4ef0?auto=format&fit=crop&w=600&q=80',
            'https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=600&q=80'
        ],
        badge: { type: 'discount', text: '-50%' }
    },
    {
        _id: '4',
        title: 'Respira',
        description: 'Outdoor bar table and stool set built with weather-resistant materials.',
        price: 500000,
        oldPrice: '',
        image: 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=600&q=80',
        images: [
            'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=600&q=80',
            'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=600&q=80',
            'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=600&q=80',
            'https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=600&q=80'
        ],
        badge: { type: 'new', text: 'New' }
    }
];

const ProductDetail = () => {
  const { id } = useParams();
  
  // URL se ID match karke product dhoondhein, agar na mile toh default Asgaard sofa dikhayein
  const foundProduct = dummyProductsData.find((item) => item._id === id) || {
    _id: id || 'default',
    title: 'Asgaard sofa',
    description: 'Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.',
    price: 250000.00,
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=600&q=80',
    images: [
      'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1580481077494-e3299acae5e7?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=600&q=80',
    ]
  };

  const [product] = useState(foundProduct);
  const [loading] = useState(false);

  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState("L");
  const [selectedColor, setSelectedColor] = useState("purple");
  const [quantity, setQuantity] = useState(1);

  if (loading) {
    return (
      <p className="text-center py-20 font-medium">
        Loading product details...
      </p>
    );
  }

  if (!product) {
    return (
      <p className="text-center py-20 text-red-500 font-medium">
        Product not found!
      </p>
    );
  }

  const images = product.images || [
    product.image,
    product.image,
    product.image,
    product.image,
  ];

  return (
    <>
      <Navbar />
      <div className="bg-[#FDF8F2] min-h-screen py-6 px-4 md:px-12">
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-8">
          <Link to="/" className="hover:text-black">
            Home
          </Link>
          <span>&gt;</span>
          <Link to="/shop" className="hover:text-black">
            Shop
          </Link>
          <span>&gt;</span>
          <span className="text-black font-medium border-l pl-2 border-gray-400">
            {product.title}
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-7 flex flex-col md:flex-row gap-6">
            <div className="flex md:flex-col gap-4 order-2 md:order-1">
              {images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-20 h-20 rounded-lg overflow-hidden border-2 bg-[#F9F1E7] transition ${selectedImage === index ? "border-[#B8860B]" : "border-transparent"}`}
                >
                  <img
                    src={img}
                    alt="thumbnail"
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>

            <div className="flex-1 bg-[#F9F1E7] rounded-xl overflow-hidden p-6 flex items-center justify-center order-1 md:order-2">
              <img
                src={images[selectedImage]}
                alt={product.title}
                className="w-full max-h-[500px] object-contain rounded-lg"
              />
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col gap-4">
            <h1 className="text-4xl font-normal text-gray-900">
              {product.title}
            </h1>
            <p className="text-2xl font-medium text-gray-700">
              Rs.{" "}
              {product.price ? product.price.toLocaleString() : "250,000.00"}
            </p>

            <div className="flex items-center gap-3">
              <div className="flex text-yellow-400 text-sm">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar className="text-gray-300" />
              </div>
              <span className="text-gray-400 text-sm border-l pl-3 border-gray-300">
                5 Customer Review
              </span>
            </div>

            <p className="text-sm text-gray-600 leading-relaxed">
              {product.description}
            </p>

            <div className="flex flex-col gap-2 mt-2">
              <span className="text-xs text-gray-500">Size</span>
              <div className="flex gap-3">
                {["L", "XL", "XS"].map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`w-8 h-8 rounded text-sm font-medium transition ${selectedSize === size ? "bg-[#B8860B] text-white" : "bg-[#F9F1E7] text-black hover:bg-gray-200"}`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-2 mt-2">
              <span className="text-xs text-gray-500">Color</span>
              <div className="flex gap-3">
                <button
                  onClick={() => setSelectedColor("purple")}
                  className={`w-7 h-7 rounded-full bg-[#816DFF] transition ${selectedColor === "purple" ? "ring-2 ring-offset-2 ring-black" : ""}`}
                />
                <button
                  onClick={() => setSelectedColor("black")}
                  className={`w-7 h-7 rounded-full bg-black transition ${selectedColor === "black" ? "ring-2 ring-offset-2 ring-black" : ""}`}
                />
                <button
                  onClick={() => setSelectedColor("gold")}
                  className={`w-7 h-7 rounded-full bg-[#B8860B] transition ${selectedColor === "gold" ? "ring-2 ring-offset-2 ring-black" : ""}`}
                />
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 mt-4">
              <div className="flex items-center border border-gray-400 rounded-xl overflow-hidden px-4 py-3 gap-6">
                <button
                  onClick={() =>
                    setQuantity((prev) => (prev > 1 ? prev - 1 : 1))
                  }
                  className="text-lg font-medium hover:text-[#B8860B]"
                >
                  -
                </button>
                <span className="text-sm font-semibold">{quantity}</span>
                <button
                  onClick={() => setQuantity((prev) => prev + 1)}
                  className="text-lg font-medium hover:text-[#B8860B]"
                >
                  +
                </button>
              </div>

              <button
                onClick={() =>
                  alert(`Added ${quantity} of ${product.title} (Size: ${selectedSize}, Color: ${selectedColor}) to cart!`)
                }
                className="border border-black text-black px-8 py-3 rounded-xl text-sm font-normal hover:bg-black hover:text-white transition"
              >
                Add To Cart
              </button>

              <button
                onClick={() => alert(`Compared ${product.title}`)}
                className="border border-black text-black px-8 py-3 rounded-xl text-sm font-normal hover:bg-black hover:text-white transition"
              >
                + Compare
              </button>
            </div>

            <hr className="my-6 border-gray-200" />

            <div className="flex flex-col gap-3 text-xs text-gray-500">
              <div className="flex gap-6">
                <span className="w-20">SKU</span>
                <span>: SS00{product._id}</span>
              </div>
              <div className="flex gap-6">
                <span className="w-20">Category</span>
                <span>: Sofas</span>
              </div>
              <div className="flex gap-6">
                <span className="w-20">Tags</span>
                <span>: Sofa, Chair, Home, Shop</span>
              </div>
              <div className="flex items-center gap-6">
                <span className="w-20">Share</span>
                <div className="flex items-center gap-4 text-black">
                  <a
                    href="#facebook"
                    onClick={(e) => e.preventDefault()}
                    className="w-5 h-5 bg-black text-white rounded-full flex items-center justify-center hover:opacity-80"
                  >
                    <FaFacebookF size={10} />
                  </a>
                  <a
                    href="#linkedin"
                    onClick={(e) => e.preventDefault()}
                    className="w-5 h-5 bg-black text-white rounded-full flex items-center justify-center hover:opacity-80"
                  >
                    <FaLinkedinIn size={10} />
                  </a>
                  <a
                    href="#twitter"
                    onClick={(e) => e.preventDefault()}
                    className="w-5 h-5 bg-black text-white rounded-full flex items-center justify-center hover:opacity-80"
                  >
                    <FaTwitter size={10} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;