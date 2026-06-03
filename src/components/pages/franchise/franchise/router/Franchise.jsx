import React from 'react'
import Banner from '../components/Banner'
import BrazlilianFootball from '../components/BrazlilianFootball'
import Transformation from '../components/Transformation'
import GoodFit from '../components/GoodFit'
import Steps from '../components/Steps'
import Enquiry from '../components/Enquiry'
import Prospectus from '../components/Prospectus'
import SchoolOffersYou from '../components/SchoolOfferYou'

const Franchise = () => {
    return (
        <div>
            <Banner />
            <BrazlilianFootball/>
            <Transformation/>
            <SchoolOffersYou />
            <GoodFit/>
            <Steps/>
            <Enquiry/>
            {/* <Prospectus/> */}
        </div>
    )
}

export default Franchise
