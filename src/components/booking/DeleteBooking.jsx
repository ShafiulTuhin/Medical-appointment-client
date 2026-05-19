"use client";
import { authClient } from "@/lib/auth-client";
import { AlertDialog, Button } from "@heroui/react";
import { useRouter } from "next/navigation";
import React from "react";
import { FaTrash } from "react-icons/fa";
import { toast } from "react-toastify";

const DeleteBooking = ({ booking }) => {
  const router = useRouter();

  const deleteBooking = async () => {
    const { data: tokenData } = await authClient.token();
    const res = await fetch(`http://localhost:5000/booking/${booking._id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${tokenData?.token}`,
      },
    });
    await res.json();
    toast.success(`Booking for ${booking.doctorName} successfully deleted`);

    setTimeout(() => {
      router.push("/dashboard");
    }, 1000);
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
                  Delete appointment permanently?
                </AlertDialog.Heading>
              </AlertDialog.Header>
              <AlertDialog.Body>
                <p>
                  This will permanently delete appointment of
                  <strong> {booking.doctorName}</strong> and all of its data.
                  This action cannot be undone.
                </p>
              </AlertDialog.Body>
              <AlertDialog.Footer>
                <Button slot="close" variant="tertiary">
                  Cancel
                </Button>
                <Button onClick={deleteBooking} slot="close" variant="danger">
                  Delete Booking
                </Button>
              </AlertDialog.Footer>
            </AlertDialog.Dialog>
          </AlertDialog.Container>
        </AlertDialog.Backdrop>
      </AlertDialog>
    </div>
  );
};

export default DeleteBooking;
