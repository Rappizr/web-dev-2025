'use client';

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import Image from 'next/image';
import { useSession } from "next-auth/react";

export function Header() {
  const { status } = useSession();
  const isLoggedIn = status === "authenticated";

  return (
    <header className="sticky top-0 z-50 flex justify-center items-start bg-transparent m-0 p-0">
      <div
        className="bg-white/10 border border-white/30 backdrop-blur-xl shadow-lg rounded-2xl px-8 py-2 flex items-center gap-8 mx-auto"
        style={{ maxWidth: "900px" }}
      >
        <div className="flex h-12 items-center w-full">
          <Link href="/" className="flex items-center gap-2 mr-5">
    <div className="w-12 h-auto">
      <Image src="/logo/UMK icon.svg" alt="UMK Logo" width={100} height={40} />
    </div>
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

            {isLoggedIn && (
              <Link
                href="/admin"
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                Settings
              </Link>
            )}
          </nav>

          {/* Tombol Login */}
          <div className="ml-8">
            {status === "loading" ? (
              // Tampilan loading cek
              <div className="h-9 w-24 rounded-md bg-white/20 animate-pulse" />
            ) : !isLoggedIn ? (
              // JIKA BELUM LOGIN
              <Button
                size="sm"
                asChild
                className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200"
              >
                <Link href="/login">
                  Login Now
                </Link>
              </Button>
            ) : (
              // JIKA SUDAH LOGIN
              null
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
