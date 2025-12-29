"use client"

import Link from "next/link"
import { ChevronLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ColorMaterialDetailCardProps {
  title: string
  description: string
  hex?: string
  image?: string
}

function DetailCard({ title, description, hex, image }: ColorMaterialDetailCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow">
      {/* Image/Color Area */}
      <div
        className={`relative w-full h-48 flex items-center justify-center overflow-hidden ${
          hex ? "" : "bg-linear-to-br from-gray-100 to-gray-200"
        }`}
        style={hex ? { backgroundColor: hex } : {}}
      >
        {image && (
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
        )}
        <p className="absolute text-white font-semibold text-lg text-center drop-shadow-lg bg-black/40 px-4 py-2 rounded">
          {title}
        </p>
      </div>

      {/* Description Area */}
      <div className="p-5">
        <h3 className="font-bold text-lg text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  )
}

export default function ColorMaterialDetailPage() {
  const colorDetails = [
    {
      title: "True Black",
      hex: "#1A1A1A",
      description: "Warna hitam elegan yang sempurna untuk statement pieces. Versatile dan cocok untuk berbagai gaya.",
    },
    {
      title: "Indian Almond",
      hex: "#8B7355",
      description: "Warna coklat almond yang hangat dan natural. Memberikan kesan earthy dan sophisticated.",
    },
    {
      title: "Buffalo Chip",
      hex: "#6B5D52",
      description: "Warna coklat kaya dengan tone yang dalam. Perfect untuk casual wear dengan personality.",
    },
    {
      title: "Bright White",
      hex: "#F5F5F5",
      description: "Putih cerah dan bersih. Ideal untuk minimalist design dan pemakaian sehari-hari.",
    },
    {
      title: "Emerald",
      hex: "#2D7D5F",
      description: "Hijau emerald yang vibrant dan fresh. Memberikan kesan modern dan energetic.",
    },
    {
      title: "Arch",
      hex: "#3D5C3D",
      description: "Hijau gelap yang subtle dan elegant. Cocok untuk professional dan casual settings.",
    },
  ]

  const materialDetails = [
    {
      title: "Cotton Combed 32S Biosewashed",
      description: "Bahan katun combed premium dengan kerapatan 32S. Proses biosewash memberikan tekstur yang lembut dan warna yang natural. Sempurna untuk kenyamanan maksimal sepanjang hari.",
    },
    {
      title: "Cotton Jersey 100%",
      description: "Jersey katun murni 100% dengan struktur yang fleksibel dan breathable. Ideal untuk aktivitas yang lebih aktif dengan elastisitas optimal.",
    },
    {
      title: "Polyester Blend",
      description: "Campuran sempurna antara katun dan polyester untuk durabilitas tinggi. Tahan lama, mudah dirawat, dan cocok untuk penggunaan jangka panjang.",
    },
    {
      title: "Linen Premium",
      description: "Linen murni berkualitas premium yang natural dan breathable. Sangat cocok untuk iklim tropis dengan appearance yang elegant dan timeless.",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 bg-white border-b border-gray-300 px-6 py-4 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center gap-4">
          <Link href="/customize">
            <Button
              variant="outline"
              size="sm"
              className="flex items-center gap-2"
            >
              <ChevronLeft size={20} />
              Kembali
            </Button>
          </Link>
          <span className="text-gray-600">Oversize T-Shirt 200</span>
          <span className="text-gray-400">/</span>
          <span className="text-gray-900 font-semibold">Detail Warna & Bahan</span>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto p-6 space-y-12">
        {/* Colors Section */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Pilihan Warna</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {colorDetails.map((color) => (
              <DetailCard
                key={color.title}
                title={color.title}
                description={color.description}
                hex={color.hex}
              />
            ))}
          </div>
        </section>

        {/* Divider */}
        <div className="border-t border-gray-200" />

        {/* Materials Section */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Pilihan Bahan</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {materialDetails.map((material) => (
              <DetailCard
                key={material.title}
                title={material.title}
                description={material.description}
              />
            ))}
          </div>
        </section>

        {/* Additional Info Section */}
        <section className="bg-blue-50 rounded-xl p-8 border border-blue-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Cara Merawat Produk</h3>
          <div className="space-y-3 text-gray-700">
            <p>✓ Cuci dengan air dingin untuk warna yang lebih tahan lama</p>
            <p>✓ Gunakan deterjen lembut dan hindari pemutih</p>
            <p>✓ Gantung untuk dikeringkan, hindari pengering panas</p>
            <p>✓ Setrika dengan temperatur sedang jika diperlukan</p>
            <p>✓ Simpan di tempat yang kering dan sejuk</p>
          </div>
        </section>

        {/* CTA */}
        <div className="flex justify-center pb-8">
          <Link href="/customize">
            <Button className="bg-blue-600 text-white hover:bg-blue-700 text-lg px-8 py-6">
              Kembali ke Kustomisasi
            </Button>
          </Link>
        </div>
      </main>
    </div>
  )
}
