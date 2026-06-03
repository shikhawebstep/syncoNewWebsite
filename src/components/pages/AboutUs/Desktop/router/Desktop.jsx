import React from 'react'
import Banner from '../components/Banner'
import Qa from '../components/Qa'
import Features from '../components/Features'
import OurStory from '../components/OurStory'
import WhyBrazil from '../components/WhyBrazil'
import WhatMakeDiffrent from '../components/WhatMakeDiffrent'
import Whyus from '../components/Whyus'
const AboutDesktop = () => {
    return (
        <div>
            <Banner />
            <Features/>
            <OurStory />
            <WhyBrazil />
            <WhatMakeDiffrent />
            <Qa />
            <Whyus />
        </div>
    )
}

export default AboutDesktop
