import Client from "@/components/homepage/Client";
import Hero from "@/components/homepage/Hero";
import OurVision from "@/components/homepage/OurVision";
import TopDoctors from "@/components/homepage/TopDoctors";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero />
      <TopDoctors />
      <Client />
      <OurVision />
    </div>
  );
}
