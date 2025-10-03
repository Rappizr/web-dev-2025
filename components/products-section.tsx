import { Instagram, Linkedin, Twitter } from "lucide-react"

export function ProductsSection() {
  const products = [
    {
      name: "Kuliner",
      description: "deskripsi 1",
      image: "/modern-living-room.png",
    },
    {
      name: "Pakaian",
      description: "deskripsi 2",
      image: "/luxury-modern-watch.jpg",
    },
    {
      name: "Souvenir",
      description: "deskripsi 3",
      image: "/modern-mac-stand-desk-setup.jpg",
    },
  ]

  return (
    <section className="py-20 px-8 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-4 text-balance">
          Top Rekomendasi UMKM
        </h2>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-16 leading-relaxed">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis eum quo eos quod ipsum aut quibusdam amet rem ab. Cum animi accusamus suscipit voluptatum voluptas eaque provident quae debitis dicta.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div key={index} className="group">
              <div className="relative overflow-hidden rounded-xl mb-4 aspect-[3/4] bg-muted">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-bold text-lg">{product.name}</h3>
                  <p className="text-sm text-muted-foreground">{product.description}</p>
                </div>
                <div className="flex gap-3">
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
