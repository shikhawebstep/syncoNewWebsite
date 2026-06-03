import React from 'react'
import Reviews from '../../../Common/Reviews'

const ReviewsOneToOne = () => {
  return (
    <>
      <section className="unforgattable py-10 pt-15 grey-bg">
        <div className="container">
           <div className="text-center md:mt-20">
                    {/* <div className="review-img mb-4 flex justify-center items-center gap-3">
                        <img className='w-[120px]' src="/assets/google-reviews.png" alt="" />
                        <img className='w-[120px]' src="/assets/trustpoint.png" alt="" />
                    </div>
                    <h3 className="blue-text">
                        Unforgettable <span className='light-blue-text relative '>moments</span> <br className="md:block hidden" /> since 2009
                    </h3> */}
                </div>
          <Reviews />
        </div>
      </section>
    </>
  )
}

export default ReviewsOneToOne
