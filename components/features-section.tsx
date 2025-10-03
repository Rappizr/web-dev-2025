import { Palette, CreditCard, Wrench } from "lucide-react"  
import { Button } from "@/components/ui/button"

export function FeaturesSection() {
  const features = [
    {
      icon: Palette, 
      title: "Kuliner",
      description: 
        "CodeZone membantu bisnis kuliner untuk menjangkau pelanggan lebih luas dengan menyediakan platform digital yang mudah diakses. Kami menawarkan solusi pemasaran untuk meningkatkan visibilitas bisnis kuliner Anda secara online.",
    },
    {
      icon: CreditCard, 
      title: "Souvenir",
      description:
        "Bagi UMKM yang bergerak di bidang souvenir, CodeZone menyediakan sarana untuk memperkenalkan produk Anda kepada pasar yang lebih besar. Kami membantu Anda mengoptimalkan penjualan souvenir melalui platform digital yang efektif.",
    },
    {
      icon: Wrench,
      title: "Pakaian",
      description:
        "UMKM di bidang pakaian dapat memanfaatkan CodeZone untuk memperluas jangkauan pasar. Kami memberikan alat pemasaran yang memudahkan pengusaha pakaian untuk memperkenalkan produk mereka di dunia digital.",
    },
  ]

  return (
    <section className="py-20 px-8 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-4 text-balance">
          Membantu UMKM Dikenal Oleh Masyarakat Luas.
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {features.map((feature, index) => (
            <div key={index} className="bg-card border border-border rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-6">
                <feature.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90">Pelajari Lebih Lanjut</Button>
        </div>
      </div>
    </section>
  )
}
