
import NavBar from './components/NavBar'
import HeroSection from './sections/HeroSection'
import { ScrollSmoother, ScrollTrigger } from 'gsap/all'
import gsap from 'gsap'
import MsgSection from './sections/MsgSection'
import FlavourSection from './sections/FlavourSection'
import { useGSAP } from '@gsap/react'
import NutritionSection from './sections/NutritionSection'
import BenefitSection from './sections/BenefitSection'
import TestimonialSection from './sections/TestimonialSection'
import FooterSection from './sections/FooterSection'

gsap.registerPlugin(ScrollTrigger , ScrollSmoother)


const App = () => {
  useGSAP(()=>{
    ScrollSmoother.create({
      smooth: 3,
      effects: true,
    })
  })
  return (
    <>
    <NavBar/>
    <div id="smooth-wrapper">
    <div id="smooth-content">
    <HeroSection/>
    <MsgSection/>
    <FlavourSection/>
    <NutritionSection/>

   <div>
   <BenefitSection/>
   <TestimonialSection/>
   </div>

    <FooterSection/>
    </div> 
    </div>
    </>
  )
}

export default App