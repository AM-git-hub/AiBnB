import React from "react";
import TextBox from "../Utilities/TextBox";
import Button from "../Utilities/Button";
import Logo from "../../assets/aibnb-logo-final.png";

function SignupForm({ showLoginForm }) {
  return (
    <div
      className="space-y-7"
      style={{
        height: "100%", // inherit the total height of the parent container
        display: "flex",
        flexDirection: "column",
        justifyContent: "center", // align the form to the center of the div
      }}
    >
      {/* Form heading */}
      <div className="space-y-7 text-center">
        <div>
          {/* Logo div */}
          <div className="flex items-center justify-center">
            <img src={Logo} style={{ height: "100px", width: "100px" }} />
          </div>

          {/* Heading for the form */}
          <h1 className="text-4xl text-gray-700">Create your account</h1>
        </div>

        {/* Caption */}
        <div>
          <span className="text-gray-700">
            Hello there! Let's create your account.
          </span>
        </div>
      </div>

      {/* Input boxes */}
      <div className="space-y-7">
        {/* First Name & Last Name */}
        <div className="flex items-center space-x-5">
          <TextBox placeholder="First Name" />
          <TextBox placeholder="Last Name" />
        </div>

        {/* Email address */}
        <div>
          <TextBox placeholder="Email address" />
        </div>

        {/* Password */}
        <div>
          <TextBox placeholder="Password" />
        </div>

        {/* Terms of Service and policy section */}
        <div className="flex items-center space-x-3">
          <input type="checkbox" />
          <span className="text-xs text-gray-700">
            I agree to the{" "}
            <button className="text-blue-500">Terms of Service</button> and{" "}
            <button className="text-blue-500">Privacy Policy</button>
          </span>
        </div>

        {/* Sign up button */}
        <div>
          <Button label="Signup" />
        </div>

        {/* Horizontal Line */}
        <div>
          <div style={{ height: "2px" }} className="bg-gray-200" />
        </div>

        {/* Log In Link */}
        <div className="text-center">
          <span className="text-gray-700 text-xs">
            Joined us before?{" "}
            <button onClick={showLoginForm} className="text-blue-500">
              Log In
            </button>
          </span>
        </div>
      </div>
    </div>
  );
}

export default SignupForm;
