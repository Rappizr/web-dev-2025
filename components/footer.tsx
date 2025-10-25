import { Instagram, Linkedin, Twitter } from "lucide-react"
import Link from "next/link";
import Image from "next/image";

export function Footer() {
  const footerLinks = {
    intro: {
      title: "Intro",
      links: ["Home", "About", "Product", "Contact"],
    },
    resources: {
      title: "Resources",
      links: ["Blog", "Privacy Policy", "Terms of Service", "Support"],
    },
    product: {
      title: "Product",
      links: ["Furniture", "Decor", "Lighting", "Textiles"],
    },
    legal: {
      title: "Legal",
      links: ["Privacy", "Terms", "Cookies", "Licenses"],
    },
    help: {
      title: "Help & Support",
      links: ["FAQ", "Contact Us", "Shipping", "Returns"],
    },
    social: {
      title: "Social Media",
      links: ["Instagram", "Facebook", "Twitter", "LinkedIn"],
    },
  }

  return (
    <footer className="bg-primary text-primary-foreground py-16">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
      {/* Kiri: Logo + Menu */}
      <div className="flex items-center gap-6">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo/logo white.svg"
            alt="UMK Logo"
            width={120}
            height={40}
            className="object-contain h-10 w-auto -translate-y-[1px]"
          />
        </Link>

        <span className="text-sm mt-2">About Us</span>
        <span className="text-sm mt-2">Contact</span>
      </div>

      {/* Kanan: Icon lain*/}
      <div className="flex pb-8 md:pb-0 gap-4">
        <a
          href="#"
          className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
        >
          <Instagram className="w-5 h-5" />
        </a>
        <a
          href="#"
          className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
        >
          <Linkedin className="w-5 h-5" />
        </a>
        <a
          href="#"
          className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
        >
          <Twitter className="w-5 h-5" />
        </a>
      </div>
    </div>

    <div className="border-t border-primary-foreground/20 mb-5 mt-5 w-full md:w-auto" />

    <div className="text-center mt-8 text-sm text-primary-foreground/60">
      <p className="mt-2">
        Platform digital untuk mepublikasikan UMKM milik Anda. Bersama, kita majukan produk lokal dan wujudkan UMKM yang sejahtera.
      </p>
    </div>
  </div>
</footer>

  )
}
