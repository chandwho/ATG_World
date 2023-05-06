import React from 'react'
import Navbar from './Navbar'
import Banner from './Banner'
import Posts from './Posts'
import SignUp from './SignUp'
import SignIn from './SignIn'

export default function Main() {
    const [openSignUp, setOpenSignUp] = React.useState(false)
    const [openSignIn, setOpenSignIn] = React.useState(false)

    function handleSignUpModal(){
        setOpenSignUp(!openSignUp)
        setOpenSignIn(false)
    }

    function handleSignInModal(){
        setOpenSignIn(!openSignIn)
        setOpenSignUp(false)
    }
  return (
    <div>
        <Navbar 
        handleModal={handleSignUpModal}
        />
        <Banner/>
        <Posts/>
        <SignUp
        open = {openSignUp}
        handleModal={handleSignUpModal}
        handleSignInModal={handleSignInModal}
        />
        <SignIn
        open = {openSignIn}
        handleModal={handleSignInModal}
        handleSignUpModal={handleSignUpModal}
        />
    </div>
  )
}
