import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gray-100">
      <h1 className="text-4xl font-bold mb-8 text-center">Welcome to TinderForClothes</h1>
      <div className="flex space-x-4">
        <Link to="/register">
          <button className="px-8 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-200">
            Register
          </button>
        </Link>
        <Link to="/login">
          <button className="px-8 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition duration-200">
            Login
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
