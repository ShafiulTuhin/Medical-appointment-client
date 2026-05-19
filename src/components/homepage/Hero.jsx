"use client";

import { useEffect, useState } from "react";
import { Button } from "@heroui/react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { CalendarCheck, HeartPulse, Stethoscope } from "lucide-react";

const slides = [
  {
    id: 1,
    title: "Book Doctor Appointments Easily",
    description:
      "Find trusted doctors and schedule appointments online anytime.",
    image:
      "https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=1400&auto=format&fit=crop",
    icon: <CalendarCheck size={24} />,
  },

  {
    id: 2,
    title: "Your Health Is Our First Priority",
    description: "Get fast access to healthcare professionals from your home.",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1400&auto=format&fit=crop",
    icon: <HeartPulse size={24} />,
  },

  {
    id: 3,
    title: "Trusted Doctors & Modern Care",
    description: "Experience secure and smart healthcare appointment booking.",
    image:
      "https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=1400&auto=format&fit=crop",
    icon: <Stethoscope size={24} />,
  },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const slider = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(slider);
  }, []);

  return (
    <section className="relative h-[90vh] overflow-hidden">
      {/* Background Slides */}
      <AnimatePresence mode="wait">
        <motion.div
          key={slides[currentSlide].id}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <img
            src={slides[currentSlide].image}
            alt="Medical Banner"
            className="w-full h-full object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/55" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 w-full">
          <div className="max-w-3xl text-white">
            {/* Animated Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-5 py-2 rounded-full mb-6 border border-white/20"
            >
              {slides[currentSlide].icon}
              <span className="font-medium">Smart Healthcare Platform</span>
            </motion.div>

            {/* Animated Heading */}
            <AnimatePresence mode="wait">
              <motion.h1
                key={slides[currentSlide].title}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.7 }}
                className="text-4xl md:text-6xl font-extrabold leading-tight mb-6"
              >
                {slides[currentSlide].title}
              </motion.h1>
            </AnimatePresence>

            {/* Animated Description */}
            <AnimatePresence mode="wait">
              <motion.p
                key={slides[currentSlide].description}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
                className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl"
              >
                {slides[currentSlide].description}
              </motion.p>
            </AnimatePresence>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link href={"/appointment"}>
                {" "}
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-lg text-white font-semibold px-8"
                >
                  Book Appointment
                </Button>
              </Link>

              <Button
                size="lg"
                variant="bordered"
                className="border-white text-white font-semibold px-8"
              >
                Find Doctors
              </Button>
            </motion.div>

            {/* Slider Dots */}
            <div className="flex gap-3 mt-10">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-3 rounded-full transition-all duration-300 ${
                    currentSlide === index
                      ? "w-10 bg-[#15A1BF]"
                      : "w-3 bg-white/50"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
