import authActions from './authActions'
const initState = {}
const authRedusers = (state=initState,action)=>{
    let newState = state

    switch (action.type) {
        case authActions.AUTH_REGISTER_USER_SUCCESS:
                console.log(action)
            break;
    
        default:
            break;
    }
    return newState
}

export default authRedusers;