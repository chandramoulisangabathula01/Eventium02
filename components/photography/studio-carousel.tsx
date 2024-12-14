'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { StudioCard } from "./studio-card"

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const STUDIOS = [
  {
    name: "Master's Studio",
    rating: 5.0,
    reviews: 10,
    location: "Mandi City, Mandi",
    price: 80000,
    promotions: [{ discount: 10 }],
    imageUrl: "/images/placeholder.jpg?height=200&width=300",
  },
  {
    name: "The Clicks Photography",
    rating: 4.9,
    reviews: 13,
    location: "Mandi",
    price: 60000,
    promotions: [{ discount: 15 }],
    imageUrl: "/images/placeholder.jpg?height=200&width=300",
  },
  {
    name: "49 The Studio, Goa",
    rating: 4.9,
    reviews: 2,
    location: "Margao",
    price: 170000,
    promotions: [],
    imageUrl: "/images/placeholder.jpg?height=200&width=300",
  },
  {
    name: "Wedding Bless, Hyd ",
    rating: 5.0,
    reviews: 17,
    location: "Nizampura",
    price: 48000,
    promotions: [{ discount: 5 }],
    imageUrl: "/images/placeholder.jpg?height=200&width=300",
  },
  {
    name: "Wedding Bless, Hyd",
    rating: 5.0,
    reviews: 17,
    location: "Nizampura",
    price: 48000,
    promotions: [{ discount: 5 }],
    imageUrl: "/images/placeholder.jpg?height=200&width=300",
  },
]

export function StudioCarousel() {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={20}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      breakpoints={{
        640: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 4,
        },
      }}
      className="mySwiper"
    >
      {STUDIOS.map((studio, index) => (
        <SwiperSlide key={index}>
          <StudioCard {...studio} />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

