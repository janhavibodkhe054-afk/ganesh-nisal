import React from 'react'
import SpiritualSocialSection from '../components/home/SpiritualSocialSection'
import ShivMandir from '../components/spiritual/ShivMandir'
import ReligiousActivities from '../components/spiritual/ReligiousActivities'
import EducationalSocialActivities from '../components/spiritual/EducationalSocialActivities'
import TempleEventsGallery from '../components/spiritual/TempleEventsGallery'

const Spiritual = () => {
  return (
    <div>
      <SpiritualSocialSection/>
      <ShivMandir/>
      <ReligiousActivities/>
      <EducationalSocialActivities/>
      <TempleEventsGallery/>
    </div>
  )
}

export default Spiritual
