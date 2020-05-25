import React from 'react';
import FormInput from '../../components/form-input/form-input.component'
import './sing-in.styles.scss'
import CustomButton from '../custom-button/custom-button.component'
import {signInWithGoogle} from '../../firebase/firebase.util'

class SignIn extends React.Component{
    constructor(props) {
        super(props)
    
        this.state = {
            email: '',
            password: ''
             
        }
    }
    handleSubmit =(event)=>{
        event.preventDefault();
        this.setState({
            email:'',password:''
        })
    }
    handleChange=(event)=>{
        const {value, name} =event.target
        this.setState({
            // email: event.target.value,
             //password: event.target.value
            [name] : value
        })

    }
    render(){
        const {email, password}= this.state
        
        return(
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span> Sign in with your email and password </span>
                 

                <form onSubmit={this.handleSubmit}>
                    <FormInput name='email' type='email' value={email} label="email" handleChange={this.handleChange}  required />
                  
                    <FormInput name='password' type='password' value={password} label='password'  handleChange={this.handleChange} required />
               <div className='buttons'>
                    <CustomButton  type='submit'> SIGN IN</CustomButton>
                    <CustomButton  onClick={signInWithGoogle} isGoogleSignIn> Sing in with Google</CustomButton>
               </div>
                   
                </form>

            </div>

        )
    }

}

export default SignIn