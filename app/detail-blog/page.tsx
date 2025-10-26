"use client";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { useState } from "react";

export default function BlogPage() {
  const [commentRating, setCommentRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);

  // Komponen Stars untuk display saja (tidak interaktif)
  function DisplayStars({
    value = 5,
    className = "",
  }: {
    value?: number;
    className?: string;
  }) {
    return (
      <div
        className={`flex items-center gap-1 ${className}`}
        aria-label={`${value} star rating`}
      >
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className="h-4 w-4 text-primary"
            fill={i < value ? "currentColor" : "none"}
            aria-hidden="true"
          />
        ))}
      </div>
    );
  }

  // Komponen Stars yang interaktif untuk form
  function InteractiveStars({
    value = 0,
    onChange,
    className = "",
  }: {
    value?: number;
    onChange?: (value: number) => void;
    className?: string;
  }) {
    return (
      <div
        className={`flex items-center gap-1 ${className}`}
        aria-label={`${value} star rating`}
      >
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            type="button"
            className="focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded transition-transform hover:scale-110"
            onClick={() => onChange?.(star)}
            onMouseEnter={() => setHoverRating(star)}
            onMouseLeave={() => setHoverRating(0)}
            aria-label={`Rate ${star} stars`}
          >
            <Star
              className="h-6 w-6 text-primary cursor-pointer transition-colors"
              fill={star <= (hoverRating || value) ? "currentColor" : "none"}
              aria-hidden="true"
            />
          </button>
        ))}
        {value > 0 && (
          <span className="ml-2 text-sm text-muted-foreground">
            {value} {value === 1 ? "star" : "stars"}
          </span>
        )}
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <Header />

      <main className="flex-1 container mx-auto px-6 lg:px-10 xl:px-12 py-8">
        {/* Cover image */}
        <div className="overflow-hidden rounded-xl border bg-card">
          <Image
            src="/umkm/antique-batik.jpg"
            alt="Modern UI navigation interface showing menu structures and user flow"
            width={1600}
            height={900}
            className="h-72 w-full object-cover sm:h-[26rem]"
            priority
          />
        </div>

        {/* Layout: Artikel + Sidebar */}
        <div className="mt-8 ">
          {/* Artikel */}
          <article className="lg:col-span-8 text-center">
            <header className="mb-8">
              <h1 className="text-center text-pretty text-3xl font-semibold leading-tight sm:text-4xl">
                Antique Batik by Febby
              </h1>
            </header>

            <div className="prose prose-lg max-w-none dark:prose-invert prose-headings:font-semibold text-justify">
              <p className="mb-6">
                Antique Batik Malang adalah toko ternama di Indonesia yang
                dikenal karena produk batik berkualitas tinggi serta desainnya
                yang unik. Pengunjung sering memuji koleksi gaun indah, pakaian
                menawan, dan ragam pilihan batik yang disajikan dengan cita rasa
                seni tinggi.
              </p>

              <p className="mb-6">
                Meskipun sebagian wisatawan domestik menganggap harganya sedikit
                mahal, banyak pelanggan tetap merekomendasikan tempat ini karena
                batik lukis tangan dan kain tradisional eksklusif yang sulit
                ditemukan di tempat lain. Pengalaman berbelanja semakin berkesan
                berkat keramahan pemilik toko yang selalu menyambut pelanggan
                dengan senyum hangat dan cerita tentang filosofi di balik setiap
                motif batik. Antique Batik Malang juga dikenal sebagai{" "}
                <em>Pasar Buku dan Barang Antik</em> — destinasi menarik bagi
                para penggemar barang antik dan pencinta benda-benda bersejarah.
                Di sini, nuansa nostalgia berpadu dengan keindahan budaya lokal,
                menciptakan suasana yang tenang namun penuh cerita.
              </p>

              <p className="mb-6">
                Saat berkeliling di antara kios-kios yang ramai, pengunjung
                dapat menemukan berbagai macam koleksi, mulai dari koin kuno,
                perhiasan berdesain klasik, hingga mainan masa lampau dan
                artefak sejarah. Setiap sudut pasar menyimpan kisah, setiap
                barang memiliki nilai tersendiri bagi para pencinta seni dan
                sejarah.
              </p>

              <p className="mb-6">
                Antique Batik Malang bukan hanya tempat berbelanja, melainkan
                perjalanan waktu — di mana tradisi, keindahan, dan kenangan
                berpadu dalam setiap helai kain Barang-barang yang ditawarkan di
                Antique Batik Malang dikenal memiliki kualitas tinggi dan
                keaslian yang terjaga. Setiap karya batik dibuat dengan sentuhan
                tangan para pengrajin lokal, membawa semangat tradisi Jawa Timur
                yang kuat.
              </p>

              <div className="my-8 flex justify-center">
                <div className="w-full max-w-3xl">
                  <Image
                    src="/images/detail-blog.jpg"
                    alt="Antique Batik Malang - toko batik dan pasar barang antik di Malang"
                    width={800}
                    height={450}
                    className="rounded-lg border shadow-sm"
                  />
                  <p className="mt-2 text-center text-sm text-muted-foreground">
                    Suasana hangat dan klasik di Antique Batik Malang
                  </p>
                </div>
              </div>

              <p className="mb-6">
                Mengunjungi Antique Batik Malang bukan sekadar kegiatan belanja
                — melainkan pengalaman budaya. Dari setiap kain batik yang halus
                hingga setiap benda antik yang berdebu, pengunjung dapat
                merasakan kehangatan, cerita, dan nilai estetika yang hidup di
                baliknya. Antique Batik Malang bukan hanya tempat berbelanja,
                melainkan perjalanan waktu — di mana tradisi, keindahan, dan
                kenangan berpadu dalam setiap helai kain
              </p>

              <p className="mb-6">
                Bagi siapa pun yang berkunjung ke Malang, tempat ini menjadi
                perhentian wajib untuk menikmati perpaduan antara keindahan
                batik dan pesona masa lalu yang abadi.
              </p>
            </div>

            {/* Share + Separator */}
            <div className="my-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex gap-2">
                <Button variant="secondary" size="sm">
                  Instagram
                </Button>
                <Button variant="secondary" size="sm">
                  Facebook
                </Button>
                <Button variant="secondary" size="sm">
                  Twitter
                </Button>
              </div>
            </div>
            <Separator />

            {/* Comments Section */}
            <section className="mt-8 w-full" aria-labelledby="comments-title">
              <h2 id="comments-title" className="mb-6 text-2xl font-semibold">
                Community Discussion
              </h2>

              <div className="space-y-6">
                {[
                  {
                    name: "David Kim",
                    text: "The practical tips about breadcrumb implementation were exactly what I needed for our current project. The examples were clear and immediately applicable.",
                    rating: 5,
                  },
                  {
                    name: "Maria Lopez",
                    text: "As a product manager, I found the cognitive load section particularly insightful. We often underestimate how small navigation decisions impact user satisfaction.",
                    rating: 4,
                  },
                  {
                    name: "Alex Thompson",
                    text: "The visual hierarchy principles mentioned here helped us redesign our main navigation. User testing showed a 30% improvement in task completion time.",
                    rating: 5,
                  },
                ].map((comment, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <Avatar className="h-10 w-10">
                      <AvatarFallback className="bg-primary/10">
                        {comment.name.slice(0, 2).toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                    <Card className="flex-1">
                      <CardContent className="p-4">
                        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                          <div className="font-medium text-sm">
                            {comment.name}
                          </div>
                          <DisplayStars value={comment.rating} />
                        </div>
                        <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                          {comment.text}
                        </p>
                        <div className="mt-3 text-xs text-muted-foreground">
                          Posted 2 days ago
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>

              {/* Comment Form */}
              <Card className="mt-8">
                <CardHeader>
                  <CardTitle>What do you think about this?</CardTitle>
                </CardHeader>
                <CardContent className="grid gap-4">
                  <div className="flex items-center gap-3">
                    <span className="text-sm text-muted-foreground">
                      Your rating
                    </span>
                    <InteractiveStars
                      value={commentRating}
                      onChange={setCommentRating}
                    />
                  </div>
                  <Textarea
                    placeholder="Share your thoughts, questions, or experiences with this antique batik store..."
                    rows={5}
                    className="resize-none"
                  />
                  <div className="flex justify-end">
                    <Button className="px-6">Post Comment</Button>
                  </div>
                </CardContent>
              </Card>
            </section>
          </article>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
