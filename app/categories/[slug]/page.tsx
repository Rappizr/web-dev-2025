"use client"

import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { CalendarDays, Clock, ArrowUpRight } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

type Post = {
  id: number
  title: string
  excerpt: string
  date: string
  readTime: string
  category: string
  image: string
}

const posts: Post[] = [
  {
    id: 1,
    title: "Fluid Sizing Instead Of Multiple Media Queries?",
    excerpt:
      "Crispy edges, soft centers, and melty little puddles of chocolate. Exploring fluid sizing as a responsive strategy.",
    date: "27 Aug, 2024",
    readTime: "20 mins",
    category: "POLITICS",
    image: "/business-meeting-team-laughing.jpg",
  },
  {
    id: 2,
    title: "Overcoming Imposter Syndrome By Developing Your Own Guiding",
    excerpt: "Practical ways to develop confidence and systems that keep you creating with clarity.",
    date: "27 Aug, 2024",
    readTime: "20 mins",
    category: "TECHNOLOGY",
    image: "/tablet-user-interface.jpg",
  },
  {
    id: 3,
    title: "A New Pattern For The Jamstack: Segmented Rendering",
    excerpt: "An approach for performance and better cache strategies across complex pages.",
    date: "27 Aug, 2024",
    readTime: "20 mins",
    category: "SPORTS",
    image: "/cycling-outdoors.jpg",
  },
  {
    id: 4,
    title: "Resolving Conflicts Between Designers And Engineers",
    excerpt: "Collaboration tactics to move faster and reduce product friction.",
    date: "27 Aug, 2024",
    readTime: "20 mins",
    category: "FASHION",
    image: "/designers-collaboration.jpg",
  },
  {
    id: 5,
    title: "The Growing Need For Effective Password Management",
    excerpt: "From personal use to enterprise environments, tips to stay secure.",
    date: "27 Aug, 2024",
    readTime: "20 mins",
    category: "FIGHTER",
    image: "/cyber-security-mask.jpg",
  },
  {
    id: 6,
    title: "Smashing Podcast Ep 58: What Is CX Design?",
    excerpt: "Understanding customer experience beyond UX and UI.",
    date: "27 Aug, 2024",
    readTime: "20 mins",
    category: "APPETIZER",
    image: "/strawberries-plate.jpg",
  },
  {
    id: 7,
    title: "Fine-Grained Access Handling And Data Management Security",
    excerpt: "When to use scopes, roles, and policies for safer systems.",
    date: "27 Aug, 2024",
    readTime: "20 mins",
    category: "TECHNOLOGY",
    image: "/smart-speaker-on-desk.jpg",
  },
  {
    id: 8,
    title: "A Comprehensive Checklist For Running Design Workshops",
    excerpt: "Templates and exercises to run effective sessions with stakeholders.",
    date: "27 Aug, 2024",
    readTime: "20 mins",
    category: "TRAVEL",
    image: "/camel-desert.jpg",
  },
  {
    id: 9,
    title: "How To Protect Your App With A Model Based On JSONDiff",
    excerpt: "Detect and roll back undesired changes with minimal overhead.",
    date: "27 Aug, 2024",
    readTime: "20 mins",
    category: "CRYPTO",
    image: "/gold-coins-closeup.jpg",
  },
  {
    id: 10,
    title: "How To Design An Effective Area User Onboarding Flow",
    excerpt: "Make the first-run experience welcoming and frictionless.",
    date: "27 Aug, 2024",
    readTime: "20 mins",
    category: "SPORTS",
    image: "/swimmer-training.jpg",
  },
]

const recentNews = [
  { title: "Inspiring Web Design And UX Showcases", tag: "ADVENTURE" },
  { title: "Getting Internationalization Right With Remix And", tag: "CULTURE" },
  { title: "A Step-By-Step Guide To Building Accessible Carousels", tag: "TRAVEL" },
]

const hotCategories = [
  { name: "TECHNOLOGY", image: "/tech-category-image.jpg" },
  { name: "MOBILE", image: "/mobile-phones-flatlay.jpg" },
  { name: "GADGET", image: "/gadget-dashboard.jpg" },
  { name: "NEWS", image: "/newspaper-daily-news.jpg" },
]

export default function CategorySlugPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 container mx-auto px-6 lg:px-10 xl:px-12 py-8">
        <div className="mb-8 overflow-hidden rounded-xl border border-border/40">
          <Image
            src="/images/categories-reference.jpg"
            alt="Categories reference layout"
            width={1600}
            height={420}
            priority
            className="h-52 w-full object-cover"
          />
        </div>

        <div className="grid gap-10 lg:grid-cols-3">
          {/* Content */}
          <section className="lg:col-span-2 grid gap-8 sm:grid-cols-2">
            {posts.map((post, idx) => (
              <Card 
                key={post.id} 
                className="group overflow-hidden hover:shadow-sm p-0 transition-all duration-200 active:scale-95 active:shadow-lg"
                data-aos="fade-up"
                data-aos-easing="ease"
                data-aos-duration="800"
                data-aos-delay={idx * 100}
              >
                <Link href="/detail-blog" className="block">
                  {/* Image */}
                  <div className="relative">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      width={520}
                      height={280}
                      className="h-56 w-full object-cover transition-all duration-200 group-active:scale-95 group-active:shadow-lg"
                    />
                    <Badge className="absolute left-3 top-3 rounded px-2 py-1 text-[11px] tracking-wide">
                      {post.category}
                    </Badge>
                  </div>

                  {/* Title */}
                  <CardHeader className="pb-1 pt-4 px-4">
                    <CardTitle className="text-balance text-lg leading-snug line-clamp-2">
                      {post.title}
                    </CardTitle>
                  </CardHeader>

                  {/* Content */}
                  <CardContent className="text-sm text-muted-foreground px-4 pb-4">
                    {/* Star Rating */}
                    <div className="flex items-center gap-1 text-primary mb-3" aria-label="5 out of 5 stars">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                      ))}
                    </div>

                    {/* Excerpt */}
                    <p className="leading-6 line-clamp-3">{post.excerpt}</p>
                  </CardContent>
                </Link>
              </Card>
            ))}
          </section>

          {/* Sidebar */}
          <aside className="space-y-8">
            {/* Search Card */}
            <Card data-aos="fade-right" data-aos-duration="700" className="transition-all duration-200 active:scale-95 active:shadow-lg">
              <CardHeader>
                <CardTitle>Search</CardTitle>
              </CardHeader>
              <CardContent className="flex gap-2">
                <Input placeholder="Search here..." />
                <Button>Go</Button>
              </CardContent>
            </Card>

            {/* Categories Card */}
            <Card data-aos="fade-left" data-aos-duration="700" className="transition-all duration-200 active:scale-95 active:shadow-lg">
              <CardHeader>
                <CardTitle>Categories</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {hotCategories.map((category) => (
                  <Link
                    key={category.name}
                    href="#"
                    className="group block overflow-hidden rounded-lg border border-border/40"
                  >
                    <div className="relative">
                      <Image
                        src={category.image || "/placeholder.svg"}
                        alt={category.name}
                        width={640}
                        height={160}
                        className="h-20 w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent" />
                      <div className="absolute left-3 top-2 flex items-center gap-2">
                        <Badge variant="secondary" className="text-[11px]">
                          {category.name}
                        </Badge>
                        <ArrowUpRight className="h-4 w-4 text-foreground/80" />
                      </div>
                    </div>
                  </Link>
                ))}
              </CardContent>
            </Card>

            {/* Trending UMKM Card */}
            <Card data-aos="fade-up" data-aos-duration="700" className="transition-all duration-200 active:scale-95 active:shadow-lg">
              <CardHeader>
                <CardTitle>Trending UMKM</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {recentNews.map((news, index) => (
                  <div key={index} className="space-y-1">
                    <Badge variant="outline" className="text-[10px]">
                      {news.tag}
                    </Badge>
                    <Link href="#" className="block text-sm leading-6 hover:text-primary">
                      {news.title}
                    </Link>
                    <Separator />
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Newsletter Card */}
            <Card className="bg-primary text-primary-foreground transition-all duration-200 active:scale-95 active:shadow-lg" data-aos="zoom-in" data-aos-duration="700">
              <CardHeader>
                <CardTitle>Daftarkan UMKM Kamu Di Sini!</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm/6 opacity-90">
                  Promosikan usahamu dan bergabung bersama komunitas pelaku UMKM inspiratif.
                  Cukup kirimkan detail bisnis kamu melalui email kami.
                </p>

                <Button
                  variant="secondary"
                  className="w-full font-semibold"
                  asChild
                >
                  <Link href="/login">
                    Daftar Sekarang
                  </Link>
                </Button>

              </CardContent>
            </Card>

          </aside>
        </div>

        {/* Pagination */}
        <div className="mt-12 flex items-center justify-center gap-2">
          <Button variant="outline" size="icon" aria-label="Page 1">
            1
          </Button>
          <Button variant="ghost" size="icon" aria-label="Page 2">
            2
          </Button>
        </div>
      </main>

      <Footer />
    </div>
  )
}
