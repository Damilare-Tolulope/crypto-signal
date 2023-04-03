import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'

const Layout = ({ children }) => {
  return (
    <div>
        <Header />
        <div className='flex pt-20'>
            <Sidebar />
            <main className='ml-[20%] bg-black p-5 w-full'> 
              <div className='bg-dark p-5'>
                {children} 
              </div>
            </main>
        </div>
    </div>
  )
}

export default Layout