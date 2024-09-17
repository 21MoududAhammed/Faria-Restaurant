import SectionHeading from "../../shared/SectionHeading";
import { MdPhoneInTalk } from "react-icons/md";

export default function Location() {
  return (
    <section className="mb-20 mx-2  lg:mx-32">
      <SectionHeading heading={"Our Location"} subHeading={"---Visit Us---"} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        <div className=" border-2 text-center">
          <div className="flex justify-center py-3 text-white text-3xl  bg-myYellow">
            <MdPhoneInTalk />
          </div>
          <div className="pt-10 pb-24 mx-8 mb-8 space-y-4 bg-gray-300 h-60">
            <h3 className="text-2xl font-medium uppercase">Phone</h3>
            <p className="text-base text-gray-500">+38 (012) 34 56 789</p>
          </div>
        </div>
        <div className=" border-2 text-center">
          <div className="flex justify-center py-3 text-white text-3xl  bg-myYellow">
            <MdPhoneInTalk />
          </div>
          <div className="pt-10 pb-24 mx-8 mb-8 space-y-4 bg-gray-300 h-60">
            <h3 className="text-2xl font-medium uppercase">Address</h3>
            <p className="text-base text-gray-500">Mirpur #1 Dhaka</p>
          </div>
        </div>
        <div className=" border-2 text-center">
          <div className="flex justify-center py-3 text-white text-3xl  bg-myYellow">
            <MdPhoneInTalk />
          </div>
          <div className="pt-10 pb-24 mx-8 mb-8 space-y-4 bg-gray-300 h-60">
            <h3 className="text-2xl font-medium uppercase">Working Hours</h3>
            <p className="text-base text-gray-500">Mon - Fri: 08:00 - 22:00</p>
            <p className="text-base text-gray-500">Sat - Sun: 10:00 - 23:00</p>
          </div>
        </div>
      </div>
    </section>
  );
}
