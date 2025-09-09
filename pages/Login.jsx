



import { SignIn } from '@clerk/clerk-react'
import React from 'react'

const Login = () => {
  return (
    // <div>
    //   login page Clerk
    // </div>



<div className='login-page'>

{/* //from Cleck */}
<SignIn sighUpUrl="/signup" forceRedirectUrl={"/dashboard"}/>
</div>




//   <SignUp sighInUrl="/login" forceRedirectUrl={"/dashboard"}/>



  )
}

export default Login
