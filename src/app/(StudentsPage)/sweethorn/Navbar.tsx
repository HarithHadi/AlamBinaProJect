"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className={styles.navbar}>
      {/* Left empty space for balance */}
      <div className={styles.navGroup}></div>
      
      {/* Centered navigation items */}
      <div className={styles.centeredNav}>
        <Link 
          href="/sweethorn" 
          className={`${styles.navLink} ${pathname === "/sweethorn" ? styles.active : ""}`}
        >
          Home
        </Link>
        <Link 
          href="/sweethorn/soil" 
          className={`${styles.navLink} ${pathname === "/sweethorn/soil-compaction" ? styles.active : ""}`}
        >
          Soil Compaction
        </Link>
        
        {/* Centered logo */}
        <Link href="/" className={styles.logoLink}>
          ECO<span>STUDY</span>
        </Link>
        
        <Link 
          href="/sweethorn/method" 
          className={`${styles.navLink} ${pathname === "/sweethorn/method" ? styles.active : ""}`}
        >
          Method
        </Link>
        <Link 
          href="/sweethorn/penetrometer" 
          className={`${styles.navLink} ${pathname === "/sweethorn/penetrometer" ? styles.active : ""}`}
        >
          Penetrometer
        </Link>

        <Link 
          href="/sweethorn/quiz" 
          className={`${styles.navLink} ${pathname === "/sweethorn/quiz" ? styles.active : ""}`}
        >
          QUIZ
        </Link>
      </div>
      
      {/* Right empty space for balance */}
      <div className={styles.navGroup}></div>
    </nav>
  );
}