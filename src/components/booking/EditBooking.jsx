"use client";
import { authClient } from "@/lib/auth-client";
import {
  Button,
  FieldError,
  Input,
  Label,
  Modal,
  Surface,
  TextArea,
  TextField,
  select,
} from "@heroui/react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { BiEdit } from "react-icons/bi";
import { toast } from "react-toastify";

const EditBooking = ({ booking }) => {
  const {
    _id,
    userEmail,
    doctorName,
    patientName,
    gender,
    phone,
    appointmentDate,
    appointmentTime,
  } = booking;

  const [selectedTime, setSelectedTime] = useState(appointmentTime || "");
  const [appointmentData, setAppointmentData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/appointment")
      .then((res) => res.json())
      .then((data) => {
        const matchedDoctor = data.find(
          (item) => item.doctorName === doctorName,
        );

        setAppointmentData(matchedDoctor);
      });
  }, [doctorName]);
  const router = useRouter();
  const submitForm = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const booking = Object.fromEntries(formData.entries());
    const { data: tokenData } = await authClient.token();

    const res = await fetch(`http://localhost:5000/booking/${_id}`, {
      cache: "no-store",
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${tokenData?.token}`,
      },
      body: JSON.stringify(booking),
    });

    await res.json();
    // router.push("/dashboard");
    toast.success("Your change has been updated");

    setTimeout(() => {
      window.location.href = "/dashboard";
    }, 1000);
  };
  return (
    <Modal>
      <Button variant="outline" className={"rounded-lg"}>
        <BiEdit /> Edit
      </Button>

      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-xl">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Heading>Edit Booking</Modal.Heading>
            </Modal.Header>
            <Modal.Body className="lg:p-6">
              <Surface variant="default">
                <form onSubmit={submitForm} className="p-10 space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Doctor Name */}
                    <div className="md:col-span-2">
                      <TextField name="doctorName" defaultValue={doctorName}>
                        <Label>Doctor Name</Label>
                        <Input
                          className="rounded-2xl"
                          value={doctorName}
                          readOnly
                        />
                      </TextField>
                    </div>

                    {/* Patient Name */}
                    <TextField name="patientName" defaultValue={patientName}>
                      <Label>Patient Name</Label>
                      <Input
                        placeholder="Patient name"
                        className="rounded-2xl"
                      />
                      <FieldError />
                    </TextField>
                    {/* Gender */}
                    <div className="space-y-2">
                      <Label>Gender</Label>

                      <select
                        name="gender"
                        defaultValue={gender || ""}
                        className="w-full rounded-2xl border border-gray-300 px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="">Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                      </select>

                      <FieldError />
                    </div>
                    {/* Location */}
                    <TextField name="phone" defaultValue={phone}>
                      <Label>Phone</Label>
                      <Input
                        placeholder="Dhanmondi,Dhaka"
                        className="rounded-2xl"
                      />
                      <FieldError />
                    </TextField>

                    {/* Appointment Date */}
                    <TextField
                      name="appointmentDate"
                      type="date"
                      defaultValue={
                        appointmentDate
                          ? new Date(appointmentDate)
                              .toISOString()
                              .split("T")[0]
                          : ""
                      }
                    >
                      <Label>Appointment Date</Label>

                      <Input type="date" className="rounded-2xl" />

                      <FieldError />
                    </TextField>
                  </div>
                  <div className="space-y-3">
                    <Label className="mb-3">Appointment Time</Label>

                    <div className="flex flex-wrap gap-2">
                      {appointmentData?.availability?.map((time, index) => (
                        <button
                          type="button"
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

                    <input
                      type="hidden"
                      name="appointmentTime"
                      value={selectedTime}
                    />
                  </div>
                  {/* Buttons */}

                  <Button
                    type="submit"
                    variant="outline"
                    className="rounded-lg py-2 w-full bg-cyan-500 text-white"
                  >
                    Update
                  </Button>
                </form>
              </Surface>
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
};

export default EditBooking;
