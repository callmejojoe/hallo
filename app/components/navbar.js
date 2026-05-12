'use client';
import Link from "next/link";
// import { Info } from "lucide-react"



export default function Navbar(page) {
  return (
    <nav className="navbar">
      <Link href="/" className={page === 'home' ? 'active-badge' : 'button'}>
        HOME
      </Link>
      <Link href="/about" className={page === 'about' ? 'active-badge' : 'button'}>
        ABOUT
      </Link>
      <Link href="/portfolio" className={page === 'portfolio' ? 'active-badge' : 'button'}>
        PORTFOLIO
      </Link>
      <Link href="/projects" className={page === 'projects' ? 'active-badge' : 'button'}>
        PROJECTS
      </Link>
      <span className="divider">|</span>
      <Link href="/contact" className={page === 'contact' ? 'active-badge' : 'button'}>
        CONTACT <span className="info">i</span>
      </Link>
    </nav>
  );
}

{/* <Info size={16} /> */}