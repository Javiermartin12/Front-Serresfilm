"use client";
import Footer from "@/components/Footer";
import CallToAction from "@/components/Machinery/CallToAction";
import MachineryHeader from "../../components/Machinery/MachineryHeader";
import Products from "../../components/Machinery/Products";

import NavBar from "@/components/NavBar";

import React from "react";

function machinery() {
  return (
    <div>
      <NavBar />
      <MachineryHeader />
      <Products />
      <CallToAction />
      <Footer />
    </div>
  );
}

export default machinery;
