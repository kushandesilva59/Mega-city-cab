"use client";
import { useState, useEffect } from "react";

export default function CustomerTable() {
  const [bookings, setBookings] = useState([]);
  const [cars, setCars] = useState([]);
  const [drivers, setDrivers] = useState([]);
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [assignedCar, setAssignedCar] = useState("");
  const [assignedDriver, setAssignedDriver] = useState("");

  // Fetch customers, cars, and drivers
  useEffect(() => {

     const token = localStorage.getItem("token");

     fetch("/api/booking", {
       method: "GET",
       headers: {
         "Content-Type": "application/json",
         Authorization: `Bearer ${token}`, // Include the token here
       },
     })
       .then((res) => {
         if (!res.ok) {
           throw new Error("Failed to fetch data");
         }
         return res.json();
       })
       .then((data) => {
         setBookings(data.bookings);
       })
       .catch((error) => console.error("Error fetching data:", error));

       fetch("/api/cars", {
         method: "GET",
         headers: {
           "Content-Type": "application/json",
           Authorization: `Bearer ${token}`, // Include the token here
         },
       })
         .then((res) => {
           if (!res.ok) {
             throw new Error("Failed to fetch data");
           }
           return res.json();
         })
         .then((data) => {
           setCars(data.cars);
         })
         .catch((error) => console.error("Error fetching data:", error));

          fetch("/api/drivers", {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`, // Include the token here
            },
          })
            .then((res) => {
              if (!res.ok) {
                throw new Error("Failed to fetch data");
              }
              return res.json();
            })
            .then((data) => {
              setDrivers(data.drivers);
            })
            .catch((error) => console.error("Error fetching data:", error));

  }, []);

  // Open modal
  const openModal = (customer) => {
    setSelectedCustomer(customer);
    setAssignedCar(customer.car || "");
    setAssignedDriver(customer.driver || "");
    setIsModalOpen(true);
  };

  // Save Assigned Car & Driver
  const saveAssignment = async () => {
    if (!selectedCustomer) return;

    const updatedCustomer = {
      id: selectedCustomer.id,
      driverId: Number(assignedDriver),
      carId: Number(assignedCar),
    };

    console.log(updatedCustomer);

    const token = localStorage.getItem("token");

    try {
      const response = await fetch(`http://localhost:3000/api/booking/`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(updatedCustomer),
      });

      if (!response.ok) {
        throw new Error("Invalid username or password");
      }

      const data = await response.json();
      console.log("Response Data:", data);
      window.location.reload();
    } catch (error) {
      console.error("Error:", error.message);
      setError(error.message);
    }

    // const data = await res.json();
    //setBookings(data.bookings);

    setIsModalOpen(false);
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-xl font-semibold mb-4">Customer Assignments</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-2 px-4 border">Customer Name</th>
              <th className="py-2 px-4 border">Date</th>
              <th className="py-2 px-4 border">Start</th>
              <th className="py-2 px-4 border">Destination</th>
              <th className="py-2 px-4 border">Phone</th>
              <th className="py-2 px-4 border">Car</th>
              <th className="py-2 px-4 border">Driver</th>
              <th className="py-2 px-4 border">Options</th>
            </tr>
          </thead>
          <tbody>
            {bookings?.map((booking) => (
              <tr key={booking.id} className="border-b">
                <td className="py-2 px-4 border">{booking.customerName}</td>
                <td className="py-2 px-4 border">{booking.date}</td>
                <td className="py-2 px-4 border">{booking.startLocation}</td>
                <td className="py-2 px-4 border">
                  {booking.destinationLocation}
                </td>
                <td className="py-2 px-4 border">{booking.telephoneNumber}</td>
                <td className="py-2 px-4 border">
                  {booking.car || "Not Assigned"}
                </td>
                <td className="py-2 px-4 border">
                  {booking.driver || "Not Assigned"}
                </td>
                <td className="py-2 px-4 border">
                  <button
                    onClick={() => openModal(booking)}
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                  >
                    Assign
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Assign Car & Driver</h2>
            <div className="mb-2">
              <label className="block text-sm">Car</label>
              <select
                value={assignedCar}
                onChange={(e) => setAssignedCar(e.target.value)}
                className="w-full p-2 border rounded"
              >
                <option value="">Select Car</option>
                {cars.map((car) => (
                  <option key={car.id} value={car.id}>
                    {car.licensePlate}
                  </option>
                ))}
              </select>
            </div>
            {/* <div className="mb-2">
              <label className="block text-sm">Driver</label>
              <select
                value={assignedDriver}
                onChange={(e) => setAssignedDriver(e.target.value)}
                className="w-full p-2 border rounded"
              >
                <option value="">Select Driver</option>
                {drivers.map((driver) => (
                  <option key={driver.id} value={driver.id}>
                    {driver.name}
                  </option>
                ))}
              </select>
            </div> */}
            <div className="flex justify-end space-x-2 mt-4">
              <button
                onClick={() => setIsModalOpen(false)}
                className="bg-gray-400 text-white px-4 py-2 rounded"
              >
                Cancel
              </button>
              <button
                onClick={saveAssignment}
                className="bg-green-500 text-white px-4 py-2 rounded"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
