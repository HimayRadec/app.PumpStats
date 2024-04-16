'use client'
import React from 'react'
import styles from '@/styles/newsletter.module.css'

function NewsletterSignUp() {

   const [email, setEmail] = React.useState('')
   const [placeholderText, setPlaceholderText] = React.useState('Enter your email')
   const [buttonText, setButtonText] = React.useState('Get Notified')
   const [buttonClass, setButtonClass] = React.useState('bg-white');
   const [submitted, setSubmitted] = React.useState(false);


   const handleClick = async (e: React.FormEvent<HTMLFormElement>) => {

      e.preventDefault()

      if (!email) {
         setPlaceholderText('Enter a valid email');
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


         if (res.status === 201) {
            console.log('Email added successfully');
            setSubmitted(true);
         }
         else if (res.status === 409) {
            console.log('Email already exists in database');

            setPlaceholderText('Email already exists');
            setButtonText('Already Submitted');
            setButtonClass('bg-yellow-500');
         }
         else {
            console.log(`Failed to add email. [res]: ${res.statusText}`);

            setPlaceholderText('Failed to submit email');
            setButtonText('Error Submitting');
            setButtonClass('bg-rose-700');

         }
      } catch (error) {

      }

      // reset
      setEmail('');
      setTimeout(() => {
         setPlaceholderText('Enter your email');
         setButtonText('Get Notified');
         setButtonClass('bg-white');
         setSubmitted(false);
      }, 8000);
   };


   return (
      <>
         {!submitted && ( // Render form only if not submitted
            <form onSubmit={handleClick} className={`${styles.signupContainer} flex flex-col text-center`}>
               <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`${styles.emailInputField}`}
                  placeholder={placeholderText}
               />
               <button
                  type="submit"
                  className={`${styles.emailSignupButton} ${buttonClass}`}
               >
                  {buttonText}
               </button>
            </form>
         )}
         {submitted && ( // Render success message after submission
            <div className={`${styles.signupContainer} flex flex-col text-center`}>
               <p>Thank you for signing up!</p>
            </div>
         )}
      </>
   );
}

export default NewsletterSignUp
