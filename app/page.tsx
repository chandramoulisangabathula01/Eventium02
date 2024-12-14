'use client'

import OurServices from '@/components/OurServices';
import HeroSection from '@/components/HeroSection';
import Navbar from '@/components/navbar';
import VenueSection from '@/components/VenueSection';
import Photography from '@/components/photography';
import Footer from '@/components/footer';
// import VideoSection from '@/components/video';
import TestimonialSlider from '@/components/testimonials';
import { Facebook, Instagram, Twitter } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
// import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Home() {
  // const router = useRouter();
  const [selectedFaq, setSelectedFaq] = useState<number | null>(null);
  // const controls = motion.useAnimation();

  // const handleValueChange = (value: string) => {
  //   router.push(`/${value}`);
  // };

  const fadeInUp = {
    hidden: { opacity: 1, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const staggerChildren = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    < >
      <Navbar />  
      <HeroSection />
      <OurServices />
      <VenueSection/>
      <Photography/>  
      {/* <VideoSection/> */}
      <TestimonialSlider/>

      {/* FAQ Section */}
      <motion.section 
        initial="hidden"
        // animate={controls}
        variants={staggerChildren}
        className="py-20 bg-[#f4f2ef]"
      >
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.h2 
            variants={fadeInUp}
            className="font-[Cinzel] text-4xl font-bold mb-12 text-center text-black"
          >
            Frequently Asked Questions
          </motion.h2>
          <div className="space-y-6">
            {[
              { 
                question: "How far in advance should I book?",
                answer: "We recommend booking at least 6-12 months in advance for premium dates and venues. This ensures you get your preferred choices and allows adequate time for planning."
              },
              { 
                question: "What's included in your packages?",
                answer: "Our packages are customizable but typically include venue selection, decor, catering, photography, and event coordination. The specific inclusions vary by package level."
              },
              { 
                question: "Can you accommodate destination weddings?",
                answer: "Yes! We specialize in organizing destination weddings across India's most prestigious venues and can handle all logistics including guest accommodations."
              },
              { 
                question: "How do you handle cultural traditions?",
                answer: "Our team is well-versed in various cultural wedding traditions and ceremonies. We work closely with you to ensure all customs are properly incorporated and respected."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="border border-black rounded-lg overflow-hidden bg-[#FBF9F6]"
              >
                <motion.button
                  className="w-full px-6 py-4 text-left hover:bg-[#afb4a5] transition-colors duration-200 flex justify-between items-center"
                  onClick={() => setSelectedFaq(selectedFaq === index ? null : index)}
                >
                  <span className="font-[Cinzel] font-bold text-lg text-black">{faq.question}</span>
                  <motion.span
                    animate={{ rotate: selectedFaq === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    ▼
                  </motion.span>
                </motion.button>
                <motion.div
                  initial={false}
                  animate={{
                    height: selectedFaq === index ? "auto" : 0,
                    opacity: selectedFaq === index ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <p className="px-6 py-4 text-black font-[Rajdhani]">{faq.answer}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <section className="py-20 bg-[#f4f2ef] relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="font-[Cinzel] text-5xl font-bold mb-4 text-center text-black">
            Connect With Us
          </h2>
          <p className="text-center text-gray-600 mb-12 font-[Rajdhani] text-xl">
            Let us help create your perfect celebration
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-gray-200">
              <form className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-[Cinzel] font-bold text-gray-700">Your Name</label>
                  <Input 
                    type="text" 
                    placeholder="Enter your name" 
                    className="bg-white/50 border-2 border-gray-300 focus:border-black transition-colors rounded-lg p-3" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-[Cinzel] font-bold text-gray-700">Your Email</label>
                  <Input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="bg-white/50 border-2 border-gray-300 focus:border-black transition-colors rounded-lg p-3" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-[Cinzel] font-bold text-gray-700">Your Message</label>
                  <Textarea 
                    placeholder="Tell us about your dream celebration" 
                    className="bg-white/50 border-2 border-gray-300 focus:border-black transition-colors rounded-lg p-3 min-h-[120px]" 
                  />
                </div>
                <Button className="w-full bg-black hover:bg-gray-800 text-white font-[Cinzel] py-3 rounded-lg transition-all duration-300 transform hover:scale-105">
                  Begin Your Journey
                </Button>
              </form>
            </div>
            <div className="flex flex-col justify-center items-center space-y-8">
              <div className="text-center space-y-4">
                <h3 className="font-[Cinzel] text-3xl font-bold text-black">Follow Our Royal Journey</h3>
                <p className="font-[Rajdhani] text-gray-600">Stay updated with our latest events and celebrations</p>
              </div>
              <div className="flex space-x-6">
                <Facebook className="w-10 h-10 text-black hover:text-[#AFB4A5] cursor-pointer transition-colors duration-300" />
                <Instagram className="w-10 h-10 text-black hover:text-[#AFB4A5] cursor-pointer transition-colors duration-300" />
                <Twitter className="w-10 h-10 text-black hover:text-[#AFB4A5] cursor-pointer transition-colors duration-300" />
              </div>
              <div className="mt-8 p-6 bg-white/80 backdrop-blur-sm rounded-xl border border-gray-200 text-center">
                <p className="font-[Cinzel] text-xl font-bold mb-2">Contact Direct</p>
                <p className="font-[Rajdhani]">+91 98765 43210</p>
                <p className="font-[Rajdhani]">celebrations@royalindian.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
}