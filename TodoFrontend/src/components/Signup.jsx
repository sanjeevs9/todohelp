import React from 'react';
import { useNavigate } from 'react-router-dom';

const SignupForm = () => {
    const navigate=useNavigate();
  return (
    <div className="h-screen flex flex-col">
      <nav className="bg-blue-500 py-4">
        <div className="container mx-auto p-4 flex justify-between">
          <h1 className="text-white text-2xl font-bold cursor-pointer" onClick={()=>{navigate("/")}} >Your App Name</h1>
          <div className="flex items-center">
            <button
              type="button"
              className="bg-transparent hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-4"
            >
              Login
            </button>
            <button
              type="button"
              className="bg-transparent hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Signup
            </button>
          </div>
        </div>
      </nav>
      <div className="flex-1 p-4 bg-white">
        <form className="max-w-md mx-auto">
          <h2 className="text-2xl font-bold mb-4">Create an account</h2>
          <div className="mb-4">
            <label htmlFor="firstName" className="block text-gray-700 text-sm font-bold mb-2">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none"
              placeholder="John"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="lastName" className="block text-gray-700 text-sm font-bold mb-2">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none"
              placeholder="Doe"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none"
              placeholder="johndoe@example.com"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none"
              placeholder="********"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="confirmPassword" className="block text-gray-700 text-sm font-bold mb-2">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none"
              placeholder="********"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Signup
            </button>
          </div>
          <div className="text-center mt-4">
            <p className="text-gray-600">Already have an account? <a onClick={()=>{navigate("/login")}} className="cursor-pointer text-blue-500 hover:underline">Login</a></p>
          </div>
          <div className="text-center mt-4">
            <button
              type="button"
              className="bg-gray-300 hover:bg-gray-400 text-gray-700 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Signup with Google
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;