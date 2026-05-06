import Image from "next/image";
import HeroSection from "./components/HeroSection";

export default function Home() {
  return (
    <div>
     {/* a large heading for my name */}
     {/* a smaller but still bold text under my name */}
      {/* a short paragraph about me */}
      {/* my github link */}
      {/* my name again but this time with a cursive font that looks like handwritten signature */}
      {/* two buttons below the signature, one says view project(leads to portfolio page) and the other says download CV(leads to a pdf in about page) */}
      {/* a watermark text in the background that says 'Engineer'  */}
      {/* for the icing on the cake, an image at the right which seems to be partly covered by the hero that is cut diagonally, so all the content is on the left and the image is on the right, and the image is overed diagonally so it looks like it's peeking from behind the hero section */}
      <HeroSection />
    </div>
  );
}
