'use client';

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

export function Header() {
  const router = useRouter();

  const handleLogin = () => {
    router.push("/admin"); // arahkan ke halaman admin
  };

  return (
    <header className="sticky top-0 z-50 flex justify-center items-start bg-transparent m-0 p-0">
      <div
        className="bg-white/10 border border-white/30 backdrop-blur-xl shadow-lg rounded-2xl px-8 py-2 flex items-center gap-8 mx-auto"
        style={{ maxWidth: "900px" }}
      >
        <div className="flex h-12 items-center w-full">
          <Link href="/" className="flex items-center gap-2 mr-8">
            <div className="text-xl font-bold">Digfurn</div>
          </Link>

          <nav className="hidden md:flex items-center gap-6 flex-1">
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
          </nav>

          {/* Tombol Login */}
          <Button
            size="sm"
            asChild
            className="bg-primary text-primary-foreground hover:bg-primary/90 ml-8 transition-all duration-200"
          >
            <a href="/login" target="_blank" rel="noopener noreferrer">
                    Login Now
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
}
