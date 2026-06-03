import React from 'react'
import Banner from '../components/Banner'
import EnquireToday from '../components/EnquireToday'
import Qa from '../components/Qa'
import Prospectus from '../components/Prospectus'
import CaseStudy from '../components/CaseStudy'
import Enquiry from '../components/Enquiry'
const Support = () => {
  return (
    <div>
      <Banner />
      <EnquireToday/>
      <Qa/>
      {/* <Prospectus/> */}
      <CaseStudy/>
      <Enquiry/>
    </div>
  )
}

export default Support
