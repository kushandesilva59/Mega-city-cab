"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const BookingForm = () => {
  const router = useRouter();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (localStorage.getItem("token") == null) {
      console.log("No user");
      router.push("/");
    } else {
      console.log("Have user");

       const user = JSON.parse(localStorage.getItem("user"));
       console.log("Menna user", user);
       const updatedFormData = {
         ...formData,
         address: user.address,
         customerName: user.username,
         email:user.email
       };

       setFormData(updatedFormData)

    }
  }, []);

  const [formData, setFormData] = useState({
    customerName: "",
    time: "",
    date: "",
    startLocation: "",
    destinationLocation: "",
    telephoneNumber: "",
    address: "",
    approveStatus: false,
    carId: "",
    driverId: "",
    email:""
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    // if (name === "confirmPassword") {
    //   setError(value !== formData.password ? "Passwords do not match!" : "");
    // }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token");
   


    console.log("New form data",formData)

    const body = formData;
    try {
      const response = await fetch("http://localhost:3000/api/booking", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(body),
      });

      if (!response.ok) {
        throw new Error("Invalid username or password");
      }

      const data = await response.json();
      console.log("Response Data:", body);
      router.push('/')
    } catch (error) {
      console.error("Error:", error.message);
      setError(error.message);
    }

    console.log("Form Data Submitted:", formData);
    // Add your form submission logic here (e.g., API call)
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Add booking
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="date"
              className="block text-sm font-medium text-gray-700"
            >
              Date
            </label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              placeholder="Enter your name"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="date"
              className="block text-sm font-medium text-gray-700"
            >
              Time
            </label>
            <input
              type="time"
              id="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              placeholder="Enter your name"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="address"
              className="block text-sm font-medium text-gray-700"
            >
              Destination Location
            </label>
            <input
              type="text"
              id="destinationLocation"
              name="destinationLocation"
              value={formData.destinationLocation}
              onChange={handleChange}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              placeholder="Enter your address"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="nic"
              className="block text-sm font-medium text-gray-700"
            >
              Start Location
            </label>
            <input
              type="text"
              id="startLocation"
              name="startLocation"
              value={formData.startLocation}
              onChange={handleChange}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              placeholder="Enter your NIC"
            />
          </div>

          

          <div className="mb-4">
            <label
              htmlFor="contact"
              className="block text-sm font-medium text-gray-700"
            >
              Contact Number
            </label>
            <input
              type="telephoneNumber"
              id="telephoneNumber"
              name="telephoneNumber"
              value={formData.telephoneNumber}
              onChange={handleChange}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              placeholder="Enter your contact number"
            />

            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
          >
            Book a ride
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookingForm;
