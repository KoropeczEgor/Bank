import NavBar from "./components/Navbar/NavBar";
import ScrollTop from "./components/ScrollTop/ScrollTop";
import Hero from "./components/Hero/Hero";
import Stats from "./components/Stats/Stats";
import Business from "./components/Businness/Businness";
import Bill from "./components/Bill/Bill";
import PaymentMethod from "./components/PaymentMethod/PaymentMethod";

function App() {
  return (
    <div className="bg-primary text-white w-full h-full">
      <NavBar />
      <ScrollTop />
      <div className="container px-5 md:px-10 mx-auto">
        <Hero />
        <div className="flex flex-col xs:flex-row flex-wrap items-center justify-between gap-6 md:gap-2 py-20">
          <Stats number="4555" title="Active User" />
          <Stats number="534" title="Trusted By Company" />
          <Stats number="$110M" title="Transaction" />
        </div>
        <Business />
        <Bill />
        <PaymentMethod />
      </div>
    </div>
  );
}

export default App;
