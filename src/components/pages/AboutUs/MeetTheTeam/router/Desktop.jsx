import React from 'react'
import Banner from '../components/Banner'
import Qa from '../components/Qa'
import Features from '../components/Features'
import OurStory from '../components/OurStory'
import WhyBrazil from '../components/WhyBrazil'
import WhatMakeDiffrent from '../components/WhatMakeDiffrent'
import Whyus from '../components/Whyus'
import VenueManager from '../components/VenueManager'
import BookAClass from '../components/BookAClass'
const AboutMeetTheTeam = () => {
    return (
        <div>
            <Banner />
            <VenueManager />
            {/* <Features/> */}
            <OurStory />
        <BookAClass />
            {/* <WhyBrazil /> */}
            {/* <WhatMakeDiffrent /> */}
            {/* <Qa /> */}
            {/* <Whyus /> */}
            
        </div>
    )
}

export default AboutMeetTheTeam
