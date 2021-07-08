import authActions from './authActions'
const initState = {
    userToken:null
}
const authRedusers = (state=initState,action)=>{
    let newState = state

    switch (action.type) {
        case authActions.AUTH_REGISTER_USER_SUCCESS:
                newState={...state,userToken:action.payload.token}
                // console.log('reducersss',action.payload.token)
            break;
        case authActions.AUTH_LOGIN_USER_SUCCESS:
                newState={...state,userToken:action.payload.token}
            break;
        default:
            break;
    }
    return newState
}

export default authRedusers;