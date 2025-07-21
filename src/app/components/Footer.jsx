// components/Footer.jsx
import Link from "next/link";
import './Footer.css'; // We'll define styles here

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        {/* Company Info */}
        <div className="footer-info">
          <h3 className="footer-title">Global Resin</h3>
          <p className="footer-copy">
            &copy; {new Date().getFullYear()} PT. Global Sejahtera Perkasa. All rights reserved.
          </p>
        </div>

        {/* Desktop Menu */}
        <div className="footer-menu desktop-only">
          <Link href="/" className="footer-link">Home</Link>
          <Link href="/about-us" className="footer-link">About Us</Link>
          <Link href="/products" className="footer-link">Products</Link>
          <Link href="/contact-us" className="footer-link">Contact</Link>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="footer-menu mobile-only">
        <Link href="/" className="footer-link">Home</Link>
        <Link href="/about-us" className="footer-link">About Us</Link>
        <Link href="/products" className="footer-link">Products</Link>
        <Link href="/contact-us" className="footer-link">Contact</Link>
      </div>
    </footer>
  );
}
