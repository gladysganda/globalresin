"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import "./Header.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about-us" },
    { name: "Products", href: "/products" },
    { name: "Contact", href: "/#contact" },
  ];

  return (
    <header className="header">
      <div className="header-container">
        <Link href="/" className="logo-link">
          <img src="/assets/logo.png" alt="Global Resin Logo" className="logo" />
        </Link>

        <nav className="desktop-nav">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} scroll={true} className="nav-link">
              {link.name}
            </Link>
          ))}
        </nav>

        <button className="menu-button" onClick={toggleMenu}>
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {menuOpen && (
        <div className="mobile-nav-fullscreen">
          <nav className="mobile-nav-menu">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="mobile-link"
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
