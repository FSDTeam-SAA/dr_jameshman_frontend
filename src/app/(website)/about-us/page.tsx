import HeroSection from '@/components/common/hero-section'
import React from 'react'
import MeetTheTeam from './_components/meet-the-team'
import WhyChooseUs from './_components/why-choose-us'

const AboutUsPage = () => {
  return (
    <div>
      <HeroSection title="About Us" description="Get to know our story, our mission, and the team dedicated to your dental health." />
      <WhyChooseUs/>
      <MeetTheTeam/>
    </div>
  )
}

export default AboutUsPage
