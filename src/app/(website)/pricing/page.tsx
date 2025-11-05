import HeroSection from '@/components/common/hero-section'
import React from 'react'
import TheFees from './_components/the-fees'
import FeesContainer from './_components/fees-container'

const PricingPage = () => {
  return (
    <div>
      <HeroSection title="Pricing & Payment Information" />
      <TheFees/>
      <FeesContainer/>
    </div>
  )
}

export default PricingPage
