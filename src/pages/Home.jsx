import React from 'react'
import HeroSection from '../components/home/HeroSection'
import AboutSection from '../components/home/AboutSection'
import AreasOfWork from '../components/home/AreasOfWork'
import FarmingPhilosophy from '../components/home/FarmingPhilosophy'
import FeaturedExperiment from '../components/home/FeaturedExperiment'
import RecognitionSection from '../components/home/RecognitionSection'
import SpiritualSocialSection from '../components/home/SpiritualSocialSection'
import ContactCTA from '../components/home/ContactCTA'

const Home = () => {
  return (
    <div>
      <HeroSection/>
      <AboutSection/>
      <AreasOfWork/>
      <FarmingPhilosophy/>
      <FeaturedExperiment/> 
      <RecognitionSection/>
      <SpiritualSocialSection/>
      <ContactCTA/>
    </div>
  )
}

export default Home
