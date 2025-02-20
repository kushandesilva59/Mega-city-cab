"use client";

import { useState } from "react";
import Sidebar from "../SideBar/Sidebar";
import DataTable from "../DataTable/DataTable";
import BookingForm from "../BookingForm/BookingForm";
import CustomerTable from "../CustomerTable/CustomerTable";
import DriverTable from "../DriversTable/DriverTable";
import CarTable from "../CarTable/CarTable";

export default function HomePage() {
  const [activePage, setActivePage] = useState('');

  const renderPage = () => {
    switch (activePage) {
      case "dashboard":
        return <DataTable />;
      case "bookings":
        return <CustomerTable />;
      case "drivers":
        return <DriverTable />;
      case "cars":
        return <CarTable />;
      default:
        return <DataTable />;
    }
  };

  return (
    <div className="flex">
      <Sidebar setActivePage={setActivePage} />
      <main className="flex-1 p-6">
        <h1 className="text-3xl font-bold mb-4 capitalize">{activePage}</h1>
        <div className="p-4 bg-white shadow-md rounded-lg">{renderPage()}</div>
      </main>
    </div>
  );
}
