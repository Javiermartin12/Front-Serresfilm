"use client";
import Footer from "@/components/Footer";

import BenefitsGreenhouse from "@/components/GreenHouse/BenefitsGreenhouse";
import GetGreenhouse from "@/components/GreenHouse/GetGreenhouse";
import GreenhouseHeader from "@/components/GreenHouse/GreenhouseHeader";
import InformationGreenhouse from "@/components/GreenHouse/InformationGreenhouse";

import ServicesGreenhouse from "@/components/GreenHouse/ServicesGreenhouse";

import NavBar from "@/components/NavBar";

function greenHouse() {
  return (
    <div>
      <NavBar />
      <GreenhouseHeader />
      <InformationGreenhouse />
      <BenefitsGreenhouse />
      <ServicesGreenhouse />
      <GetGreenhouse />
      <Footer />
    </div>
  );
}

export default greenHouse;
