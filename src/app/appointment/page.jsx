import AppointmentCard from "@/components/AppointmentCard";
import SearchAppointments from "@/components/SearchAppointment";
import { Button } from "@heroui/react";
import Link from "next/link";
import React from "react";

const AppointmentPage = async ({ searchParams }) => {
  const { search } = await searchParams;
  console.log(search);

  const res = await fetch("http://localhost:5000/appointment", {
    cache: "no-store",
  });
  const appointments = await res.json();
  let searchItems = appointments;

  if (search) {
    searchItems = searchItems.filter(
      (appointment) =>
        appointment.doctorName.toLowerCase().includes(search.toLowerCase()) ||
        appointment.hospital.toLowerCase().includes(search.toLowerCase()),
    );
  }
  return (
    <div className="mt-5 w-full rounded-3xl border border-default-200 bg-white/70 backdrop-blur-md shadow-md p-4 md:p-6">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        {/* Left Content */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-primary">
            Get your appointment
          </h2>
          <p className="text-default-500 mt-1 text-sm md:text-base">
            Search and manage doctor appointments easily.
          </p>
        </div>

        {/* Right Actions */}
        <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
          {/* Search Box */}
          {/* <div className="flex w-full sm:w-auto items-center">
            <input
              type="text"
              placeholder="Search doctor, patient..."
              className="w-full sm:w-64 border border-default-300 px-4 py-2 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 rounded-l-lg"
            />

            <Button
              color="primary"
              className="rounded-none bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-r-lg px-5 font-medium py-[22px]"
            >
              Search
            </Button>
          </div> */}
          <SearchAppointments />

          {/* Add Appointment */}
          <Link href={"/appointment/add-appointment"}>
            <Button
              color="success"
              className="w-full sm:w-auto rounded-xl px-5 py-[22px] font-medium bg-gradient-to-r from-cyan-500 to-emerald-500"
            >
              Add Appointment
            </Button>
          </Link>
        </div>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-4 grid-cols-1 gap-4">
        {searchItems.map((app) => (
          <AppointmentCard key={app._id} appointment={app} />
        ))}
      </div>
    </div>
  );
};

export default AppointmentPage;
