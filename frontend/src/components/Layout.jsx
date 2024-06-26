import React from 'react'
import {ToastContainer}from 'react-toastify'
const Layout = ({children}) => {
  return (
    <div className="absolute text-white inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
      <ToastContainer/>
        {children}
     </div>
  )
}

export default Layout