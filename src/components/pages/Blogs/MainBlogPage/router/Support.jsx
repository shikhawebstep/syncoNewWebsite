import React from 'react'
import Banner from '../components/Banner'
import EnquireToday from '../components/EnquireToday'
import BrowseCategory from '../components/BrowseCategory'
import Follow from '../components/Follow'
import JoinMailList from '../../../Common/JoinMailingList'
const MainBlogPage = () => {
  return (
    <div>
      <Banner />
      <BrowseCategory />
      <EnquireToday />
      <Follow />
      <JoinMailList />
    </div>
  )
}

export default MainBlogPage
