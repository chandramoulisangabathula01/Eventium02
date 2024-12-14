// /* eslint-disable @typescript-eslint/no-unused-vars */
// /* eslint-disable @next/next/no-img-element */
// // components/HeroSection.tsx
// 'use client'
// import React, { useEffect } from 'react';
// import Link from 'next/link';
// import { gsap } from 'gsap';

// const HeroSection = () => {
//   const services = [
//     {
//       name: 'Venue Spaces',
//       description: 'Find the perfect venue for your event',
//       color: 'bg-red-500',
//       link: '/services/venues',
//       // direction: { x: 100, y: -50 } // top-right
//     },
//     {
//       name: 'Exclusive Decor', 
//       description: 'Make your event beautiful and unique',
//       color: 'bg-blue-500',
//       link: '/services/decor',
//       // direction: { x: -100, y: -50 } // top-left
//     },
//     {
//       name: 'Photography',
//       description: 'Capture every special moment',
//       color: 'bg-yellow-500', 
//       link: '/services/photography',
//       initialPosition: { x: 0, y: 0 },
//       finalPosition: { x: 150, y: 50 },
//       // direction: { x: 150, y: 50 } // bottom-right
//     },
//     {
//       name: 'Catering',
//       description: 'Delicious food for your guests',
//       color: 'bg-green-500',
//       link: '/services/catering',
//       // direction: { x: -150, y: 50 } // bottom-left
//     }
//   ];

//   useEffect(() => {
//     services.forEach((service, index) => {
//       const serviceElement = document.getElementById(`service-${index}`);
//       gsap.from(serviceElement, {
//         x: 0,
//         y: 0,
//         ease: 'power1.out',
//         duration: 1,
//         delay: 1 + index * 0.2
//       });
//       gsap.to(serviceElement, {
//         // x: service.direction.x,
//         // y: service.direction.y,
//         // x: 100,
//         // y: 100,
//         ease: 'power1.out',
//         duration: 1,
//         delay: 1 + index * 0.2
//       });
//     });
//   }, []);

//   return (
//     <div className="flex flex-col h-screen md:flex-row items-center justify-between p-8 bg-white text-black">
//       <div className="md:w-1/2">
//         <h1 className="text-4xl font-bold">
//           Create Unforgettable Events with Ease.
//         </h1>
//         <p className="mt-4 text-lg">
//           Explore our venue spaces, exclusive decor, professional photography, and catering services.
//         </p>
//         <div className="mt-6 flex gap-4">
//           <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
//             Explore Services
//           </button>
//           <button className="px-4 py-2 bg-gray-200 text-blue-500 rounded hover:bg-gray-300 transition">
//             Contact Us
//           </button>
//         </div>
//       </div>
//       <div className="md:w-1/2 grid grid-cols-2 gap-4 mt-8 md:mt-0">
//         {services.map((service, index) => (
//           <Link href={service.link} key={service.name}>
//             <div
//               id={`service-${index}`}
//               className={`${service.color} p-6 rounded-xl shadow-lg hover:scale-105 transition-transform cursor-pointer transform rotate-0 service-item`}
//               style={{
//                 minHeight: '200px',
//                 display: 'flex',
//                 flexDirection: 'column',
//                 justifyContent: 'center',
//                 border: '8px solid white',
//                 transition: 'all 0.5s ease-in-out'
//               }}
//             >
//               <h2 className="font-bold text-2xl text-white text-center mb-3">{service.name}</h2>
//               <p className="text-white text-center">{service.description}</p>
//             </div>
            
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default HeroSection;

"use client"
import Link from "next/link";
// import { LayoutGrid } from "./ui/layout-grid";
import React from 'react';
import { LayoutGrid } from "./ui/layout-grid";

function Hero() {
  return (
    <section className="hero pb-10 bg-[#EDEDED]">
      <style>{`
        
      `}</style>
      
      <div className="container  mb-12 h-fit mx-auto px-4">  
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-1/2  mb-10 lg:mb-0 flex flex-col mt-10 items-start px-4 sm:px-6 lg:px-12 bg-gradient-to-br rounded-3xl">
            {/* <p className="text-sm sm:text-md lg:text-lg font-semibold mb-4 uppercase text-green-700 text-left leading-tight">Simplified Living, Elevated Experiences</p> */}
            <h1 className="text-5xl  sm:text-4xl lg:text-7xl  font-bold mb-4 lg:mb-2  text-black text-left " style={{ fontFamily: 'Playfair Display, serif' }}> Create Unforgettable Events with Ease.</h1>
            <p className="text-sm  sm:text-md lg:text-xl  text-gray-400  mb-2 lg:mb-1 text-left lg:py-2">Explore our venue spaces, exclusive decor, professional photography, and catering services.</p>
            <div className="text-sm text-black  sm:text-md lg:text-xl  mt-3  text-left lg:py-2 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" viewBox="0 0 24 24" fill="none" stroke="#34C759" strokeWidth="2">
                <circle cx="12" cy="12" r="10" fill="#34C759" opacity="0.2" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
              </svg>
              Effortless Customization 
            </div>
            <div className="text-black  text-sm sm:text-md lg:text-xl text-left lg:py-2 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" viewBox="0 0 24 24" fill="none" stroke="#34C759" strokeWidth="2">
                <circle cx="12" cy="12" r="10" fill="#34C759" opacity="0.2" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
              </svg>
              Top Vendors Across India 
            </div>
            <div className="text-black  text-sm sm:text-md  lg:text-xl  text-left lg:py-2 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" viewBox="0 0 24 24" fill="none" stroke="#34C759" strokeWidth="2">
                <circle cx="12" cy="12" r="10" fill="#34C759" opacity="0.2" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
              </svg>
              Personalized Packages for Every Occasion 
            </div>
            <div className="flex flex-row mt-7  space-x-4">
              <Link href="/systems/services" className="inline-flex items-center justify-center px-3 sm:px-16 py-3 sm:py-6 border border-transparent lg:text-lg text-md sm:text-xl font-medium rounded-full shadow-md text-white bg-[#595050] hover:bg-gray-800 transition-all duration-300 transform hover:scale-105">
                View our Services
              </Link>
              <Link href="#download" className="inline-flex hover:border-green-500 items-center justify-center border-2 border-[#595050] rounded-full bg-transparent py-3 px-3 lg:px-8 text-black bg-white transition-all duration-200 ease-in-out transform hover:scale-105">
                <span className="flex flex-col items-start leading-none">
                  <p className="text-lg sm:text-xl font-bold">Download App</p>
                </span>
              </Link>
            </div>
            
          </div>
          
          <div className="lg:w-1/2 hidden  mt-8 lg:block ">
            <LayoutGridDemo />
          </div>
          <div className="w-fit  lg:hidden ">
            <video className="w-full rounded-md h-auto" autoPlay loop muted playsInline>
              <source src="/videos/wedding.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero;

function LayoutGridDemo() {
  return (
    <div className="xmd:h-[100%] xmd:w-full  h-[50vh] sm:h-[60vh] md:h-[80vh] lg:h-[70vh] mt-[2vh] w-[90%] sm:w-[85%] md:w-[80%] lg:w-[90%] mx-auto">
      <LayoutGrid cards={cards} />
    </div>
  );
}

const SkeletonOne = () => {
  return (
    <div>
      <p className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white">
        <a href="/services/chef" className="text-white hover:text-brand-secondary transition-colors" aria-label="Learn more about our chef services">
          Venue Spaces
        </a>
      </p>
      <p className="font-normal text-sm sm:text-base text-white"></p>
      <p className="font-normal text-xs sm:text-sm lg:text-base my-2 sm:my-4 max-w-lg text-neutral-200">
        Find the perfect venue for your event.
      </p>
    </div>
  );
};

const SkeletonTwo = () => {
  return (
    <div>
      <p className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white">
        <a href="/services/upcoming" className="text-white hover:text-brand-secondary transition-colors" aria-label="Learn about our upcoming services">
          Exclusive Decor
        </a>
      </p>
      <p className="font-normal text-sm sm:text-base text-white"></p>
      <p className="font-normal text-xs sm:text-sm lg:text-base my-2 sm:my-4 max-w-lg text-neutral-200">
       Make your event beautiful and unique.
      </p>
    </div>
  );
};

const SkeletonThree = () => {
  return (
    <div>
      <p className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white">
        <a href="/services" className="text-white hover:text-brand-secondary transition-colors" aria-label="View all our quality services">
          Catering
        </a>
      </p>
      <p className="font-normal text-sm sm:text-base text-white"></p>
      <p className="font-normal text-xs sm:text-sm lg:text-base my-2 sm:my-4 max-w-lg text-neutral-200">
        Delicious food for your guests.
      </p>
    </div>
  );
};

const SkeletonFour = () => {
  return (
    <div>
      <p className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white">
        <a href="/services/driver" className="text-white hover:text-brand-secondary transition-colors" aria-label="Learn more about our driver services">
          Photography
        </a>
      </p>
      <p className="font-normal text-sm sm:text-base text-white"></p>
      <p className="font-normal text-xs sm:text-sm lg:text-base my-2 sm:my-4 max-w-lg text-neutral-200">
          Our drivers are professional, reliable, and always ready to assist you with a smile.
      </p>
    </div>
  );
};

// const SkeletonFive = () => {
//   return (
//     <div>
//       <p className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white">
//         <a href="/services/driver" className="text-white hover:text-brand-secondary transition-colors" aria-label="Learn more about our driver services">
//           Photography
//         </a>
//       </p>
//       <p className="font-normal text-sm sm:text-base text-white"></p>
//       <p className="font-normal text-xs sm:text-sm lg:text-base my-2 sm:my-4 max-w-lg text-neutral-200">
//           Our drivers are professional, reliable, and always ready to assist you with a smile.
//       </p>
//     </div>
//   );
// };
// const SkeletonSix = () => {
//   return (
//     <div>
//       <p className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white">
//         <a href="/services/driver" className="text-white hover:text-brand-secondary transition-colors" aria-label="Learn more about our driver services">
//           Photography
//         </a>
//       </p>
//       <p className="font-normal text-sm sm:text-base text-white"></p>
//       <p className="font-normal text-xs sm:text-sm lg:text-base my-2 sm:my-4 max-w-lg text-neutral-200">
//           Our drivers are professional, reliable, and always ready to assist you with a smile.
//       </p>
//     </div>
//   );
// };

const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "md:col-span-2",
    // video: "/videos/ProChefClip.mp4",
    // image: "/images/venues.png",
    thumbnail: {
      src: "/images/venues.png",
      width: 800,
      height: 600,
      alt: ""
    }
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1",
    video: "",
    thumbnail: {
      src: "/images/decors.png",
      width: 800,
      height: 600,
      alt: "Coming Soon"
    },
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-1",
    // video: "/videos/AllMixMIniClip.mp4",
    thumbnail: {
      src: "/images/cateer.png",
      width: 800,
      height: 600,
      alt: ""
    }
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "md:col-span-2",
    // video: "/videos/ProDriverClip.mp4",
    thumbnail: {
      src: "/images/image.png",
      width: 800,
      height: 600,
      alt: ""
    }
  },
  // {
  //   id: 5,
  //   content: <SkeletonFive />,
  //   className: "md:col-span-2",
  //   // video: "/videos/ProDriverClip.mp4",
  //   thumbnail: {
  //     src: "/images/Makeup.png",
  //     width: 500,
  //     height: 600,
  //     alt: ""
  //   }
  // },
  // {
  //   id: 6,
  //   content: <SkeletonSix/>,
  //   className: "md:col-span-1",
  //   // video: "/videos/ProDriverClip.mp4",
  //   thumbnail: {
  //     src: "/images/Dj.png",
  //     width: 500,
  //     height: 600,
  //     alt: ""
  //   }
  // },
];