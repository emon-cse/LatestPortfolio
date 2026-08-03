import React from 'react'
import Navbar from './components/Navbar'

const Layout = ({children}) => {
  return (
    <div className='flex'>
        <Navbar/>
        <main className='flex-1 bg-gray-200'>
            {children}
        </main>

        
    </div>

  )
}

export default Layout