"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function ToteBagClassicPage() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    { label: "Tampak Depan", view: "front" },
    { label: "Tampak Belakang", view: "back" },
    { label: "Tampak Samping", view: "side" },
  ]

  const specs = [
    { name: "Kesesuaian", value: "One Size" },
    { name: "Kain", value: "100% Kanvas katun berkualitas tinggi" },
    { name: "Struktur", value: "Jahit kuat dengan reinforced stitching" },
    { name: "Penyelesaian", value: "Finished edges dengan double handle" },
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
              Tote Bag Classic
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
              {/* Tote Bag Shape */}
              <g id={`view-${slides[currentSlide].view}`}>
                {currentSlide === 0 && (
                  <>
                    {/* Front View */}
                    <path
                      d="M 100 50 L 120 80 L 120 450 L 280 450 L 280 80 L 300 50"
                      fill="#f5f5f5"
                      stroke="#333"
                      strokeWidth="2"
                    />
                    {/* Handles */}
                    <path d="M 130 50 Q 130 20 200 20 Q 270 20 270 50" fill="none" stroke="#333" strokeWidth="2" />
                    {/* Design Detail */}
                    <text x="200" y="250" textAnchor="middle" fontSize="24" fontWeight="bold" fill="#999">
                      FRONT
                    </text>
                  </>
                )}

                {currentSlide === 1 && (
                  <>
                    {/* Back View */}
                    <path
                      d="M 100 50 L 120 80 L 120 450 L 280 450 L 280 80 L 300 50"
                      fill="#e8e8e8"
                      stroke="#333"
                      strokeWidth="2"
                    />
                    {/* Handles */}
                    <path d="M 130 50 Q 130 20 200 20 Q 270 20 270 50" fill="none" stroke="#333" strokeWidth="2" />
                    {/* Design Detail */}
                    <text x="200" y="250" textAnchor="middle" fontSize="24" fontWeight="bold" fill="#999">
                      BACK
                    </text>
                  </>
                )}

                {currentSlide === 2 && (
                  <>
                    {/* Side View */}
                    <path
                      d="M 150 80 L 160 100 L 160 450 L 240 450 L 240 100 L 250 80"
                      fill="#ececec"
                      stroke="#333"
                      strokeWidth="2"
                    />
                    {/* Handle */}
                    <path d="M 165 80 Q 165 30 200 30 Q 235 30 235 80" fill="none" stroke="#333" strokeWidth="2" />
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
            <h1 className="text-3xl font-bold">Tote Bag Classic</h1>
            {/* Bag Icon SVG */}
            <svg
              className="w-8 h-8 flex-shrink-0"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M7 2h10l2 4v2h2v2h-2v10H7V10H5V8h2V6L7 2m2 2v2h6V4H9m-2 8v8h10v-8H7z" />
            </svg>
          </div>

          {/* Description */}
          <p className="text-gray-600 font-light leading-relaxed">
            Tote bag klasik yang sempurna untuk penggunaan sehari-hari. Terbuat dari kanvas berkualitas tinggi dengan handle yang kuat dan nyaman. Desain minimalis yang timeless dengan kapasitas besar untuk membawa berbagai kebutuhan Anda.
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
              mulai Rp 150.000
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
