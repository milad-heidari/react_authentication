import {takeLatest,put,call} from 'redux-saga/effects'
import authActions from './authActions'
import HttpService from '../../Services/HttpService'

const httpService = new HttpService()

const authRegisterUserWorker = function*(action){
    console.log('accccc',action)
    try {
        const registerRequest = yield call(()=>{
           return httpService.post('https://reqres.in/api/register',{...action.payload},{ headers:{ 'Content-Type': 'application/json'}})
        })

        if (registerRequest.status === 200) {

            yield put({
                type:authActions.AUTH_REGISTER_USER_SUCCESS,
                payload:registerRequest.data
            })
            
            console.log('saga',registerRequest.data)
        }else{
            console.log('error',registerRequest)
        }
    } catch (error) {
        console.log('Authentication/authSaga/authRegisterUserWorker',error)
        alert('this project is sample, for register use this data: Email: "eve.holt@reqres.in" and Password:"pistol"')
    }
}

export const authRegisterUserWatcher = function*(){
   yield takeLatest(authActions.AUTH_REGISTER_USER,authRegisterUserWorker)
}

const authLoginUserWorker = function*(action){

try {
    const loginRequest = yield call(()=>{
        
        return httpService.post('https://reqres.in/api/login',{...action.payload},{ headers:{ 'Content-Type': 'application/json'}})

    })

    
    if (loginRequest.status === 200) {

        yield put({
            type:authActions.AUTH_LOGIN_USER_SUCCESS,
            payload:loginRequest.data
        })
        
        // console.log('saga',loginRequest.data)
    }else{
        console.log('error',loginRequest)
    }

} catch (error) {
        console.log('Authentication/authSaga/authLoginUserWorker',error)
        alert('this project is sample, for register use this data: Email: "eve.holt@reqres.in" and Password:"pistol"')
}

}

export const authLoginUserwatcher= function*(){
   yield takeLatest(authActions.AUTH_LOGIN_USER,authLoginUserWorker)
}