// src/pages/Home.jsx
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-green-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-green-700 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Welcome to VillageConnect
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Bridging communities, farmers, and services — all in one place.
          </p>
          <Link
            to="/services"
            className="bg-yellow-400 text-green-900 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition"
          >
            Explore Services
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
          <h2 className="text-xl font-bold mb-2 text-green-800">Local News</h2>
          <p className="text-gray-600">
            Stay updated with announcements, events, and news from your village.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
          <h2 className="text-xl font-bold mb-2 text-green-800">Farmer's Hub</h2>
          <p className="text-gray-600">
            Access crop tips, weather updates, and connect with buyers.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
          <h2 className="text-xl font-bold mb-2 text-green-800">Community Market</h2>
          <p className="text-gray-600">
            Buy, sell, and trade goods with neighbors and local vendors.
          </p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-yellow-100 py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 text-green-800">
            Ready to get started?
          </h2>
          <p className="text-lg mb-6">
            Join VillageConnect today and make your community stronger.
          </p>
          <Link
            to="/login"
            className="bg-green-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition"
          >
            Sign Up
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
