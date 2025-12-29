"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

interface MaterialDropdownProps {
  materials: Array<{ name: string; description: string }>
  selectedMaterial: string
  onMaterialSelect: (material: string) => void
}

export function MaterialDropdown({
  materials,
  selectedMaterial,
  onMaterialSelect,
}: MaterialDropdownProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-2 bg-white border border-gray-300 rounded-lg hover:border-gray-400 transition-colors text-left text-sm"
      >
        <div>
          <p className="text-xs font-medium text-gray-900 truncate">{selectedMaterial}</p>
        </div>
        <ChevronDown
          size={16}
          className={`shrink-0 transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-300 rounded-lg shadow-lg z-10">
          {materials.map((material) => (
            <button
              key={material.name}
              onClick={() => {
                onMaterialSelect(material.name)
                setIsOpen(false)
              }}
              className={`w-full text-left px-3 py-2 hover:bg-gray-50 transition-colors border-b last:border-b-0 ${
                selectedMaterial === material.name ? "bg-blue-50" : ""
              }`}
            >
              <p className="text-xs font-medium text-gray-900">{material.name}</p>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
