



import { SignUp } from '@clerk/clerk-react'
import React from 'react'

const Signup = () => {
  return (
    // <div>
    //   signup page 
    // </div>

<div className='signup-page'>

{/* // from Clerk  */}
<SignUp sighInUrl="/login" forceRedirectUrl={"/dashboard"}/>
</div>


  )
}

export default Signup
