import CommonBanner from "../../shared/CommonBanner";
import bannerImg1 from "../../../assets/shop/banner2.jpg";

export default function Shop() {
  return (
    <div>
      <CommonBanner
        bgImage={bannerImg1}
        title={"Our Shop"}
        description={
          " Would you like to try a dish?"
        }
      />
    </div>
  );
}
