// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { Card, Button, Chip } from "@heroui/react";
// import { motion } from "framer-motion";
// import { Clock } from "lucide-react";

// const AppointmentCard = ({ appointment }) => {
//   const { _id, doctorName, specialty, availability, image } = appointment;
//   console.log(typeof availability);

//   return (
//     <div className="p-2 shadow-sm mt-5">
//       <div className="relative w-full aspect-[4/3]">
//         <Image
//           src={image || "/default-avatar.png"}
//           alt={doctorName}
//           fill
//           sizes="
//       (max-width: 640px) 100vw,
//       (max-width: 1024px) 50vw,
//       25vw
//     "
//           className="rounded-xl object-cover"
//         />
//         <Chip className="absolute top-2 right-2 bg-[#15A1BF] text-white">
//           {specialty}
//         </Chip>
//       </div>
//       <h2 className="text-[#15A1BF] font-bold text-2xl my-3 flex gap-2 items-center">
//         {/* <FaMap /> */}
//         {doctorName}
//       </h2>
//       <div className="flex justify-between items-center">
//         {/* <h2 className="font-bold text-[#15A1BF]">Country: {country}</h2> */}
//         <h2 className="font-bold text-[#15A1BF] flex gap-2 items-center">
//           {/* <ImPriceTag />  */}

//           {availability?.map((item, ind) => (
//             <span key={ind}>{item}</span>
//           ))}
//         </h2>
//       </div>
//       <Link href={`/appointment/${_id}`}>
//         {" "}
//         <Button className="w-full mt-5">Details</Button>
//       </Link>
//     </div>
//   );
// };

// export default AppointmentCard;
"use client";

import Image from "next/image";
import Link from "next/link";
import { Button, Chip } from "@heroui/react";
import { motion } from "framer-motion";

const AppointmentCard = ({ appointment }) => {
  const { _id, doctorName, specialty, availability, image } = appointment;
  console.log(typeof availability);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.3 }}
      className="p-3 shadow-md mt-5 rounded-2xl bg-white border border-gray-100"
    >
      {/* Image */}
      <div className="relative w-full aspect-[4/3] overflow-hidden rounded-xl">
        <Image
          src={image || "/default-avatar.png"}
          alt={doctorName}
          fill
          sizes="
            (max-width: 640px) 100vw,
            (max-width: 1024px) 50vw,
            25vw
          "
          className="rounded-xl object-cover transition-transform duration-300 hover:scale-110"
        />

        <Chip className="absolute top-3 right-3 bg-[#15A1BF] text-white shadow-md">
          {specialty}
        </Chip>
      </div>

      {/* Doctor Name */}
      <motion.h2
        whileHover={{ x: 3 }}
        className="text-cyan-500 font-bold text-2xl my-3 flex gap-2 items-center"
      >
        {doctorName}
      </motion.h2>

      {/* Availability */}
      <div className="flex flex-wrap justify-between items-center mb-4">
        <h2 className="font-bold text-cyan-500"> Availability:</h2>
        <h2 className="flex gap-2">
          {" "}
          {availability?.map((item, ind) => (
            <motion.span
              key={ind}
              whileHover={{ scale: 1.1 }}
              className="px-3 py-1 text-sm rounded-full bg-[#15A1BF]/10 text-[#15A1BF] border border-[#15A1BF]/20"
            >
              {item}
            </motion.span>
          ))}
        </h2>
      </div>

      {/* Button */}
      <Link href={`/appointment/${_id}`}>
        <Button className="w-full mt-2 bg-[#15A1BF] text-white hover:opacity-90 transition-all">
          Details
        </Button>
      </Link>
    </motion.div>
  );
};

export default AppointmentCard;
