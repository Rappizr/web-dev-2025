import { Instagram, Linkedin, Twitter } from "lucide-react"
import { Button } from "./ui/button"
import Link from "next/link"

export function ProductsSection() {
  const products = [
    {
      name: "Kuliner",
      description: "Berbagai rasa menggugah selera",
      image: "/images/home-category/kuliner1.jpg", // contoh: sate, gudeg, nasi liwet
      slug: "culinary"
    },
    {
      name: "Souvenir",
      description: "Dibuat dengan kreasi lokal",
      image: "/images/home-category/souvenir.jpg", // contoh: batik, kerajinan kayu, topeng
      slug: "souvenir"
    },
    {
      name: "Fashion",
      description: "Dari tradisional hingga modern",
      image: "/images/home-category/fashion.jpg", // contoh: busana batik modern
      slug: "fashion"
    },
  ]

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-4 text-balance">
          Kenali UMKM Khas Kotamu
        </h2>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-16 leading-relaxed">
          Dari kuliner hingga seni kerajinan, setiap kreasi mencerminkan jiwa komunitas lokal kita.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Link
            href={`/categories/${product.slug}`}
            key={index}
            >
              <div
                key={index}
                className="group bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg transition-shadow"
                data-aos="fade-up"
                data-aos-easing="ease"
                data-aos-duration="800"
                data-aos-delay={index * 120}
              >
                <div className="relative overflow-hidden aspect-square bg-muted">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4 flex items-center justify-between">
                  <div>
                    <h3 className="font-bold text-lg">{product.name}</h3>
                    <p className="text-sm text-muted-foreground">{product.description}</p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="flex justify-center mt-12">
          <Button
            className="bg-primary text-primary-foreground hover:bg-primary/90 px-10 py-6 text-xl font-bold rounded-2xl shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
            data-aos="zoom-in"
            data-aos-easing="ease"
            data-aos-duration="800"
          >
            <Link href="/categories">
            Selengkapnya
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
