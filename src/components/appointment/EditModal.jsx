"use client";
import {
  Button,
  FieldError,
  Input,
  Label,
  Modal,
  Surface,
  TextArea,
  TextField,
} from "@heroui/react";
import { useRouter } from "next/navigation";
import React from "react";
import { BiEdit } from "react-icons/bi";

const EditModal = ({ appointment }) => {
  const {
    _id,
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
  const router = useRouter();
  const submitForm = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const appointment = Object.fromEntries(formData.entries());

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_SERVER_URL}/appointment/${_id}`,
      {
        cache: "no-store",
        method: "PATCH",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(appointment),
      },
    );

    await res.json();
    router.push("/appointment");
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
              <Modal.Heading>Edit Appointment</Modal.Heading>
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
                          placeholder="Dr. Ayesha Rahman"
                          className="rounded-2xl"
                        />
                        <FieldError />
                      </TextField>
                    </div>

                    {/* Specialty */}
                    <TextField name="specialty" defaultValue={specialty}>
                      <Label>Specialty</Label>
                      <Input placeholder="Cardiology" className="rounded-2xl" />
                      <FieldError />
                    </TextField>
                    {/* Hospital */}
                    <TextField name="hospital" defaultValue={hospital}>
                      <Label>Hospital</Label>
                      <Input
                        placeholder="Labaid Cardiac Hospital"
                        className="rounded-2xl"
                      />
                      <FieldError />
                    </TextField>
                    {/* Location */}
                    <TextField name="location" defaultValue={location}>
                      <Label>Location</Label>
                      <Input
                        placeholder="Dhanmondi,Dhaka"
                        className="rounded-2xl"
                      />
                      <FieldError />
                    </TextField>

                    {/* Price */}
                    <TextField name="fee" type="number" defaultValue={fee}>
                      <Label>Fee</Label>
                      <Input
                        type="number"
                        placeholder="800"
                        className="rounded-2xl"
                      />
                      <FieldError />
                    </TextField>
                    {/* Price */}
                    <TextField
                      name="availability"
                      type="text"
                      defaultValue={availability}
                    >
                      <Label>Availability</Label>
                      <Input
                        type="text"
                        placeholder="09:00 AM - 12:00 PM, 04:00 PM - 07:00 PM"
                        className="rounded-2xl"
                      />
                      <FieldError />
                    </TextField>
                    <TextField
                      name="experience"
                      type="text"
                      defaultValue={experience}
                    >
                      <Label>Experience</Label>
                      <Input
                        type="text"
                        placeholder="10 Years"
                        className="rounded-2xl"
                      />
                      <FieldError />
                    </TextField>

                    {/* Image URL - Removed preview */}
                    <div className="md:col-span-2">
                      <TextField name="image" defaultValue={image}>
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
                      <TextField name="description" defaultValue={description}>
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

export default EditModal;
