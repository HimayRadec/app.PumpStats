import React from 'react'
import styles from '@/styles/navbar.module.css'

function SideNavbar() {
   return (
      <nav className="side-navbar flex flex-col p-5 gap-y-10 h-screen">
         <a href="/dashboard" className="">Dashboard</a>
         <a href="/exercise" className="" >Exercise</a>
         <a href="/food" className="" >Food</a>
         <a href="/explore" className="" >Explore</a>
         <a href="/profile" className="" >Profile</a>
      </nav>
   )
}

export default SideNavbar