import React from 'react'
import Navbar from './utils/Navbar'
import Navigation from './utils/Navigation'
import List from './List'
import Footer from './utils/Footer'

export default function Home() {
  return (
    <div>
        <Navbar />
        <Navigation />
        <div className='relative md:container mx-auto px-4'>
          <List />
        </div>

        <Footer />
    </div>
  )
}
