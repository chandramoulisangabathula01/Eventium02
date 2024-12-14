   // pages/index.tsx
   import SplashScreen from '@/components/SplashScreen';
import { useEffect, useState } from 'react';
//    import SplashScreen from '../components/SplashScreen';

   const Home = () => {
     const [loading, setLoading] = useState(true);

     useEffect(() => {
       const timer = setTimeout(() => {
         setLoading(false);
       }, 3000); // Show splash screen for 3 seconds

       return () => clearTimeout(timer);
     }, []);

     return (
       <div>
         {loading ? <SplashScreen /> : <div>Your main content here</div>}
       </div>
     );
   };

   export default Home;