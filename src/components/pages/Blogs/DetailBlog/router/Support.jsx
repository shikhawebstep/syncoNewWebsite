import React from 'react'
import Banner from '../components/Banner'
import RecentPosts from '../components/RecentPosts'
import JoinMailList from '../../../Common/JoinMailingList'
import FrequentlyAskedQuestions from '../components/FrequentlyAskedQuestions'
const DetailBlogPage = () => {
  return (
    <div>
      <Banner />
      <FrequentlyAskedQuestions / >
      <RecentPosts />
      
      <JoinMailList />
    </div>
  )
}

export default DetailBlogPage
