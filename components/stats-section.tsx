import { Button } from "@/components/ui/button"
import { Code2 } from "lucide-react"

export function StatsSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-8 text-balance">Where Style Meets Innovation.</h2>

            <div className="space-y-6 mb-8">
              <div>
                <div className="text-4xl font-bold mb-1">12.0k+</div>
                <div className="text-muted-foreground">Success Project</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-1">42.0k+</div>
                <div className="text-muted-foreground">Happy Client</div>
              </div>
            </div>

            <p className="text-muted-foreground leading-relaxed mb-6">
              Digfurn creates a UI/UX design for your website and app. We provide the best quality and affordable prices
              for you.
            </p>
          </div>

          <div className="relative">
            <div className="bg-card border border-border rounded-xl p-6 shadow-lg">
              <div className="flex items-center gap-2 mb-4">
                <Code2 className="w-5 h-5 text-accent" />
                <span className="font-semibold">getahuan</span>
              </div>
              <div className="bg-muted rounded-lg p-4 font-mono text-sm">
                <div className="text-accent mb-2">{'<div className="container">'}</div>
                <div className="pl-4 text-foreground">{"<h1>Modern Design</h1>"}</div>
                <div className="pl-4 text-muted-foreground">{"<p>Innovation at its finest</p>"}</div>
                <div className="text-accent">{"</div>"}</div>
              </div>
              <Button className="mt-6 w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90">
                Show More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
