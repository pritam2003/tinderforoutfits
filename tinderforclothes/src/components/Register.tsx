import React from 'react';

const RegisterPage = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gray-100">
      <h1 className="text-2xl font-bold mb-8 text-center">Register</h1>
      <form className="flex flex-col items-center space-y-4 w-full max-w-sm">
        <input
          type="text"
          placeholder="Username"
          className="border px-4 py-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          type="email"
          placeholder="Email"
          className="border px-4 py-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          type="password"
          placeholder="Password"
          className="border px-4 py-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          type="submit"
          className="px-8 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-200 w-full"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default RegisterPage;
