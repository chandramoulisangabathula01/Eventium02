/* eslint-disable @next/next/no-img-element */
"use client"
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const venues = [
  {
    id: 1,
    name: "Royal Palace Gardens",
    location: "New Delhi",
    image: "/images/placeholder.jpg",
    capacity: "500-1500",
    priceRange: "₹2,00,000 onwards",
    type: "Wedding Resort",
    description: "An exquisite venue featuring traditional architecture and modern amenities.",
  },
  {
    id: 2,
    name: "Seaside Celebration Center",
    location: "Mumbai",
    image: "/images/placeholder.jpg",
    capacity: "200-800",
    priceRange: "₹1,50,000 onwards",
    type: "Banquet Hall",
    description: "Luxurious beachfront venue with panoramic ocean views.",
  },
  {
    id: 3,
    name: "Heritage Grand",
    location: "Jaipur",
    image: "/images/placeholder.jpg",
    capacity: "300-1000",
    priceRange: "₹1,80,000 onwards",
    type: "Heritage Property",
    description: "A stunning heritage property with royal Rajasthani architecture.",
  }
];

const VenueSection = () => {
  const [selectedFilters, setSelectedFilters] = useState({
    location: '',
    priceRange: '',
    capacity: '',
    type: ''
  });

  return (
    <div className="min-h-screen text-black bg-[#EDEDED] px-4 py-12">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-black mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
          Explore Exquisite Venue Spaces
        </h1>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto">
          Find the perfect setting for your celebration, curated from the finest locations in India.
        </p>
      </div>

      {/* Filters Section */}
      <div className="max-w-6xl mx-auto mb-8 p-4 bg-white rounded-lg shadow-md">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <select 
            className="p-2 border text rounded-md"
            value={selectedFilters.location}
            onChange={(e) => setSelectedFilters({...selectedFilters, location: e.target.value})}
          >
            <option value="">Select Location</option>
            <option value="delhi">Delhi</option>
            <option value="mumbai">Mumbai</option>
            <option value="bangalore">Bangalore</option>
          </select>
          
          <select 
            className="p-2 border rounded-md"
            value={selectedFilters.priceRange}
            onChange={(e) => setSelectedFilters({...selectedFilters, priceRange: e.target.value})}
          >
            <option value="">Price Range</option>
            <option value="budget">Under ₹1,00,000</option>
            <option value="mid">₹1,00,000 - ₹3,00,000</option>
            <option value="luxury">Above ₹3,00,000</option>
          </select>

          <select 
            className="p-2 border rounded-md"
            value={selectedFilters.capacity}
            onChange={(e) => setSelectedFilters({...selectedFilters, capacity: e.target.value})}
          >
            <option value="">Guest Capacity</option>
            <option value="small">Under 200</option>
            <option value="medium">200-500</option>
            <option value="large">500+</option>
          </select>

          <select 
            className="p-2 border rounded-md"
            value={selectedFilters.type}
            onChange={(e) => setSelectedFilters({...selectedFilters, type: e.target.value})}
          >
            <option value="">Venue Type</option>
            <option value="resort">Wedding Resort</option>
            <option value="banquet">Banquet Hall</option>
            <option value="heritage">Heritage Property</option>
          </select>
        </div>
      </div>

      {/* Venues Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {venues.map((venue) => (
          <motion.div
            key={venue.id}
            whileHover={{ scale: 1.02 }}
            className="bg-white rounded-xl overflow-hidden shadow-lg"
          >
            <div className="relative h-64">
              <img
                src={venue.image}
                alt={venue.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{venue.name}</h3>
              <p className="text-gray-600 mb-4">{venue.location}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">
                  {venue.capacity} guests
                </span>
                <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">
                  {venue.priceRange}
                </span>
                <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">
                  {venue.type}
                </span>
              </div>

              <div className="flex justify-between items-center">
                <button className="px-6 py-2 bg-[#595050] text-white rounded-full hover:bg-gray-800 transition-colors">
                  Book Now
                </button>
                <button className="p-2 text-gray-600 hover:text-gray-800">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Chat Button */}
      <div className="fixed bottom-8 right-8">
        <button className="p-4 bg-[#595050] text-white rounded-full shadow-lg hover:bg-gray-800 transition-colors">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default VenueSection;
