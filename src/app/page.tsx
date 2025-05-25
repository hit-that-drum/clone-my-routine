import Home from "./home/page";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

export default function HomePage() {
  return (
    <>
      <Header title="Clone MY ROUTINE" />
      <Home />
      <Footer companyName="Clone MY ROUTINE" />
    </>
  );
}
