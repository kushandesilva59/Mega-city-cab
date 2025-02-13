"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsAuthenticated(!!token);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const confirmLogout = () => {
    toast(
      <div>
        <p>Are you sure you want to logout?</p>
        <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
          <button onClick={handleLogout} className={styles.yesButton}>
            Yes
          </button>
          <button onClick={() => toast.dismiss()} className={styles.noButton}>
            No
          </button>
        </div>
      </div>,
      {
        position: "top-center",
        autoClose: false, // Prevent auto closing
        closeButton: false, // Hide default close button
      }
    );
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
    toast.dismiss(); // Close the toast after clicking Yes
    window.location.href = "/";
  };

  return (
    <nav className={`${styles.navbar} px-16 py-4 text-white`}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          MegaCity Cab
        </Link>
        <button className={styles.menuToggle} onClick={toggleMenu}>
          ☰
        </button>
        <div className={`${styles.navLinks} ${isOpen ? "open" : ""}`}>
          <Link href="/">Home</Link>
          <Link href="/">About</Link>
          <Link href="/">Services</Link>
          <Link href="/">Contact</Link>
          {isAuthenticated && (
            <button onClick={confirmLogout} className={styles.logoutBtn}>
              Logout
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
