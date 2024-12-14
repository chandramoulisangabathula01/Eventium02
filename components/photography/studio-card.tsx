/* eslint-disable @next/next/no-img-element */
import { Heart } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

interface StudioCardProps {
  name: string
  rating: number
  reviews: number
  location: string
  price: number
  promotions: Array<{
    discount: number
  }>
  imageUrl: string
}

export function StudioCard({
  name,
  rating,
  reviews,
  location,
  price,
  promotions,
  imageUrl,
}: StudioCardProps) {
  const formattedPrice = price.toLocaleString('en-IN', { style: 'currency', currency: 'INR' });

  return (
    <Card className="h-[400px]">
      <div className="relative">
        <img
          src={imageUrl}
          alt={name}
          className="h-[200px] w-full object-cover"
        />
        <button className="absolute right-2 top-2 rounded-full bg-white p-1.5 text-gray-600 hover:text-red-500">
          <Heart className="h-5 w-5" />
        </button>
      </div>
      <CardContent className="p-4">
        <h3 className="font-semibold my-3 text-black">{name}</h3>
        <div className="mt-1 flex items-center gap-1">
          <div className="flex  text-yellow-400">
            {"★".repeat(Math.floor(rating))}
          </div>
          <span className="text-sm text-gray-600">
            {rating} ({reviews})
          </span>
          <span className="text-sm text-gray-600">· {location}</span>
        </div>
        <div className="mt-2 flex items-center gap-2">
          <div className="flex items-center gap-1">
            <span className="text-sm text-gray-600 font-medium">From {formattedPrice}</span>
          </div>
          {promotions.map((promo, index) => (
            <span
              key={index}
              className="rounded bg-red-100 px-1.5 py-0.5 text-xs font-medium text-red-600"
            >
              -{promo.discount}%
            </span>
          ))}
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button className="w-full bg-red-500 hover:bg-red-600">
          REQUEST PRICING
        </Button>
      </CardFooter>
    </Card>
  )
}

