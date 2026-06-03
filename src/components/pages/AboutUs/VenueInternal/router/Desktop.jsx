import React from 'react'
import Banner from '../components/Banner'
import FrequentlyAskedQuestions from '../components/FrequentlyAskedQuestions'
import Features from '../components/Features'
import Benefits from '../components/Benefits'
import EverythingYouNeed from '../components/EverythingYouNeed'
import MembershipPackages from '../components/MembershipPackages'
const InnerVenues = () => {
    return (
        <div>
            <Banner />
            <Features />
            <Benefits />
            <EverythingYouNeed />
            <FrequentlyAskedQuestions />
        </div>
    )
}

export default InnerVenues
