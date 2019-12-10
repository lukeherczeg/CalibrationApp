import {API} from '../config';

// This file simplifies the process of fetching post requests from the server
// It basically performs like Axios, but we chose to write this to have more
// freedom of choice for the user authentication.

export const signup =(user) =>
{
    return fetch('/users/signup',
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
    return fetch('/users/signin',
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
