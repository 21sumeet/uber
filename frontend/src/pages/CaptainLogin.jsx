import React, { useState } from "react";
import { Link } from "react-router-dom";

const CaptainLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();

    const CaptainData = {
      email: email,
      password: password,
    };

    setEmail("");
    setPassword("");
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
              Login
            </button>
          </form>

          <p className="text-center mt-5">
            Want to join a fleet?{" "}
            <Link
              to="/captain-signup"
              className="text-blue-600 hover:underline"
            >
              Register as a Captain
            </Link>
          </p>

          <Link
            to="/login"
            className="bg-orange-500 flex items-center justify-center text-white font-semibold mt-8 rounded-lg px-4 py-2 w-full text-base hover:bg-orange-700 transition"
          >
            Sign in as User
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CaptainLogin;
