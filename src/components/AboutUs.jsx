import "../index.css";
import Canvas from "./Canvas";
import data from "./data";
import { useEffect, useState, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Circ, Expo } from "gsap/all";

function App() {
  const [showCanvas, setShowCanvas] = useState(false);
  const headingRef = useRef(null);
  const growingSpan = useRef(null);

  useEffect(() => {
    const handleClick = (e) => {
      setShowCanvas((prev) => {
        if (!prev) {
          // Click animation for opening canvas
          gsap.set(growingSpan.current, {
            top: e.clientY,
            left: e.clientX,
          });

          gsap.to("body", {
            color: "#000",
            backgroundColor: "#fd2c2a",
            duration: 1.2,
            ease: "power2.inOut",
          });

          gsap.to(growingSpan.current, {
            scale: 1000,
            duration: 2,
            ease: "power2.inOut",
            onComplete: () => {
              gsap.set(growingSpan.current, {
                scale: 0,
                clearProps: "all",
              });
            },
          });
        } else {
          // Reset to black background
          gsap.to("body", {
            color: "#fff",
            backgroundColor: "#000",
            duration: 1.2,
            ease: "power2.inOut",
          });
        }

        return !prev;
      });
    };

    const headingEl = headingRef.current;
    headingEl.addEventListener("click", handleClick);

    return () => headingEl.removeEventListener("click", handleClick);
  }, []);

  return (
    <>
      {/* Growing Circle Animation */}
      <span
        ref={growingSpan}
        className="growing fixed w-5 h-5 rounded-full top-[-20px] left-[-20px] z-50 block"
      ></span>

      {/* Section 1 - Hero Section */}
      <section className="aboutusbg w-full relative min-h-screen">
        {showCanvas &&
          data[0].map((canvasDets, index) => (
            <Canvas key={index} details={canvasDets} />
          ))}

        {/* Navigation */}
        <nav className="w-full p-6 md:p-8 flex justify-between items-center relative z-50">
          <div className="brand text-xl md:text-2xl font-semibold">AMUL KOOL</div>
          <div className="links hidden md:flex gap-6 md:gap-10 text-sm md:text-base">
            {["What we do", "Who we are", "How we give back", "Talk to us"].map(
              (link, index) => (
                <a
                  key={index}
                  href={`#${link.toLowerCase().replace(/\s/g, "-")}`}
                  className="hover:text-gray-300 transition-all"
                >
                  {link}
                </a>
              )
            )}
          </div>
        </nav>

        {/* Text Section */}
        <div className="textcontainer w-full px-6 md:px-[10%] lg:px-[20%] pt-10">
          <div className="text w-full md:w-[70%] lg:w-[50%]">
            <h3 className="text-2xl md:text-4xl font-medium leading-snug md:leading-[1.2]">
              Welcome to Amul Kool — your favorite chilled beverage, made with love & purity.
            </h3>
            <p className="text-base md:text-lg w-full md:w-[90%] mt-6 md:mt-10 font-normal">
              Born from the house of Amul, India’s most iconic dairy brand,
              Amul Kool was launched to give you a modern twist on traditional dairy drinks.
              What started as a refreshing milk-based beverage quickly became a youth favorite.
            </p>
            <p className="text-sm mt-6 md:mt-10 text-gray-400">
              Tap on the heading to see the magic ✨
            </p>
          </div>
        </div>

        {/* Main Heading */}
        <div className="w-full absolute bottom-0 left-0 pb-10">
          <h1
            ref={headingRef}
            className="text-[3rem] sm:text-[5rem] md:text-[8rem] lg:text-[13rem] xl:text-[17rem] font-normal tracking-tight leading-none pl-5"
          >
            The AMUL Kool
          </h1>
        </div>
      </section>

      {/* Section 2 - Mission */}
      <section className="w-full relative min-h-screen mt-24 md:mt-32 px-6 md:px-10 py-10">
        {showCanvas &&
          data[1].map((canvasDets, index) => (
            <Canvas key={index} details={canvasDets} />
          ))}
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-semibold tracking-tight">
          Our Mission
        </h2>
        <p className="text-base sm:text-2xl md:text-3xl mt-6 md:mt-10 font-light leading-relaxed md:leading-[1.8] max-w-5xl">
          To bring flavorful joy to every household — combining nutrition,
          taste, and convenience in every sip. We believe in evolving with time
          while staying rooted in values — just like our drinks.
        </p>
      </section>
    </>
  );
}

export default App;
