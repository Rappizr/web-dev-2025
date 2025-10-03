import { Button } from "@/components/ui/button"

export function EcoSection() {
  const stats = [
    { value: "12.0k+", label: "UMKM" },
    { value: "12.0k+", label: "Owner Puas" },
    { value: "34.0k+", label: "Pengguna" },
  ]

  const metrics = [
    { label: "Sustainable Living Starts Here.", value: 79 },
    { label: "Smart Design for Green Homes.", value: 92 },
    { label: "Furniture Made To Go Your Way.", value: 80 },
  ]

  return (
    <section className="py-20 px-8 bg-muted/30">
      <div className="container mx-auto px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-balance">
              Lorem ipsum dolor sit amet.
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque laboriosam praesentium beatae.
            </p>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">Show More</Button>
          </div>

          <div className="space-y-8">
            <div className="grid grid-cols-4 gap-4">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="bg-card border border-border rounded-xl p-6 space-y-6">
              {metrics.map((metric, index) => (
                <div key={index}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">{metric.label}</span>
                    <span className="text-sm font-bold">{metric.value}%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full bg-accent rounded-full transition-all duration-500"
                      style={{ width: `${metric.value}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
