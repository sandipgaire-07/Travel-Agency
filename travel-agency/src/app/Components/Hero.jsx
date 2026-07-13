"use client";
import heroSlides from "../data/hero";
import { useState, useEffect } from "react";

function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === heroSlides.length - 1 ? 0 : prev + 1));
    }, 4000);

     return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen min-h-[100svh]">
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-1000"
        style={{
          backgroundImage: `url(${heroSlides[current].image})`,
        }}
      ></div>

      <div className="absolute inset-0 bg-black/45"></div>

      <div className="relative flex items-center min-h-[100svh] px-6 md:px-16">
        <div className="max-w-3xl text-white" data-aos="fade-up">
          <h1 className="text-shadow-hero font-[var(--font-heading)] text-4xl font-bold leading-tight md:text-6xl">
            Explore the world!!
          </h1>
          <p className="text-shadow-soft mt-4 text-lg text-slate-100 md:text-2xl">
            Discover beautiful places and create unforgettable memories.
          </p>
          <button className="mt-6 rounded-lg bg-amber-500 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-slate-900 transition hover:bg-amber-400">
              Explore Now
          </button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 gap-3">
        {heroSlides.map((slide, index) => (
          <button
            key={slide.id ?? index}
            onClick={() => setCurrent(index)}
            className={`h-3 w-3 rounded-full transition ${
              current === index ? "bg-white" : "bg-white/40"
            }`}
          ></button>
        ))}
      </div>
    </section>
  );
}
export default Hero;