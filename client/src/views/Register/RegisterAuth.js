import React, {useState}from 'react';
import {signup} from './actions';
import { Router, Switch, Redirect, withRouter,Route, Link  } from 'react-router-dom';
import ReactDOM from "react-dom";
import { Alert } from 'reactstrap';
import { PromiseProvider } from 'mongoose';

const SignupComponent = () =>
{
    const [values,setValues] = useState
    ({
        email: '',
        password:'',
        confirm_pass: '',
        error: '',
        loading:false,
        message: '',
        showForm: true,
    })
    const {email,password,confirm_pass,error,loading,message,showForm} = values
    //on submission check evenet
    const handleSubmit = (e) =>
    {
        e.preventDefault()
        // console.table('handle submit',{email,password,confirm_pass,error,loading,message,showForm});
        setValues({...values,loading:true, error:false})
        const user = {email,password} ;
        signup(user)
            .then(data => {
                if(data.error)
                {
                    setValues({...values,error: data.error,loading:false})
                }
                    else{
                        setValues({...values,email:'',password:'',confirm_pass:'',error:'',loading:false,message:data.message,showForm:false});

                    }
            });
    };
    //change in textboxes
    const handleChange = email => e =>
    {
        setValues({...values,error:false, [email]: e.target.value});
    };

    //this is for loading
    const showLoading = () => (loading ? <div className ="alert alert-info">Loading...</div> : '');
    //this is for error
    const showError = () => (error ? <div className ="alert alert-info">{error}</div> : '');
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

    //actual form for data being submitted
    const SignupForm =() =>{
    return (
        <form onSubmit = {handleSubmit}>
            <p>Enter Email</p>
            <div className = "form-group">
                <input value = {email} onChange ={handleChange('email')} type = "email" className = "form-control" placeholder ="Enter Email"></input>
            </div>
            <p>Enter Password</p>
            <div className = "form-group">
                <input value ={password}onChange ={handleChange('password')} type = "password" className = "form-control" placeholder ="Enter Password"></input>
            </div>
            <p>Confirm Password</p>
            <div className = "form-group">
                <input value = {confirm_pass} onChange ={handleChange('confirm_pass')} type = "password" className = "form-control" placeholder ="Enter Password"></input>
            </div>
            <div>
               <button className = "signup">Signup</button>
           </div>
        </form>
)
}
return<React.Fragment>
    {showError()}
    {showLoading()}
    {showMessage()}
    {showForm && SignupForm()}
    </React.Fragment>
};
export default SignupComponent;
