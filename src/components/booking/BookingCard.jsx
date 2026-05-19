"use client";
import { authClient } from "@/lib/auth-client";
import { DateField, Label } from "@heroui/react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "react-toastify";

const BookingCard = ({ appointment }) => {
  const [appointmentDate, setAppointmentDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [gender, setGender] = useState("");
  const [phone, setPhone] = useState("");

  const { data } = authClient.useSession();
  const user = data?.user;

  const router = useRouter();

  const handleBooking = async () => {
    // Check login first
    if (!user) {
      toast.error("Please login first");
      router.push("/login");
      return;
    }

    // Check date
    if (!appointmentDate) {
      toast.error("Please select a departure date");
      return;
    }
    const myBooking = {
      userEmail: user?.email,
      doctorName: appointment.doctorName,
      patientName: user?.name,
      gender: gender,
      phone: phone,
      appointmentDate: new Date(appointmentDate),
      appointmentTime: selectedTime,
    };
    console.log(myBooking);

    const res = await fetch("http://localhost:5000/booking", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(myBooking),
    });

    const bookingData = await res.json();
    console.log(bookingData);

    if (bookingData) {
      toast.success(
        `Congratulations! appointment booked for Dr. ${myBooking.doctorName} successfully`,
      );
      router.push("/dashboard");
    }
  };
  return (
    <div className="mt-10 space-y-6 mx-auto w-full lg:w-10/12 px-4">
      <h2 className="text-2xl font-bold text-[#494949]">Make an Appointment</h2>
      {/* DATE + TIME */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* DATE */}
        <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center">
          <h2 className="text-sm font-semibold whitespace-nowrap">
            Visit Date:
          </h2>
          <DateField
            onChange={setAppointmentDate}
            className="w-[256px]"
            name="date"
            isRequired
          >
            <Label></Label>
            <DateField.Group>
              <DateField.Input>
                {(segment) => <DateField.Segment segment={segment} />}
              </DateField.Input>
            </DateField.Group>
          </DateField>
        </div>

        {/* TIME */}
        <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center">
          <h2 className="text-sm font-semibold whitespace-nowrap">
            Visit Time:
          </h2>

          <div className="flex flex-wrap gap-2">
            {appointment?.availability?.map((time, index) => (
              <button
                key={index}
                onClick={() => setSelectedTime(time)}
                className={`px-4 py-2 rounded-xl border text-sm transition cursor-pointer
              ${
                selectedTime === time
                  ? "bg-cyan-500 text-white border-cyan-500"
                  : "bg-white border-gray-300 hover:border-cyan-400"
              }`}
              >
                {time}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ROW 2: GENDER + PHONE */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* GENDER */}
        <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center">
          <h2 className="text-sm font-semibold whitespace-nowrap">Gender:</h2>

          <div className="flex gap-3">
            <button
              onClick={() => setGender("male")}
              className={`px-5 py-2 rounded-xl border text-sm transition cursor-pointer
            ${
              gender === "male"
                ? "bg-cyan-500 text-white border-cyan-500"
                : "bg-white border-gray-300"
            }`}
            >
              Male
            </button>

            <button
              onClick={() => setGender("female")}
              className={`px-5 py-2 rounded-xl border text-sm transition cursor-pointer
            ${
              gender === "female"
                ? "bg-cyan-500 text-white border-cyan-500"
                : "bg-white border-gray-300"
            }`}
            >
              Female
            </button>
          </div>
        </div>

        {/* PHONE */}
        <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center">
          <h2 className="text-sm font-semibold whitespace-nowrap">Phone:</h2>

          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Phone Number"
            className="w-full sm:w-[256px] px-4 py-2 rounded-xl border 
        border-gray-300 focus:border-cyan-500 outline-none"
          />
        </div>
      </div>

      {/* CONFIRM */}
      <div className="flex justify-center">
        <button
          onClick={handleBooking}
          className="px-10 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-emerald-500 
      text-white text-lg font-semibold shadow-lg hover:scale-105 transition cursor-pointer"
        >
          Confirm Appointment
        </button>
      </div>
    </div>
  );
};

export default BookingCard;
