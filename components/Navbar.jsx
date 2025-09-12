


import React from 'react'
import { Link, NavLink } from "react-router-dom";
import { useState } from 'react';
import { useUser } from '@clerk/clerk-react';
//import { useUser, useSignOut } from '@clerk/clerk-react';
import { SignOutButton } from '@clerk/clerk-react'
import { ClerkProvider } from '@clerk/clerk-react'

// Navbar.jsx to -> App.jsx
const Navbar = () => {



    const [USER, setUser] = useState(true)
    console.log('USER state ===>', USER)



    // Clerk
    // const userDATA = useUser();
    // console.log("All USER's data from Clerk ===>", userDATA)
    const { user, isSignedIn } = useUser();
    console.log("USER from Clerk ===>", user)
   // console.log("USER's email from Clerk ===>", user.emailAddresses[0].emailAddress)
    console.log(" isSignedIn from Clerk  ======>", isSignedIn)
    //const { signOut } = useSignOut();

    // const handleLogout = () => {
    //     signOut(); // Call the signOut function to log the user out
    // };





    return (

        <header className='header-books'>

            <NavLink
                to="/home"
                style={({ isActive }) => ({
                    color: isActive ? '#fff' : '#545e6f',
                    background: isActive ? '#7600dc' : '#f0f0f0',

                })}
                className="nav-link"
            >
                HOME 2 PAGE
            </NavLink>



            <NavLink
                to="/books"
                style={({ isActive }) => ({
                    color: isActive ? '#fff' : '#545e6f',
                    background: isActive ? '#7600dc' : '#f0f0f0',
                })}
                className="nav-link"
            >
                BOOKS PAGE
            </NavLink>


            {/* <NavLink
                to="/user"
                style={({ isActive }) => ({
                    color: isActive ? '#fff' : '#545e6f',
                    background: isActive ? '#7600dc' : '#f0f0f0',
                })}
                 className="nav-link"
            >
                USER PAGE
            </NavLink> */}



            <NavLink
                to="/admin"
                style={({ isActive }) => ({
                    color: isActive ? '#fff' : '#545e6f',
                    background: isActive ? '#7600dc' : '#f0f0f0',
                })}
                className="nav-link"
            >
                ADMIN PAGE
            </NavLink>



            {/* <NavLink
                to="/dashboard"
                style={({ isActive }) => ({
                    color: isActive ? '#fff' : '#545e6f',
                    background: isActive ? '#7600dc' : '#f0f0f0',
                })}
                className="nav-link"
            >
                Dashboard
            </NavLink> */}



            {/* <ul>
                    {user ? (
                        <>
                            <li><a href="/dashboard">Dashboard</a></li>
                            <li><button >Logout</button></li>
                        </>
                    ) : (
                        <li><a href="/login">Login</a></li>
                    )}
                </ul> */}




            {/* <ul> */}
            {isSignedIn ? (
                <>

                    <NavLink
                        to="/dashboard"
                        style={({ isActive }) => ({
                            color: isActive ? '#fff' : '#545e6f',
                            background: isActive ? '#7600dc' : '#f0f0f0',
                        })}
                        className="nav-link"
                    >
                        DASHBOARD PAGE
                    </NavLink>


                    {/* <li><a href="/dashboard">Dashboard</a></li>
                    <li><button onClick={() => { /* Add logout logic here  }}>Logout</button></li> */}


                      <SignOutButton className="logout-button-header"> 
                     {/* <SignOutButton className="logout-button-header" afterSignOutUrl="/home"> */}
                        <button>Sign Out Button </button>
                    </SignOutButton>

                    {/* <ClerkProvider   afterSignOutUrl="/home">
                        <SignOutButton className="logout-button-header" afterSignOutUrl="/home">
                            <button>Sign Out Button </button>
                        </SignOutButton>
                    </ClerkProvider> */}

                </>
            ) : (
                <>
                    {/* <li><a href="/login">Login</a></li> */}
                    <Link className='header-links' to={"/login"}>Log In</Link>
                    <Link className='header-links' to={"/signup"}>Sign UP</Link>

                </>
            )}
            {/* </ul> */}





            {/* <Link to={"/signup"}>Sign UP</Link>
            <Link to={"/login"}>Log In</Link> */}



            {/* <ul>
                {isSignedIn ? (
                    <>
                        <li><a href="/dashboard">Dashboard</a></li>
                        <li>
                            <button onClick={handleLogout}>Logout</button>
                        </li>
                    </>
                ) : (
                    <li><a href="/login">Login</a></li>
                )}
            </ul> */}

            {/* <SignOutButton>
      <button>Custom sign out button</button>
    </SignOutButton> */}








            {/* //* если user `false` */}
            {/* { user ? 
          <button style={{backgroundColor: 'red'}}>
                  <NavLink
                to="/user"
                style={({ isActive }) => ({
                    color: isActive ? '#fff' : '#545e6f',
                    background: isActive ? '#7600dc' : '#f0f0f0',
                })}
                 className="nav-link"
            >
                USER PAGE
            </NavLink>
          </button>
        :
        //* если user `true`
          <button  style={{backgroundColor: 'green'}}>
            Login
          </button>
        
        } */}











        </header>

    )
}
export default Navbar
