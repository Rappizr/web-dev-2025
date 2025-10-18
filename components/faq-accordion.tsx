import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"

export function FaqAccordion() {
  const faqs = [
    {
      question: "What is Digfurn Furniture?",
      answer:
        "Digfurn creates a UI/UX design for your website and app. We provide the best quality and affordable prices for you, innovation and technology.",
    },
    {
      question: "Do You Offer Smart Furniture?",
      answer:
        "Yes, we offer a wide range of smart furniture solutions that integrate seamlessly with modern home automation systems. Our smart furniture combines functionality with cutting-edge technology.",
    },
    {
      question: "Do You Offer Export Service?",
      answer:
        "We provide international shipping and export services to customers worldwide. Our team handles all logistics and ensures safe delivery of your furniture pieces.",
    },
  ]

  return (
    <section className="py-20d" data-aos="fade-up">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 pt-8 items-start">
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-balance">
              From Concept To Comfort, Your Way, And More.
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Digfurn creates a UI/UX design for your website and app. We provide the best quality and affordable prices
              for you, innovation and technology that you need.
            </p>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">Show More</Button>
          </div>

          <div>
            <Accordion type="single" collapsible className="space-y-4" data-aos="fade-left">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-card border border-border rounded-lg px-6"
                  data-aos="fade-up"
                >
                  <AccordionTrigger className="text-left font-semibold hover:no-underline" data-aos="fade-right">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed" data-aos="fade-left">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  )
}
