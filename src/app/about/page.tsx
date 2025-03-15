import Footer from "@/components/Footer";
import CompanyValues from "@/components/MeetUs/CompanyValues";
import WeInformation from "@/components/MeetUs/OurHistory";

import NavBar from "@/components/NavBar";

function about() {
  return (
    <div>
      <NavBar />

      <WeInformation />
      <CompanyValues />
      <Footer />
    </div>
  );
}

export default about;
