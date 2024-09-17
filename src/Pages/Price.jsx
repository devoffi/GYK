import React from 'react'
import { SectionContainer } from '../components/common/SectionContainer'
import PriceCard from '../components/PriceCard'
import AvailableFor from "../components/common/AvailableFor"

function Price() {
  return (
    <>
        < PriceCard />
        <div className='flex flex-col gap-3 justify-center items-center'>
          <p className='text-xs'>AvailableFor:</p>
          <img width={400} src='https://www.qustodio.com/wp-content/themes/Divi-child/assets/dist/svg/blocks/planbox-b/device-list.svg'/>
        </div>
        <div className='py-16'>
          <p className='text-center text-gray-700 text-4xl font-bold'>Learn more about what's included</p>
        </div>
    </>
  )
}

export default Price