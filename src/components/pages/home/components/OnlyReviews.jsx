import React from 'react'
import Reviews from '../../Common/Reviews'

const OnlyReviews = () => {
  return (
    <>
      <section className="unforgattable py-8 md:py-10 lg:pt-14 lg:py-12 grey-bg">
        <div className="container">
          {/* <div className="text-center px-4 sm:px-6 md:px-0">
           
            <div className='uppercase blue-text text-[20px] font-bold'>Google reviews</div>

            <h3 className="blue-text text-[26px] sm:text-[30px] md:text-[36px] lg:text-[42px]">
              Unforgettable{' '}
              <span className='light-blue-text relative'>moments</span>{' '}
              <br className="md:block hidden" /> since 2009
            </h3>
          </div> */}

          <Reviews />
        </div>
      </section>
    </>
  )
}

export default OnlyReviews