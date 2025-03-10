import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import BenefitsWarehouse from "@/components/warehouse/BenefitsWarehouse";
import GetWarehouse from "@/components/warehouse/GetWarehouse";
import InformationWarehouse from "@/components/warehouse/InformationWarehouse";
import ServicesWarehouse from "@/components/warehouse/ServicesWarehouse";
import WarehouseHeader from "@/components/warehouse/WarehouseHeader";
import React from "react";

function wareHouse() {
  return (
    <div>
      <NavBar />
      <WarehouseHeader />
      <InformationWarehouse />
      <ServicesWarehouse />
      <BenefitsWarehouse />
      <GetWarehouse />
      <Footer />
    </div>
  );
}

export default wareHouse;
