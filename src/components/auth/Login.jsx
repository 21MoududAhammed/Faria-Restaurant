import loginImg from "../../assets/others/authentication2.png";
import bgImg from "../../assets/others/authentication.png";
import { RiFacebookCircleLine } from "react-icons/ri";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
// captcha
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  LoadCanvasTemplateNoReload,
  validateCaptcha,
} from "react-simple-captcha";

export default function Login() {
  const initialUserData = {
    email: "",
    password: "",
    captcha: "",
  };
  const [user, setUser] = useState(initialUserData);
  // on submit
  const onSubmit = async (event) => {
    event.preventDefault();
    if (validateCaptcha(user.captcha) === true) {
      console.log(user);
      setUser({
        email: "",
        password: "",
        captcha: "",
      });
      toast("Captcha validation done!");
    } else {
      toast("Captcha validation wrong!");
    }
  };
  // set the number characters of captcha
  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  return (
    <div
      style={{ backgroundImage: `url(${bgImg})` }}
      className=" py-20 md:py-32 mb-56"
    >
      <div
        style={{ backgroundImage: `url(${bgImg})` }}
        className="grid grid-cols-1 md:grid-cols-2 bg-cover  py-10 max-w-screen-xl mx-auto shadow-lg"
      >
        <div className="my-auto">
          <img className="hidden md:block" src={loginImg} alt="" />
        </div>

        <div>
          <form
            onSubmit={onSubmit}
            className="space-y-4 md:space-y-8  px-4 sm:px-10 mb-5 "
          >
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
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
              />
            </div>
            <div className="md:space-y-2">
              <label className="font-semibold text-xl" htmlFor="password">
                Password
              </label>
              <input
                className="border-2 rounded-md px-3 py-2 w-full"
                type="password"
                name="password"
                id="password"
                placeholder="Enter password"
                value={user.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
              />
            </div>
            <div>
              {/* captcha  */}

              <LoadCanvasTemplate />
            </div>
            <div className="space-y-2">
              <input
                className="border-2 rounded-md px-3 py-2 w-full"
                type="text"
                name="captcha"
                id="captcha"
                placeholder="Type here, captcha"
                value={user.captcha}
                onChange={(e) => setUser({ ...user, captcha: e.target.value })}
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
