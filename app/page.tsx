/* eslint-disable @typescript-eslint/no-unused-vars */
   // app/page.tsx (or wherever your Home component is defined)
  //  import HeroSection from '@/components/HeroSection';
import OurServices from '@/components/OurServices';
// import { metadata } from './metadata'; // Import metadata if needed
import HeroSection from '@/components/HeroSection';
import Navbar from '@/components/navbar';
import VenueSection from '@/components/VenueSection';
import Photography from '@/components/photography';

   export default function Home() {
     return (
       <>
         {/* Your main content here */}
         {/* <h1>Welcome to the Event Services Platform</h1> */}
         {/* Add more content as needed */}
        <Navbar />  
         <HeroSection />
         <OurServices />
           <VenueSection/>
           <Photography/>
       </>
     );
   }