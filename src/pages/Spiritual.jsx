import React from 'react'
import SpiritualSocialSection from '../components/home/SpiritualSocialSection'
import ShivMandir from '../components/spiritual/ShivMandir'
import ReligiousActivities from '../components/spiritual/ReligiousActivities'
import EducationalSocialActivities from '../components/spiritual/EducationalSocialActivities'
import TempleEventsGallery from '../components/spiritual/TempleEventsGallery'
import SpiritualHero from '../components/spiritual/SpiritualHero'

const Spiritual = () => {
  return (
    <div>
      <SpiritualHero/>
      
      <ShivMandir/>
      <ReligiousActivities/>
      <EducationalSocialActivities/>
      <TempleEventsGallery/>
    </div>
  )
}

export default Spiritual
