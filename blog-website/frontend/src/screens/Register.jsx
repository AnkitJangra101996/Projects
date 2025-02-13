import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ErrorMsg } from "../styled/styled";
import toast from "react-hot-toast";
import { apiPort } from "../api/config.js";
import axios from "axios";

const Register = () => {
  const [showPass, setShowPass] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    image: "",
  });
  // const [error, setError] = useState(null);
  // const [avatars, setAvatars] = useState([]);
  // useEffect(async () => {
  //   const res = await 
  //   fetchAvatars();
  // }, [])
  
  const handleOnChange = ({ target }) => {
    const { name, value } = target;
    console.log(name, value);
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { name, email, password } = formData;
      if (!name || !email || !password) {
        toast.error("All fields are required");
        return;
      }
    } catch (error) {
      toast.error("Internal Server Error...");
      console.log(error);
    }
  };
  return (
    <div className="w-screen min-h-screen flex items-center justify-center bg-gray-50 dark:bg-neutral-800 px-4 sm:px-6 lg:px-8">
      <div className="relative py-3 sm:max-w-xs sm:mx-auto">
        <div className="min-h-96 px-8 py-6 mt-4 text-left bg-white dark:bg-gray-900  rounded-xl shadow-lg">
          <div className="flex flex-col justify-center items-center h-full select-none">
            <div className="flex flex-col items-center justify-center gap-2 mb-8">
              <p className="m-0 text-[16px] font-semibold dark:text-white">
                Create A Account
              </p>
              <span className="m-0 text-xs max-w-[90%] text-center text-[#8B8E98]">
                Get started with our app, just start section and enjoy
                experience.
              </span>
            </div>
          </div>
          <form onSubmit={handleSubmit}>
            {/* Name */}
            <div className="w-full flex flex-col gap-2 mb-5">
              <label className="font-semibold text-xs text-gray-400 ">
                Full Name
              </label>
              <input
                className="border rounded-lg px-3 py-2 text-sm w-full outline-none dark:border-gray-500 dark:bg-gray-900"
                placeholder="Full Name.."
                type="text"
                name="name"
                onChange={handleOnChange}
              />
            </div>
            {/* Email */}
            <div className="w-full flex flex-col gap-2 mb-5">
              <label className="font-semibold text-xs text-gray-400 ">
                Email
              </label>
              <input
                className="border rounded-lg px-3 py-2 text-sm w-full outline-none dark:border-gray-500 dark:bg-gray-900"
                placeholder="Email.."
                type="email"
                name="email"
                onChange={handleOnChange}
              />
            </div>
            {/* Password */}
            <div className="w-full flex flex-col gap-2 relative">
              <label className="font-semibold text-xs text-gray-400 ">
                Password
              </label>
              <button
                className="absolute right-4 dark:text-gray-400 text-gray-900"
                onClick={() => setShowPass(!showPass)}
              >
                {showPass ? <FaRegEyeSlash /> : <FaRegEye />}
              </button>
              <input
                className="border rounded-lg px-3 py-2 mb-5 text-sm w-full outline-none dark:border-gray-500 dark:bg-gray-900"
                name="password"
                type={showPass ? "text" : "password"}
                onChange={handleOnChange}
              />
            </div>
            {/* Profile Field */}
            <div className="w-full flex flex-col gap-2 relative">
              <h1 className="font-semibold text-xs text-gray-400 ">
                Choose Your Profile
              </h1>
              {/* Upload using clouldinary */}
              <div className="relative">
                <label
                  title="Click to upload"
                  htmlFor="button2"
                  className="cursor-pointer flex items-center gap-4 px-6 py-4 before:border-gray-400/60 hover:before:border-gray-300 group before:bg-gray-100 before:absolute before:inset-0 before:rounded-3xl before:border before:border-dashed before:transition-transform before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95"
                >
                  <div className="w-max relative">
                    <img
                      className="w-12"
                      src="https://www.svgrepo.com/show/485545/upload-cicle.svg"
                      alt="file upload icon"
                      width={512}
                      height={512}
                    />
                  </div>
                  <div className="relative">
                    <span className="block text-base font-semibold relative text-blue-900 group-hover:text-blue-500">
                      Upload Your Profile
                    </span>
                  </div>
                </label>
                <input hidden type="file" name="button2" id="button2" />
              </div>
              <span className="font-semibold text-xs text-gray-400 text-center">
                Or
              </span>
              {/* Generated Avatars */}
              <div className=""></div>
            </div>
            <div className="mt-5">
              <button
                type="submit"
                className="py-1 px-8 bg-blue-500 hover:bg-blue-800 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg cursor-pointer select-none"
              >
                Register
              </button>
            </div>
          </form>
          <p className="mt-5 text-sm text-neutral-800 dark:text-gray-50 text-right">
            Already Have An Account?&nbsp;
            <Link to="/login" className="underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
