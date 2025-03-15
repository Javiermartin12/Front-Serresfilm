"use client";

import BackGroundPrincipal from "@/components/Home/HeaderHome";
import Footer from "@/components/Footer";
import GreenhouseHome from "@/components/Home/GreenhouseHome";

import WarehouseHome from "@/components/Home/WarehouseHome";
import ReviewCarousel from "@/components/Home/ReviewCarousel";
import MachineryHome from "@/components/Home/MachineryHome";

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
