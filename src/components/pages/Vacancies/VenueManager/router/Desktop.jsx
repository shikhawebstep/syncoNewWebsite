import React from 'react'
import Banner from '../components/Banner'
import Qa from '../components/Qa'
import Enquiry from '../components/Enquiry'
import Features from '../components/Features'
import BenifitSection from '../components/BenifitSection'
import IntegralPart from '../components/IntegralPart'
import Requirements from '../components/Requirements'
const VenueManager = () => {
    return (
        <div>
            <Banner />
            <Features />
            <BenifitSection />
            <IntegralPart/>
            <Requirements/>
            <Qa />
            <Enquiry />
        </div>
    )
}

export default VenueManager
