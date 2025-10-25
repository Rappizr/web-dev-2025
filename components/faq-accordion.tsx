import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

export function FaqAccordion() {
  const faqs = [
    {
      question: "Apa itu UMK Malang?",
      answer:
        "UMK Malang adalah platform digital yang memperkenalkan produk-produk UMKM khas Kota Malang kepada masyarakat luas. Kami membantu pelaku UMKM mempromosikan dan mengembangkan usahanya secara online.",
    },
    {
      question: "Apakah UMK Malang membantu promosi produk?",
      answer:
        "Ya, UMK Malang menyediakan berbagai fitur promosi digital untuk membantu pelaku UMKM memperluas jangkauan pasar mereka, baik secara lokal maupun nasional.",
    },
    {
      question: "Apakah bisa bergabung sebagai pelaku UMKM?",
      answer:
        "Tentu saja! Anda dapat mendaftar sebagai pelaku UMKM di platform UMK Malang untuk mempromosikan produk, mendapatkan pelatihan, serta terhubung dengan pembeli dan mitra bisnis lainnya.",
    },
  ];

  return (
    <section className="py-20" data-aos="fade-up">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 pt-8 items-start">
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-balance">
              Dari UMKM Lokal untuk Indonesia.
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Digfurn creates a UI/UX design for your website and app. We
              provide the best quality and affordable prices for you, innovation
              and technology that you need.
            </p>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
              Show More
            </Button>
          </div>

          <div>
            <Accordion
              type="single"
              collapsible
              className="space-y-4"
              data-aos="fade-left"
            >
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-card border border-border rounded-lg px-6"
                  data-aos="fade-up"
                >
                  <AccordionTrigger
                    className="text-left font-semibold hover:no-underline"
                    data-aos="fade-right"
                  >
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent
                    className="text-muted-foreground leading-relaxed"
                    data-aos="fade-left"
                  >
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
