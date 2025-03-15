import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import BenefitsWarehouse from "@/components/Warehouse/BenefitsWarehouse";
import GetWarehouse from "@/components/Warehouse/GetWarehouse";
import InformationWarehouse from "@/components/Warehouse/InformationWarehouse";
import ServicesWarehouse from "@/components/Warehouse/ServicesWarehouse";
import WarehouseHeader from "@/components/Warehouse/WarehouseHeader";
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
