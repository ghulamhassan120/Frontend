import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import { FiArrowRight } from 'react-icons/fi'; 

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const rooms = [
  {
    id: 1,
    image: 'YOUR_ROOM_IMAGE_URL_1', 
    category: '01 — Bed Room',
    title: 'Inner Peace',
    alt: 'Minimalist bedroom with gallery wall'
  },
  {
    id: 2,
    image: 'YOUR_ROOM_IMAGE_URL_2', 
    category: '02 — Dining Area',
    title: 'Bright Corner',
    alt: 'White dining room with chest of drawers'
  },
  {
    id: 3,
    image: 'YOUR_ROOM_IMAGE_URL_3', 
    category: '03 — Living Space',
    title: 'Cozy Vibes',
    alt: 'Modern living room setup'
  },
];

const RoomsInspiration = () => {
  return (
    <section className="w-full bg-[#FCF8F3] py-24 px-4 sm:px-6 md:px-12 overflow-hidden">
      <div className="max-w-[1500px] mx-auto flex flex-col md:flex-row items-center gap-16">
        
        <div className="md:w-1/3 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#3a3a3a] mb-5 leading-tight tracking-tight">
            50+ Beautiful rooms inspiration
          </h2>
          <p className="text-[#898989] text-base md:text-lg mb-8 leading-relaxed">
            Our designer already made a lot of beautiful prototype of rooms that inspire you.
          </p>
          <button className="bg-[#B8860B] text-white font-semibold px-12 py-4 hover:bg-[#9d7309] transition duration-300 shadow-md">
            Explore More
          </button>
        </div>

        <div className="md:w-2/3 w-full relative">
          <Swiper
            modules={[Pagination, Navigation, Autoplay]}
            spaceBetween={30}
            slidesPerView={1.2} 
            centeredSlides={true}
            loop={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            pagination={{ 
              clickable: true,
              el: '.custom-pagination', 
            }}
            navigation={{
              nextEl: '.custom-button-next',
            }}
            breakpoints={{
              640: {
                slidesPerView: 1.2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 1.5, 
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 2.2,
                spaceBetween: 30,
              },
            }}
            className="inspiration-swiper"
          >
            {rooms.map((room) => (
              <SwiperSlide key={room.id} className="h-auto">
                <div className="relative aspect-[3/4] group overflow-hidden shadow-xl">
                  <img 
                    src={room.image} 
                    alt={room.alt}
                    className="w-full h-full object-cover block group-hover:scale-105 transition-transform duration-500"
                  />

                  <div className="absolute bottom-8 left-8 bg-white/80 backdrop-blur-sm p-6 pr-16 min-w-[250px]">
                    <p className="text-[#898989] text-sm mb-1 font-medium">{room.category}</p>
                    <h3 className="text-2xl font-bold text-[#3a3a3a]">{room.title}</h3>
                  </div>

                  <button className="absolute bottom-8 right-8 bg-[#B8860B] text-white w-12 h-12 flex items-center justify-center hover:bg-[#9d7309] transition duration-300">
                    <FiArrowRight className="text-xl" />
                  </button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="flex items-center justify-center md:justify-start gap-6 mt-10">
            <div className="custom-pagination flex items-center gap-3" />
            
            <button className="custom-button-next bg-[#B8860B] text-white w-14 h-14 flex items-center justify-center hover:bg-[#9d7309] transition duration-300 rounded-full shadow-md">
              <FiArrowRight className="text-2xl" />
            </button>
          </div>
        </div>

      </div>

      <style jsx global>{`
        .custom-pagination .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          background: #D8D8D8;
          opacity: 1;
          border-radius: 50%;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .custom-pagination .swiper-pagination-bullet-active {
          background: #B8860B; /* Active dot color */
          width: 16px;
          height: 16px;
          box-shadow: 0 0 0 4px rgba(184, 134, 11, 0.2);
        }
      `}</style>
    </section>
  );
};

export default RoomsInspiration;