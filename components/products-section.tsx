import { Instagram, Linkedin, Twitter } from "lucide-react"

export function ProductsSection() {
  const products = [
    {
      name: "Culinary",
      description: "Taste of Javanese Heritage",
      image: "/images/culinary-javanese-food.jpg", // contoh: sate, gudeg, nasi liwet
    },
    {
      name: "Souvenir",
      description: "Crafted with Local Love",
      image: "/images/souvenir-batik-craft.jpg", // contoh: batik, kerajinan kayu, topeng
    },
    {
      name: "Fashion",
      description: "Inspired by Tradition",
      image: "/images/fashion-batik-modern.jpg", // contoh: busana batik modern
    },
    {
      name: "Agriculture",
      description: "Sustaining the Green Land",
      image: "/images/agriculture-java-fields.jpg", // contoh: sawah, petani Jawa
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-4 text-balance">
          Kenali UMKM Khas Kotamu
        </h2>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-16 leading-relaxed">
          Dari kuliner hingga seni kerajinan, setiap kreasi mencerminkan jiwa komunitas lokal kita.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="group bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg transition-shadow"
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
                <div className="flex gap-2">
                  <a
                    href="#"
                    className="w-8 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-primary/90 transition-colors"
                  >
                    <Instagram className="w-4 h-4 text-primary-foreground" />
                  </a>
                  <a
                    href="#"
                    className="w-8 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-primary/90 transition-colors"
                  >
                    <Linkedin className="w-4 h-4 text-primary-foreground" />
                  </a>
                  <a
                    href="#"
                    className="w-8 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-primary/90 transition-colors"
                  >
                    <Twitter className="w-4 h-4 text-primary-foreground" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
