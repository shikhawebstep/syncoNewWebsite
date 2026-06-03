import React from 'react'
import Banner from '../components/Banner'
import HowWork from '../components/HowWork'
import Requirements from '../components/Requirements'
import Qa from '../components/Qa'
import Enquiry from '../components/Enquiry'
import Features from '../components/Features'
import CourseDetail from '../components/CourseDetail'
import BenifitSection from '../components/BenifitSection'
const CoachDesktop = () => {
    return (
        <div>
            <Banner />
            <Features/>
            <BenifitSection />
            <Qa />
             <Requirements/>
             <CourseDetail/>
             <HowWork/>
            <Enquiry />
        </div>
    )
}

export default CoachDesktop
