// import { auth } from "@/lib/auth";
// import { headers } from "next/headers";
// import EditBooking from "./EditBooking";
// import DeleteBooking from "./DeleteBooking";

// const MyBookings = async () => {
//   const session = await auth.api.getSession({
//     headers: await headers(), // you need to pass the headers object.
//   });
//   const user = session?.user;
//   // console.log(user);
//   const { token } = await auth.api.getToken({
//     headers: await headers(),
//   });
//   const res = await fetch(
//     `${process.env.NEXT_PUBLIC_API_SERVER_URL}/booking/${user.email}`,
//     {
//       headers: {
//         authorization: `Bearer ${token}`,
//       },
//     },
//   );
//   const bookings = await res.json();
//   // console.log(bookings);

//   return (
//     <div className="w-full lg:w-8/12 mx-auto px-4 space-y-4 mt-10">
//       <h2 className="text-2xl font-bold text-[#494949]">My Bookings</h2>

//       {bookings.length === 0 ? (
//         <p className="text-gray-500">No bookings found.</p>
//       ) : (
//         bookings.map((booking, index) => (
//           <div
//             key={index}
//             className="flex flex-col md:flex-row md:items-center justify-between gap-6 p-5 rounded-xl border bg-white shadow-sm hover:shadow-md transition"
//           >
//             {/* LEFT SIDE - DETAILS */}
//             <div className="space-y-1 text-sm md:text-base">
//               <p>
//                 <span className="font-semibold">Doctor:</span>{" "}
//                 {booking.doctorName}
//               </p>

//               <p>
//                 <span className="font-semibold">Patient:</span>{" "}
//                 {booking.patientName}
//               </p>

//               <p>
//                 <span className="font-semibold">Email:</span>{" "}
//                 {booking.userEmail}
//               </p>

//               <p>
//                 <span className="font-semibold">Gender:</span> {booking.gender}
//               </p>

//               <p>
//                 <span className="font-semibold">Phone:</span> {booking.phone}
//               </p>

//               <p>
//                 <span className="font-semibold">Date:</span>{" "}
//                 {new Date(booking.appointmentDate).toLocaleDateString()}
//               </p>

//               <p>
//                 <span className="font-semibold">Time:</span>{" "}
//                 {booking.appointmentTime}
//               </p>
//             </div>

//             {/* RIGHT SIDE - ACTION BUTTONS */}
//             <div className="flex md:flex-col gap-3">
//               <EditBooking booking={booking} />
//               <DeleteBooking booking={booking} />
//             </div>
//           </div>
//         ))
//       )}
//     </div>
//   );
// };

// export default MyBookings;
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import EditBooking from "./EditBooking";
import DeleteBooking from "./DeleteBooking";

const MyBookings = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const user = session?.user;

  const { token } = await auth.api.getToken({
    headers: await headers(),
  });

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/booking/${user.email}`,
    {
      headers: {
        authorization: `Bearer ${token}`,
      },
    },
  );

  const bookings = await res.json();

  return (
    <div className="bg-slate-100 min-h-screen py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-6 md:p-10 space-y-6">
        <h2 className="text-2xl md:text-3xl font-bold text-[#081f30] text-center">
          My Bookings
        </h2>

        {bookings.length === 0 ? (
          <p className="text-gray-500 text-center">No bookings found.</p>
        ) : (
          bookings.map((booking, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row md:items-center justify-between gap-6 p-5 rounded-xl border 
              border-t-cyan-500 border-r-emerald-500 border-b-cyan-500 border-l-emerald-500 
              bg-white shadow-sm hover:shadow-md transition"
            >
              {/* LEFT SIDE - DETAILS */}
              <div className="space-y-1 text-sm md:text-base text-gray-700">
                <p>
                  <span className="font-semibold">Doctor:</span>{" "}
                  {booking.doctorName}
                </p>

                <p>
                  <span className="font-semibold">Patient:</span>{" "}
                  {booking.patientName}
                </p>

                <p>
                  <span className="font-semibold">Email:</span>{" "}
                  {booking.userEmail}
                </p>

                <p>
                  <span className="font-semibold">Gender:</span>{" "}
                  {booking.gender}
                </p>

                <p>
                  <span className="font-semibold">Phone:</span> {booking.phone}
                </p>

                <p>
                  <span className="font-semibold">Date:</span>{" "}
                  {new Date(booking.appointmentDate).toLocaleDateString()}
                </p>

                <p>
                  <span className="font-semibold">Time:</span>{" "}
                  {booking.appointmentTime}
                </p>
              </div>

              {/* RIGHT SIDE - ACTION BUTTONS */}
              <div className="flex md:flex-col gap-3">
                <EditBooking booking={booking} />
                <DeleteBooking booking={booking} />
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default MyBookings;
