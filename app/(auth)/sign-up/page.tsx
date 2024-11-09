import AuthForm from '@/components/AuthForm'
import React from 'react'

const page = () => {
  return (
    <section className="flex-center sizw-full max-sm:px-6">
      <AuthForm type='sign-up' />
    </section>
  )
}

export default page
