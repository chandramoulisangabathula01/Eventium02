/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import { Button } from "@/components/ui/button"
import { StudioCarousel } from "./photography/studio-carousel"
// import { StudioCarousel } from "@/components/studio-carousel"

export default function Photography() {
  return (
    <div className="min-h-screen bg-gray-50">
    <div className="relative h-[70%]">
      <div className="absolute inset-0 bg-gradient-to-r from-white/90 to-white/20">
        <div className="container mx-auto px-4 py-12 sm:py-20">
          <div className="max-w-full sm:max-w-lg">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
              Wedding photographers
            </h1>
            <p className="mt-4 text-base sm:text-lg text-gray-600">
              Discover the top photographers near you who will immortalise your wedding's most precious moments.
            </p>
            <Button className="mt-6 bg-red-500 hover:bg-red-600">
              Find photographers
            </Button>
          </div>
        </div>
      </div>
      
    </div>
    <img
        src="/images/placeholder.jpg?height=400&width=1200"
        alt="Wedding celebration"
        className="h-[300px] sm:h-[400px] w-full object-cover"
      />
    <div className="container mx-auto px-4 w-[70%] py-12">
      <StudioCarousel />
    </div>
  </div>
  )
}

