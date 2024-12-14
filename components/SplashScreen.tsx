  //  // components/SplashScreen.tsx
  //  import { motion } from 'framer-motion';

  //  const SplashScreen = () => {
  //    return (
  //      <div className="fixed inset-0 flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-500">
  //        <motion.img
  //          src="/logo.png" // Replace with your logo path
  //          alt="Logo"
  //          className="w-1/2"
  //          initial={{ opacity: 0 }}
  //          animate={{ opacity: 1 }}
  //          exit={{ opacity: 0 }}
  //          transition={{ duration: 2 }}
  //        />
  //        {/* Add background animation here */}
  //      </div>
  //    );
  //  };

  //  export default SplashScreen;


/* eslint-disable react/jsx-no-undef */



"use client"; // Mark this file as a Client Component

import { useState, useEffect } from 'react';

const Loading = () => {
  const [text, setText] = useState('');
  const fullText = 'Eventium';

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.substring(0, index));
      index++;
      if (index > fullText.length) {
        index = 0;
      }
    }, 200);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-center items-center h-screen bg-white">
      <div className="text-6xl font-bold text-black relative">
        {text}
        <span className="absolute -right-2 top-0 h-full w-1 bg-white animate-blink"></span>
      </div>
      <style jsx>{`
        @keyframes blink {
          0%, 100% { opacity: 0; }
          50% { opacity: 1; }
        }
        .animate-blink {
          animation: blink 0.7s infinite;
        }
      `}</style>
    </div>
  );
};

export default Loading;
