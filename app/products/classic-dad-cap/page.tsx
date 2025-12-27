"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function ClassicDadCapPage() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    { label: "Tampak Depan", view: "front" },
    { label: "Tampak Belakang", view: "back" },
    { label: "Tampak Samping", view: "side" },
  ]

  const specs = [
    { name: "Kesesuaian", value: "One Size Fits All" },
    { name: "Kain", value: "100% Katun organik dengan topi premium" },
    { name: "Struktur", value: "Constructed dengan 6-panel design" },
    { name: "Penyelesaian", value: "Embroidered closure dengan curved visor" },
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
              Classic Dad Cap
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
              {/* Dad Cap Shape */}
              <g id={`view-${slides[currentSlide].view}`}>
                {currentSlide === 0 && (
                  <>
                    {/* Front View */}
                    <ellipse cx="200" cy="150" rx="120" ry="60" fill="#f5f5f5" stroke="#333" strokeWidth="2" />
                    <path
                      d="M 200 180 Q 180 200 160 220 L 160 280 Q 180 300 200 310 Q 220 300 240 280 L 240 220 Q 220 200 200 180"
                      fill="#f5f5f5"
                      stroke="#333"
                      strokeWidth="2"
                    />
                    {/* Visor */}
                    <path d="M 100 180 L 80 200 L 320 200 L 300 180" fill="#e0e0e0" stroke="#333" strokeWidth="2" />
                    {/* Design Detail */}
                    <text x="200" y="250" textAnchor="middle" fontSize="20" fontWeight="bold" fill="#999">
                      FRONT
                    </text>
                  </>
                )}

                {currentSlide === 1 && (
                  <>
                    {/* Back View */}
                    <ellipse cx="200" cy="150" rx="120" ry="60" fill="#e8e8e8" stroke="#333" strokeWidth="2" />
                    <path
                      d="M 200 180 Q 180 200 160 220 L 160 280 Q 180 300 200 310 Q 220 300 240 280 L 240 220 Q 220 200 200 180"
                      fill="#e8e8e8"
                      stroke="#333"
                      strokeWidth="2"
                    />
                    {/* Back strap */}
                    <path d="M 180 310 L 180 330 L 220 330 L 220 310" fill="none" stroke="#333" strokeWidth="2" />
                    {/* Design Detail */}
                    <text x="200" y="250" textAnchor="middle" fontSize="20" fontWeight="bold" fill="#999">
                      BACK
                    </text>
                  </>
                )}

                {currentSlide === 2 && (
                  <>
                    {/* Side View */}
                    <ellipse cx="200" cy="150" rx="60" ry="50" fill="#ececec" stroke="#333" strokeWidth="2" />
                    <path
                      d="M 200 180 Q 190 200 180 220 L 180 280 Q 190 300 200 310 Q 210 300 220 280 L 220 220 Q 210 200 200 180"
                      fill="#ececec"
                      stroke="#333"
                      strokeWidth="2"
                    />
                    {/* Visor Side */}
                    <path d="M 140 180 L 120 200 L 180 200 L 160 180" fill="#d0d0d0" stroke="#333" strokeWidth="2" />
                    {/* Design Detail */}
                    <text x="200" y="250" textAnchor="middle" fontSize="20" fontWeight="bold" fill="#999">
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
            <h1 className="text-3xl font-bold">Classic Dad Cap</h1>
            {/* Cap Icon SVG */}
            <svg
              className="w-8 h-8 flex-shrink-0"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M2 12h20v2H2zm1-3h18v3H3zm8-6h2v2h-2zm-6 0h2v2H5zm12 0h2v2h-2z" />
            </svg>
          </div>

          {/* Description */}
          <p className="text-gray-600 font-light leading-relaxed">
            Dad cap klasik yang sempurna untuk gaya casual sehari-hari. Dengan desain 6-panel yang nyaman dan visor yang melengkung, topi ini cocok untuk berbagai aktivitas outdoor. Bahan katun organik berkualitas tinggi memberikan kenyamanan maksimal.
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
              mulai Rp 85.000
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
