/* eslint-disable @next/next/no-img-element */
// components/OurServices.tsx
"use client"
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const servicesData = [
  {
    title: 'Venue Spaces',
    description: 'Various venue types for your events.',
    image: '/images/placeholder.jpg',
    details: 'Details about venue spaces.',
  },
  {
    title: 'Exclusive Decor',
    description: 'Beautiful decor options for your events.',
    image: '/images/placeholder.jpg',
    details: 'Details about exclusive decor.',
  },
  {
    title: 'Photography',
    description: 'Capture your moments with our photographers.',
    image: '/images/placeholder.jpg',
    details: 'Details about photography services.',
  },
  {
    title: 'Caterers',
    description: 'Delicious catering options for your events.',
    image: '/images/placeholder.jpg',
    details: 'Details about catering services.',
  },
  {
    title: 'Caterer',
    description: 'Delicious catering options for your events.',
    image: '/images/placeholder.jpg',
    details: 'Details about catering services.',
  },
];

const OurServices = () => {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    handleResize(); // Call once to set initial width
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="p-8 text-black bg-[#EDEDED]">
      <h2 className="text-5xl font-bold text-black text-center mb-12">Our Services</h2>
      
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
        {servicesData.map((service) => (
          <SwiperSlide key={service.title}>
            {({ isActive, isNext, isPrev }) => (
              <div className={`bg-white p-2 border-[#595050] border-2 rounded-3xl shadow-lg relative h-[400px] transition-all duration-300 
                ${windowWidth < 640 ? 
                  (isActive ? 'opacity-100 scale-100' : 
                   (isNext || isPrev) ? 'opacity-50 scale-90' : 'opacity-30 scale-85')
                  : ''
                }`}>
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-[250px] rounded-2xl object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4 w-[80%]">{service.description}</p>
                  <button className="absolute bottom-6 right-4 px-2 py-2 bg-[#595050] rounded-full text-white hover:bg-gray-800 transition-colors">
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
            )}
          </SwiperSlide>
        ))}
        <div className="hidden md:block">
          <div className="swiper-button-prev border border-12-gray-500 bg-[#595050]  rounded-r-xl !text-[#EDEDED]  !left-0"></div>
          <div className="swiper-button-next border border-12-gray-500 bg-[#595050]  rounded-l-xl !text-[#EDEDED] !right-0"></div>
        </div>
      </Swiper>
      
    </div>
  );
};

export default OurServices;