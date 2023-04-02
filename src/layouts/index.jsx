import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'

const Layout = ({ children }) => {
  return (
    <div>
        <Header />
        <div>
            <Sidebar />
            <main> {children} </main>
        </div>
    </div>
  )
}

export default Layout