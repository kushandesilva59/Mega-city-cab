import { NextResponse } from "next/server";

let patients = [
  { id: 1, name: "Kushan", age: 25 },
  { id: 2, name: "Kushan 2", age: 15 },
  { id: 3, name: "Kushan 3", age: 75 },
  { id: 4, name: "Kushan 4", age: 45 },
];

export async function GET() {
  const response = await fetch(
    // "http://ec2-13-55-189-68.ap-southeast-2.compute.amazonaws.com:8080/swagger-ui/index.html "
    "http://localhost:3000/api/patients"
  );
  console.log(response);
  return NextResponse.json({ patients });
}

export async function DELETE(request) {
  const data = await request.json();

  console.log(data);

  patients = patients.filter((patient) => patient.id !== data.id);

  return NextResponse.json({ patients });
}

export async function POST(request) {
  const data = await request.json();

  const newPatient = {
    id: patients.length + 1,
    name: data.pName,
    age: data.age,
  };

  patients.push(newPatient);

  return NextResponse.json({ patients });
}
