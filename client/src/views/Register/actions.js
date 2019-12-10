import {API} from '../config';

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
