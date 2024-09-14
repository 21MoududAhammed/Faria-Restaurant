import Banner from "./Banner";
import { Helmet } from "react-helmet-async";

export default function OurMenu() {
  return (
    <div>
      <Helmet>
        <title>Faria Restaurant | Menu</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <Banner />
    </div>
  );
}
