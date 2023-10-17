"use client"
import React from 'react'
import { useRouter } from 'next/navigation';
import { Field, Form, Formik } from 'formik';
import Button from '@/components/Button';

const initialValues = {
  loginMail: "",
  loginPassword: "",
};

type LoginFormData = {
  loginMail: string,
  loginPassword: string
}

const LoginForm = () => {
  const router = useRouter();

  const handleSubmit = (values: LoginFormData) => {
    router.push('/dashboard');
  }

  return (
    <Formik onSubmit={handleSubmit} initialValues={initialValues}>
      <Form className='w-full'>
        <div className='flex flex-col items-center text-student-gray gap-5'>
          <div className='flex flex-col items-start w-full gap-2'>
            <label className='text-sm font-medium' htmlFor='loginMail'>
              Email
            </label>
            <Field required className='student-input' placeholder="Enter your email" type="email" id="loginMail" name="loginMail" />
          </div>
          <div className='flex flex-col items-start w-full gap-y-2'>
            <label className='text-sm font-medium' htmlFor='loginPassword'>
              Password
            </label>
            <Field required className='student-input' placeholder="Enter your password" type="text" id="loginPassword" name="loginPassword" />
          </div>
        </div>
        <div className='mt-8'>
          <Button type="submit" value='submit'>SIGN IN</Button>
        </div>
      </Form>
    </Formik>
  )
}

export default LoginForm