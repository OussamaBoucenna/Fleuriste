
import { Route, Routes } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";


function App() {
  return (
  <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<div>Produits à venir</div>} />
          <Route path="/contact" element={<div>Contactez-nous</div>} />
        </Route>
      </Routes>
  );
}

export default App;
