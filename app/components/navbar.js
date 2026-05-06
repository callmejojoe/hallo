'use client';
import Link from "next/link";

export default function Navbar(page) {
  return (
    <nav className="navbar">
      <Link href="/" className={page === 'home' ? 'active-badge' : ''}>
        HOME
      </Link>
      <Link href="/about" className={page === 'about' ? 'active-badge' : ''}>
        ABOUT
      </Link>
      <Link href="/portfolio" className={page === 'portfolio' ? 'active-badge' : ''}>
        PORTFOLIO
      </Link>
      <Link href="/projects" className={page === 'projects' ? 'active-badge' : ''}>
        PROJECTS
      </Link>
      <span className="divider">|</span>
      <Link href="/contact" className={page === 'contact' ? 'active-badge' : ''}>
        CONTACT <span>ℹ</span>
      </Link>
    </nav>
  );
}