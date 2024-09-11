import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer>
      <div className="grid grid-cols-2">
        <div className="bg-[#1F2937] py-16 flex flex-col justify-center items-center">
          <h2 className="text-2xl text-white font-medium mb-6 uppercase">
            Contact Us
          </h2>
          <p className="text-base text-white font-medium">
            123 ABS Street, Uni 21, Bangladesh
          </p>
          <p className="text-base text-white font-medium">+88 123456789</p>
          <p className="text-base text-white font-medium">
            Mon - Fri: 08:00 - 22:00
          </p>
          <p className="text-base text-white font-medium">
            Sat - Sun: 10:00 - 23:00
          </p>
        </div>
        <div className="bg-[#111827] text-white flex flex-col justify-center items-center space-y-5">
          <h1 className="uppercase text-2xl">Follow Us</h1>
          <p className="text-xl">Join us on social media</p>
          <div className="flex justify-center items-center space-x-5 text-2xl">
            <FaFacebookF />
            <FaInstagram />
            <FaTwitter />
          </div>
        </div>
      </div>
      <div className="bg-black text-white py-4 text-center">
        <p>Copyright © CulinaryCloud. All rights reserved</p>
      </div>
    </footer>
  );
}
