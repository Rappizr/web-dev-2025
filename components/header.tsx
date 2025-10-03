import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/30 bg-background/90 backdrop-blur-md">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex h-14 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="text-xl font-bold">CodeZone</div>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            <Link href="#" className="text-sm font-medium hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-primary transition-colors">
              Category
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-primary transition-colors">
              Faq
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-primary transition-colors">
              About Us
            </Link>
          </nav>

          <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
            Login Now
          </Button>
        </div>
      </div>
    </header>
  )
}
