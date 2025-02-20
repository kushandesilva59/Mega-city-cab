'use client'
import { FiHome, FiSettings } from "react-icons/fi";

const Sidebar = ({ setActivePage }) => {
  return (
    <aside className="w-64 bg-gray-800 text-white h-screen p-4">
      <h2 className="text-xl font-bold mb-6">Menu</h2>
      <ul>
        <li className="mb-2">
          <button
            className="w-full text-left hover:bg-gray-700 p-2 rounded"
            onClick={() => setActivePage("dashboard")}
          >
            Dashboard
          </button>
        </li>
        <li className="mb-2">
          <button
            className="w-full text-left hover:bg-gray-700 p-2 rounded"
            onClick={() => setActivePage("bookings")}
          >
            Bookings
          </button>
        </li>
        <li className="mb-2">
          <button
            className="w-full text-left hover:bg-gray-700 p-2 rounded"
            onClick={() => setActivePage("settings")}
          >
            Settings
          </button>
        </li>
        <li className="mb-2">
          <button
            className="w-full text-left hover:bg-gray-700 p-2 rounded"
            onClick={() => setActivePage("drivers")}
          >
            Drivers
          </button>
        </li>
        <li className="mb-2">
          <button
            className="w-full text-left hover:bg-gray-700 p-2 rounded"
            onClick={() => setActivePage("cars")}
          >
            Cars
          </button>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
