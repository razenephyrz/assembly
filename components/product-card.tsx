"use client"

import { useState } from "react"

interface ProductCardProps {
  name: string
  price: string
  imageDefault: string
  imageWithModel: string
  bgColor?: string
}

export function ProductCard({ name, price, imageDefault, imageWithModel, bgColor = "var(--color-almond-cream-50)" }: ProductCardProps) {
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
      <div className="overflow-hidden rounded-lg bg-white shadow-md transition-shadow duration-200 hover:shadow-lg">
        {/* Image Container */}
        <div className="relative w-full" style={{ backgroundColor: bgColor }}>
          {/* Price Badge - Top Right */}
          <div 
            className="absolute right-4 top-4 z-10 rounded-md px-3 py-1.5 bg-white"
          >
            <p className="text-xs font-bold" style={{ color: "var(--color-jet-black-950)" }}>
              {price}
            </p>
          </div>

          {/* Product Name Badge - Top Left */}
          <div 
            className="absolute left-4 top-4 z-10 rounded-md px-3 py-1.5 bg-white"
          >
            <p className="text-xs font-bold line-clamp-1" style={{ color: "var(--color-jet-black-950)" }}>
              {name}
            </p>
          </div>

          {/* Product Image */}
          <div className="overflow-hidden" style={{ backgroundColor: bgColor, aspectRatio: "9/16" }}>
            <img
              src={isHovered ? imageWithModel : imageDefault}
              alt={name}
              className="h-full w-full object-contain p-6 transition-opacity duration-300"
            />
          </div>

          {/* Action Buttons - On Hover */}
          {isHovered && (
            <div 
              className="absolute bottom-4 left-0 right-0 flex justify-between gap-3 px-4 animate-in fade-in duration-300"
              style={{
                animation: "fadeIn 0.3s ease-in forwards",
              }}
            >
              <style>{`
                @keyframes fadeIn {
                  from {
                    opacity: 0.7;
                  }
                  to {
                    opacity: 1;
                  }
                }
              `}</style>
              <button 
                className="flex-1 rounded-md px-3 py-2 text-xs font-bold transition-all duration-200"
                style={{
                  backgroundColor: "white",
                  color: "var(--color-jet-black-950)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.15)"
                  e.currentTarget.style.transform = "translateY(-2px)"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = "none"
                  e.currentTarget.style.transform = "translateY(0)"
                }}
              >
                See Details
              </button>
              <button 
                className="flex-1 rounded-md px-3 py-2 text-xs font-bold transition-all duration-200"
                style={{
                  backgroundColor: "white",
                  color: "var(--color-jet-black-950)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.15)"
                  e.currentTarget.style.transform = "translateY(-2px)"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = "none"
                  e.currentTarget.style.transform = "translateY(0)"
                }}
              >
                Customize
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
