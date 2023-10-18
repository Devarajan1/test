import React from 'react';
import { GoogleLogin } from 'react-google-login';

const clientId = '476946310824-r70o0t33mmhia9c98vfkmglqucfnggrg.apps.googleusercontent.com'

export default function Login() {
    const onSuccess = (res) => {
        console.log("LOgin Success! Curent user:", res)
    }
    const onFailure=(res)=>{
console.log("Login Failed",res)
    }
    return (
        <GoogleLogin
            clientId={clientId}
            buttonText="Login"
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy={'single_host_origin'}
            isSignedIn={true}
        />
    )
}