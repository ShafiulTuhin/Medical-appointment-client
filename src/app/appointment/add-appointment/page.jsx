"use client";
import {
  Button,
  FieldError,
  Input,
  Label,
  TextArea,
  TextField,
} from "@heroui/react";
import { redirect } from "next/navigation";
import React from "react";
import { toast } from "react-toastify";

const AddAppointmentPage = () => {
  const submitForm = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const appointment = Object.fromEntries(formData.entries());
    // console.log(appointment);

    const res = await fetch("http://localhost:5000/appointment", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(appointment),
    });
    await res.json();
    toast.success("Appointment set successfully");

    redirect("/appointment");
  };
  return (
    <div className="container mx-auto py-20 lg:w-1/2 w-full">
      <form onSubmit={submitForm} className="p-10 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Doctor Name */}
          <div className="md:col-span-2">
            <TextField name="doctorName" isRequired>
              <Label>Doctor Name</Label>
              <Input placeholder="Dr. Ayesha Rahman" className="rounded-2xl" />
              <FieldError />
            </TextField>
          </div>

          {/* Specialty */}
          <TextField name="specialty" isRequired>
            <Label>Specialty</Label>
            <Input placeholder="Cardiology" className="rounded-2xl" />
            <FieldError />
          </TextField>
          {/* Hospital */}
          <TextField name="hospital" isRequired>
            <Label>Hospital</Label>
            <Input
              placeholder="Labaid Cardiac Hospital"
              className="rounded-2xl"
            />
            <FieldError />
          </TextField>
          {/* Location */}
          <TextField name="location" isRequired>
            <Label>Location</Label>
            <Input placeholder="Dhanmondi,Dhaka" className="rounded-2xl" />
            <FieldError />
          </TextField>

          {/* Price */}
          <TextField name="fee" type="number" isRequired>
            <Label>Fee</Label>
            <Input type="number" placeholder="800" className="rounded-2xl" />
            <FieldError />
          </TextField>
          {/* Price */}
          <TextField name="availability" type="text" isRequired>
            <Label>Availability</Label>
            <Input
              type="text"
              placeholder="09:00 AM - 12:00 PM, 04:00 PM - 07:00 PM"
              className="rounded-2xl"
            />
            <FieldError />
          </TextField>
          <TextField name="experience" type="text" isRequired>
            <Label>Experience</Label>
            <Input type="text" placeholder="10 Years" className="rounded-2xl" />
            <FieldError />
          </TextField>

          {/* Image URL - Removed preview */}
          <div className="md:col-span-2">
            <TextField name="image" isRequired>
              <Label>Image URL</Label>
              <Input
                type="url"
                placeholder="https://i.ibb.co/doctor-demo.jpg"
                className="rounded-2xl"
              />
              <FieldError />
            </TextField>
          </div>

          {/* Description */}
          <div className="md:col-span-2">
            <TextField name="description" isRequired>
              <Label>Description</Label>
              <TextArea
                placeholder="Describe the travel experience..."
                className="rounded-3xl"
              />
              <FieldError />
            </TextField>
          </div>
        </div>

        {/* Buttons */}

        <Button
          type="submit"
          variant="outline"
          className="rounded-lg py-2 w-full bg-cyan-500 text-white"
        >
          Add
        </Button>
      </form>
    </div>
  );
};

export default AddAppointmentPage;
