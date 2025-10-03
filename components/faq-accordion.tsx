import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"

export function FaqAccordion() {
  const faqs = [
    {
      question: "Apa itu CodeZone?",
      answer:
        "CodeZone adalah platform yang hadir untuk membantu UMKM di Indonesia agar semakin dikenal oleh masyarakat luas. Kami menyediakan berbagai solusi digital yang memudahkan UMKM, mulai dari bisnis kuliner, souvenir, hingga pakaian dan aksesori, untuk memperluas jangkauan pasar mereka.",
    },
    {
      question: "Bagaimana CodeZone Dapat Membantu UMKM Saya?",
      answer:
        "Dengan CodeZone, UMKM Anda dapat memanfaatkan berbagai fitur yang mendukung pemasaran online, seperti pengelolaan toko digital, pemasaran melalui media sosial, dan pengoptimalan SEO. Kami hadir untuk membantu UMKM dari berbagai sektor, seperti kuliner, souvenir, pakaian, hingga aksesori, dalam meningkatkan eksposur mereka di pasar digital.",
    },
    {
      question: "Apakah CodeZone Menyediakan Layanan Ekspor?",
      answer:
        "Ya, CodeZone juga membantu UMKM untuk menjangkau pasar internasional. Kami memberikan solusi pengiriman internasional dan layanan ekspor, sehingga produk UMKM Anda, mulai dari makanan hingga aksesori, dapat dikenal oleh konsumen di berbagai negara.",
    },
  ]

  return (
    <section className="py-20 px-8 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-balance">
              Membantu UMKM Tumbuh, Menjangkau Pasar Lebih Luas, dan Meningkatkan Daya Saing.
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              CodeZone hadir untuk memberdayakan UMKM dari berbagai sektor, mulai dari kuliner, souvenir, pakaian, hingga aksesori, agar lebih dikenal oleh pasar yang lebih luas. Kami menyediakan berbagai solusi digital yang membantu UMKM mengoptimalkan potensi bisnis mereka dan meningkatkan daya saing di dunia digital.
            </p>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">Pelajari Lebih Lanjut</Button>
          </div>

          <div>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-card border border-border rounded-lg px-6"
                >
                  <AccordionTrigger className="text-left font-semibold hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  )
}
