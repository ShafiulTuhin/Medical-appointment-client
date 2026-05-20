import Link from "next/link";

export default function DashboardLayout({ children }) {
  return (
    <div className="container mx-auto flex flex-col md:flex-row gap-6">
      <div
        className="
        flex md:flex-col 
        gap-3 
        border-b md:border-b-0
        pb-3 md:pb-0 
        md:pr-4
        w-full md:w-48
        lg:mt-10
      "
      >
        <Link
          href="/dashboard"
          className="px-3 py-2 rounded-lg hover:bg-gray-200 text-center md:text-left border-4 border-t-cyan-500 border-r-emerald-500 border-b-cyan-500 border-l-emerald-500"
        >
          My Bookings
        </Link>

        <Link
          href="/dashboard/profile"
          className="px-3 py-2 rounded-lg hover:bg-gray-200 text-center md:text-left border-4 border-t-cyan-500 border-r-emerald-500 border-b-cyan-500 border-l-emerald-500"
        >
          Profile
        </Link>
      </div>

      {/* CONTENT */}
      <div className="flex-1">{children}</div>
    </div>
  );
}
