import React, { useState } from "react";
import { Link } from "react-router-dom";

const UserLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();

    const userData = {
      email: email,
      password: password,
    };

    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-50">
      <div className="bg-white shadow-lg rounded-lg p-7 w-full max-w-md md:max-w-lg lg:max-w-xl">
        <div className="mb-8">
          <img
            className="w-16 mx-auto"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYQy-OIkA6In0fTvVwZADPmFFibjmszu2A0g&s"
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
          New here?{" "}
          <Link to="/signup" className="text-blue-600 hover:underline">
            Create new Account
          </Link>
        </p>

        <Link
          to="/captain-login"
          className="bg-green-600 flex items-center justify-center text-white font-semibold mt-8 rounded-lg px-4 py-2 w-full text-base hover:bg-green-700 transition"
        >
          Sign in as Captain
        </Link>
      </div>
    </div>
  );
};

export default UserLogin;
