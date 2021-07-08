/**
 * this file only for page route this is very importent.
 * so for render login component import from '../Authentication/Login/Login.js'
 */

 import React,{useEffect} from 'react'
 import {connect} from 'react-redux'
 import {Redirect,useHistory} from 'react-router-dom'
import LoginLayout from '../Authentication/Login/LoginLayout'
function Login({token}) {

    let history = useHistory()
    useEffect(() => {
        history.push('/login')
    }, [token])

    const CheckPermission = ()=>{
        if (token) {   
            return <Redirect to={'/account'}/>
        }else {
            return  <div><LoginLayout/></div>
        }
        
    }

    return (
        <CheckPermission/>
    )
}

const mapState = (state)=>{
    return {
        token:state.authReducers.userToken
    }
}

export default connect(mapState)(Login)
