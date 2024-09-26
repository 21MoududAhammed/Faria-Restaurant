import SectionHeading from "../../shared/SectionHeading";
import { FiSend } from "react-icons/fi";

export default function ContactForm() {
  return (
    <section className="mb-56">
      <SectionHeading
        heading={"Contact Form"}
        subHeading={"---Send Us a Message---"}
      />
      <form className="bg-gray-300 p-5 sm:p-8 md:p-20 mx-5 sm:mx-10 md:mx-20 rounded-xl">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-5">
          {/* row for name and email  */}
          <div>
            <label
              className="text-gray-700 dark:text-gray-200 font-bold"
              htmlFor="name"
            >
              Name*
            </label>
            <input
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              id="name"
              type="text"
              placeholder="Enter your name"
            />
          </div>
          <div>
            <label
              className="text-gray-700 dark:text-gray-200 font-bold"
              htmlFor="email"
            >
              Email*
            </label>
            <input
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              id="email"
              type="email"
              placeholder="Enter your email"
            />
          </div>
        </div>
        <div>
          <label
            className="text-gray-700 dark:text-gray-200 font-bold"
            htmlFor="name"
          >
            Phone*
          </label>
          <input
            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            id="name"
            type="text"
            placeholder="Enter your phone number"
          />
        </div>
        <div>
          <label
            className="text-gray-700 dark:text-gray-200 font-bold"
            htmlFor="name"
          >
            Message*
          </label>
          <textarea
            className="block w-full h-32 px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            id="name"
            type="text"
            row="5"
            placeholder="Write your message here"
          />
        </div>
        <div className="flex items-center space-x-3 mt-5">
          <input
            type="checkbox"
            id="robotCheck"
            className="w-5 h-5 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
          />
          <label htmlFor="robotCheck" className="text-gray-700 font-medium">
            I am not a robot
          </label>
        </div>

        <div className="mt-10 md:mt-20 flex justify-center">
          <button className="bg-gradient-to-b from-[#835D23] to-[#B58130] px-6 py-4 flex items-center gap-2 text-xl font-bold text-white">
            Send Message <FiSend />
          </button>
        </div>
      </form>
    </section>
  );
}
