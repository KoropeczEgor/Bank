import NavBar from "./components/Navbar/NavBar";
import ScrollTop from "./components/ScrollTop/ScrollTop";

function App() {
  return (
    <div className="bg-primary text-white w-full h-full">
      <NavBar />
      <ScrollTop />
      <div className="container px-5 md:px-10 mx-auto"></div>
    </div>
  );
}

export default App;
