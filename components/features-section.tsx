import { Users, Globe, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"

export function FeaturesSection() {
  const features = [
    {
      icon: Users,
      title: "Dekat dengan Semua",
      description:
        "Bangun koneksi dengan pelanggan baru dari berbagai daerah. Jadikan produkmu bagian dari cerita mereka.",
    },
    {
      icon: Globe,
      title: "Tampil di Dunia Digital",
      description:
        "Perkenalkan usahamu dengan cara yang lebih modern dan menarik. Satu klik bisa membawa brandmu ke mana saja.",
    },
    {
      icon: TrendingUp,
      title: "Berkembang Tanpa Batas",
      description:
        "Dari usaha kecil menjadi besar. Kami bantu UMKM tumbuh lebih cepat melalui jangkauan digital yang luas.",
    },
  ]

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-5xl font-bold text-center mb-4 text-balance">
          Saatnya UMKM Bersinar di Dunia Digital 
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-xl p-8 hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-6">
                <feature.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* <div className="flex justify-center mt-12">
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
            Temukan Potensimu
          </Button>
        </div> */}
      </div>
    </section>
  )
}
