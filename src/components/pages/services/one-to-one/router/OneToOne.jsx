import React from 'react'
import Banner from '../components/Banner'
import CallBack from '../components/CallBack'
import Coaching from '../components/Coaching'
import Benefits from '../../weekly/components/Benefits'
import ReviewsOneToOne from '../components/ReviewsOneToOne'
import Qa from '../components/Qa'
import CoachingSessions from '../components/CoachingSessions'
import Enquiry from '../components/Enquiry'

const OneToOne = () => {
    return (
        <div>
            <Banner />
            <CallBack />
            <Coaching />
            <Benefits />
            <ReviewsOneToOne />
            <Qa/>
            <CoachingSessions/>
            <Enquiry/>
        </div>
    )
}

export default OneToOne
