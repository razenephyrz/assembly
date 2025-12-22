"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

interface FeaturedProductCardProps {
  name: string
  price: string
  imageQuery: string
}

export function FeaturedProductCard({ name, price, imageQuery }: FeaturedProductCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="group cursor-pointer transition-all duration-200"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        transform: isHovered ? "translateY(-4px)" : "translateY(0)",
      }}
    >
      <div className="relative overflow-hidden rounded-lg bg-card shadow-md transition-shadow duration-200 hover:shadow-lg">
        {/* Badge */}
        <div className="absolute left-3 top-3 z-10 rounded-md bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
          {name}
        </div>

        {/* Image Container */}
        <div className="relative aspect-square bg-muted/30 p-8">
          <img
            src={`/.jpg?height=400&width=400&query=${encodeURIComponent(imageQuery)}`}
            alt={name}
            className="h-full w-full object-contain"
          />
        </div>

        {/* Content */}
        <div className="p-4">
          <h3 className="text-base font-medium text-foreground">{name}</h3>
          <p className="mt-1 text-sm text-muted-foreground">{price}</p>

          {/* Action Buttons */}
          <div className="mt-4 flex gap-2">
            <Button
              variant="outline"
              size="sm"
              className="flex-1 bg-transparent"
              onClick={(e) => {
                e.stopPropagation()
                console.log("[v0] Lihat detail clicked")
              }}
            >
              Lihat detail
            </Button>
            <Button
              size="sm"
              className="flex-1"
              onClick={(e) => {
                e.stopPropagation()
                console.log("[v0] Kustomisasi clicked")
              }}
            >
              Kustomisasi
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
