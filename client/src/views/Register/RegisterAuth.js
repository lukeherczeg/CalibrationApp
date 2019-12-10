import React, {useState}from 'react';
import {signup} from './actions';
import { Router, Switch, Redirect, withRouter,Route, Link  } from 'react-router-dom';
import ReactDOM from "react-dom";
import { PromiseProvider } from 'mongoose';

// This file is extremely similar to SigninComponent.js, it just has less components and states to control.

const SignupComponent = () =>
{
    const [values,setValues] = useState
    ({
        email: '',
        password:'',
        error: '',
        loading:false,
        message: '',
        showForm: true,
    })
    const {email,password,error,loading,message,showForm} = values
    // On submission check event
    const handleSubmit = (e) =>
    {
        e.preventDefault()
        setValues({...values,loading:true, error:false})
        const user = {email,password} ;
        signup(user)
            .then(data => {
                if(data.error)
                {
                    setValues({...values,error: data.error,loading:false})
                }
                else{
                    // Set state variables to their proper states once loading of login submission is complete
                    setValues({...values,email:'',password:'',error:'',loading:false,message:data.message,showForm:false});
                }
            });
    };
    // Handle change in textboxes
    const handleChange = email => e =>
    {
        setValues({...values,error:false, [email]: e.target.value});
    };

    // Alert for loading
    const showLoading = () => (loading ? <div className ="alert alert-info">Loading...</div> : '');
    // Alert for error
    const showError = () => (error ? <div className ="alert alert-info">{error}</div> : '');

    // A bit of React code to show a success alert along with a button to route back to Home.
    const showMessage = () => (message ?
        <div className ="alert alert-success">
          Successful sign up!!
          <div className = "backalert">
            <Link to ="/Home">
             <button className = "goback">Back to sign in...</button>
            </Link>
          </div>
        </div>
      : '');

    // Actual form for data being submitted
    const SignupForm =() =>{
    return (
        <form onSubmit = {handleSubmit}>
          <text className = "title">Sign Up!</text>
            <p>Enter Email</p>
            <div className = "form-group">
                <input value = {email} onChange ={handleChange('email')} type = "email" className = "form-control" placeholder ="Email..."></input>
            </div>
            <p>Enter Password</p>
            <div className = "form-group">
                <input value ={password}onChange ={handleChange('password')} type = "password" className = "form-control" placeholder ="Password..."></input>
            </div>
            <div>
             <Link to ="/Home">
              <button className = "loginButton">Back</button>
             </Link>
               <button className = "signup">Signup</button>
           </div>
        </form>
      )
    }


    /* This React Fragment is important for us to be able to show different components
        based on what booleans are set from various interactions. The names are intuitive
        enough to imply what each does. */

    return <React.Fragment>
          {showError()}
          {showLoading()}
          {showMessage()}
          {showForm && SignupForm()}
      </React.Fragment>
};


export default SignupComponent;
