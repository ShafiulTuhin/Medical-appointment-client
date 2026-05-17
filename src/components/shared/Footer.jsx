"use client";

import Link from "next/link";
import { Button } from "@heroui/react";
import { motion } from "framer-motion";
import { HeartPulse } from "lucide-react";
import LogoImg from "@/assets/logo.png";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-r from-[#f0fbff] via-white to-[#e8fffb] border-t border-[#15A1BF]/10 mt-20">
      {/* Animated Background Blur */}
      <motion.div
        animate={{
          x: [0, 50, 0],
          y: [0, -20, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 10,
          ease: "easeInOut",
        }}
        className="absolute top-0 left-0 w-72 h-72 bg-[#15A1BF]/10 rounded-full blur-3xl"
      />

      <motion.div
        animate={{
          x: [0, -40, 0],
          y: [0, 30, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 12,
          ease: "easeInOut",
        }}
        className="absolute bottom-0 right-0 w-72 h-72 bg-[#6ED3CF]/10 rounded-full blur-3xl"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-12">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Logo Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <Link href="/" className="flex items-center gap-3">
              <motion.div
                animate={{
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 4,
                }}
                className="w-14 h-14 rounded-2xl bg-[#15A1BF]/10 flex items-center justify-center"
              >
                <Image src={LogoImg} alt="Logo_Img" width={80} height={80} />
              </motion.div>

              <div>
                <h2 className="text-2xl font-extrabold text-[#15A1BF]">
                  MediAppointment
                </h2>

                <p className="text-sm text-gray-500">
                  Smart Healthcare Booking
                </p>
              </div>
            </Link>

            <p className="text-gray-500 leading-relaxed">
              Easily book doctor appointments online with a secure, modern, and
              user-friendly healthcare platform.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-lg font-bold text-gray-800 mb-4">
              Quick Links
            </h3>

            <ul className="space-y-3 text-gray-500">
              {["Home", "Doctors", "Appointment", "Contact"].map(
                (item, index) => (
                  <motion.li whileHover={{ x: 5 }} key={index}>
                    <Link href="/" className="hover:text-[#15A1BF] transition">
                      {item}
                    </Link>
                  </motion.li>
                ),
              )}
            </ul>
          </motion.div>

          {/* Support */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-lg font-bold text-gray-800 mb-4">Support</h3>

            <ul className="space-y-3 text-gray-500">
              {[
                "FAQ",
                "Privacy Policy",
                "Terms & Conditions",
                "Help Center",
              ].map((item, index) => (
                <motion.li whileHover={{ x: 5 }} key={index}>
                  <Link href="/" className="hover:text-[#15A1BF] transition">
                    {item}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Social */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
          >
            <h3 className="text-lg font-bold text-gray-800 mb-4">
              Connect With Us
            </h3>

            <p className="text-gray-500 mb-5">
              Follow us for updates and healthcare tips.
            </p>

            <div className="flex gap-4 flex-wrap">
              {[FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn].map(
                (Icon, index) => (
                  <motion.div
                    whileHover={{
                      scale: 1.15,
                      y: -5,
                    }}
                    whileTap={{ scale: 0.9 }}
                    key={index}
                  >
                    <Button
                      isIconOnly
                      radius="full"
                      className="bg-[#15A1BF]/10 text-[#15A1BF]"
                    >
                      <Icon size={20} />
                    </Button>
                  </motion.div>
                ),
              )}
            </div>
          </motion.div>
        </div>

        {/* Bottom Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="border-t border-[#15A1BF]/10 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="text-gray-500 text-sm text-center md:text-left">
            © 2026 MediAppointment. All rights reserved.
          </p>

          <motion.div
            animate={{
              scale: [1, 1.1, 1],
            }}
            transition={{
              repeat: Infinity,
              duration: 2,
            }}
            className="flex items-center gap-2 text-sm text-gray-500"
          >
            Made with <HeartPulse size={16} className="text-[#15A1BF]" /> for
            better healthcare
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
