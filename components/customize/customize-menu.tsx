"use client"

import { useState } from "react"
import { ChevronRight, Plus, Info } from "lucide-react"
import { Button } from "@/components/ui/button"

interface CustomizeMenuProps {
  menuLabel: string
  selectedValue: string
  onExpandClick: () => void
  onInfoClick: () => void
}

export function CustomizeMenu({
  menuLabel,
  selectedValue,
  onExpandClick,
  onInfoClick,
}: CustomizeMenuProps) {
  return (
    <div className="w-full bg-white rounded-xl shadow-md border border-gray-200 p-4 flex items-center justify-between hover:shadow-lg transition-shadow">
      {/* Left: Menu Label */}
      <div className="flex items-center gap-3">
        <span className="text-gray-600 text-sm font-medium">Menu:</span>
        <span className="text-lg font-semibold text-gray-900">{menuLabel}</span>
        <span className="text-gray-500 text-sm">({selectedValue})</span>
      </div>

      {/* Right: Action Buttons */}
      <div className="flex items-center gap-2">
        {/* Expand/Options Button */}
        <Button
          onClick={onExpandClick}
          size="sm"
          className="rounded-full w-10 h-10 p-0 bg-blue-500 hover:bg-blue-600 text-white flex items-center justify-center transition-colors"
          title="Buka opsi kustomisasi"
        >
          <Plus size={20} />
        </Button>

        {/* Info Button */}
        <Button
          onClick={onInfoClick}
          size="sm"
          className="rounded-full w-10 h-10 p-0 bg-gray-300 hover:bg-gray-400 text-gray-900 flex items-center justify-center transition-colors"
          title="Tampilkan informasi detail"
        >
          <Info size={20} />
        </Button>
      </div>
    </div>
  )
}
