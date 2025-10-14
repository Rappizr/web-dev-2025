import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { Star } from "lucide-react"

export default function BlogPage() {
  function Stars({ value = 5, className = "" }: { value?: number; className?: string }) {
    return (
      <div className={`flex items-center gap-1 ${className}`} aria-label={`${value} star rating`}>
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className="h-4 w-4 text-primary"
            fill={i < value ? "currentColor" : "none"}
            aria-hidden="true"
          />
        ))}
      </div>
    )
  }

  return (
    <main className="container mx-auto px-6 lg:px-8 py-8">
      {/* Breadcrumbs */}
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/">Home</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/blog">Blog</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Navigation System Doesn&apos;t Work in Space?</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      {/* Cover image */}
      <div className="mt-6 overflow-hidden rounded-xl border bg-card">
        <Image
          src="/images/blog-hero.jpg"
          alt="Blog cover showing UI navigation examples"
          width={1600}
          height={900}
          className="h-72 w-full object-cover sm:h-[26rem]"
          priority
        />
      </div>

      {/* Layout: Article + Sidebar */}
      <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-12">
        {/* Article */}
        <article className="lg:col-span-8">
          <header className="mb-6">
            <h1 className="text-pretty text-3xl font-semibold leading-tight sm:text-4xl">
              Navigation System Doesn&apos;t Work in Space
            </h1>
            <div className="mt-3 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="/placeholder-user.jpg" alt="Author avatar" />
                  <AvatarFallback>JS</AvatarFallback>
                </Avatar>
                <span>James Stone</span>
              </div>
              <span>•</span>
              <time dateTime="2025-10-11">Oct 11, 2025</time>
              <span>•</span>
              <div className="flex items-center gap-2">
                <Badge variant="secondary">Design</Badge>
                <Badge variant="secondary">UX</Badge>
              </div>
            </div>
            <Stars className="mt-2" value={5} />
          </header>

          <div className="prose prose-neutral max-w-none dark:prose-invert">
            <p>
              Great navigation helps people find value quickly. In this article we explore common pitfalls and practical
              patterns that scale from landing pages to complex product UIs.
            </p>
            <p>
              While space is a fun metaphor, the reality is your users are navigating busy contexts on small screens.
              Minimizing friction and surfacing clear wayfinding is essential.
            </p>

            <h2>Where can I get some?</h2>
            <p>
              Start with a clear information hierarchy and predictable placement. Use breadcrumbs to orient, tabs to
              group related content, and progressive disclosure for advanced options.
            </p>

            <blockquote>
              <p>"Good design is making something intelligible and memorable."</p>
            </blockquote>

            <p>
              Test your navigation early with simple click-through prototypes. Validate labels with real users and avoid
              creative jargon. Consistency beats cleverness every time.
            </p>

            <h3>Elements that help visual composition</h3>
            <ul>
              <li>Consistent spacing scale and typographic rhythm</li>
              <li>Clear affordances for clickable regions</li>
              <li>Feedback on state: current, hover, focus, active</li>
            </ul>

            {/* Updated image container with smaller size and centered alignment */}
            <div className="my-6 flex justify-center">
              <div className="w-full max-w-2xl">
                <Image
                  src="/public/placeholder.jpg"
                  alt="UI mockup"
                  width={800}
                  height={500}
                  className="rounded-lg border"
                />
              </div>
            </div>

            <h2>You might also like</h2>
            <ul className="list-inside list-disc">
              <li>
                <Link href="#" className="underline hover:text-primary">
                  Practical Breadcrumbs in Modern UIs
                </Link>
              </li>
              <li>
                <Link href="#" className="underline hover:text-primary">
                  Large Menus That Don&apos;t Overwhelm
                </Link>
              </li>
              <li>
                <Link href="#" className="underline hover:text-primary">
                  Designing for Cognitive Load
                </Link>
              </li>
            </ul>
          </div>

          {/* Share + Separator */}
          <div className="my-8 flex items-center justify-between">
            <div className="text-sm text-muted-foreground">Share this article</div>
            <div className="flex gap-2">
              <Button variant="secondary" size="sm">
                Twitter
              </Button>
              <Button variant="secondary" size="sm">
                LinkedIn
              </Button>
              <Button variant="secondary" size="sm">
                Copy Link
              </Button>
            </div>
          </div>
          <Separator />

          {/* Comments - Full width section */}
          <section className="mt-8 w-full" aria-labelledby="comments-title">
            <h2 id="comments-title" className="mb-4 text-xl font-semibold">
              Comments
            </h2>

            <div className="space-y-6">
              {[
                { name: "David K.", text: "Loved the practical tips—breadcrumbs are underrated.", rating: 5 },
                { name: "Maria Lopez", text: "The quote resonated. Consistency really is everything.", rating: 4 },
              ].map((c, i) => (
                <div key={i} className="flex items-start gap-4">
                  <Avatar className="h-9 w-9">
                    <AvatarFallback>{c.name.slice(0, 2).toUpperCase()}</AvatarFallback>
                  </Avatar>
                  <Card className="w-full">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between gap-3">
                        <div className="text-sm font-medium">{c.name}</div>
                        <Stars value={c.rating} />
                      </div>
                      <p className="mt-2 text-sm text-muted-foreground">{c.text}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>

            {/* Comment form */}
            <Card className="mt-6 w-full">
              <CardHeader>
                <CardTitle>Leave a comment</CardTitle>
              </CardHeader>
              <CardContent className="grid gap-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <Input placeholder="Name" />
                  <Input placeholder="Email" type="email" />
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground">Your rating</span>
                  <Stars value={5} />
                </div>
                <Textarea placeholder="Comment" rows={5} />
                <div className="flex justify-end">
                  <Button>Post Comment</Button>
                </div>
              </CardContent>
            </Card>
          </section>
        </article>

        {/* Sidebar */}
        <aside className="lg:col-span-4 space-y-6">
          {/* Author card */}
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Hello, I&apos;m James</CardTitle>
            </CardHeader>
            <CardContent className="flex items-center gap-3">
              <Avatar className="h-12 w-12">
                <AvatarImage src="/placeholder-user.jpg" alt="James" />
                <AvatarFallback>JS</AvatarFallback>
              </Avatar>
              <p className="text-sm text-muted-foreground">
                Designer and writer who loves clean interfaces and delightful details.
              </p>
            </CardContent>
          </Card>

          {/* Trending posts */}
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Trending Posts</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {["The Clarity Secret in Nav", "Microcopy that Reduces Friction", "Accessible Menu Patterns"].map(
                (t, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="mt-1 h-2 w-2 rounded-full bg-primary" />
                    <Link href="#" className="text-sm hover:underline">
                      {t}
                    </Link>
                  </div>
                ),
              )}
            </CardContent>
          </Card>

          {/* Categories */}
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Categories</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              {["Design", "UX", "Research", "Product"].map((c) => (
                <Badge key={c} variant="secondary">
                  {c}
                </Badge>
              ))}
            </CardContent>
          </Card>

          {/* Newsletter */}
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Get the best stories</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-3">
              <Input placeholder="Enter your email" type="email" />
              <Button>Subscribe</Button>
            </CardContent>
          </Card>
        </aside>
      </div>
    </main>
  )
}