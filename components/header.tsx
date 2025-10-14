import Link from "next/link"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { ChevronDown } from "lucide-react"

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/30 bg-background/90 backdrop-blur-md">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex h-14 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="text-xl font-bold">Digfurn</div>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            <Link href="#" className="text-sm font-medium hover:text-primary transition-colors">
              Home
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium hover:text-primary transition-colors outline-none">
                Categories <ChevronDown className="h-4 w-4" aria-hidden="true" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="min-w-[180px]">
                <DropdownMenuItem asChild>
                  <Link href="/categories/technology">Technology</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/categories/lifestyle">Lifestyle</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/categories/business">Business</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link href="/blog" className="text-sm font-medium hover:text-primary transition-colors">
              Blog
            </Link>
            <Link href="/categories" className="text-sm font-medium hover:text-primary transition-colors">
              Categories
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-primary transition-colors">
              Contact
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-primary transition-colors">
              About Us
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-primary transition-colors">
              Who is
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
