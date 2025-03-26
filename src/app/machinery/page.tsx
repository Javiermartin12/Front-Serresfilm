"use client";
import Footer from "@/components/Footer";
import { CallToAction } from "@/components/Machinery/CallToAction";
import InformationMachinery from "@/components/Machinery/InformationMachinery";
import MachineryHeader from "@/components/Machinery/MachineryHeader";
import Products from "@/components/Machinery/Products";
import { VideosMachinery } from "@/components/Machinery/VideosMachinery";
import NavBar from "@/components/NavBar";

import React from "react";

function machinery() {
  return (
    <div>
      <NavBar />
      <MachineryHeader />
      <Products />
      <InformationMachinery />
      <VideosMachinery />
      <CallToAction />
      <Footer />
    </div>
  );
}

export default machinery;
