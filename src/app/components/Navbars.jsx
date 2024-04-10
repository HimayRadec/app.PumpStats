import React from 'react'

function HomeNavbar() {
   return (
      <nav className='flex justify-around'>
         <a href='/'>Pump Stats</a>
         <ul className='flex space-x-2'>
            <li><a href="/login">Login</a></li>
            <p>|</p>
            <li><a href="/register">Register</a></li>
         </ul>
      </nav>
   )
}

function UserNavbar() {
   return (
      <nav className='flex justify-around'>
         <a href='/'>Pump Stats</a>
         <ul className='flex space-x-2'>
            <li><a href="/profile">Profile</a></li>
            <p>|</p>
            <li><a href="/logout">Logout</a></li>
            <p>|</p>
            <li><a href="/workout">Workout</a></li>
         </ul>
      </nav>
   )
}


function Navbars() {
   return (
      <div>Navbars</div>
   )
}


export { HomeNavbar, Navbars, UserNavbar };
