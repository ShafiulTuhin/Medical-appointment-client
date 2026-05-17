"use client";

import Link from "next/link";
import { Button } from "@heroui/react";
import { motion } from "framer-motion";
import { Home, ArrowLeft, Stethoscope } from "lucide-react";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f0fbff] via-white to-[#e6fff9] flex items-center justify-center px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="space-y-6 text-center lg:text-left"
        >
          <div className="inline-flex items-center gap-2 bg-[#15A1BF]/10 text-[#15A1BF] px-4 py-2 rounded-full font-semibold">
            <Stethoscope size={18} />
            Medi Appointment
          </div>

          <h1 className="text-7xl md:text-8xl font-extrabold text-[#15A1BF] leading-none">
            404
          </h1>

          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 leading-tight">
            Page Not Found
          </h2>

          <p className="text-gray-500 text-lg max-w-xl">
            The page you are looking for may have been removed, renamed, or is
            temporarily unavailable.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Link href={"/"}>
              {" "}
              <Button
                as={Link}
                href="/"
                size="lg"
                className="bg-[#15A1BF] cusrsor-pointer text-white font-semibold p-2 rounded-lg"
                startContent={<Home size={20} />}
              >
                Back Home
              </Button>
            </Link>

            <Button
              variant="bordered"
              size="lg"
              onPress={() => window.history.back()}
              className="border-[#15A1BF] text-[#15A1BF] font-semibold"
              startContent={<ArrowLeft size={20} />}
            >
              Go Back
            </Button>
          </div>
        </motion.div>

        {/* Right Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8 }}
          className="relative flex justify-center"
        >
          {/* Floating Circle */}
          <motion.div
            animate={{
              y: [0, -20, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 4,
              ease: "easeInOut",
            }}
            className="w-[320px] h-[320px] md:w-[420px] md:h-[420px] rounded-full bg-[#15A1BF]/10 absolute"
          />

          {/* Card */}
          <motion.div
            animate={{
              y: [0, 15, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 3,
              ease: "easeInOut",
            }}
            className="relative z-10 bg-white/80 backdrop-blur-xl shadow-2xl border border-white rounded-[40px] p-10 flex flex-col items-center"
          >
            <div className="w-28 h-28 rounded-full bg-[#15A1BF]/10 flex items-center justify-center mb-6">
              <Stethoscope size={55} className="text-[#15A1BF]" />
            </div>

            <h3 className="text-2xl font-bold text-gray-800 mb-2">Oops!</h3>

            <p className="text-gray-500 text-center max-w-xs">
              We couldn’t find the page you were looking for.
            </p>

            {/* Pulse Animation */}
            <div className="mt-8 flex gap-3">
              <span className="w-4 h-4 bg-[#15A1BF] rounded-full animate-ping"></span>
              <span className="w-4 h-4 bg-[#6ED3CF] rounded-full animate-bounce"></span>
              <span className="w-4 h-4 bg-[#15A1BF] rounded-full animate-pulse"></span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFoundPage;
