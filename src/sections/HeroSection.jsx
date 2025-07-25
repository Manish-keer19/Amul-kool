import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { SplitText } from "gsap/all"
import { useMediaQuery } from "react-responsive";
import { herobg } from "../constants";


const HeroSection = () => {

  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });

  const isTablet = useMediaQuery({
    query: "(max-width: 1024px)",
  });


 useGSAP(()=>{
  const titleSplit = SplitText.create(".hero-title",{
    type:"chars",
  })
  const tl = gsap.timeline({
    delay:1,
  })
  tl.to(".hero-content",{
    opacity:1,
    y:0,
    ease:"Power1.inOut"
  }).to(".hero-text-scroll",{
    duration:1,
    clipPath:"polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
    ease:"circ.out",
  },"-=0.5"
)
  .from(titleSplit.chars,{
    yPercent:200,
    stagger:0.02,
    ease:"power2.out",
  },"-=0.5"
)

const heroTL = gsap.timeline({

  scrollTrigger: {
    trigger: ".hero-container",
    start:"1% top",
    end:"bottom top",
    scrub:true,
  }
})
heroTL.to(".hero-container",{
  rotate:7,
  scale:0.9,
  yPercent:30,
  ease:"power1.inOut",
})
 });


  return (
    <section className="bg-main-bg">
     <div className="hero-container">
     
     {
      isTablet ? (
        <>
        {isMobile && (<img src="/images/hero-bg.png" className="absolute bottom-40 size-full object-cover"/>)}
        <img src="/images/hero-img.png" className="absolute bottom-0 left-1/2 -translate-x-1/2 object-auto"/>
        </>
      ) 
      
      : (
        <video src={herobg}
        autoPlay muted playsInline
        className="absolute insert-0 w-full h-full object-cover"/>
      )
     }

      <div className="hero-content opacity-0">
        <div className="overflow-hidden">
          <h1 className="hero-title">Too Kool To</h1>
        </div>
        <div style={{
          clipPath:"polygon(50% 0, 50% 0%, 50% 100%, 50% 100%)",
        }}
         className="hero-text-scroll">

          <div className="hero-subtitle">
            <h1> Be Just Milk</h1>
          </div>
        </div>
        <h2>
        Packed with bold desi flavors, chilled to perfection — Amul Kool is your anytime sip for energy, taste, and vibe. 
        </h2>
        <div className="hero-button">
          <p>Grab Your Flavor</p>
        </div>
      </div>
     </div>
    </section>
  )
}

export default HeroSection