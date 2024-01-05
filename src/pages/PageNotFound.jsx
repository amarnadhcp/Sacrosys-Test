import React from 'react';
import { Link } from 'react-router-dom';

function PageNotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="text-6xl font-bold text-red-500 mb-8">404</div>
      <p className="text-xl text-gray-700 mb-6">Oops! The page you're looking for does not exist.</p>
      <Link to="/" className="px-6 py-3 text-lg bg-purple-500 text-white rounded-full hover:bg-purple-600 transition duration-300 ease-in-out transform hover:scale-105">Go to Home</Link>
    </div>
  );
}

export default PageNotFound;
