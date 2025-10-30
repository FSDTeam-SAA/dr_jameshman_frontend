import HeroSection from '@/components/common/hero-section'
import React from 'react'
import GallerisContainer from './_components/gallery-container'

const GalleryPage = () => {
  return (
    <div>
      <HeroSection title="Our Gallery" description="Working together to create confident smiles" />
      <GallerisContainer/>
    </div>
  )
}

export default GalleryPage
