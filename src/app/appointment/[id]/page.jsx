import BookingCard from "@/components/booking/BookingCard";
import DeleteAppointment from "@/components/DeleteAppointment";
import EditModal from "@/components/EditModal";
import { authClient } from "@/lib/auth-client";

import Image from "next/image";
import React from "react";

const AppointmentDetailPage = async ({ params }) => {
  // const { data } = authClient.useSession();
  // const user = data?.user;
  const { id } = await params;

  const res = await fetch(`http://localhost:5000/appointment/${id}`, {
    cache: "no-store",
  });

  const appointment = await res.json();

  const {
    image,
    doctorName,
    hospital,
    specialty,
    availability,
    fee,
    location,
    experience,
    description,
  } = appointment;

  return (
    <div className="container mx-auto min-h-screen bg-gradient-to-br from-cyan-50 via-white to-emerald-50 py-10 px-4">
      <div className="flex justify-end gap-4 mb-5">
        <EditModal appointment={appointment} />
        <DeleteAppointment appointment={appointment} />
      </div>

      <div className="max-w-5xl mx-auto">
        {/* Card */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-cyan-100">
          {/* Doctor Image */}
          <div className="flex justify-center pt-8 px-4">
            <div className="relative w-full md:w-1/2 h-[350px] rounded-3xl overflow-hidden border-4 border-cyan-200 shadow-lg">
              <Image
                src={image}
                alt={doctorName}
                fill
                className="object-cover object-top"
              />
            </div>
          </div>

          {/* Details */}
          <div className="p-6 md:p-10">
            {/* Doctor Name */}
            <div className="text-center mb-8">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
                Dr. {doctorName}
              </h1>

              <p className="text-cyan-600 text-lg mt-2 font-medium">
                {specialty}
              </p>
            </div>

            {/* Info Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-cyan-50 rounded-2xl p-5 border border-cyan-100">
                <h3 className="text-sm text-gray-500 mb-1">Hospital</h3>
                <p className="text-lg font-semibold text-gray-800">
                  {hospital}
                </p>
              </div>

              <div className="bg-emerald-50 rounded-2xl p-5 border border-emerald-100">
                <h3 className="text-sm text-gray-500 mb-1">Experience</h3>
                <p className="text-lg font-semibold text-gray-800">
                  {experience} Years
                </p>
              </div>

              <div className="bg-cyan-50 rounded-2xl p-5 border border-cyan-100">
                <h3 className="text-sm text-gray-500 mb-1">Location</h3>
                <p className="text-lg font-semibold text-gray-800">
                  {location}
                </p>
              </div>

              <div className="bg-emerald-50 rounded-2xl p-5 border border-emerald-100">
                <h3 className="text-sm text-gray-500 mb-1">Consultation Fee</h3>
                <p className="text-lg font-semibold text-gray-800">${fee}</p>
              </div>
            </div>

            {/* Availability */}
            <div className="mt-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Availability
              </h2>

              <div className="flex flex-wrap gap-3">
                {availability?.map((day, index) => (
                  <span
                    key={index}
                    className="px-5 py-2 bg-cyan-100 text-cyan-700 rounded-full font-medium"
                  >
                    {day}
                  </span>
                ))}
              </div>
            </div>

            {/* Description */}
            <div className="mt-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                About Doctor
              </h2>

              <p className="text-gray-600 leading-8 text-[17px]">
                {description}
              </p>
            </div>

            {/* COnfirm booking */}
            <BookingCard appointment={appointment} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentDetailPage;
