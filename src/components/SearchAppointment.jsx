"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

const SearchAppointments = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [search, setSearch] = useState(searchParams.get("search") || "");

  const handleSearch = () => {
    const params = new URLSearchParams(searchParams.toString());

    if (search) {
      params.set("search", search);
    } else {
      params.delete("search");
    }

    router.push(`/appointment?${params.toString()}`);
  };

  return (
    <div className="flex w-full md:w-auto gap-2">
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search books..."
        className="px-4 py-2 border rounded-lg w-full md:w-72 focus:outline-none focus:ring-2 focus:ring-[#081f30]"
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSearch();
          }
        }}
      />
      <button
        onClick={handleSearch}
        className="px-5 py-2 bg-gradient-to-r from-cyan-500 to-emerald-500 text-white rounded-lg hover:opacity-90"
      >
        Search
      </button>
    </div>
  );
};

export default SearchAppointments;
