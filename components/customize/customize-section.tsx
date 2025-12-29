"use client"

import { useState } from "react"
import { ChevronDown, Plus, Info } from "lucide-react"

interface CustomizeSectionProps {
  title: string
  selectedValue: string
  onExpandClick: () => void
  onInfoClick: () => void
  isExpanded?: boolean
  children?: React.ReactNode
}

export function CustomizeSection({
  title,
  selectedValue,
  onExpandClick,
  onInfoClick,
  isExpanded = false,
  children,
}: CustomizeSectionProps) {
  return (
    <div className="space-y-2">
      {/* Header */}
      <div className="bg-white rounded-lg p-4 flex items-center justify-between border border-gray-200 hover:shadow-md transition-shadow">
        <div className="flex-1">
          <h3 className="font-bold text-gray-900">{title}</h3>
          <p className="text-sm text-gray-600">{selectedValue}</p>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2 ml-4">
          <button
            onClick={onExpandClick}
            className="rounded-full w-8 h-8 bg-black text-white hover:bg-gray-800 transition-colors flex items-center justify-center flex-shrink-0"
            title="Expand options"
          >
            <Plus size={18} />
          </button>
          <button
            onClick={onInfoClick}
            className="rounded-full w-8 h-8 bg-gray-300 text-gray-700 hover:bg-gray-400 transition-colors flex items-center justify-center flex-shrink-0"
            title="Info"
          >
            <Info size={18} />
          </button>
        </div>
      </div>

      {/* Expanded Content */}
      {isExpanded && children && <div className="space-y-3">{children}</div>}
    </div>
  )
}
