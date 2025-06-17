// src/NotFound.jsx

import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-800 text-center p-4">
      <br />
      <br />
      <br />

      <h1> <a className="text-5xl font-bold mb-4" href="index.html">404</a></h1>

      <p className="text-xl mb-6">Oops! Page not found.</p>
      <Link
        to="/"
        className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition"
      >
        Go Home
      </Link>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default NotFound;
