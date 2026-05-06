'use client';
import Navbar from "../components/navbar";

const NavBar = () => {
  let bar = Navbar('contact');
  return (bar)
}

const HeroSection = () => {
  return (
    <div className="hero-wrapper">
      <NavBar />
    </div>
  );
};

export default HeroSection;