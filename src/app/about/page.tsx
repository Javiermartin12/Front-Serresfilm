"use client";
import Footer from "@/components/Footer";
import CompanyValues from "@/components/MeetUs/CompanyValues";

import JoinUs from "@/components/MeetUs/JoinUs";
import OurHistory from "@/components/MeetUs/OurHistory";
import OurTeam from "@/components/MeetUs/OurTeam";

import NavBar from "@/components/NavBar";

function about() {
  return (
    <div>
      <NavBar />
      <OurHistory />
      <CompanyValues />
      <OurTeam />
      <JoinUs />
      <Footer />
    </div>
  );
}

export default about;
