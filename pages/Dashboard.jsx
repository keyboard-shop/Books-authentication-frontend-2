


import { UserButton } from '@clerk/clerk-react'
import { useUser } from '@clerk/clerk-react';
import { Navigate } from 'react-router-dom';
import React from 'react'

const Dashboard = () => {

    const { user, isSignedIn } = useUser();

    if (!isSignedIn) {
        return <Navigate to="/login" />;
    }


    return (
        <div className='dashboard-page'>
            <h1>Signed in successfully by using Clerk !
                {/* <br />
                Dashboard Page */}
            </h1>

            <h1> The user has been successfully added to MongoDB !
                {/* <br />
                Dashboard Page */}
            </h1>

            <br />

            <h1>  Dashboard Page </h1>

            <h2 className='h2-logout'> To log out, click the icon <span className="clerk-button"></span> <UserButton forceRedirectUrl="/login" /> <span  className="clerk-button" ></span>  or the red button in the header.
                {/* <UserButton afterSignOutUrl="/login" /> */}
                {/* <UserButton forceRedirectUrl="/login" /> */}
            </h2>
        </div>
    )
}

export default Dashboard
