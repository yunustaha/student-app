import React from 'react'
import LoginForm from '../components/LoginForm'
import Logo from '../components/Logo';

export default function Home() {

  return (
    <main>
      <div className='flex bg-gradient-to-r from-student-orange to-student-yellow min-h-screen justify-center items-center'>
        <div className='flex flex-col items-center bg-white rounded-2xl gap-4 lg:gap-11 w-11/12 md:w-2/3 lg:w-2/6 px-8 py-11 '>
          <Logo size='lg' />
          <div className='flex flex-col items-center gap-2'>
            <div className='text-2xl font-semibold'>
              SIGN IN
            </div>
            <div className='text-sm font-normal text-student-gray'>
              Enter your credentials to access your account
            </div>
          </div>
          <LoginForm />
          <div className='text-sm font-normal'>
            <span className='text-student-gray'>Forgot your password?</span> <a className='text-student-orange underline underline-offset' href='/'>Reset Password </a>
          </div>
        </div>
      </div>
    </main>
  )
}
