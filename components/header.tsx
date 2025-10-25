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
        className="bg-white/10 border border-white/30 backdrop-blur-xl shadow-lg rounded-b-xl px-8 py-2 flex items-center justify-between gap-8 mx-auto"
        style={{ maxWidth: "900px" }}
      >
        <div className="flex h-12 items-center w-full justify-between">
          {/* kiri: logo + menu */}
          <div className="flex items-center gap-10">
            <Link href="/" className="flex items-center">
              <div className="transform scale-125 origin-left">
                <Image src="/logo/logo color.svg" alt="UMK Logo" width={100} height={40} />
              </div>
            </Link>

            <nav className="hidden md:flex items-center gap-8">
              <Link href="#" className="text-sm font-medium hover:text-primary transition-colors">
                Home
              </Link>

              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium hover:text-primary transition-colors outline-none">
                  Categories <ChevronDown className="h-4 w-4" aria-hidden="true" />
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="min-w-[180px]">
                  <DropdownMenuItem asChild>
                    <Link href="/categories">Kuliner</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/categories">Souvenir</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/categories">Fashion</Link>
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
          </div>

          {/* Tombol Login */}
          <div className="pl-6">
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
