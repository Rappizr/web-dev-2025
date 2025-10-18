import { Instagram, Linkedin, Twitter } from "lucide-react"

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
          <div className="flex items-center gap-6">
            <span className="text-sm">About Us</span>
            <span className="text-sm">Contact </span>
          </div>
          <div className="flex pb-8 gap-4">
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
        <div className="border-t border-primary-foreground/20 pb-5 w-full md:w-auto" />
        <div className="text-center mt-8 text-sm text-primary-foreground/60">
          {/* <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia, enim.</p> */}
          <p className="mt-2">
            Platform digital untuk mepublikasikan UMKM milik Anda. Bersama, kita majukan produk lokal dan wujudkan UMKM yang sejahtera.
          </p>
        </div>
      </div>
    </footer>
  )
}
