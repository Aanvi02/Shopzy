import React from 'react'
import { assets, features } from '../assets/assets'

const BottomBanner = () => {
  return (
    <div className='relative mt-24'>

      {/* Background */}
      <img src={assets.bottom_banner_image} alt="banner" className='w-full hidden md:block'/>
      <img src={assets.bottom_banner_image_sm} alt="banner" className='w-full md:hidden'/>

      {/* Content */}
      <div className='absolute inset-0 flex flex-col items-center md:items-end md:justify-center px-6 md:px-20'>

        <div className='max-w-[420px]'>

          <h1 className='text-2xl md:text-3xl font-semibold text-primary mb-6'>
            Why we Are the Best ?
          </h1>

          {features.map((feature, index) => (
            <div key={index} className='flex items-start gap-4 mt-4'>

              {/* Icon */}
              <img 
                src={feature.icon} 
                alt={feature.title} 
                className='w-8 md:w-10 object-contain'
              />

              {/* Text */}
              <div>
                <h3 className='text-lg md:text-xl font-semibold'>
                  {feature.title}
                </h3>
                <p className='text-gray-500/70 text-xs md:text-sm leading-relaxed'>
                  {feature.description}
                </p>
              </div>

            </div>
          ))}

        </div>

      </div>
    </div>
  )
}

export default BottomBanner