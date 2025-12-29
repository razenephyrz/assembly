"use client"

import { useState } from "react"
import Link from "next/link"
import { ProductCanvas } from "@/components/customize/product-canvas"
import { CustomizeRightPanel } from "@/components/customize/customize-right-panel"

export default function CustomizePage() {
  const [selectedColor, setSelectedColor] = useState("True Black")
  const [selectedMaterial, setSelectedMaterial] = useState("Cotton Combed 32S Biosewashed")
  const [selectedSize, setSelectedSize] = useState("M")

  const colors = [
    { name: "True Black", hex: "#1A1A1A" },
    { name: "Indian Almond", hex: "#8B7355" },
    { name: "Buffalo Chip", hex: "#6B5D52" },
    { name: "Bright White", hex: "#F5F5F5" },
    { name: "Emerald", hex: "#2D7D5F" },
    { name: "Arch", hex: "#3D5C3D" },
    { name: "Deep Periwinkle", hex: "#CCBB99" },
    { name: "Oat Milk", hex: "#F4E8D0" },
  ]

  const materials = [
    { name: "Cotton Combed 32S Biosewashed", description: "Katun organik premium" },
    { name: "Cotton Jersey 100%", description: "Katun jersey berkualitas tinggi" },
    { name: "Polyester Blend", description: "Campuran polyester dan katun" },
  ]

  return (
    <div className="min-h-screen bg-gray-200 p-6">
      {/* Main Layout */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Left Column */}
          <div className="lg:col-span-2">
            {/* Header - Simple text, no container, no navbar */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-8">
                <Link href="/product/regular-t-shirt">
                  <div className="text-2xl font-bold tracking-tight">
                    SLASH<span className="font-bold">PRINT</span>
                  </div>
                </Link>
                
                <div className="text-center">
                  <span className="text-sm text-gray-600">Oversize T-Shirt 200</span>
                  <span className="text-sm text-gray-400"> / </span>
                  <span className="text-sm text-gray-900 font-semibold">Kustomisasi</span>
                </div>

                <div className="w-32" />
              </div>
            </div>

            {/* Product Canvas - 2/3 width, direct SVG no container */}
            <div className="flex items-center justify-center">
              <ProductCanvas
                selectedColor={selectedColor}
                selectedMaterial={selectedMaterial}
                selectedSize={selectedSize}
                productName="Oversize T-Shirt"
              />
            </div>
          </div>

          {/* Right Column - Sejajar dengan header atas */}
          <div>
            <CustomizeRightPanel
              colors={colors}
              materials={materials}
              selectedColor={selectedColor}
              selectedMaterial={selectedMaterial}
              onColorSelect={setSelectedColor}
              onMaterialSelect={setSelectedMaterial}
              onDetailClick={() => (window.location.href = "/customize/detail")}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
