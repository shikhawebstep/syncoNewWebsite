import React from 'react'
import Banner from '../components/Banner'
import CallBack from '../components/CallBack'
import Coaching from '../components/Coaching'
import Benefits from '../../weekly/components/Benefits'
import Qa from '../components/Qa'
import Enquiry from '../components/Enquiry'
import Features from '../components/Features'

const Club = () => {
    return (
        <div>
            <Banner />
            <CallBack />
            <Coaching />
            <Benefits />
            <Features/>
            <Qa />
            <Enquiry />
        </div>
    )
}

export default Club
