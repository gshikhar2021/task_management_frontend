import { useState } from "react";

const AuthForm = ({ onSubmit, isSignup }) => {
  const [formData, setFormData] = useState({ username: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="w-screen h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-2xl shadow-lg">
        <h2 className="text-2xl font-bold text-center text-gray-800">{isSignup ? "Sign Up" : "Log In"}</h2>
        <p className="text-sm text-gray-500 text-center mt-2">{isSignup ? "Create an account" : "Access your account"}</p>

        <div className="mt-6 space-y-4">
          <input
            type="text"
            name="username"
            placeholder="Username"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
            onChange={handleChange}
          />
          <button
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold p-3 rounded-lg transition duration-200"
            onClick={() => onSubmit(formData)}
          >
            {isSignup ? "Sign Up" : "Log In"}
          </button>
        </div>

        <p className="mt-4 text-center text-sm text-gray-600">
          {isSignup ? "Already have an account?" : "Don't have an account?"}{" "}
          <span className="text-blue-500 hover:underline cursor-pointer">
            {isSignup ? "Log in" : "Sign up"}
          </span>
        </p>
      </div>
    </div>
  );
};

export default AuthForm;
