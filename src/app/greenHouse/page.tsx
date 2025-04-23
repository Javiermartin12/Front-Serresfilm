"use client";
import Footer from "@/components/Footer";
import GreenHouseHeader from "@/components/GreenHouse/GreenHouseHeader";
import GetGreenhouse from "@/components/GreenHouse/GetGreenHouse";
import BenefitsGreenhouse from "@/components/GreenHouse/BenefitsGreenhouse";
import InformationGreenHouse from "@/components/GreenHouse/InformationGreenHouse";
import ServicesGreenhouse from "@/components/GreenHouse/ServicesGreenhouse";
import NavBar from "@/components/NavBar";

function greenHouse() {
  return (
    <div>
      <NavBar />
      <GreenHouseHeader />
      <InformationGreenHouse />
      <BenefitsGreenhouse />
      <ServicesGreenhouse />
      <GetGreenhouse />
      <Footer />
    </div>
  );
}

export default greenHouse;
