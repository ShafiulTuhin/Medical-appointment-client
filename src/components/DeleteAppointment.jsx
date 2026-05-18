"use client";
import { AlertDialog, Button } from "@heroui/react";
import { useRouter } from "next/navigation";
import React from "react";
import { FaTrash } from "react-icons/fa";

const DeleteAppointment = ({ appointment }) => {
  const router = useRouter();

  const deleteAppointment = async () => {
    const res = await fetch(
      `http://localhost:5000/appointment/${appointment._id}`,
      {
        method: "DELETE",
        headers: {
          "content-type": "application/json",
        },
      },
    );
    await res.json();
    router.push("/appointment");
  };
  return (
    <div>
      <AlertDialog>
        <Button variant="danger" className="rounded-lg">
          <FaTrash /> Delete
        </Button>
        <AlertDialog.Backdrop>
          <AlertDialog.Container>
            <AlertDialog.Dialog className="sm:max-w-[400px]">
              <AlertDialog.CloseTrigger />
              <AlertDialog.Header>
                <AlertDialog.Icon status="danger" />
                <AlertDialog.Heading>
                  Delete destination permanently?
                </AlertDialog.Heading>
              </AlertDialog.Header>
              <AlertDialog.Body>
                <p>
                  This will permanently delete appointment of
                  <strong> {appointment.doctorName}</strong> and all of its
                  data. This action cannot be undone.
                </p>
              </AlertDialog.Body>
              <AlertDialog.Footer>
                <Button slot="close" variant="tertiary">
                  Cancel
                </Button>
                <Button
                  onClick={deleteAppointment}
                  slot="close"
                  variant="danger"
                >
                  Delete Appointment
                </Button>
              </AlertDialog.Footer>
            </AlertDialog.Dialog>
          </AlertDialog.Container>
        </AlertDialog.Backdrop>
      </AlertDialog>
    </div>
  );
};

export default DeleteAppointment;
