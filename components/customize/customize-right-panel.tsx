"use client"

import { useState } from "react"
import { Plus, Info } from "lucide-react"
import { ColorSelector } from "@/components/customize/color-selector"
import { MaterialDropdown } from "@/components/customize/material-dropdown"

interface CustomizeRightPanelProps {
  colors: Array<{ name: string; hex: string }>
  materials: Array<{ name: string; description: string }>
  selectedColor: string
  selectedMaterial: string
  onColorSelect: (color: string) => void
  onMaterialSelect: (material: string) => void
  onDetailClick: () => void
}

export function CustomizeRightPanel({
  colors,
  materials,
  selectedColor,
  selectedMaterial,
  onColorSelect,
  onMaterialSelect,
  onDetailClick,
}: CustomizeRightPanelProps) {
  const [isExpanded, setIsExpanded] = useState(true)

  return (
    <div className="space-y-4">
      {/* Bahan & Warna Section - Single Container */}
      <div className="bg-white rounded-2xl p-5 border border-gray-200">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-bold text-gray-900 text-sm">Bahan & Warna</h3>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="rounded-full w-6 h-6 bg-black text-white hover:bg-gray-800 transition-colors flex items-center justify-center shrink-0"
              title="Expand options"
            >
              <Plus size={14} />
            </button>
            <button
              onClick={onDetailClick}
              className="rounded-full w-6 h-6 bg-gray-300 text-gray-700 hover:bg-gray-400 transition-colors flex items-center justify-center shrink-0"
              title="Info"
            >
              <Info size={14} />
            </button>
          </div>
        </div>

        {/* Expanded Content */}
        {isExpanded && (
          <div className="space-y-3">
            {/* Material Dropdown */}
            <MaterialDropdown
              materials={materials}
              selectedMaterial={selectedMaterial}
              onMaterialSelect={onMaterialSelect}
            />

            {/* Color Selector */}
            <ColorSelector
              colors={colors}
              selectedColor={selectedColor}
              onColorSelect={onColorSelect}
            />
          </div>
        )}
      </div>

      {/* Desain Section */}
      <div className="bg-white rounded-2xl p-5 border border-gray-200">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-bold text-gray-900 text-sm">Desain</h3>
          <div className="flex items-center gap-2">
            <button className="rounded-full w-6 h-6 bg-black text-white hover:bg-gray-800 transition-colors flex items-center justify-center">
              <Plus size={14} />
            </button>
            <button className="rounded-full w-6 h-6 bg-gray-300 text-gray-700 hover:bg-gray-400 transition-colors flex items-center justify-center">
              <Info size={14} />
            </button>
          </div>
        </div>
        <div className="text-xs text-gray-600">Pilih desain untuk kustomisasi</div>
      </div>

      {/* Label Leher Section */}
      <div className="bg-white rounded-2xl p-5 border border-gray-200">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-bold text-gray-900 text-sm">Label Leher</h3>
          <div className="flex items-center gap-2">
            <button className="rounded-full w-6 h-6 bg-black text-white hover:bg-gray-800 transition-colors flex items-center justify-center">
              <Plus size={14} />
            </button>
            <button className="rounded-full w-6 h-6 bg-gray-300 text-gray-700 hover:bg-gray-400 transition-colors flex items-center justify-center">
              <Info size={14} />
            </button>
          </div>
        </div>
        <div className="text-xs text-gray-600">Pilih label untuk kustomisasi</div>
      </div>

      {/* Quantity, Stock, Shipping */}
      <div className="grid grid-cols-3 gap-2 bg-white p-3 rounded-2xl border border-gray-200">
        <div>
          <label className="text-xs font-semibold text-gray-700">Jumlah</label>
          <input
            type="number"
            min="1"
            defaultValue={1}
            className="mt-1 w-full text-center py-1 border border-gray-300 rounded-lg text-xs"
          />
        </div>
        <div>
          <label className="text-xs font-semibold text-gray-700">Saham</label>
          <input
            type="text"
            placeholder="Rp"
            value="138000"
            readOnly
            className="mt-1 w-full text-center py-1 bg-gray-50 border border-gray-300 rounded-lg text-xs"
          />
        </div>
        <div>
          <label className="text-xs font-semibold text-gray-700">Pengiriman</label>
          <input
            type="text"
            placeholder="Rp"
            value="20000"
            readOnly
            className="mt-1 w-full text-center py-1 bg-gray-50 border border-gray-300 rounded-lg text-xs"
          />
        </div>
      </div>

      {/* Action Button */}
      <button className="w-full bg-black text-white hover:bg-gray-900 font-semibold py-2 rounded-2xl text-sm transition-colors">
        Konfirmasi perubahan & review
      </button>
    </div>
  )
}
