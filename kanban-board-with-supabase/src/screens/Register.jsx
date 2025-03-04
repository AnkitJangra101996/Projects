import { useState } from "react";
import { RiLoginBoxLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
// import { multiStepFormData } from "../static/MultiFormData";

const Register = () => {
  const [formData, setFormData] = useState({
    name: {
      value: "",
      message: "",
    },
    email: {
      value: "",
      message: "",
    },
    password: {
      value: "",
      message: "",
    },
    profilePic: {
      value: "",
      message: "",
    },
  });
  const [isAnyError, setIsAnyError] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);

  const handleChange = ({ target }) => {
    setFormData({
      ...formData,
      [target.name]: {
        ...formData[target.name],
        value: target.value,
      },
    });
  };

  const multiStepFormData = [
    {
      id: "step-1",
      title: "Step 1: Personal Info",
      content: (
        <>
          <div className="mb-0">
            <input
              onChange={handleChange}
              name="name"
              placeholder="Name"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-primary mb-0"
              type="text"
            />
            <p className="validator-hint mt-2 mb-2 text-red-600">
              {formData.name.message}
            </p>
          </div>
          <div className="mb-0">
            <input
              onChange={handleChange}
              name="email"
              placeholder="Email"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-primary mb-0"
              type="email"
            />
            <p className="validator-hint mt-2 mb-2 text-red-600">
              {formData.email.message}
            </p>
          </div>
          <div className="mb-0">
            <input
              onChange={handleChange}
              name="password"
              placeholder="Password"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-primary mb-0"
              type="password"
            />
            <p className="validator-hint mt-2 mb-2 text-red-600">
              {formData.password.message}
            </p>
          </div>
        </>
      ),
    },
    {
      id: "step-2",
      title: "Step 2: Choose Profile Picture",
      content: (
        <>
          <input
            name=""
            placeholder="Street Address"
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-primary"
            type="text"
          />
          <input
            name=""
            placeholder="City"
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-primary"
            type="text"
          />
          <input
            name=""
            placeholder="Postal Code"
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-primary"
            type="text"
          />
        </>
      ),
    },
    {
      id: "step-3",
      title: "Step 3: Review & Submit",
      content: (
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong>Name:</strong> John Doe
          </li>
          <li>
            <strong>Email:</strong> john.doe@example.com
          </li>
          <li>
            <strong>Address:</strong> 123 Main St, City, 12345
          </li>
        </ul>
      ),
    },
  ];

  const handlePrevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const handleFormSubmit = () => {};

  const handleNextStep = () => {
    let isFormValid = true;

    if (currentStep !== 3) {
      const { email, name, password, profilePic } = formData;
      if (currentStep === 1) {
        name.message = "";
        email.message = "";
        password.message = "";
        isFormValid = true;

        if (!name.value) {
          name.message = "Please Enter Your Full Name";
          isFormValid = false;
        }
        if (!email.value) {
          email.message = "Please Enter Your Email";
          isFormValid = false;
        }
        if (!password.value) {
          password.message = "Please Enter Your Password";
          isFormValid = false;
        }

        if (!isFormValid) {
          setIsAnyError(true); // Set error state to true if validation fails
          return; // Stop the function from moving forward
        }

        setCurrentStep(currentStep + 1);
        toast.success("Step 1 Completed");
      } else {
      }
    } else {
      handleFormSubmit();
    }
  };

  return (
    <>
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-full max-w-lg bg-white shadow-lg rounded-lg p-8">
          <h1 className="text-2xl xl:text-3xl font-extrabold text-primary mb-5 text-center">
            Register with us :)
          </h1>
          {/* Step Indicator with Progress Bar */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-4 w-full">
              {/* Step 1 */}
              <div className="relative flex-1 flex items-center">
                <div
                  id="indicator-1"
                  className="w-10 h-10 flex items-center justify-center bg-primary text-white rounded-full transition-colors duration-300 "
                >
                  1
                </div>
                <div
                  id="line-1"
                  className="absolute w-full h-1 bg-gray-300 left-0 top-1/2 transform translate-y-[-50%] z-[-1] transition-colors duration-300"
                />
              </div>
              {/* Step 2 */}
              <div className="relative flex-1 flex items-center">
                <div
                  id="indicator-2"
                  className={`w-10 h-10 flex items-center justify-center bg-gray-300 text-gray-600 rounded-full transition-colors duration-300 ${
                    currentStep === 2 || currentStep === 3
                      ? "bg-primary text-white"
                      : ""
                  }`}
                >
                  2
                </div>
                <div
                  id="line-2"
                  className="absolute w-full h-1 bg-gray-300 left-0 top-1/2 transform translate-y-[-50%] z-[-1] transition-colors duration-300"
                />
              </div>
              {/* Step 3 */}
              <div>
                <div
                  id="indicator-3"
                  className={`w-10 h-10 flex items-center justify-center bg-gray-300 text-gray-600 rounded-full transition-colors duration-300 ${
                    currentStep === 3 ? "bg-primary text-white" : ""
                  }`}
                >
                  3
                </div>
              </div>
            </div>
          </div>
          {/* Progress Bar */}
          <div className="w-full bg-gray-200 rounded-full h-2 mb-8">
            <div
              id="progress-bar"
              className="bg-primary h-2 rounded-full transition-all duration-300"
              style={{ width: (currentStep / 3) * 100 + "%" }}
            />
          </div>
          {/* Form Content */}
          <form id="multi-step-form">
            {multiStepFormData.map((step, index) => (
              <div
                key={step.id}
                id={step.id}
                className={`step ${currentStep === index + 1 ? "" : "hidden"}`}
              >
                <h2 className="text-xl font-semibold mb-4 text-primary">
                  {step.title}
                </h2>
                <div className="space-y-4 flex gap-2 flex-col">
                  {step.content}
                </div>
              </div>
            ))}
            <div className="flex justify-between mt-4">
              <button
                type="button"
                onClick={handlePrevStep}
                className={`bg-gray-300 text-gray-700 px-6 py-2 rounded-lg cursor-pointer ${
                  currentStep === 1 ? "hidden" : ""
                }`}
              >
                Previous
              </button>
              {currentStep === 3 ? (
                <button
                  type="button"
                  onClick={handleFormSubmit}
                  className="bg-primary text-white px-6 py-2 rounded-lg cursor-pointer"
                >
                  Submit
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handleNextStep}
                  className="bg-primary text-white px-6 py-2 rounded-lg cursor-pointer"
                >
                  Next
                </button>
              )}
            </div>
          </form>
          <div className="my-10 border-b text-center flex justify-center text-primary">
            <div className="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
              Already have an account?
            </div>
          </div>
          <Link to="/">
            <button className="mt-5 tracking-wide font-semibold bg-primary text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none cursor-pointer">
              <RiLoginBoxLine className="h-6 w-6 -ml-2" />
              <span className="ml-3">Login To Account</span>
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Register;
