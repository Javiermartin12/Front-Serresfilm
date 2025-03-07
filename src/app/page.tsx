"use client";

import BackGroundPrincipal from "@/components/home/HeaderHome";
import Footer from "@/components/Footer";
import GreenhouseHome from "@/components/home/GreenhouseHome";

import WarehouseHome from "@/components/home/WarehouseHome";
import ReviewCarousel from "@/components/home/ReviewCarousel";
import MachineryHome from "@/components/home/MachineryHome";

export default function Home() {
  return (
    <>
      <BackGroundPrincipal />
      <GreenhouseHome />
      <ReviewCarousel />
      <WarehouseHome />
      <MachineryHome />

      <Footer />
    </>
  );
}
