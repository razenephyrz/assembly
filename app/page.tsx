import { ProductCard } from "@/components/product-card"

const products = [
  {
    name: "Tote Bag Classic",
    price: "mulai Rp 64.000",
    imageDefault: "https://studio.rovoassembly.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fhyblzf2n%2Fproduction%2F18cfd2bf5ed7dce1b312f9eae10340bf354448c9-2000x2750.png%3Ffm%3Dwebp%26fit%3Dcrop&w=384&q=75",
    imageWithModel: "classic tote bag male-bg.png",
    bgColor: "var(--color-almond-cream-500)",
  },
  {
    name: "Classic Dad Cap",
    price: "mulai Rp 81.000",
    imageDefault: "https://studio.rovoassembly.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fhyblzf2n%2Fproduction%2Fe3bf81c042f8067b3a6ac42b07478f4b434050e4-2000x2750.png%3Ffm%3Dwebp%26fit%3Dcrop&w=384&q=75",
    imageWithModel: "classic dad cap male-bg.png",
    bgColor: "var(--color-almond-cream-500)",
  },
  {
    name: "Regular T-Shirts",
    price: "mulai Rp 100.000",
    imageDefault: "https://studio.rovoassembly.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fhyblzf2n%2Fproduction%2Fa627749e48abb6020a753475a4c36177595696bd-2000x2750.png%3Ffm%3Dwebp%26fit%3Dcrop&w=384&q=75",
    imageWithModel: "classic tshirt male-bg.png",
    bgColor: "var(--color-almond-cream-500)",
  },
  {
    name: "Boxy Shirt",
    price: "mulai Rp 137.000",
    imageDefault: "https://studio.rovoassembly.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fhyblzf2n%2Fproduction%2F8df4742205ed4de7a9450253c7c8c31012aa5600-2000x2750.png%3Ffm%3Dwebp%26fit%3Dcrop&w=384&q=75",
    imageWithModel: "boxy shirt male-bg.png",
    bgColor: "var(--color-almond-cream-500)",
  },
  {
    name: "Classic Boxy Hoodie",
    price: "mulai Rp 235.000",
    imageDefault: "https://studio.rovoassembly.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fhyblzf2n%2Fproduction%2Fd062d1e2a98e255e7cf40ffcd5f8becc5cb8f4aa-2000x2750.png%3Ffm%3Dwebp%26fit%3Dcrop&w=384&q=75",
    imageWithModel: "boxy hoodie female-bg.png",
    bgColor: "var(--color-almond-cream-500)",
  },
  {
    name: "Classic T-Shirt",
    price: "mulai Rp 235.000",
    imageDefault: "https://studio.rovoassembly.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fhyblzf2n%2Fproduction%2Fa627749e48abb6020a753475a4c36177595696bd-2000x2750.png%3Ffm%3Dwebp%26fit%3Dcrop&w=384&q=75",
    imageWithModel: "classic tee female-bg.png",
    bgColor: "var(--color-almond-cream-500)",
  },
  {
    name: "Classic Longsleeve",
    price: "mulai Rp 137.000",
    imageDefault: "https://studio.rovoassembly.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fhyblzf2n%2Fproduction%2F18cfd2bf5ed7dce1b312f9eae10340bf354448c9-2000x2750.png%3Ffm%3Dwebp%26fit%3Dcrop&w=384&q=75",
    imageWithModel: "classic longsleeve female-bg.png",
    bgColor: "var(--color-almond-cream-500)",
  },
  {
    name: "Classic Sweathsirts",
    price: "mulai Rp 110.000",
    imageDefault: "https://studio.rovoassembly.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fhyblzf2n%2Fproduction%2Fa961430465688890d4d0ec588d99da63548ecc6d-2000x2750.png%3Ffm%3Dwebp%26fit%3Dcrop&w=384&q=75",
    imageWithModel: "classic sweatshirt female-bg.png",
    bgColor: "var(--color-almond-cream-500)",
  },
]

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="mb-12">
          <p className="mb-3 text-sm text-muted-foreground">Mulai proyek untuk anda,</p>
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Pilih dari template
            <br />
            dasar yang kami sediakan
          </h1>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard
              key={product.name}
              name={product.name}
              price={product.price}
              imageDefault={product.imageDefault}
              imageWithModel={product.imageWithModel}
            />
          ))}
        </div>
      </div>
    </main>
  )
}
