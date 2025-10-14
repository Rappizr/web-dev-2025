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
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-12">
          {Object.values(footerLinks).map((section, index) => (
            <div key={index}>
              <h3 className="font-bold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href="#"
                      className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-6">
              <span className="text-sm">Privacy</span>
              <span className="text-sm">Job</span>
              <span className="text-sm">Design</span>
            </div>

            <div className="flex gap-4">
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

          <div className="text-center mt-8 text-sm text-primary-foreground/60">
            <p>Furniture that works as hard as you do.</p>
            <p className="mt-2">
              Digfurn Modern is a division of Furniture Products, Inc. © 2025 Furniture Products, Inc. All rights
              reserved. Digfurn Modern and the Digfurn Modern logo are registered trademarks of Furniture Products, Inc.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
