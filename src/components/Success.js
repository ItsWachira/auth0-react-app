import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

const  Success = () => {


  const { user, logout, isAuthenticated } = useAuth0();
 

  return (
    isAuthenticated && (
      <div>
            <h1>User Profile</h1>
            <img src={user.picture} alt={user.name} />
            <h2>{user.name}</h2>
            <p>{user.email}</p>

            <button style={
              {
                color: "white",
                backgroundColor: '#8EC1D6',
                borderRadius: '8px',
                margin: '10px',
                padding: '20px 20px',
                borderOutline: 'none' 
              }}
              onClick={() => logout()}> Log Out</button>
      
    </div>
  ))
}

export default Success


