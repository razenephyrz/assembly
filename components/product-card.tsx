"use client"

import { useState } from "react"
import Link from "next/link"

interface ProductCardProps {
  name: string
  price: string
  imageDefault: string
  imageWithModel: string
  bgColor?: string
  href: string
}

export function ProductCard({
  name,
  price,
  imageDefault,
  imageWithModel,
  bgColor = "var(--color-almond-cream-50)",
  href,
}: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="group cursor-pointer transition-transform duration-200"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        transform: isHovered ? "translateY(-4px)" : "translateY(0)",
      }}
    >
      <div
        className={`
          relative
          rounded-lg
          overflow-hidden
          transition-all
          duration-300
          ${
            isHovered
              ? "shadow-2xl ring-1 ring-black/10 bg-black/5"
              : "shadow-md hover:shadow-lg"
          }
        `}
        style={{ backgroundColor: bgColor }}
      >
        {/* IMAGE + OVERLAY */}
        <div className="relative w-full">
          {/* Price */}
          <div className="absolute right-4 top-4 z-10">
            <p className="text-xs font-bold text-black underline">
              {price}
            </p>
          </div>

          {/* Name */}
          <div className="absolute left-4 top-4 z-10 max-w-[70%]">
            <p className="text-xs font-bold line-clamp-1 text-black">
              {name}
            </p>
          </div>

          {/* IMAGE CONTAINER (HEIGHT LOCKED) */}
          <div className="bg-white min-h-[420px] flex items-center justify-center overflow-hidden">
            <img
              src={isHovered ? imageWithModel : imageDefault}
              alt={name}
              className={`
                w-full
                h-auto
                max-h-[400px]
                object-contain
                p-4
                transition-all
                duration-300
                ${
                  isHovered
                    ? "scale-[1.02] opacity-95"
                    : "scale-100 opacity-100"
                }
              `}
            />
          </div>

          {/* ACTION BUTTONS */}
          <div
            className={`
              absolute
              bottom-4
              left-0
              right-0
              z-10
              px-4
              transition-all
              duration-300
              ${
                isHovered
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-2 pointer-events-none"
              }
            `}
          >
            <div className="flex gap-3">
<Link
              href={href}
              className="
                flex-1
                rounded-md
                bg-white
                px-3
                py-2
                text-xs
                font-bold
                text-black
                transition-all
                duration-200
                hover:-translate-y-0.5
                hover:shadow-md
                flex items-center justify-center
              "
            >
              See Details
            </Link>

              <button
                className="
                  flex-1
                  rounded-md
                  bg-black
                  px-3
                  py-2
                  text-xs
                  font-bold
                  text-white
                  transition-all
                  duration-200
                  hover:-translate-y-0.5
                  hover:shadow-md
                "
              >
                Customize
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
