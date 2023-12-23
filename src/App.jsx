import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="w-full flex flex-col font-sans bg-[#f0f0f0]">
      <Navbar></Navbar>
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
