/* eslint-disable @typescript-eslint/no-unused-vars */
   // app/layout.tsx (or wherever your RootLayout is defined)
   "use client";

   import { Geist, Geist_Mono } from "next/font/google";
   import "./globals.css";
   import { useEffect, useState } from 'react';
   import Loading from '../components/SplashScreen'; // Adjust the path as necessary

   const geistSans = Geist({
     variable: "--font-geist-sans",
     subsets: ["latin"],
   });

   const geistMono = Geist_Mono({
     variable: "--font-geist-mono",
     subsets: ["latin"],
   });

   export default function RootLayout({
     children,
   }: Readonly<{
     children: React.ReactNode;
   }>) {
     const [loading, setLoading] = useState(true);

     useEffect(() => {
       const timer = setTimeout(() => {
         setLoading(false);
       }, 3000); // Show splash screen for 3 seconds

       return () => clearTimeout(timer);
     }, []);

     return (
       <html lang="en">
         <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
           {/* {loading ? <Loading /> : children} */}
           {children}
           
         </body>
       </html>
     );
   }