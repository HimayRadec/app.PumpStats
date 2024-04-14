'use client'
import React from 'react'
import styles from '@/styles/newsletter.module.css'

function NewsletterSignUp() {

   const [email, setEmail] = React.useState('')
   return (
      <div className={`${styles.signupContainer} flex flex-col text-center`}>
         <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`${styles.emailInputField}`}
            placeholder="Enter your email"
         />
         <button className={`${styles.emailSignupButton}`}>Get Notified</button>
      </div>
   )
}

export default NewsletterSignUp