import DataContact from "@/components/Contact/DataContact";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";

export default function ContactPage() {
  return (
    <div>
      <NavBar />
      <DataContact />

      <p>Puedes contactarnos en este formulario.</p>
      <Footer />
    </div>
  );
}
