import React from 'react'
import { useAuth0 } from '@auth0/auth0-react';


const LoginButton = () => {
    const { loginWithRedirect, isAuthenticated } = useAuth0();

    return (
        isAuthenticated || (
            <button style={
                {
            color: "white",
            backgroundColor: '#171435',
            borderRadius: '8px',
            margin: '10px',
            padding: '20px 20px',
            borderOutline: 'none'
        }}
            onClick={() => loginWithRedirect()}> Log In</button>

    ))

    

}

export default LoginButton