import React from 'react';
import { FiTrendingUp, FiUser, FiCalendar, FiBarChart2, FiMessageCircle, FiImage } from 'react-icons/fi';

const BentoGrid = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Featured Item */}
        <div className="md:col-span-2 md:row-span-2 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-3xl p-6 text-white shadow-xl">
          <h2 className="text-3xl font-bold mb-4">Featured Content</h2>
          <p className="mb-4">This is a larger card to highlight important content or a main feature of your application.</p>
          <button className="bg-white text-indigo-600 px-4 py-2 rounded-full font-semibold hover:bg-opacity-90 transition duration-300">
            Learn More
          </button>
        </div>

        {/* Stats Card */}
        <div className="bg-white rounded-3xl p-6 shadow-lg">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-semibold">Statistics</h3>
            <FiTrendingUp className="text-green-500 text-2xl" />
          </div>
          <p className="text-4xl font-bold">1,234</p>
          <p className="text-gray-500">Total users this week</p>
        </div>

        {/* User Card */}
        <div className="bg-gradient-to-r from-pink-500 to-rose-500 rounded-3xl p-6 text-white shadow-lg">
          <div className="flex items-center mb-4">
            <FiUser className="text-2xl mr-2" />
            <h3 className="text-xl font-semibold">New Users</h3>
          </div>
          <p className="text-4xl font-bold">+28%</p>
          <p>Increase in new signups</p>
        </div>

        {/* Calendar Card */}
        <div className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-3xl p-6 text-white shadow-lg">
          <div className="flex items-center mb-4">
            <FiCalendar className="text-2xl mr-2" />
            <h3 className="text-xl font-semibold">Upcoming</h3>
          </div>
          <p className="text-lg font-semibold">Team Meeting</p>
          <p>Thursday, 2:00 PM</p>
        </div>

        {/* Chart Card */}
        <div className="bg-white rounded-3xl p-6 shadow-lg">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-semibold">Performance</h3>
            <FiBarChart2 className="text-blue-500 text-2xl" />
          </div>
          <div className="h-32 flex items-end justify-between">
            <div className="w-1/5 bg-blue-500 rounded-t-lg" style={{height: '60%'}}></div>
            <div className="w-1/5 bg-blue-500 rounded-t-lg" style={{height: '80%'}}></div>
            <div className="w-1/5 bg-blue-500 rounded-t-lg" style={{height: '40%'}}></div>
            <div className="w-1/5 bg-blue-500 rounded-t-lg" style={{height: '70%'}}></div>
            <div className="w-1/5 bg-blue-500 rounded-t-lg" style={{height: '90%'}}></div>
          </div>
        </div>

        {/* Message Card */}
        <div className="bg-gradient-to-r from-teal-400 to-cyan-500 rounded-3xl p-6 text-white shadow-lg">
          <div className="flex items-center mb-4">
            <FiMessageCircle className="text-2xl mr-2" />
            <h3 className="text-xl font-semibold">Messages</h3>
          </div>
          <p className="text-4xl font-bold">5</p>
          <p>Unread messages</p>
        </div>

        {/* Image Card */}
        <div className="relative overflow-hidden rounded-3xl shadow-lg">
          <img src="/placeholder.svg?height=200&width=400" alt="Placeholder" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="text-white text-center">
              <FiImage className="text-4xl mb-2 mx-auto" />
              <p className="text-lg font-semibold">View Gallery</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BentoGrid;