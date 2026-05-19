import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import EditBooking from "./EditBooking";
import DeleteBooking from "./DeleteBooking";

const MyBookings = async () => {
  const session = await auth.api.getSession({
    headers: await headers(), // you need to pass the headers object.
  });
  const user = session?.user;
  console.log(user);

  const res = await fetch(
    `http://localhost:5000/booking/${user.email}`,
    // {
    //   headers: {
    //     authorization: `Bearer ${token}`,
    //   },
    // },
  );
  const bookings = await res.json();
  console.log(bookings);

  return (
    <div className="w-full lg:w-10/12 mx-auto px-4 space-y-4 mt-10">
      <h2 className="text-2xl font-bold text-[#494949]">My Bookings</h2>

      {bookings.length === 0 ? (
        <p className="text-gray-500">No bookings found.</p>
      ) : (
        bookings.map((booking, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row md:items-center justify-between gap-6 p-5 rounded-xl border bg-white shadow-sm hover:shadow-md transition"
          >
            {/* LEFT SIDE - DETAILS */}
            <div className="space-y-1 text-sm md:text-base">
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
                <span className="font-semibold">Gender:</span> {booking.gender}
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
              {/* <button
                // onClick={() => onEdit?.(booking)}
                className="px-5 py-2 rounded-lg bg-cyan-500 text-white font-medium hover:scale-105 transition"
              >
                Edit
              </button> */}
              <EditBooking booking={booking} />

              {/* 
              <button
                // onClick={() => onDelete?.(booking)}
                className="px-5 py-2 rounded-lg bg-red-500 text-white font-medium hover:scale-105 transition"
              >
                Delete
              </button> */}
              <DeleteBooking booking={booking} />
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default MyBookings;
