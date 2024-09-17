import CommonBanner from "../../shared/CommonBanner";
import bannerImg from "../../../assets/contact/banner.jpg";
import Location from "./Location";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <div>
      {/* page banner  */}
      <CommonBanner
        bgImage={bannerImg}
        title={"Contact Us"}
        description={"Would you like to try a dish?"}
      />
      {/*our location  */}
      <Location />
      {/* contact form  */}
      <ContactForm/>
    </div>
  );
}
