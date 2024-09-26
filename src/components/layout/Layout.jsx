import { Outlet, useLocation } from "react-router-dom";
import Footer from "../shared/Footer";
import Nav from "../shared/Nav";

export default function Layout() {
  const location = useLocation();

  return (
    <div>
      <Nav />
      <Outlet />
      {location?.pathname !== "/login" && <Footer />}
    </div>
  );
}
