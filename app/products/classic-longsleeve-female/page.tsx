"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function ClassicLongsleeveFemalePage() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    { label: "Tampak Depan", view: "front" },
    { label: "Tampak Belakang", view: "back" },
    { label: "Tampak Samping", view: "side" },
  ]

  const specs = [
    { name: "Kesesuaian", value: "Pre-shrunk (0-3%)" },
    { name: "Kain", value: "Komposisi: 100% katun organik. Berat: 170g/m²" },
    { name: "Struktur", value: "Jahit halus dengan long sleeve fitted design" },
    { name: "Penyelesaian", value: "Ribbed collar dan cuff finishing" },
    { name: "Asal", value: "Diproduksi Portugal" },
  ]

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }

  return (
    <div className="min-h-screen bg-white">
      {/* HEADER */}
      <header className="border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between relative">
          {/* Logo */}
          <div className="text-2xl font-bold tracking-tight">
            SLASH<span className="font-bold">PRINT</span>
          </div>

          {/* Product Name & Customize - Center */}
          <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center gap-4">
            <div className="border border-gray-300 rounded-lg px-4 py-2 text-sm font-medium text-gray-700">
              Classic Longsleeve
            </div>
            <button className="text-sm font-semibold text-black hover:text-gray-700 transition-colors">
              Customize
            </button>
          </div>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <div className="grid grid-cols-2 gap-12 px-6 py-12 max-w-7xl mx-auto">
        {/* LEFT SIDE - PRODUCT IMAGE */}
        <div className="flex flex-col gap-8">
          {/* Image Container */}
          <div className="relative bg-gray-50 rounded-lg aspect-square flex items-center justify-center overflow-hidden">
            {/* SVG Placeholder for Product Image */}
            <svg
              className="w-full h-full p-12"
              viewBox="0 0 400 500"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Long Sleeve Shirt Shape */}
              <g id={`view-${slides[currentSlide].view}`}>
                {currentSlide === 0 && (
                  <>
                    {/* Front View - Long Sleeve */}
                    <path
                      d="M 110 90 L 95 125 L 90 200 L 85 400 L 315 400 L 310 200 L 305 125 L 290 90 Z"
                      fill="#f5f5f5"
                      stroke="#333"
                      strokeWidth="2"
                    />
                    {/* Long Sleeves */}
                    <path d="M 50 125 L 15 150 L 15 360 L 50 350" fill="#f5f5f5" stroke="#333" strokeWidth="2" />
                    <path d="M 350 125 L 385 150 L 385 360 L 350 350" fill="#f5f5f5" stroke="#333" strokeWidth="2" />
                    {/* Neckline */}
                    <circle cx="200" cy="92" r="22" fill="white" stroke="#333" strokeWidth="2" />
                    {/* Design Detail */}
                    <text x="200" y="250" textAnchor="middle" fontSize="24" fontWeight="bold" fill="#999">
                      FRONT
                    </text>
                  </>
                )}

                {currentSlide === 1 && (
                  <>
                    {/* Back View - Long Sleeve */}
                    <path
                      d="M 110 90 L 95 125 L 90 200 L 85 400 L 315 400 L 310 200 L 305 125 L 290 90 Z"
                      fill="#e8e8e8"
                      stroke="#333"
                      strokeWidth="2"
                    />
                    {/* Long Sleeves */}
                    <path d="M 50 125 L 15 150 L 15 360 L 50 350" fill="#e8e8e8" stroke="#333" strokeWidth="2" />
                    <path d="M 350 125 L 385 150 L 385 360 L 350 350" fill="#e8e8e8" stroke="#333" strokeWidth="2" />
                    {/* Neckline */}
                    <circle cx="200" cy="92" r="22" fill="white" stroke="#333" strokeWidth="2" />
                    {/* Design Detail */}
                    <text x="200" y="250" textAnchor="middle" fontSize="24" fontWeight="bold" fill="#999">
                      BACK
                    </text>
                  </>
                )}

                {currentSlide === 2 && (
                  <>
                    {/* Side View - Long Sleeve */}
                    <path
                      d="M 160 90 L 145 125 L 140 200 L 135 400 L 265 400 L 260 200 L 255 125 L 240 90 Z"
                      fill="#ececec"
                      stroke="#333"
                      strokeWidth="2"
                    />
                    {/* Long Sleeve */}
                    <path d="M 100 125 L 65 150 L 65 360 L 100 350" fill="#ececec" stroke="#333" strokeWidth="2" />
                    {/* Neckline */}
                    <circle cx="200" cy="92" r="18" fill="white" stroke="#333" strokeWidth="2" />
                    {/* Design Detail */}
                    <text x="200" y="250" textAnchor="middle" fontSize="24" fontWeight="bold" fill="#999">
                      SIDE
                    </text>
                  </>
                )}
              </g>
            </svg>
          </div>

          {/* Slide Indicator */}
          <div className="flex items-center justify-center gap-4">
            <button
              onClick={handlePrevSlide}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              aria-label="Previous view"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex gap-2">
              {slides.map((_, index) => (
                <div
                  key={index}
                  className={`h-2 rounded-full transition-all cursor-pointer ${
                    index === currentSlide ? "bg-black w-8" : "bg-gray-300 w-2"
                  }`}
                  onClick={() => setCurrentSlide(index)}
                />
              ))}
            </div>

            <button
              onClick={handleNextSlide}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              aria-label="Next view"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* View Label */}
          <div className="text-center text-sm text-gray-500">
            {slides[currentSlide].label}
          </div>
        </div>

        {/* RIGHT SIDE - PRODUCT DETAILS */}
        <div className="flex flex-col gap-8">
          {/* Product Title with Icon */}
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold">Classic Longsleeve</h1>
            {/* Long Sleeve Icon SVG */}
            <svg
              className="w-8 h-8 flex-shrink-0"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M16 2H8L6 6v3H2v2h2v11h16V11h2V9h-4V6L16 2zm-4 2v3h-4V4h4zm4 13H8v-9h8v9z" />
            </svg>
          </div>

          {/* Description */}
          <p className="text-gray-600 font-light leading-relaxed">
            Longsleeve klasik untuk wanita dengan potongan fitted yang elegan dan sempurna untuk cuaca dingin. Bahan katun organik berkualitas tinggi memberikan kenyamanan sepanjang hari. Desain sederhana namun sophisticated dengan ribbed collar dan cuff finishing.
          </p>

          {/* Product Specifications */}
          <div className="space-y-3">
            <h2 className="text-sm font-semibold text-black">Spesifikasi Produk</h2>
            <div className="space-y-2">
              {specs.map((spec, index) => (
                <div key={index} className="grid grid-cols-2 gap-4 pb-3 border-b border-gray-200 last:border-b-0">
                  <div className="text-sm font-medium text-gray-900">{spec.name}</div>
                  <div className="text-sm text-gray-600">{spec.value}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Price & Customize Button */}
          <div className="flex items-center justify-between pt-6 border-t border-gray-200">
            <div className="text-2xl font-bold border-b-2 border-black pb-1">
              mulai Rp 110.000
            </div>
            <button className="px-6 py-3 bg-black text-white font-semibold rounded-lg hover:bg-gray-900 transition-colors">
              Customize
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
