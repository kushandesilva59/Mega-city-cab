"use client";
import { useState, useEffect } from "react";

export default function DriverTable() {
  const [drivername, setDrivername] = useState('');
  const [cars, setCars] = useState([]);
  const [drivers, setDrivers] = useState([]);
  const [selectedCar, setSelectedCar] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [license, setLicense] = useState('');
  const [phoneNumber, setPhoneNumber] = useState("");

  // Fetch customers, cars, and drivers
  useEffect(() => {

     const token = localStorage.getItem("token");

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

       

  }, []);

  // Open modal
  const openModal = (car) => {
    setSelectedCar(car);
    console.log(car)
    // setAssignedCar(customer.car || "");
    // setAssignedDriver(customer.driver || "");
    setIsModalOpen(true);
  };

  // Save Assigned Car & Driver
  const saveAssignment = async () => {
    if (!selectedCar) return;

    // const updatedCustomer = {
    //   id: selectedCustomer.id,
    //   driverId: Number(assignedDriver),
    //   carId: Number(assignedCar),
    // };

    // console.log(updatedCustomer);

    const token = localStorage.getItem("token");

    console.log(license)
    console.log(drivername)
    console.log(phoneNumber)

    // try {
    //   const response = await fetch(`http://localhost:3000/api/booking/`, {
    //     method: "PUT",
    //     headers: {
    //       "Content-Type": "application/json",
    //       Authorization: `Bearer ${token}`,
    //     },
    //     body: JSON.stringify(updatedCustomer),
    //   });

    //   if (!response.ok) {
    //     throw new Error("Invalid username or password");
    //   }

    //   const data = await response.json();
    //   console.log("Response Data:", data);
    //   window.location.reload();
    // } catch (error) {
    //   console.error("Error:", error.message);
    //   setError(error.message);
    // }

    // const data = await res.json();
    //setBookings(data.bookings);

    setIsModalOpen(false);
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-xl font-semibold mb-4">Cars Details</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-2 px-4 border">Brand</th>
              <th className="py-2 px-4 border">Model</th>
              <th className="py-2 px-4 border">License Plate</th>
              <th className="py-2 px-4 border">People Count</th>
              <th className="py-2 px-4 border">Free Km</th>
              <th className="py-2 px-4 border">Per day Rs.</th>
              <th className="py-2 px-4 border">Options</th>
            </tr>
          </thead>
          <tbody>
            {cars?.map((car) => (
              <tr key={car.id} className="border-b text-center">
                <td className="py-2 px-4 border">{car.brand}</td>
                <td className="py-2 px-4 border">{car.model}</td>
                <td className="py-2 px-4 border">{car.licensePlate}</td>
                <td className="py-2 px-4 border">{car.peapleCount}</td>
                <td className="py-2 px-4 border">{car.freeKm}</td>
                <td className="py-2 px-4 border">{car.perDayPrice}</td>

                <td className="py-2 px-4 border">
                  <button
                    onClick={() => openModal(car)}
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
            <h2 className="text-xl font-semibold mb-4">Edit Driver Details</h2>

            <div className="mb-2">
              <label className="block text-sm">Driving License Number</label>
              <input
                type="text"
                value={license}
                onChange={(e) => setLicense(e.target.value)}
                className="w-full p-2 border rounded"
                placeholder={selectedCar.licenseNumber}
              />
            </div>

            <div className="mb-2">
              <label className="block text-sm">Driver Name</label>
              <input
                type="text"
                value={drivername}
                onChange={(e) => setDrivername(e.target.value)}
                className="w-full p-2 border rounded"
                placeholder={selectedCar.name}
              />
            </div>

            <div className="mb-2">
              <label className="block text-sm">Phone Number</label>
              <input
                type="text"
                value={phoneNumber}
                placeholder={selectedCar.phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="w-full p-2 border rounded"
              />
            </div>

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
