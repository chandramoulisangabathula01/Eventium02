/* eslint-disable @next/next/no-img-element */
"use client"
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const STUDIOS = [
  {
    name: "Master's Studio",
    rating: 5.0,
    reviews: 10,
    location: "Mandi City, Mandi",
    price: 80000,
    promotions: [{ discount: 10 }],
    imageUrl: "/images/placeholder.jpg",
  },
  {
    name: "The Clicks Photography",
    rating: 4.9,
    reviews: 13,
    location: "Mandi",
    price: 60000,
    promotions: [{ discount: 15 }],
    imageUrl: "/images/placeholder.jpg",
  },
  {
    name: "49 The Studio, Goa",
    rating: 4.9,
    reviews: 2,
    location: "Margao",
    price: 170000,
    promotions: [],
    imageUrl: "/images/placeholder.jpg",
  },
  {
    name: "Wedding Bless, Hyd ",
    rating: 5.0,
    reviews: 17,
    location: "Nizampura",
    price: 48000,
    promotions: [{ discount: 5 }],
    imageUrl: "/images/placeholder.jpg",
  },
  {
    name: "Wedding Bless, Hyd",
    rating: 5.0,
    reviews: 17,
    location: "Nizampura",
    price: 48000,
    promotions: [{ discount: 5 }],
    imageUrl: "/images/placeholder.jpg",
  },
];

const StudioCarousel = () => {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="p-8 text-black bg-[#EDEDED]">
      <h2 className="text-5xl font-bold text-black text-center mb-12">Photography Studios</h2>
      
      <Swiper
        modules={[Pagination, Autoplay, Navigation]}
        spaceBetween={20}
        slidesPerView={1.5}
        centeredSlides={true}
        loop={true}
        pagination={{ clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2.5,
            centeredSlides: false,
          },
          1024: {
            slidesPerView: 3,
            centeredSlides: false,
          },
          1280: {
            slidesPerView: 4,
            centeredSlides: false,
          },
        }}
        className="w-full relative"
      >
        {STUDIOS.map((studio) => (
          <SwiperSlide key={studio.name}>
            {({ isActive, isNext, isPrev }) => (
              <div className={`bg-white p-2 border-[#595050] border-2 rounded-3xl shadow-lg relative h-[400px] transition-all duration-300 
                ${windowWidth < 640 ? 
                  (isActive ? 'opacity-100 scale-100' : 
                   (isNext || isPrev) ? 'opacity-50 scale-90' : 'opacity-30 scale-85')
                  : ''
                }`}>
                <img 
                  src={studio.imageUrl} 
                  alt={studio.name} 
                  className="w-full h-[200px] rounded-2xl object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{studio.name}</h3>
                  <div className="flex items-center mb-2">
                    <span className="text-yellow-500 mr-1">★</span>
                    <span className="font-medium">{studio.rating}</span>
                    <span className="text-gray-500 ml-1">({studio.reviews} reviews)</span>
                  </div>
                  <p className="text-gray-600 mb-2">{studio.location}</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="font-bold">₹{studio.price.toLocaleString()}</span>
                      {studio.promotions.length > 0 && (
                        <span className="ml-2 text-green-600">
                          {studio.promotions[0].discount}% OFF
                        </span>
                      )}
                    </div>
                    <button className="px-2 py-2 bg-[#595050] rounded-full text-white hover:bg-gray-800 transition-colors">
                      <svg 
                        viewBox="0 0 24 24" 
                        className='w-8 h-8 text-[#EDEDED]'
                        fill="none" 
                        stroke="currentColor"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={3} 
                          d="M5 12h14m0 0l-7-7m7 7l-7 7"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            )}
          </SwiperSlide>
        ))}
        <div className="hidden md:block">
          <div className="swiper-button-prev border border-12-gray-500 bg-[#595050] rounded-r-xl !text-[#EDEDED] !left-0"></div>
          <div className="swiper-button-next border border-12-gray-500 bg-[#595050] rounded-l-xl !text-[#EDEDED] !right-0"></div>
        </div>
      </Swiper>
    </div>
  );
};

export default StudioCarousel;