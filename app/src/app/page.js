import Image from "next/image";
import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./components/HeroSection/HeroSection";
import Table from "./components/Table/Table";
import HomePage from "./components/Home/HomePage";

export default function Home() {
 const columns = ["Name", "Email", "Role"];
 const data = [
   { Name: "John Doe", Email: "john@example.com", Role: "Admin" },
   { Name: "Jane Smith", Email: "jane@example.com", Role: "User" },
   { Name: "Sam Wilson", Email: "sam@example.com", Role: "Moderator" },
 ];

  return (
    <div className="">
      <main className="">
        {/* <Table columns={columns} data={data} />{" "} */}

        <Navbar />
        <HeroSection />

        {/* <HomePage /> */}

      </main>
    </div>
  );
}
