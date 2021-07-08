import React,{useEffect} from 'react'
import {connect} from 'react-redux'
import {Redirect,useHistory} from 'react-router-dom'

function Account({token}) {

    let history = useHistory()

    useEffect(() => {
        history.push('/account')
    }, [token])


    const CheckPermission = ()=>{
        if (token) {   
            return <div>Account page</div>
        }else {
            return <Redirect to={'/register'}/>
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

export default connect(mapState)(Account)
