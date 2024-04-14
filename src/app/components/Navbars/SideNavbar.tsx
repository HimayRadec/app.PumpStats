import React from 'react'
import styles from '@/styles/navbar.module.css'

function SideNavbar() {
   return (
      <nav className={`${styles.navMenuContainer}`}>
         <a href="/dashboard" className={`${styles.navLink}`} >Dashboard</a>
         <a href="/exercise" className={`${styles.navLink}`} >Exercise</a>
         <a href="/food" className={`${styles.navLink}`} >Food</a>
         <a href="/explore" className={`${styles.navLink}`} >Explore</a>
         <a href="/profile" className={`${styles.navLink}`} >Profile</a>
      </nav>
   )
}

export default SideNavbar