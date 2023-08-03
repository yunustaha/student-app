"use client"
import React from 'react'
import { useRouter } from 'next/navigation';

const LoginForm = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push('/dashboard');
  };

  return (
    <>
      <div className='flex flex-col items-center mt-12 w-full gap-y-5'>
        <div className='flex flex-col text-student-gray items-start w-full gap-y-2'>
          <div className='text-sm font-medium'>
            Email
          </div>
          <input className='student-input' placeholder='Enter your email' />
        </div>
        <div className='flex flex-col text-student-gray items-start w-full gap-y-2'>
          <div className='text-sm font-medium'>
            Password
          </div>
          <input className='student-input' placeholder='Enter your password' />
        </div>
      </div>
      <div className='mt-8 w-full'>
        <button className='student-button' onClick={handleClick}>SIGN IN</button>
      </div>
    </>
  )
}
      
export default LoginForm