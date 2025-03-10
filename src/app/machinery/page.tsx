import Footer from "@/components/Footer";
import MachineryHeader from "@/components/machinery/MachineryHeader";
import Products from "@/components/machinery/Products";
import NavBar from "@/components/NavBar";
import React from "react";

function machinery() {
  return (
    <div>
      <NavBar />
      <MachineryHeader />
      <Products />
      <Footer />
    </div>
  );
}

export default machinery;
