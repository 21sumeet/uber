import React, { useState } from "react";
import { Link } from "react-router-dom";

const CaptainSignup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userData, setUserData] = useState({});

  const submitHandler = async (e) => {
    e.preventDefault();

    const newUser = {
      fullname: {
        firstname: firstName,
        lastname: lastName,
      },
      email: email,
      password: password,
    };

    setEmail("");
    setPassword("");
    setFirstName("");
    setLastName("");
  };
  return (
    <div>
      <div className="flex items-center justify-center h-screen bg-gray-50">
        <div className="bg-white shadow-lg rounded-lg p-7 w-full max-w-md md:max-w-lg lg:max-w-xl">
          <div className="mb-8">
            <img
              className="w-16 mx-auto"
              src="https://www.svgrepo.com/show/505031/uber-driver.svg"
              alt="Logo"
            />
          </div>

          <form onSubmit={submitHandler}>
            <h3 className="text-lg w-1/2  font-medium mb-2">
              What's your name
            </h3>
            <div className="flex gap-4 mb-7">
              <input
                required
                className="bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border  text-lg placeholder:text-base"
                type="text"
                placeholder="First name"
                value={firstName}
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
              />
              <input
                required
                className="bg-[#eeeeee] w-1/2  rounded-lg px-4 py-2 border  text-lg placeholder:text-base"
                type="text"
                placeholder="Last name"
                value={lastName}
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
              />
            </div>

            <h3 className="text-lg font-medium mb-2">What's your email</h3>
            <input
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-gray-100 mb-5 rounded-lg px-4 py-2 border w-full text-base placeholder-gray-400"
              type="email"
              placeholder="email@example.com"
            />

            <h3 className="text-lg font-medium mb-2">Enter Password</h3>
            <input
              className="bg-gray-100 mb-5 rounded-lg px-4 py-2 border w-full text-base placeholder-gray-400"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              type="password"
              placeholder="password"
            />

            <button className="bg-black text-white font-semibold rounded-lg px-4 py-2 w-full text-base hover:bg-gray-800 transition">
              Create Account
            </button>
          </form>

          <p className="text-center mt-5">
            Already have an account?{" "}
            <Link to="/captain-login" className="text-blue-600 hover:underline">
              Login here
            </Link>
          </p>

          {/* <Link
          to="/captain-login"
          className="bg-green-600 flex items-center justify-center text-white font-semibold mt-8 rounded-lg px-4 py-2 w-full text-base hover:bg-green-700 transition"
        >
          Sign in as Captain
        </Link> */}
          <div>
            <p className=" m-5 text-center text-[10px] leading-tight">
              This site is protected by reCAPTCHA and the{" "}
              <span className="underline">Google Privacy Policy</span> and{" "}
              <span className="underline">Terms of Service apply</span>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaptainSignup;
