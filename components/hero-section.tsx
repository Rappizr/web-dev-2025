export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[var(--color-hero-gradient-from)] to-[var(--color-hero-gradient-to)] text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="max-w-4xl">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-6 text-balance">
            Lorem Ipsum Dolor Sit Amet
          </h1>
          <p className="text-lg sm:text-xl text-white/90 max-w-2xl leading-relaxed">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio dolorum tenetur, fugiat et doloribus sequi modi vero? Sint consectetur eum, beatae reiciendis eos illo.
          </p>
        </div>
      </div>

      {/* Decorative overlay text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10 pointer-events-none">
        <div className="text-[12rem] font-bold whitespace-nowrap">ini nanti gambar</div>
      </div>
    </section>
  )
}
