import React from 'react'
import AppHeader from './_components/AppHeader'

function DashboardLayout({children}) {
  return (
    <div>
        <AppHeader/>
        <div className='p-7 md:px-20 lg:px-32 xl:px-48 2xl:px-56'>
            {children}
        </div>
    </div>
  )
}

export default DashboardLayout