"use client";

import BackGroundPrincipal from "@/components/BackGroundPrincipal";
import Footer from "@/components/Footer";
import GreenhouseHome from "@/components/GreenhouseHome";
import MachineryHome from "@/components/MachineryHome";
import ReviewCarousel from "@/components/ReviewCarousel";
import WarehouseHome from "@/components/WarehouseHome";

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
