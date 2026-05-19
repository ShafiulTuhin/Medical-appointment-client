import Image from "next/image";
import Link from "next/link";
import React from "react";

const TopDoctors = async () => {
  const res = await fetch("http://localhost:5000/top-doctors", {
    cache: "no-store",
  });

  const doctors = await res.json();

  return (
    <section className="py-16 px-4 md:px-10 bg-gradient-to-b from-cyan-50 to-white">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          🌟 Top Rated Doctors
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {doctors.map((doc, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2 animate-fadeIn"
            >
              {/* Image */}
              <div className="relative w-full h-56">
                <Image
                  src={doc.image}
                  alt={doc.name}
                  fill
                  className="object-cover object-top group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-5 space-y-3">
                <h3 className="text-xl font-semibold text-gray-800">
                  {doc.name}
                </h3>

                <p className="text-cyan-600 font-medium">{doc.specialty}</p>

                {/* Availability */}
                <div className="flex flex-wrap gap-2">
                  {doc.availability?.slice(0, 2).map((time, i) => (
                    <span
                      key={i}
                      className="text-xs bg-cyan-100 text-cyan-700 px-3 py-1 rounded-full"
                    >
                      {time}
                    </span>
                  ))}
                </div>

                {/* Booking count */}
                <p className="text-sm text-gray-600">
                  📅 Bookings:{" "}
                  <span className="font-semibold text-gray-800">
                    {doc.bookingCount}
                  </span>
                </p>

                {/* Button */}
                <Link href={`/appointment/${doc.id}`}>
                  <button className="w-full mt-3 bg-cyan-500 text-white py-2 rounded-xl hover:bg-cyan-600 transition cursor-pointer">
                    Book Appointment
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopDoctors;
