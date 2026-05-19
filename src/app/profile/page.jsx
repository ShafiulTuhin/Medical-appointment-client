import Profile from "@/components/myProfile/Profile";
import React from "react";

export const metadata = {
  title: "Medi-Appointment | My Profile",
  description: "All user information are here",
};

const MyProfilePage = () => {
  return (
    <div>
      <Profile />
    </div>
  );
};

export default MyProfilePage;
