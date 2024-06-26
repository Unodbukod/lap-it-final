
import React from 'react'
import Navbar from '../../landingpage/components/navbar'
import Firstsection from './components/firstsec'
import Secondsection from './components/secondsec'

import Forthsection from './components/forthsec'
import Footer from '@/app/components/constants/Footer'
import Thirdsection from './components/thridsec'

const Page = () => {
  return (
    <div>
      <Navbar/>
      <Firstsection/>
      <Secondsection/>
      <Thirdsection/>
      <Forthsection/>
      <Footer/>
    </div>
  )
}

export default Page
