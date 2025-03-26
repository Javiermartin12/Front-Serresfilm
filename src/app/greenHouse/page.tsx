import Footer from "@/components/Footer";
import BenefitsGreenhouse from "@/components/greenHouse/BenefitsGreenhouse";
import GetGreenhouse from "@/components/greenHouse/GetGreenhouse";
import GreenHouseHeader from "@/components/greenHouse/GreenHouseHeader";
import InformationGreenHouse from "@/components/greenHouse/InformationGreenHouse";
import ServicesGreenhouse from "@/components/greenHouse/ServicesGreenhouse";
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
