import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Homediv1 from '../../components/Homediv1'
import Homediv2 from '../../components/Homediv2'
import Homediv3 from '../../components/Homediv3'
import Homediv4 from '../../components/Homediv4'
import Homediv5 from '../../components/Homediv5'

function Home() {
  return (
    <div>
        <Navbar/>
        <Homediv1/>
        <Homediv2/>
        <Homediv3/>
        <Homediv4/>
        <Homediv5/>


        <Footer/>
      
    </div>
  )
}

export default Home
