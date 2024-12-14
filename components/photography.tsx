/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import StudioCarousel from "./photography/studio-carousel"

export default function Photography() {
  return (
    <div className="min-h-screen bg-gray-50">
      <h2 className="text-4xl font-bold text-black text-center py-8 mb-4 md:text-5xl">Explore Our Venues</h2>
      <section className="relative container mx-auto px-4 py-4 md:pb-12">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="bg-white text-black shadow-md p-6 w-full md:w-[80%] rounded-3xl md:translate-x-48 md:z-10 space-y-4">
            <h2 className="text-xl md:text-2xl font-bold">
              Find your wedding venue
            </h2>
            <p className="text-sm md:text-md opacity-90">
              Search through a vast selection of venues to find the place that perfectly matches your wedding vision.
            </p>
          </div>
          <div className="hidden md:flex relative items-center justify-center md:-translate-x-20 h-full w-full">
            <img
              src="/images/venues.avif"
              alt="Decorated outdoor wedding venue with floral arrangements"
              className="object-cover rounded-3xl"
            />
          </div>
        </div>
      </section>

      <div className="mt-12">
        <StudioCarousel />
      </div>
    </div>
  )
}
