import React,{useEffect} from 'react'
import {connect} from 'react-redux'
import {Redirect,useHistory} from 'react-router-dom'
import RegisterLayout from '../Authentication/Register/RegisterLayout'
function Register({token}) {
    console.log('token',token)
    let history = useHistory()
    useEffect(() => {
        history.push('/register')
    }, [token])

    const CheckPermission = ()=>{
        if (token) {   
            return <Redirect to={'/account'}/>
        }else {
            return <div><RegisterLayout/></div>
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

export default connect(mapState)(Register)
