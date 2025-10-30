import React from 'react'
import Hero from './_components/Hero'
import ContactInformatioin from './_components/contact-information'
import WhyChooseOur from './_components/why-choose-our'
import GetInTouch from './_components/get-in-touch'
import OurTreatments from './_components/our-treatments'

const HomePage = () => {
  return (
    <div className='min-h-screen'>
      <Hero/>
      <OurTreatments/>
      <WhyChooseOur/>
      <GetInTouch/>
      <ContactInformatioin/>
    </div>
  )
}

export default HomePage
