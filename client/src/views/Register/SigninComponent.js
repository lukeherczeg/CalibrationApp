import {API} from '../config';
import { Route, Switch, Redirect,withRouter  } from 'react-router-dom';
import {BrowserRouter as Router, Link, Navlink} from 'react-router-dom';
import React, {useState}from 'react';
import {signin} from './actions';
import ProtectedRoute from "../../ProtectedRoute"
import UUIDDisplay from '../Home/UUID'
import authenticated from '../../authenticated'

// This file is fairly involved. In summary, this component stores multiple
// important state variables, and it acts as a parent component to a few other components.

const SigninComponent = () =>
{
    const [values,setValues] = useState
    ({
        email: '',
        password:'',
        error: '',
        loading:false,
        message: '',
        showForm: true,
        loadingDone: false,
    })
    const {email,password,error,loading,loadingDone,message,showForm} = values
    // On submission check event
    const handleSubmit = (e) =>
    {
        e.preventDefault()
        setValues({...values,loading:true, error:false})
        const user = {email,password} ;
        signin(user)
            .then(data => {
                if(data.error)
                {
                    setValues({...values,error: data.error,loading:false})
                }
                    else{
                        // Set state variables to their proper states once loading of login submission is complete
                        setValues({...values,email:'',password:'',error:'',loading:false,loadingDone:true,message:data.message,showForm:false});
                        // Set authenticated.login() for the ProtectedRoute to interpret
                        authenticated.login();

                        //  In the future, we could save user token to cookie,
                        //  or pass user info to local storage in this spot
                    }
            });
    };
    // Change in textboxes
    const handleChange = email => e =>
    {
        setValues({...values,error:false, [email]: e.target.value});
    };

    // While loading, show an alert
    const showLoading = () => (loading ? <div className ="alert alert-info">Loading...</div> : '');
    // If there's an error, show an alert
    const showError = () => (error ? <div className ="alert alert-info">{error}</div> : '');
    // If there's a message needing to be shown, show it!
    const showMessage = () => (message ? <div className ="alert alert-info">{message}</div> : '');



    // Actual form for data being submitted
    const SigninForm =() =>{
    return (
        <form onSubmit = {handleSubmit}>
        <text className = "title">Sign In!</text>
            <p>Enter Email</p>
            <div className = "form-group">
                <input value = {email} onChange ={handleChange('email')} type = "email" className = "form-control" placeholder ="Email..."></input>
            </div>
            <p>Enter Password</p>
            <div className = "form-group">
                <input value ={password}onChange ={handleChange('password')} type = "password" className = "form-control" placeholder ="Password..."></input>
            </div>
            <div>
              <button className ="loginButton">
                Login
              </button>

            {/* Our discovery and use of Link can be attributed to
                https://knowbody.github.io/react-router-docs/api/Link.html */}

             <Link to ="/Register">
              <button className = "registerButton">Register</button>
             </Link>
            </div>
        </form>
      )
    }

    /*  This React Fragment is important for us to be able to show different components
        based on what booleans are set from various interactions. The names are intuitive
        enough to imply what each does. */

    return<React.Fragment>
      {showError()}
      {showLoading()}
      {showMessage()}
      {showForm && SigninForm()}
      {loadingDone ? <UUIDDisplay/> : ''}
    </React.Fragment>
};

export default SigninComponent;
