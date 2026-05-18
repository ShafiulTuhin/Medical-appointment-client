"use client";
import { authClient } from "@/lib/auth-client";
import React from "react";

import Link from "next/link";
import EditProfile from "./EditProfile";
import Image from "next/image";

const Profile = () => {
  const { data, isPending } = authClient.useSession();
  const user = data?.user;

  if (isPending) {
    return (
      <div className="flex justify-center items-center h-[60vh]">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="text-center mt-20 text-red-500 font-semibold">
        No user found. Please login.
      </div>
    );
  }
  return (
    <div className="bg-slate-100 min-h-screen py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-6 md:p-10">
        <h2 className="text-2xl md:text-3xl font-bold text-[#081f30] mb-8 text-center">
          My Profile
        </h2>

        {/* Profile */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-8 lg:px-20">
          {/* Image */}
          <div className="w-60 h-60 relative mx-auto md:mx-0">
            <Image
              src={user?.image || "/default-avatar.png"}
              alt="user image"
              fill
              className="rounded-full object-cover border-4 border-t-cyan-500 border-r-emerald-500 border-b-cyan-500 border-l-emerald-500 p-3"
            />
          </div>

          {/* Info */}
          <div className="space-y-4 text-center md:text-left">
            <div>
              <p className="text-gray-500 text-sm">Name</p>
              <h3 className="text-xl font-semibold">{user.name}</h3>
            </div>

            <div>
              <p className="text-gray-500 text-sm">Email</p>
              <h3 className="text-lg">{user.email}</h3>
            </div>

            <div>
              <p className="text-gray-500 text-sm">Created At</p>
              <h3 className="text-sm">
                {new Date(user.createdAt).toLocaleString()}
              </h3>
            </div>

            <div>
              <p className="text-gray-500 text-sm">Updated At</p>
              <h3 className="text-sm">
                {new Date(user.updatedAt).toLocaleString()}
              </h3>
            </div>

            <EditProfile />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
