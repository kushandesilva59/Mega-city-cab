import { NextResponse } from "next/server";

export async function POST(request) {

  //console.log(localStorage.getItem('token'))

  try {
    // Extract login data from the request body
 const { username, password } = await request.json();
    // Send data to the backend
    const response = await fetch("http://localhost:8080/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({username,password}),
    });


    // If response is not OK, return an error
    if (!response.ok) {
      throw new Error("Invalid username or password");
    }

    const user = await response.json()
    console.log(user)
    // Return the token as a JSON object
    return NextResponse.json( user );
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json({ error: "Login failed" }, { status: 401 });
  }
}
