import React from 'react'
import Hero from './_components/Hero'
import ContactInformatioin from './_components/contact-information'
import WhyChooseOur from './_components/why-choose-our'

const HomePage = () => {
  return (
    <div>
      <Hero/>
      <WhyChooseOur/>
      <ContactInformatioin/>
    </div>
  )
}

export default HomePage
