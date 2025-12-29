"use client"

import { useState } from "react"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"

interface ColorSelectorProps {
  colors: Array<{ name: string; hex: string }>
  selectedColor: string
  onColorSelect: (color: string) => void
}

export function ColorSelector({
  colors,
  selectedColor,
  onColorSelect,
}: ColorSelectorProps) {
  const [searchQuery, setSearchQuery] = useState("")

  const filteredColors = colors.filter((color) =>
    color.name.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="space-y-2">
      {/* Sub Header */}
      <h4 className="text-xs font-semibold text-gray-900">
        Pilih warna untuk kustomisasi
      </h4>

      {/* Search */}
      <div className="relative">
        <Search
          className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400"
          size={16}
        />
        <Input
          type="text"
          placeholder="Cari warna aku saja"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-8 py-1 text-xs border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
        />
      </div>

      {/* Color Grid - 2 Columns */}
      <div className="grid grid-cols-2 gap-3 pt-4 pb-44">
        {filteredColors.map((color) => (
          <button
            key={color.name}
            onClick={() => onColorSelect(color.name)}
            className={`flex items-center gap-2 transition-all ${
              selectedColor === color.name
                ? "opacity-100"
                : "opacity-75 hover:opacity-100"
            }`}
          >
            <div
              className={`w-5 h-5 rounded-full border-2 flex-shrink-0 ${
                selectedColor === color.name
                  ? "border-black"
                  : "border-gray-300"
              }`}
              style={{ backgroundColor: color.hex }}
            />
            <span className="text-xs font-medium text-gray-900 whitespace-nowrap">
              {color.name}
            </span>
          </button>
        ))}
      </div>
    </div>
  )
}
