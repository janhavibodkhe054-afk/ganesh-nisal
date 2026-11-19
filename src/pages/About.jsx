import React from 'react'
import AboutHero from '../components/about/AboutHero'
import WhoIsGanesh from '../components/about/WhoIsGanesh'
import FarmingEntrepreneurship from '../components/about/FarmingEntrepreneurship'
import EducationalContent from '../components/about/EducationalContent'
import LearningExperimentation from '../components/about/LearningExperimentation'
import ValuesBeliefs from '../components/about/ValuesBeliefs'

const About = () => {
  return (
    <div>
      <AboutHero/>
      <WhoIsGanesh/>
      <FarmingEntrepreneurship/>
      <EducationalContent/>
      <LearningExperimentation/>
      <ValuesBeliefs/>
    </div>
  )
}

export default About
