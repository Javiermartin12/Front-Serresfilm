"use client";

import Footer from "@/components/Footer";
import GreenhouseHome from "@/components/home/GreenhouseHome";
import HeaderHome from "@/components/home/HeaderHome";
import MachineryHome from "@/components/home/MachineryHome";
import ReviewCarousel from "@/components/home/ReviewCarousel";
import WarehouseHome from "@/components/home/WarehouseHome";

export default function Home() {
  return (
    <>
      <HeaderHome />
      <GreenhouseHome />
      <ReviewCarousel />
      <WarehouseHome />
      <MachineryHome />
      <Footer />
    </>
  );
}
