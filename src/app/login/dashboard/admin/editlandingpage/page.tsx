import Footer from '@/app/components/constants/Footer'


import React from 'react'

import Features from './landingpage/Features'
import Thirdsection from './landingpage/Thirdsec'
import Fourthsec from './landingpage/Fourthsec'
import Fifthesec from './landingpage/Fifthesec'
import Servicessec from './landingpage/Servicessec'
import Testimonysec from './landingpage/Testimonysec'
import Contact from './landingpage/Contact'
import Home from './landingpage/Home'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import Navbar from './landingpage/components/navbar'


const Page = async () => {
  const session = await getServerSession(authOptions);
  if (session?.user.role == 'admin'){
  return (
    <div>
      <Navbar/>
      <Home/>
      <Features/>
      <Thirdsection/>
      <Fourthsec/>
      <Fifthesec/>
      <Servicessec/>
      <Testimonysec/>
      <Contact/>
      <Footer/>
    </div>
  )
}
return <h2> Please Login First to see this page <a href="/login/signin">Sign In</a></h2>;
}

export default Page

