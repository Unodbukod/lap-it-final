import Navbar from '../../landingpage/components/navbar'
import React from 'react'
import Firstsec from './components/firstsec'
import Faq2 from './components/Faq2'
import Footer from '@/app/components/constants/Footer'


const Page = () => {
  return (
    <div>
      <Navbar/>
      <div className=" text-gray-950 sm:text-red-600 md:text-blue-500 lg:text-orange-600 xl:text-green-600">
        BOGO
      </div>
      <Firstsec/>
      <Faq2/>
      <Footer />
    </div>
  )
}

export default Page