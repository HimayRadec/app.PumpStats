'use client'
import React from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"



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
         const response = await fetch('/api/newsletterSignup', {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email }),
         });


         if (response.status === 201) {
            console.log('Email added successfully');
            setSubmitted(true);
         }
         else if (response.status === 409) {
            console.log('Email already exists in database');

            setPlaceholderText('Email already exists');
            setButtonText('Already Submitted');
            setButtonClass('bg-yellow-500');
         }
         else {
            console.log(`Failed to add email. [res]: ${response.statusText}`);

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
         {/* Render form only if not submitted */}
         {!submitted && (
            <form onSubmit={handleClick} className={`flex flex-col text-center`}>
               <div>
                  <Input
                     type="email"
                     placeholder={placeholderText}
                     value={email}
                     onChange={(e) => setEmail(e.target.value)}
                  />
               </div>
               <div className='mt-5'><Button className="w-full" type="submit">{buttonText}</Button></div>
            </form>
         )}
         {/* Render success message after submission */}
         {submitted && (
            <div className={`flex flex-col text-center`}>
               <p>Thank you for signing up!</p>
            </div>
         )}
      </>
   );
}

export default NewsletterSignUp
