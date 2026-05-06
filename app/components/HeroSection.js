'use client';
import Image from 'next/image';
import Link from 'next/link';
import bgImg from '../../public/bg.jpg';
import { Dancing_Script } from 'next/font/google';
import Navbar from './navbar';

const dancingScript = Dancing_Script({ subsets: ['latin'] });

const NavBar = () => {
  let bar = Navbar('home');
  return (bar)
}

export default function HeroSection() {
  return (
    <div>
      <div className="hero-wrapper">

        {/* <div className="character-bg" id="parallax-bg" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1535378620166-273708d44e4c?q=80&w=2157&auto=format&fit=crop')" }}></div> */}
        <div className="character-bg" id="parallax-bg"><Image
          src={bgImg}
          alt="Background"
          fill
         // layout="fill"
          style={{objectFit: 'cover'}}
          loading="eager"
        /></div> 

        <div className="pagination-dots">
          <span className="dot active"></span>
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>

        <div className="paper-container">
          <div className="paper-clip">

            <div className="watermark">ENGINEER</div>

            <NavBar />

            {/* <nav className="navbar">
              <a href="/">HOME</a>
              <a href="/about">ABOUT</a>
              <a href="/portfolio" className="active-badge">PORTFOLIO</a>
              <a href="/projects">PROJECTS</a>
              <span className="divider">|</span>
              <a href="/contact">CONTACT <span>ℹ</span></a>
            </nav> */}

            <main className="content">
              <h1>Joe-francis</h1>

              <h3>Mechatronics Engineering & Full-Stack Development</h3>

              <p>Building the bridge between hardware and software. Specializing in embedded systems, automation, and modern web technologies.</p>
              <p>Currently focusing on integrating analog electronics with responsive, user-friendly front-end interfaces to create seamless full-stack robotic solutions.</p>

              <div className="social-link">
                <span>https://github.com/callmejojoe</span>
              </div>

              <div className="signature">CallmeJoJoe</div>

              <div className="action-buttons">
                <Link href="#" className="btn btn-dark">VIEW PROJECTS</Link>
                <Link href="#" className="btn btn-light">DOWNLOAD CV</Link>
              </div>
            </main>

            <footer className="social-footer">
              @CallmeJoJoe on github & linkedin
            </footer>
          </div>
        </div>

      </div>
    </div>
  );
}
