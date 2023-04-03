import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'

const Layout = ({ children }) => {
  return (
    <div>
        <Header />
        <div className='flex pt-20'>
            <Sidebar />
            <main className='ml-[20%] bg-black'> {children} </main>
        </div>
    </div>
  )
}

export default Layout