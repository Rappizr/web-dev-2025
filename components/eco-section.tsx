import Link from "next/link"
import { Button } from "@/components/ui/button"

export function EcoSection() {
  return (
    <section className="py-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="relative flex flex-col sm:flex-row items-center justify-between gap-4 py-8 
          rounded-xl overflow-hidden text-primary-foreground
          bg-gradient-to-br from-primary/90 to-primary
          before:absolute before:inset-0 before:bg-white/10 before:opacity-30 before:blur-md before:pointer-events-none
          shadow-md"
        >
          <p className="text-lg sm:text-xl text-center sm:text-left relative z-10">
            Tampilkan produk milikmu, jangkau lebih banyak pelanggan, dan berkembang bersama kami.
          </p>

          <Link href="/login" className="relative z-10">
            <Button
              size="lg"
              className="bg-white/90 text-primary font-semibold text-base sm:text-lg px-8 py-5 
              rounded-md hover:bg-white hover:shadow-md transition-all duration-300"
            >
              Daftar Sekarang
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
