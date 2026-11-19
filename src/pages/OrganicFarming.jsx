import React from 'react'
import OrganicHero from '../components/organic/OrganicHero'
import UnderstandingOrganic from '../components/organic/UnderstandingOrganic'
import SoilHealth from '../components/organic/SoilHealth'
import OrganicCarbon from '../components/organic/OrganicCarbon'
import SoilBiologyVermicompost from '../components/organic/SoilBiologyVermicompost'
import WaterManagement from '../components/organic/WaterManagement'
import CropObservation from '../components/organic/CropObservation'
import TerraceStrawberry from '../components/organic/TerraceStrawberry'

const OrganicFarming = () => {
  return (
    <div>
      <OrganicHero/>
      <UnderstandingOrganic/>
      <SoilHealth/>
      <OrganicCarbon/>
      <SoilBiologyVermicompost/>
      <WaterManagement/>
      <CropObservation/>
      {/* <TerraceStrawberry/> */}
    </div>
  )
}

export default OrganicFarming
