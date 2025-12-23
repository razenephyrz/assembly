"use client"

import Link from "next/link"
import { useState } from "react"
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerFooter,
  DrawerClose,
} from "@/components/ui/drawer"

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="w-full border-b bg-background">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-baseline gap-2">
          <Link href="/" className="text-2xl font-extrabold tracking-tight text-foreground">
            SLASHPRINT
          </Link>
          <span className="-translate-y-2 text-xs font-semibold text-foreground/70">TM</span>
        </div>

        <div className="flex items-center gap-3">
          <Link href="/login" className="inline-flex h-9 w-9 items-center justify-center rounded-md border bg-white p-1 shadow-sm" aria-label="Login">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 12c2.761 0 5-2.239 5-5s-2.239-5-5-5-5 2.239-5 5 2.239 5 5 5z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M20 21v-1c0-2.761-4-4-8-4s-8 1.239-8 4v1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>

          <Drawer open={open} onOpenChange={(o) => setOpen(o)}>
            <DrawerTrigger asChild>
              <button
                className="inline-flex h-9 w-9 items-center justify-center rounded-md border bg-white p-1 shadow-sm"
                aria-label="Cart"
                onClick={() => setOpen(true)}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 6h15l-1.5 9h-12L6 6z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="10" cy="20" r="1" stroke="currentColor" strokeWidth="1.5"/>
                  <circle cx="18" cy="20" r="1" stroke="currentColor" strokeWidth="1.5"/>
                </svg>
              </button>
            </DrawerTrigger>

            <DrawerContent data-vaul-drawer-direction="right" className="data-[vaul-drawer-direction=right]:w-[380px] rounded-lg overflow-hidden">
              <div className="relative">
                <DrawerHeader>
                  <DrawerTitle>Sampel anda</DrawerTitle>
                  <DrawerDescription className="mt-1">Sampel gratis jika Anda mengembalikannya dalam waktu 60 hari dan gratis ongkos kirim standar di atas Rp 24.000 (3-5 hari)</DrawerDescription>
                </DrawerHeader>

                <DrawerClose asChild>
                  <button aria-label="Close cart" className="absolute right-3 top-3 inline-flex h-8 w-8 items-center justify-center rounded-md border bg-white/80 hover:bg-white">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                </DrawerClose>
              </div>

              <div className="p-4">
                <div className="rounded-md border p-3">
                  <div className="flex gap-3">
                    <div className="h-16 w-16 rounded-md bg-muted" />
                    <div className="flex flex-1 flex-col justify-between">
                      <div>
                        <p className="font-semibold">Jersey 120</p>
                        <p className="text-sm text-muted-foreground">XL / Bright White</p>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <button className="h-8 w-8 rounded-md border">−</button>
                          <div className="px-3">4</div>
                          <button className="h-8 w-8 rounded-md border">+</button>
                        </div>
                        <button className="text-sm text-muted-foreground underline">Hapus</button>
                      </div>
                    </div>
                    <div className="flex items-start font-semibold">Rp 87.000</div>
                  </div>
                </div>
              </div>

              <DrawerFooter>
                <div className="flex items-center justify-between w-full">
                  <div>
                    <p className="text-sm text-muted-foreground">Subtotal</p>
                    <p className="font-semibold">Rp 1.586.000</p>
                  </div>
                  <div>
                    <button className="rounded-md bg-black px-4 py-2 text-sm font-semibold text-white">Checkout pesanan</button>
                  </div>
                </div>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </div>
      </div>
    </header>
  )
}
