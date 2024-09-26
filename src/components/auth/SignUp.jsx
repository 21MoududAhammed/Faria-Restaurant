import loginImg from "../../assets/others/authentication2.png";
import bgImg from "../../assets/others/authentication.png";
import { RiFacebookCircleLine } from "react-icons/ri";
import { FaGoogle, FaGithub } from "react-icons/fa";

export default function SignUp() {
  return (
    <div
      style={{ backgroundImage: `url(${bgImg})` }}
      className=" py-20 md:py-32 mb-56"
    >
      <div
        style={{ backgroundImage: `url(${bgImg})` }}
        className="grid grid-cols-1 md:grid-cols-2 bg-cover  py-10 max-w-screen-xl mx-auto shadow-lg"
      >
        <div>
          <form className="space-y-4 md:space-y-8  px-4 sm:px-10 mb-5 ">
            <h1 className="text-4xl font-bold text-center ">Sign Up</h1>
            <div className="md:space-y-2 ">
              <label className="font-semibold text-xl" htmlFor="email">
                Name
              </label>{" "}
              <br />
              <input
                className="border-2 rounded-md px-3 py-2 w-full "
                type="text"
                name="email"
                id="email"
                placeholder="Type email"
              />
            </div>
            <div className="md:space-y-2 ">
              <label className="font-semibold text-xl" htmlFor="email">
                Email
              </label>{" "}
              <br />
              <input
                className="border-2 rounded-md px-3 py-2 w-full "
                type="email"
                name="email"
                id="email"
                placeholder="Type email"
              />
            </div>
            <div className="md:space-y-2">
              <label className="font-semibold text-xl" htmlFor="password">
                Password
              </label>
              <input
                className="border-2 rounded-md px-3 py-2 w-full"
                type="text"
                name="password"
                id="password"
              />
            </div>

            <button
              className="text-white font-bold py-6 bg-[#D1A054] w-full rounded-md"
              type="submit"
            >
              Sign In
            </button>
          </form>
          <p className="text-[#D1A054] text-center mb-4">
            Already Registered?{" "}
            <span className="font-semibold">go to login</span>
          </p>
          <p className="text-center text-xl">Or Sign up with</p>
          <div className="flex justify-center items-center gap-5 mt-3 text-4xl ">
            <p>
              <RiFacebookCircleLine />
            </p>
            <p>
              <FaGoogle />
            </p>
            <p>
              <FaGithub />
            </p>
          </div>
        </div>
        <div className="my-auto">
          <img className="hidden md:block" src={loginImg} alt="" />
        </div>
      </div>
    </div>
  );
}
