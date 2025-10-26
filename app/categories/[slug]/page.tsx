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
    title: "Keripik Tempe Rohani: Camilan Legendaris Khas Malang",
    excerpt:
      "UMKM Keripik Tempe Rohani dari Kampung Sanan ini telah berdiri sejak 1988 dan menjadi ikon oleh-oleh khas Malang yang wajib dicoba.",
    date: "27 Aug, 2024",
    readTime: "8 mins",
    category: "SOUVENIR",
    image: "/umkm/keripik-tempe.jpg",
  },
  {
    id: 2,
    title: "Pia Cap Mangkok: Legenda Oleh-Oleh Malang Sejak 1959",
    excerpt:
      "Kue pia khas Malang dengan tekstur renyah dan isian kacang hijau serta varian modern — menjadi favorit wisatawan.",
    date: "27 Aug, 2024",
    readTime: "7 mins",
    category: "SOUVENIR",
    image: "/umkm/pia-mangkok.jpg",
  },
  {
    id: 3,
    title: "Bakso President: Kuliner Ikonik di Samping Rel Kereta Malang",
    excerpt:
      "Bakso President dikenal karena lokasi uniknya di samping rel kereta dan cita rasa bakso Malang yang autentik dan gurih.",
    date: "27 Aug, 2024",
    readTime: "6 mins",
    category: "KULINER",
    image: "/umkm/bakso-president.jpg",
  },
  {
    id: 4,
    title: "Cwie Mie Gloria: Cita Rasa Klasik Mie Malang Sejak 1970-an",
    excerpt:
      "Cwie Mie Gloria menyajikan mie tipis dengan ayam cincang khas Malang, resep turun-temurun yang tak lekang oleh waktu.",
    date: "27 Aug, 2024",
    readTime: "5 mins",
    category: "KULINER",
    image: "/umkm/cwie-mie.jpg",
  },
  {
    id: 5,
    title: "AntiQue Batik by Febby: Membawa Motif Batik Malang ke Dunia",
    excerpt:
      "AntiQue Batik by Febby memadukan motif khas Malang seperti Tempe dan Dele Kecer, memperkenalkan keindahan budaya lewat karya fashion.",
    date: "27 Aug, 2024",
    readTime: "9 mins",
    category: "FASHION",
    image: "/umkm/antique-batik.jpg",
  },
  {
    id: 6,
    title: "Topeng Malangan: Souvenir Seni dan Budaya Khas Malang",
    excerpt:
      "Topeng Malangan menjadi simbol seni tradisional Malang, dipahat dengan detail khas yang menjadikannya oleh-oleh bersejarah.",
    date: "27 Aug, 2024",
    readTime: "8 mins",
    category: "SOUVENIR",
    image: "/umkm/topeng-malangan.jpg",
  },
  {
    id: 7,
    title: "InJers Malang: Produksi Jersey Lokal Berkualitas Nasional",
    excerpt:
      "InJers Malang menghadirkan jersey custom dengan bahan premium dan desain kreatif, mendukung komunitas olahraga lokal hingga nasional.",
    date: "27 Aug, 2024",
    readTime: "8 mins",
    category: "FASHION",
    image: "/umkm/injers.jpg",
  },
  {
    id: 8,
    title: "Orem-Orem Arema: Kuliner Tradisional Malang yang Penuh Rasa",
    excerpt:
      "Hidangan khas berbahan tempe dan kuah santan ini merupakan cita rasa otentik Malang yang banyak dijumpai di warung lokal.",
    date: "27 Aug, 2024",
    readTime: "7 mins",
    category: "KULINER",
    image: "/umkm/orem-orem.jpg",
  },
  {
    id: 9,
    title: "Koperasi Andamel Mulyo Abadi: Pelopor Keripik Apel Batu",
    excerpt:
      "UMKM ini mengolah apel Batu menjadi keripik renyah dan manis, menjadi salah satu oleh-oleh paling populer dari Malang Raya.",
    date: "27 Aug, 2024",
    readTime: "6 mins",
    category: "SOUVENIR",
    image: "/umkm/keripik-apel.jpg",
  },
  {
    id: 10,
    title: "Awesam Malang: Distro Lokal dengan Semangat Kreatif Arek Malang",
    excerpt:
      "Brand Awesam menghadirkan kaos, jaket, dan merchandise bertema Malang dengan desain lokal yang kuat dan gaya streetwear modern.",
    date: "27 Aug, 2024",
    readTime: "9 mins",
    category: "FASHION",
    image: "/umkm/awesam.jpeg",
  },
];

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
