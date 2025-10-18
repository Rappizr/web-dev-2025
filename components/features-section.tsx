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
  <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 
          className="text-2xl sm:text-5xl font-bold text-center mb-4 text-balance"
          data-aos="fade-up"
        >
          Saatnya UMKM Bersinar di Dunia Digital
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative bg-white/80 border border-white/10 backdrop-blur-xl rounded-3xl p-8 hover:shadow-3xl hover:scale-105 transition-all duration-300 group"
              data-aos="fade-up"
              data-aos-easing="ease"
              data-aos-duration="800"
              data-aos-delay={index * 100}
            >
              <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed group-hover:text-blue-900/80 transition-colors duration-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
