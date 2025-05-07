import React from 'react'
import Categories from './Subcomponents/Categories'
import Logoutbtn from './Subcomponents/Logoutbtn'

const Nav = () => {
  return (
    <>
       <nav className=' flex items-center justify-between p-10 gap-5'>
           <div className="nleft z-50"><Categories/></div>
           
           {/* <div className="nright"><Logoutbtn/></div> */}
       </nav>
    </>
  )
}

export default Nav
