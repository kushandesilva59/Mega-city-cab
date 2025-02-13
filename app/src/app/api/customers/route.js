import { NextResponse } from "next/server";

// Dummy customers (Replace with DB)
let customers = [
  {
    id: 1,
    name: "John Doe",
    date: "2024-02-11",
    start: "Colombo",
    destination: "Kandy",
    phone: "0771234567",
    car: "",
    driver: "",
  },
  {
    id: 2,
    name: "Jane Smith",
    date: "2024-02-12",
    start: "Galle",
    destination: "Jaffna",
    phone: "0777654321",
    car: "",
    driver: "",
  },
];

// Dummy cars & drivers (Replace with DB)
const cars = ["Toyota Prius", "Honda Civic", "Suzuki Alto", "Nissan Leaf"];
const drivers = ["Ali", "Sam", "Kamal", "Nimal"];

// GET Customers, Cars & Drivers
export async function GET() {
  return NextResponse.json({ customers, cars, drivers });
}

// UPDATE Customer (Assign Car & Driver)
export async function PUT(req) {
  const { id, car, driver } = await req.json();
  customers = customers.map((customer) =>
    customer.id === id ? { ...customer, car, driver } : customer
  );
  return NextResponse.json({ message: "Updated Successfully", customers });
}
