import Login from "@/components/Autehntication/Login";
import React from "react";

export const metadata = {
  title: "Medi-Appointment | Login",
  description: "Login into website to get full access",
};

const LoginPage = () => {
  return (
    <div>
      <Login />
    </div>
  );
};

export default LoginPage;
