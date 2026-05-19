import MyBookings from "@/components/booking/MyBookings";
import React from "react";

export const metadata = {
  title: "Medi-Appointment | Dashboard",
  description: "Get all doctors and appointment schedule here",
};
const DashboardPage = async () => {
  return (
    <div>
      <MyBookings />
    </div>
  );
};

export default DashboardPage;
