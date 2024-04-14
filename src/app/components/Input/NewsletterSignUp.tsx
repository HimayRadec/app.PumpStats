'use client'
import React from 'react'
import styles from '@/styles/newsletter.module.css'

function NewsletterSignUp() {

   const [email, setEmail] = React.useState('')
   const [placeholderText, setPlaceholderText] = React.useState('Enter your email')

   const handleClick = async () => {
      if (!email) {
         setPlaceholderText('Please enter an email');
         return;
      }

      try {
         const res = await fetch('/api/newsletterSignup', {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email }),
         });


         if (res.ok) {
            console.log('Email added successfully');
            setEmail('');
            setPlaceholderText('Email Submitted!');
         } else {
            console.error(`Failed to add email. [res]: ${res}`);
            setPlaceholderText('Failed to submit email');
         }
      } catch (error) {
         console.error('Error adding email:', error);
         setPlaceholderText('Failed to submit email');
      }

      setEmail('');
      setPlaceholderText('Email Submitted!');
      setTimeout(() => {
         setPlaceholderText('Enter your email');
      }, 3000);
   };


   return (
      <div className={`${styles.signupContainer} flex flex-col text-center`}>
         <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`${styles.emailInputField}`}
            placeholder={placeholderText}
         />
         <button
            className={`${styles.emailSignupButton}`}
            onClick={handleClick}
         >
            Get Notified
         </button>
      </div>
   )
}

export default NewsletterSignUp