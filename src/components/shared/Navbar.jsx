"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import LogoImg from "@/assets/logo.png";
import NavLink from "./NavLink";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { CiUser } from "react-icons/ci";
import { authClient } from "@/lib/auth-client";

const Navbar = () => {
  const { data, isPending } = authClient.useSession();

  const user = data?.user;

  const [isOpen, setIsOpen] = useState(false);
  const border = "border-1 border-[#15A1BF] rounded-lg";

  const router = useRouter();
  const handleLogout = async () => {
    try {
      await authClient.signOut({
        fetchOptions: {
          onSuccess: () => {
            router.push("/");
            toast.success("Logged out successfully", {
              position: "top-center",
              autoClose: 5000,
            });
          },
        },
      });
    } catch (error) {
      toast.error("Logout failed");
    }
  };

  return (
    <div className="">
      <div className="flex justify-between items-center px-4">
        {/* Desktop Menu */}

        <Link href={"/"}>
          <Image src={LogoImg} alt="Logo" width={80} height={80} />
        </Link>
        <ul className="hidden md:flex gap-6 items-center font-bold text-[#797979]">
          <li>
            <NavLink href="/">Home</NavLink>
          </li>
          <li>
            <NavLink href="/appointment">All Appointments</NavLink>
          </li>

          <li>
            <NavLink href="/dashboard">Dashboard</NavLink>
          </li>
        </ul>

        {isPending ? (
          <span className="flex justify-center items-center">Loading...</span>
        ) : user ? (
          <div className="hidden md:flex items-center gap-4">
            <div className="text-right">
              <Link href={"/profile"}>
                <p className="text-green-600 font-semibold text-sm">Welcome!</p>
                <p className="font-bold text-sm">{user?.name}</p>
              </Link>
            </div>
            <Image
              src={user?.image}
              alt={user?.name}
              width={40}
              height={40}
              className="rounded-full"
            />
            <Link
              href="/profile"
              className=" border-4 border-t-cyan-500 border-r-emerald-500 border-b-cyan-500 border-l-emerald-500  font-bold hover:opacity-90 transition rounded-lg cursor-pointer px-4 py-2"
            >
              Profile
            </Link>
            <button
              onClick={handleLogout}
              className="border-4 border-t-cyan-500 border-r-emerald-500 border-b-cyan-500 border-l-emerald-500  font-bold hover:opacity-90 transition rounded-lg cursor-pointer px-4 py-2"
            >
              Logout
            </button>
          </div>
        ) : (
          <div className="hidden md:flex items-center text-[#797979] gap-2">
            <div className="flex items-center border-4 border-t-cyan-500 border-r-emerald-500 border-b-cyan-500 border-l-emerald-500 px-3 rounded-lg">
              <CiUser size={20} />
              <Link href="/login">
                <button className="font-bold  hover:opacity-90 transition rounded-lg cursor-pointer p-2">
                  Login
                </button>
              </Link>
            </div>

            <Link
              href="/register"
              className="border-4 border-t-cyan-500 border-r-emerald-500 border-b-cyan-500 border-l-emerald-500 px-3 rounded-lg"
            >
              <button className="font-bold hover:opacity-90 transition rounded-lg cursor-pointer px-4 py-2">
                Sign up
              </button>
            </Link>
          </div>
        )}

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-3xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`md:hidden px-4 pb-4 space-y-4 transition-all duration-300 ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <ul className="flex flex-col gap-3 font-bold text-[#797979] bg-white shadow-lg p-4 rounded-lg">
          <li className={`${border}`}>
            <NavLink href="/">Home</NavLink>
          </li>

          <li className={`${border}`}>
            <NavLink href="/appointment">All Appointments</NavLink>
          </li>

          <li className={`${border}`}>
            <NavLink href="/dashboard">Dashboard</NavLink>
          </li>
        </ul>

        <div className="">
          {isPending ? (
            <span className="flex justify-center items-center">Loading...</span>
          ) : user ? (
            <div className="flex flex-col gap-3">
              <div className=" flex justify-between items-center px-5">
                <div>
                  <p className="text-green-600 font-semibold">Welcome!</p>
                  <p className="font-bold">{user?.name}</p>
                </div>

                <Link
                  href="/profile"
                  className=" bg-cyan-500 text-white font-bold hover:opacity-90 transition rounded-lg cursor-pointer px-4 py-2"
                >
                  Profile
                </Link>
              </div>

              <button
                onClick={handleLogout}
                className="btn bg-cyan-500 text-white hover:opacity-90 transition font-bold cursor-pointer py-2  rounded-lg w-full"
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="flex gap-3 items-center justify-center text-[#797979] ">
              <Link href="/login">
                <button className="font-bold  cursor-pointer  py-2 px-4  border-4 border-t-cyan-500 border-r-emerald-500 border-b-cyan-500 border-l-emerald-500  p-2 rounded-lg">
                  Login
                </button>
              </Link>
              <Link href="/register">
                <button className="font-bold cursor-pointer py-2 px-4  border-4 border-t-cyan-500 border-r-emerald-500 border-b-cyan-500 border-l-emerald-500  p-2 rounded-lg">
                  Sign up
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
