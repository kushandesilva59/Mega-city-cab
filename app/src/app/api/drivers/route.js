import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    // Extract request data
    const requestData = await request.json();
    console.log("R data", requestData);

    // Get the token from the request headers
    const authHeader = request.headers.get("authorization");

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const token = authHeader.split(" ")[1]; // Extract token after "Bearer "
    console.log(token);

    // Send data to the backend
    const response = await fetch("http://localhost:8080/api/driver/save", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`, // Use extracted token
      },
      body: JSON.stringify(requestData),
    });

    // If response is not OK, return an error
    if (!response.ok) {
      throw new Error("Failed to save booking");
    }

    const responseData = response.text();

    // Return backend response
    return NextResponse.json(responseData);
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json({ error: "Booking failed" }, { status: 500 });
  }
}

export async function GET(request) {
  try {
    const authHeader = request.headers.get("authorization");

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const token = authHeader.split(" ")[1]; // Extract token after "Bearer "

    const response = await fetch(
      "http://localhost:8080/api/driver/all",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // Use extracted token
        },
      }
    );

    const drivers = await response.json();
    return NextResponse.json({ drivers });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch cars" },
      { status: 500 }
    );
  }
}

export async function PUT(req) {
  try {
    const authHeader = req.headers.get("Authorization");
    if (!authHeader) {
      return new Response(JSON.stringify({ error: "Unauthorized" }), {
        status: 401,
      });
    }

    const token = authHeader.split(" ")[1];
    const body = await req.json();

    console.log("Sending Request Body:", JSON.stringify(body, null, 2));

    // Forward request to Spring Boot backend
    const response = await fetch("http://localhost:8080/api/driver", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      throw new Error(`Failed to update booking: ${response.status}`);
    }

    // Check if response is text or JSON
    let update;
    const contentType = response.headers.get("content-type");
    if (contentType && contentType.includes("application/json")) {
      update = await response.json();
    } else {
      update = await response.text();
    }

    console.log("Update Response:", update);

    return NextResponse.json({ update });
  } catch (error) {
    console.error("Error updating booking:", error);
    return new Response(
      JSON.stringify({ error: error.message || "Internal Server Error" }),
      {
        status: 500,
      }
    );
  }
}

