import React from 'react'
import sign from '../../components/sign-in/sign-in.component'
import SignIn from '../../components/sign-in/sign-in.component'
import SingUp from '../../components/sign-up/sign-up.component'
import SignUp from '../../components/sign-up/sign-up.component'
import './sign-in-sign-up.style.scss'

const SignInAndSignUpPage=()=>(
    <div className='sign-in-and-sign-up'>
     <SignIn />
     <SignUp />
    </div>
)

export default SignInAndSignUpPage