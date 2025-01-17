
'use client'
import Link from "next/link";
import { useState } from "react";
import styles from './Navbar.module.css'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
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
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
