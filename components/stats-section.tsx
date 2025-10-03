import { Button } from "@/components/ui/button"
import { Code2 } from "lucide-react"

export function StatsSection() {
  return (
    <section className="py-20 px-8 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-8 text-balance">
              Apa Peran Kami?
            </h2>

            <p className="text-muted-foreground leading-relaxed mb-6">
              CodeZone hadir untuk memberikan kemudahan bagi UMKM dalam memperkenalkan produk mereka ke pasar yang lebih luas. Kami menyediakan platform yang memfasilitasi UMKM agar lebih dikenal oleh masyarakat, meningkatkan aksesibilitas dan visibilitas bisnis Anda.
            </p>
          </div>

          <div className="relative">
            <div className="bg-card border border-border rounded-xl p-6 shadow-lg">
              <div className="flex items-center gap-2 mb-4">
                <span className="font-semibold">Solusi Digital untuk UMKM</span>
              </div>
              <div className="bg-muted rounded-lg p-4 font-mono text-sm">
                <div className="text-accent mb-2">ini foto aja gasi?</div>
              </div>
              <Button className="mt-6 w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90">
                Selengkapnya
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
