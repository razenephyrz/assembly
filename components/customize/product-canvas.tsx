"use client"

import { useState, useMemo } from "react"
import Image from "next/image"

interface ProductCanvasProps {
  selectedColor: string
  selectedMaterial: string
  selectedSize: string
  productName: string
}

export function ProductCanvas({
  selectedColor,
  selectedMaterial,
  selectedSize,
  productName,
}: ProductCanvasProps) {
  // Data warna dan kode hex mereka
  const colorMap: Record<string, string> = {
    "True Black": "#1A1A1A",
    "Indian Almond": "#8B7355",
    "Buffalo Chip": "#6B5D52",
    "Bright White": "#F5F5F5",
    "Emerald": "#2D7D5F",
    "Arch": "#3D5C3D",
    "Deep Periwinkle": "#CCBB99",
    "Oat Milk": "#F4E8D0",
    "Hitam": "#000000",
    "Putih": "#FFFFFF",
    "Abu-abu": "#808080",
    "Merah": "#EF4444",
    "Biru": "#3B82F6",
    "Hijau": "#10B981",
    "Kuning": "#FBBF24",
    "Ungu": "#8B5CF6",
    "Pink": "#EC4899",
    "Orange": "#F97316",
  }

  const materialMap: Record<string, string> = {
    "Cotton Combed 32S Biosewashed": "Katun organik 100%, berat 150g/m²",
    "Cotton Jersey 100%": "Cotton jersey berkualitas tinggi",
    "Polyester Blend": "Blend polyester dan katun 80/20",
    "Katun": "Katun organik 100%, berat 150g/m²",
    "Polyester": "Polyester 100%, tahan lama dan cepat kering",
    "Katun-Polyester": "Blend katun-polyester 80/20, nyaman dan elastis",
    "Linen": "Linen murni, breathable dan elegant",
  }

  const hexColor = colorMap[selectedColor] || "#000000"

  return (
    <svg
      viewBox="0 0 200 300"
      className="w-full h-full max-w-md"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Badan kemeja */}
      <ellipse cx="100" cy="80" rx="35" ry="30" fill={hexColor} />

      {/* Lengan kiri */}
      <rect x="40" y="90" width="30" height="80" rx="15" fill={hexColor} />

      {/* Lengan kanan */}
      <rect x="130" y="90" width="30" height="80" rx="15" fill={hexColor} />

      {/* Body utama */}
      <path
        d="M 65 110 L 65 220 Q 65 230 75 230 L 125 230 Q 135 230 135 220 L 135 110 Z"
        fill={hexColor}
      />

      {/* Garis tengah / zip (detail) */}
      <line
        x1="100"
        y1="110"
        x2="100"
        y2="230"
        stroke="#999999"
        strokeWidth="2"
        strokeDasharray="5,5"
      />
    </svg>
  )
}
