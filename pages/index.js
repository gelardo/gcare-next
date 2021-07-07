import React from "react";
import Hero from "./components/Home/Hero";
import WeAre from "./components/Home/we_are";
import StayWithUs from "./components/Home/stay_with_us";
import HealthTips from "./components/Home/health_tips";


export default function Home() {
  return (
   <>
       <Hero/>
       <WeAre/>
       <StayWithUs/>
       <HealthTips/>
   </>
  )
}
