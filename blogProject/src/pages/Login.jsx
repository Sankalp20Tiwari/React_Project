import React from 'react'
import { Login as LoginComponent } from '../components' // Use capitalized alias

function Login() {
  return (
    <div className='py-8 '>
      <LoginComponent /> {/* Use the alias with a capital letter */}
    </div>
  )
}

export default Login
