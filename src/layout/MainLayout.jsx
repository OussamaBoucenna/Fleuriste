import { Outlet } from "react-router-dom";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";


export default function MainLayout() {
  return (
    <div className="flex flex-col  bg-greyBg  h-full">
      {/* Navbar fixée en haut */}
      <div className="fixed top-0 left-0 w-full bg-white bg-opacity-0  z-50">
        <div className="p-4">
          <Navbar />
        </div>
      </div>

      {/* contenu avec padding-top = hauteur navbar */}
      <main className="" >
        <Outlet />
        <Footer/>
      </main>
      
    </div>
  );
}