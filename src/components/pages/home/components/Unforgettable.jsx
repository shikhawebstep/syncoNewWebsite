import React from 'react'
import Reviews from '../../Common/Reviews'

const Unforgettable = () => {
  return (
    <>
      <section className="unforgattable py-8 md:py-10 lg:py-12 grey-bg">
        <div className="container">
          <div className="md:text-center px-4 sm:px-6 md:px-0">
          
            <div className='uppercase px-5 blue-text text-[20px] font-bold'>Google reviews</div>

            <h3 className="blue-text text-[26px] sm:text-[30px] md:text-[36px] lg:text-[42px]">
              Unforgettable{' '}
              <span className='mb-3 md:mb-0 pb-2 md:pb-0 light-blue-text relative'>moments <br className='block md:hidden'/></span>{' '}
              <br className="md:block hidden" /> since 2009
            </h3>
          </div>

          <Reviews />
        </div>
      </section>
    </>
  )
}

export default Unforgettable