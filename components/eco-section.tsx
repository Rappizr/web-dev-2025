import Link from "next/link"
import { Button } from "@/components/ui/button"

export function EcoSection() {
  return (
  <section className="py-12 lg:py-20" data-aos="fade-up">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="relative flex flex-col sm:flex-row items-center justify-between gap-8 py-12 lg:py-20 px-8 rounded-3xl overflow-hidden text-white shadow-2xl"
          style={{
            backgroundImage: 'url(/modern-mac-stand-desk-setup.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-blue-900/70 backdrop-blur-sm z-0" />
          <div className="flex flex-col gap-6 sm:gap-0 sm:flex-row items-center justify-between w-full relative z-10">
            <div data-aos="zoom-in">
              <p className="text-3xl sm:text-4xl font-extrabold text-left drop-shadow-xl mb-2 text-white">
                Bangun Bisnismu di Kota Kita
              </p>
              <p className="text-lg sm:text-xl font-medium text-white/90">
                Tampilkan produk milikmu, jangkau lebih banyak pelanggan, akses peluangmu <br /> dan berkembang bersama komunitas kota yang dinamis.
              </p>
            </div>
            <Link href="/umkm" className="" data-aos="fade-left">
              <Button
                size="lg"
                className="bg-white/80 text-blue-900 font-bold text-lg px-12 py-7 rounded-2xl shadow-xl hover:bg-white hover:scale-105 hover:shadow-2xl transition-all duration-300"
              >
                Daftar Sekarang
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
