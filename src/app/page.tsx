"use client";

import Footer from "@/components/Footer";

import GreenhouseHome from "@/components/Home/GreenhouseHome";
import HeaderHome from "@/components/Home/HeaderHome";
import MachineryHome from "@/components/Home/MachineryHome";
import ReviewCarousel from "@/components/Home/ReviewCarousel";
import WarehouseHome from "@/components/Home/WarehouseHome";


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
