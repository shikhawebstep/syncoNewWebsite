import React from 'react'
import Banner from '../components/Banner'
import BookCamp from '../components/BookCamp'
import ChildSection from '../components/ChildSection'
import Benefits from '../../weekly/components/Benefits'
import Whyus from '../components/Whyus'
import Qa from '../components/Qa'
import Enquiry from '../components/Enquiry'
import OnlyReviews from '../../../home/components/onlyReviews'

const HolidayCamp = () => {
  return (
    <>
      <Banner />
      <BookCamp />
      <ChildSection />
      <Benefits />
      <OnlyReviews/>
      <Qa/>
      {/* <Enquiry/> */}
      <Whyus/>
    </>
  )
}

export default HolidayCamp
