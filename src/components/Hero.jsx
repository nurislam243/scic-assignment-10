"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import Link from "next/link";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import Image from "next/image";
import "swiper/css";
import "swiper/css/effect-fade";

export default function HeroSlider() {
  const slides = ["/banner3.webp", "/banner1.webp", "/banner2.webp", "/banner4.webp"];

  return (
    <section className="relative h-[80vh] text-white overflow-hidden">
      {/* Background Swiper */}
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop
        className="absolute top-0 left-0 w-full h-full"
      >
        {slides.map((img, idx) => (
          <SwiperSlide key={idx}>
            <div className="w-full h-full relative">
              <Image
                src={img}
                alt={`Slide ${idx + 1}`}
                fill
                priority={idx === 0}
                className="object-cover"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-black/60"></div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Overlay Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-20">
        {/* Animated Heading */}
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <Typewriter
            words={[
              "Welcome to Shopnex",
              "Shop Smart, Live Better",
              "Discover Amazing Deals",
            ]}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={100}
            deleteSpeed={60}
            delaySpeed={2000}
          />
        </motion.h1>

        {/* Animated Paragraph */}
        <motion.p
          className="text-base sm:text-lg max-w-2xl mx-auto mb-6 drop-shadow-md"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
        >
          Your one-stop platform for all your shopping needs. Discover products,
          compare prices, and shop smarter with Shopnex.
        </motion.p>

        {/* Animated Button */}
        <motion.div
          className="flex justify-center gap-4"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
        >
          <Link
            href="/products"
            className="btn btn-primary btn-lg rounded-2xl shadow-lg"
          >
            Explore Products
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
