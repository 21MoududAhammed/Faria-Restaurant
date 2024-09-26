import loginImg from "../../assets/others/authentication2.png";
import bgImg from "../../assets/others/authentication.png";
import { RiFacebookCircleLine } from "react-icons/ri";
import { FaGoogle, FaGithub } from "react-icons/fa";

export default function Login() {
  return (
    <div
      style={{ backgroundImage: `url(${bgImg})` }}
      className=" py-20 md:py-32 mb-56"
    >
      <div
        style={{ backgroundImage: `url(${bgImg})` }}
        className="grid grid-cols-1 md:grid-cols-2 bg-cover  py-10 max-w-screen-xl mx-auto shadow-lg"
      >
        <img className="hidden md:block" src={loginImg} alt="" />
        <div>
          <form className="space-y-4 md:space-y-8  px-4 sm:px-10 mb-5 ">
            <h1 className="text-4xl font-bold text-center ">Login</h1>
            <div className="md:space-y-2 ">
              <label className="font-semibold text-xl" htmlFor="email">
                Email
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
            <div>
              {/* captcha  */}
              <input
                className="border-2 rounded-md px-3 py-2 w-full"
                type="text"
                name="captcha"
                id="captcha"
              />
              <p className="font-semibold text-base text-blue-700">
                Reload Captcha
              </p>
            </div>
            <div className="space-y-2">
              <input
                className="border-2 rounded-md px-3 py-2 w-full"
                type="text"
                name="captcha"
                id="captcha"
                placeholder="Type here, captcha"
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
            New here?{" "}
            <span className="font-semibold">Create a New Account</span>
          </p>
          <p className="text-center text-xl">Or Sign in with</p>
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
      </div>
    </div>
  );
}
