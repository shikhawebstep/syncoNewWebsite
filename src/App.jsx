import React from 'react'
import Header from './components/Header'
import MobileHeader from "./components/MobileHeader.jsx";
import './App.css'
import MobileFooter from "./components/MobileFooter.jsx";
import { useLocation } from 'react-router-dom';
import TopFooter from './components/TopFooter'
import { Routes, Route } from 'react-router-dom';
import Page from './components/pages/home/Page';
import Footer from './components/Footer'
import Weekly from './components/pages/services/weekly/router/Weekly';
import OneToOne from './components/pages/services/one-to-one/router/OneToOne';
import HolidayCamp from './components/pages/services/holiday-camps/router/HolidayCamp';
import BirthdayParty from './components/pages/services/birthday-party/router/BirthdayParty';
import Club from './components/pages/services/club/router/Club';
import Franchise from './components/pages/franchise/franchise/router/Franchise';
import Support from './components/pages/franchise/support/router/Support';
import Candidate from './components/pages/franchise/candidate/router/Candidate';
import Investment from './components/pages/franchise/investment/router/Investment';
import Crm from './components/pages/franchise/crm/router/Crm';
import FindAClass from './components/pages/findAClass/router/FindAClass';
import BookFreeTrial from './components/pages/findAClass/components/freeTrial/BookFreeTrial';
import WaitingList from './components/pages/findAClass/components/waitingList/WaitingList';
import BookMemberShip from './components/pages/findAClass/components/bookMembership/BookMemberShip';
import CoachDesktop from './components/pages/Vacancies/Desktop/router/Desktop.jsx';
import { BookingProvider } from './components/pages/findAClass/components/bookMembership/context/BookingContext';
import FindACamp from './components/pages/findACamp/router/FindACamp';
import WaitingCampList from './components/pages/findACamp/components/waitingList/WaitingList';
import BookCampMembership from './components/pages/findACamp/components/bookACamp/BookACamp';
import BecomeACoachDesktop from './components/pages/Vacancies/BecomeACoach/router/Desktop.jsx';
import VenueManager from './components/pages/Vacancies/VenueManager/router/Desktop.jsx';
import AboutDesktop from './components/pages/AboutUs/Desktop/router/Desktop.jsx';
import AboutMeetTheTeam from './components/pages/AboutUs/MeetTheTeam/router/Desktop.jsx';
import AboutSSSUniform from './components/pages/AboutUs/SSSUniform/router/Desktop.jsx';
import LondonVenues from './components/pages/AboutUs/LondonVenues/router/Desktop.jsx';
import AboutReviews from './components/pages/AboutUs/Reviews/router/Desktop.jsx';
import InnerVenues from './components/pages/AboutUs/VenueInternal/router/Desktop.jsx';
import MembershipPackage from './components/pages/AboutUs/MembershipPackage/router/Desktop.jsx';
import PackagesRoute from './components/pages/Packages/router/Desktop.jsx';
import ReferralScheme from './components/pages/ReferralScheme/router/Support.jsx';
import LoyaltyScheme from './components/pages/LoyaltyScheme/router/Support.jsx';
import MainBlogPage from './components/pages/Blogs/MainBlogPage/router/Support.jsx';
import DetailBlogPage from './components/pages/Blogs/DetailBlog/router/Support.jsx';
import ContactUs from './components/pages/ContactUs/router/Support.jsx';
import ScrollToTop from './components/pages/Common/ScrollToTop';

const App = () => {
  const location = useLocation();

  return (
    <>
      <ScrollToTop />
      <BookingProvider>
        <Header />
         <MobileHeader /> 
        <Routes>
          <Route path="/" element={<Page />} />
          <Route path="/services/weekly" element={<Weekly />} />
          <Route path="/services/training" element={<OneToOne />} />
          <Route path="/services/camps" element={<HolidayCamp />} />
          <Route path="/services/parties" element={<BirthdayParty />} />
          <Route path="/services/club" element={<Club />} />
          <Route path="/franchise" element={<Franchise />} />
          <Route path="/franchise/support" element={<Support />} />
          <Route path="/franchise/ideal" element={<Candidate />} />
          <Route path="/franchise/investment" element={<Investment />} />
          <Route path="/franchise/case-study" element={<Crm />} />
          <Route path="/find-a-class" element={<FindAClass />} />
          <Route path="/find-a-class/book-free-trial" element={<BookFreeTrial />} />
          <Route path="/find-a-class/waiting-list" element={<WaitingList />} />
          <Route path="/find-a-class/book-membership" element={<BookMemberShip />} />
          <Route path="/find-a-camp" element={<FindACamp />} />
          <Route path="/find-a-camp/waiting-list" element={<WaitingCampList />} />
          <Route path="/find-a-camp/book-camp" element={<BookCampMembership />} />
          <Route path="/coaching" element={<CoachDesktop />} />
          <Route path="/coaching/coach" element={<BecomeACoachDesktop />} />
          <Route path="/coaching/manager" element={<VenueManager />} />
          <Route path="/about" element={<AboutDesktop />} />
          <Route path="/about/team" element={<AboutMeetTheTeam />} />
          <Route path="/about/uniform" element={<AboutSSSUniform />} />
          <Route path="/about/venues" element={<LondonVenues />} />
          <Route path="/about/reviews" element={<AboutReviews />} />
          <Route path="/about/InnerVenues" element={<InnerVenues />} />
          <Route path="/about/membership-packages" element={<MembershipPackage />} />
          <Route path="/packages" element={<PackagesRoute />} />
          <Route path="/referral-scheme" element={<ReferralScheme />} />
          <Route path="/loyalty-scheme" element={<LoyaltyScheme />} />
          <Route path="/blogs" element={<MainBlogPage />} />
          <Route path="/blogs/detailBlog" element={<DetailBlogPage />} />
          <Route path="/contact" element={<ContactUs />} />

          {/* <Route path="/services" element={<Services />} />
                <Route path="/about" element={<About />} />
                <Route path="/franchise" element={<Franchise />} />
                <Route path="/coaching" element={<Coaching />} />
                <Route path="/contact" element={<Contact />} /> */}
        </Routes>
      {location.pathname !== "/services/parties" && location.pathname !== "/services/camps" && location.pathname !== "/services/training" &&  location.pathname !== "/services/weekly" &&<TopFooter />}
        <Footer />
        <MobileFooter />
      </BookingProvider>
    </>
  )
}

export default App
