"use client"

import { useState, useEffect } from "react"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

const testimonials = [
  {
    rating: 5,
    text: "Digfurn creates a UI/UX design for your website and app. We provide the best quality and affordable prices for you, innovation and technology.",
    author: "John Doe",
    role: "Digfurn • Creative UI/UX Designer • Founder & CEO",
    image: "/avatars/john.jpg",
  },
  {
    rating: 5,
    text: "Outstanding service and exceptional quality. The team delivered beyond our expectations with innovative solutions and professional approach.",
    author: "Sarah Johnson",
    role: "Product Manager at TechCorp",
    image: "/avatars/sarah.jpg",
  },
  {
    rating: 5,
    text: "The attention to detail and commitment to excellence is remarkable. Highly recommend for anyone looking for premium design services.",
    author: "Michael Chen",
    role: "Founder at StartupHub",
    image: "/avatars/michael.jpg",
  },
]

export function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const next = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  const previous = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)

  useEffect(() => {
    const timer = setInterval(next, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16">Apa Kata Mereka?</h2>

        <div className="relative max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`bg-card/10 backdrop-blur border border-primary-foreground/20 rounded-xl p-6 transition-all duration-500 ${
                  index === currentIndex ? "opacity-100 scale-100" : "opacity-40 scale-95"
                }`}
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <p className="text-primary-foreground/90 mb-6 leading-relaxed">{testimonial.text}</p>

                <div className="flex items-center gap-3">
                  <Avatar className="w-10 h-10">
                    <AvatarImage src={testimonial.image} alt={testimonial.author} />
                    <AvatarFallback>
                      {testimonial.author
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>

                  <div>
                    <div className="font-semibold">{testimonial.author}</div>
                    <div className="text-sm text-primary-foreground/70">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={previous}
              className="rounded-full bg-primary-foreground/10 border-primary-foreground/20 hover:bg-primary-foreground/20"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={next}
              className="rounded-full bg-primary-foreground/10 border-primary-foreground/20 hover:bg-primary-foreground/20"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
