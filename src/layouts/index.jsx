import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'

const Layout = ({ children }) => {
  return (
    <div className='bg-dark'>
      <div className='max-w-full w-full mx-auto 2xl:h-screen'>
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
    </div>
  )
}

export default Layout