import gsap from "gsap"
import { flavorlists } from "../constants"
import { useGSAP } from "@gsap/react"
import { useRef } from "react"
import { useMediaQuery } from "react-responsive"

const FlavorSlider = () => {

    const sliderRef = useRef()

    const isTablet = useMediaQuery({
        query:"(max-width: 1024px)",
    })

    useGSAP(()=>{

     const scrollAmount = sliderRef.current.scrollWidth - window.innerWidth

     if(!isTablet){


        const tl = gsap.timeline({
            scrollTrigger:{
                trigger:".flavor-section",
                start:"2% top",
                end:`+=${scrollAmount + 1500}px`,
                scrub: true,
                pin: true,
            }
        })
        tl.to(".flavor-section",{
            x:`-${scrollAmount + 1500}px`,
            ease:"power1.inOut",

        })

     }



    const titleTl = gsap.timeline({
        scrollTrigger:{
            trigger:".flavor-section",
            start:"top top",
            end:"bottom 80%",
            scrub:true,
        }
    })

    titleTl.to(".first-text-split",{
        xPercent:-30,
        ease:"power1.inOut",
    }).to(".flavor-text-scroll",{
        xPercent:-22,
        ease:"power1.inOut",
    },"<"
).to(".second-text-split",{
    xPercent:-10,
    ease:"power1.inOut",
},"<")

    })


  return (
    <div ref={sliderRef} className="slider-wrapper">
        <div className="flavors">
            {
                flavorlists.map((flavor)=>(
                    <div key={flavor.name} className={`relative z-30 lg:w-[50vw] w-96 lg:h-[70vh] md:w-[90vw] md:h-[50vh] h-80 flex-none ${flavor.rotation}`}>

                        <img className="absolute bottom-0" src={`/images/${flavor.color}-bg.svg`} alt="" />

                        <img className="drinks" src={`/images/${flavor.color}-drink.webp`} alt="" />

                        <img className="elements" src={`/images/${flavor.color}-elements.png`} alt="" />

                        <h1>{flavor.name}</h1>
                    </div>
                ))}
            
        </div>
    </div>
  )
}

export default FlavorSlider