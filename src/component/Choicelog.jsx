import React from 'react'
import './Choicelog.css'
import { Navigate } from 'react-router-dom'
function Choicelog() {
    function log(e){
        let clickedbut=e.target.name;
        if (clickedbut == 'Admin'){
          console.log("Logedin as admin")
        }
        else if(clickedbut == 'Teacher'){
          console.log("Logedin as Teacher")
        } 
        else{
          console.log("Logedin as student")
        }
    }


  return (
    <div className='contant'>
    <div className="box">
        <h3>Login As Admin</h3>
        <button name='Admin' onClick={log}>Login</button>
    </div>
    <div className="box">
    <h3>Login As Teacher</h3>
    <button name='Teacher' onClick={log}>Login</button>
    </div>
    <div className="box">
    <h3>Login As Student</h3>
    <button name='student' onClick={log}>Login</button>
    </div>
    </ div>
  )
}

export default Choicelog