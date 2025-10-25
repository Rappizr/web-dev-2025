"use client";
import dynamic from 'next/dynamic';
import useEmblaCarousel from 'embla-carousel-react';
import React from 'react';
import Link from 'next/link';

const heroSlides = [
  {
    video: "/video/video1.mp4",
    title: "Selamat Datang di UMK Malang",
    desc: "Sebuah platform digital untuk pertumbuhan bisnis lokal.",
    button: "Mulai Sekarang",
  },
  {
    video: "/video/video2.mp4",
    title: "Solusi Digital UMKM",
    desc: "Promosikan produk dan perluas jangkauan pelanggan dengan teknologi digital.",
    button: "Mulai Sekarang",
  },
  {
    video: "/video/video3.mp4",
    title: "Kenali dan Kenalkan UMKM Lokal",
    desc: "Inspirasi bersama pelaku bisnis & kreator lokal.",
    button: "Mulai Sekarang",
  },
];

export function HeroSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, skipSnaps: false });
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const slideCount = heroSlides.length;

  React.useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();

    let timer = setInterval(() => {
      emblaApi.scrollNext();
    }, 6000); // 6 detik per slide

    return () => {
      clearInterval(timer);
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  return (
    <section className="relative w-full overflow-hidden text-white min-h-screen flex items-center justify-center -mt-20">
      <div className="embla w-full h-full" ref={emblaRef}>
        <div className="embla__container flex">
          {heroSlides.map((slide, idx) => (
            <div className="embla__slide min-w-full" key={idx}>
              <div className="relative w-full h-screen flex items-center justify-center">
                {/* Video background */}
                <video
                  className="absolute inset-0 w-full h-full object-cover"
                  src={slide.video}
                  autoPlay
                  loop
                  muted
                  playsInline
                />

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-primary/60 to-background/80 backdrop-blur-sm z-0" />

                {/* Content */}
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full relative z-10 flex flex-col items-center gap-8 w-full justify-center">
                  <div className="max-w-4xl mx-auto text-center" data-aos="fade-down">
                    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight mb-6 drop-shadow-xl">
                      {slide.title}
                    </h1>
                    <p
                      className="text-xl sm:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed mb-8"
                      data-aos="fade-up"
                      data-aos-delay="200"
                    >
                      {slide.desc}
                    </p>
                    <Link 
                      href="/categories"
                      className="inline-block bg-accent text-primary font-bold px-8 py-4 rounded-xl shadow-lg hover:bg-primary hover:text-accent transition-all duration-300 text-lg"
                      data-aos="zoom-in" 
                      data-aos-delay="400"
                    >
                      {slide.button}
                    </Link>
                  </div>

                  {/* Pagination dots */}
                  <div className="flex justify-center gap-2 mt-8 absolute left-0 right-0 bottom-8 z-20">
                    {Array.from({ length: slideCount }).map((_, i) => (
                      <button
                        key={i}
                        className={`w-3 h-3 border border-white rounded-full transition-all duration-300 shadow ${
                          selectedIndex === i
                            ? "bg-accent scale-110"
                            : "bg-white/70 opacity-70"
                        }`}
                        onClick={() => emblaApi && emblaApi.scrollTo(i)}
                        aria-label={`Go to slide ${i + 1}`}
                        style={{ outline: "none" }}
                      />
                    ))}
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute right-10 bottom-10 w-32 h-32 rounded-full bg-accent/30 blur-2xl animate-pulse" />
                <div className="absolute left-10 top-10 w-24 h-24 rounded-full bg-primary/40 blur-xl animate-pulse" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
