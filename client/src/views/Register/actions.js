import fetch from 'isomorphic-fetch';
import {API} from '../config';

export const signup =(user) =>
{
    return fetch('http://localhost:5000/users/signup',
    {
        method:'POST',
        headers: 
            {
                Accept:'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(user)
    })
    .then(response =>
    {
        return response.json()

    })
    .catch(err => console.log(err))
};

export const signin =(user) =>
{
    return fetch('http://localhost:5000/users/signin',
    {
        method:'POST',
        headers: 
            {
                Accept:'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(user)
    })
    .then(response =>
    {
        return response.json()

    })
    .catch(err => console.log(err))
};