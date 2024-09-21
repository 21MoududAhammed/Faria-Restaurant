import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./components/pages/home/Home";
import Menu from "./components/pages/menu/Menu";
import Shop from "./components/pages/shop/Shop";
import Contact from "./components/pages/contact/contact";

export default function App() {
  return (
    <div className="font-inter max-w-screen-2xl mx-auto">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/shop/:category" element={<Shop />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </div>
  );
}
