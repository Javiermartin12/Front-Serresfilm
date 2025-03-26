"use client";
import DataContact from "@/components/Contact/DataContact";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import ScreemshotPlace from "@/components/Contact/ScreemshotPlace";

export default function ContactPage() {
  return (
    <div>
      <NavBar />
      <DataContact />
      <ScreemshotPlace />

      <Footer />
    </div>
  );
}
