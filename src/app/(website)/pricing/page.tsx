import HeroSection from '@/components/common/hero-section'
import React from 'react'
import TheFees from './_components/the-fees'
import FeesContainer from './_components/fees-container'

const PricingPage = () => {
  return (
    <div>
      <HeroSection title="Pricing & Payment Information" description="Get to know our story, our mission, and the team dedicated to your dental health." />
      <TheFees/>
      <FeesContainer/>
    </div>
  )
}

export default PricingPage
