import Image from "next/image";
import Link from "next/link";
import React from "react";

const targets = [
  {
    title: "Easy Doctor Booking",
    desc: "Book appointments in just a few clicks without any hassle.",
    image: "https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg",
  },
  {
    title: "Trusted Specialists",
    desc: "Connect with verified and experienced doctors.",
    image: "https://images.pexels.com/photos/3845126/pexels-photo-3845126.jpeg",
  },
  {
    title: "Fast Healthcare Access",
    desc: "Get quick consultation and reduce waiting time.",
    image:
      "https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg",
  },
];

const OurVision = () => {
  return (
    <section className="py-20 px-4 md:px-10 bg-gradient-to-b from-white to-cyan-50">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-5">
            🎯 What’s Our Target
          </h2>
          <p className="text-gray-500 mt-3">
            Making healthcare simple, fast, and accessible for everyone
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {targets.map((item, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative h-56 w-full overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              {/* Overlay glow */}
              <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/20 to-transparent opacity-0 group-hover:opacity-100 transition"></div>

              {/* Content */}
              <div className="p-6 space-y-2">
                <h3 className="text-xl font-semibold text-gray-800">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm">{item.desc}</p>
              </div>

              {/* Animated dot */}
              <div className="absolute top-4 right-4 w-3 h-3 bg-cyan-500 rounded-full animate-pulse"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-14">
          <Link href={"/appointment"}>
            {" "}
            <button className="px-8 py-3 cursor-pointer bg-gradient-to-r from-cyan-500 to-emerald-500 text-white rounded-xl shadow-md hover:scale-105 transition-transform duration-300">
              Start Booking Now
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default OurVision;
