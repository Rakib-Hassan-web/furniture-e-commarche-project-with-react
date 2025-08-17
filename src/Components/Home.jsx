import React from 'react'
import Navbar from './Navbar'
import Banner from './Banner'
import SideTables from './SideTables'
import Top_Picks from './Top_Picks'
import NewArrival from './NewArrival'
import Blogs from './Blogs'

const Home = () => {
  return (
    < >
       <Navbar/>
       <Banner/>
       <SideTables/>
       <Top_Picks/>
       <NewArrival/>
       <Blogs/>
    </>
  )
}

export default Home