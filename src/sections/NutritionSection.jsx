import { useMediaQuery } from "react-responsive"
import { nutrientLists } from "../constants"
import { useEffect, useState } from "react"
import { useGSAP } from "@gsap/react"
import { SplitText } from "gsap/all"
import gsap from "gsap"

const NutritionSection = () => {

    const isMobile =  useMediaQuery({
        query:'(max-width: 768px)'
    })

    const [lists, setlist] = useState(nutrientLists)

    useEffect(()=>{
        if(isMobile ){
            setlist(nutrientLists.slice(0,3))
        } else{
            setlist(nutrientLists)
        }
    },[isMobile])
    
    useGSAP(()=>{
        const titleSplit = SplitText.create(".nutrition-title",{
            type:"chars",
        })
        const paragraphSplit = SplitText.create(".nutrition-section p",{
            type:"words,lines",
            linesClass:"paragraph-line",
        })

        const contentTl = gsap.timeline({
            scrollTrigger:{
                trigger:".nutrition-section",
                start:"top center",
            },
        })
        contentTl.from(titleSplit.chars,{
            yPercent:100,
            stagger:0.02,
            ease:"power2.out",
        }).from(paragraphSplit.words,{
            yPercent:300,
            rotate: 3,
            ease:"power1.inOut",
            duration:1,
            stagger:0.01,
        })

        const titleTl= gsap.timeline({
            scrollTrigger: {
                trigger:".nutrition-section",
                start: "top 80%",
            }
        })

        titleTl.to(".nutrition-text-scroll",{
            duration:1,
            opacity:1,
            clipPath:"polygon(0 0, 100% 0, 100% 100%, 0 100%)",
            ease:"power1.inOut",
        })
        
    })

  return (
    <section className="nutrition-section">

        <img className="w-full object-cover" src="/images/slider-dip.png" alt="" />

        <img className="big-img" src="/images/big-img.png" alt="" />

        <div className="flex md:flex-row flex-col justify-between md:px-10 px-5 mt-14 md:mt-0">
            <div className="relative inline-block md:translate-y-20">
                <div className="general-title relative flex flex-col justify-center items-center gap-24 ">
                   <div className="overflow-hidden place-self-start">
                   <h1 className="nutrition-title">It Still does</h1>
                   </div>
                    <div style={{
                        clipPath:"polygon(0 0, 100% 0, 100% 100%, 0 100%)"
                    }} className="nutrition-text-scroll place-self-start">
                        <div className="bg-yellow-brown pb-5 md:pt-0 pt-3 md: px-5 px-3 inline-block">
                            <h2 className="text-milk-yellow">Body Good</h2>
                        </div>
                    </div>
                </div>
            </div>

        <div className="flex md:justify-center items-center translate-y-5">
            <div className="md:max-w-xs max-w-md">
                <p className="text-lg md:text-right text-balance font-paragraph">Packed with creamy goodness and a burst of juicy strawberry flavor, this isn’t just a drink — it’s a throwback to simpler, sweeter days.</p>
            </div>
        </div>
      
      <div className="nutrition-box">
        <div className="list-wrapper">

            {
                lists.map((nutrient,index)=> 
                <div key={index} className="relative flex-1 col-center">
                    <div>
                        <p className="md:text-lg font-paragraph">{nutrient.label}</p>
                        <p className="font-paragraph text-sm mt-2">up to</p>
                        <p className="text-2xl md:text-4xl tracking-tighter font-bold">{nutrient.amount}</p>
                    </div>
                {
                    index !== lists.length - 1 && (
                    <div className="space-border"/>
                )}
                </div>)
            }
        </div>
      </div>
        </div>
    </section>
  )
}

export default NutritionSection