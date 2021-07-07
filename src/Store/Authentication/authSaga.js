import {takeLatest,put,call} from 'redux-saga/effects'
import authActions from './authActions'
import HttpService from '../../Services/HttpService'

const httpService = new HttpService()

const authRegisterUserWorker = function*(action){
    try {
        const registerRequest = httpService.post('https://reqres.in/api/register',{})
    } catch (error) {
        console.log('Authentication/authSaga/authRegisterUserWorker',error)
    }
}

export const authRegisterUserWatcher = function*(){
    takeLatest(authActions.AUTH_REGISTER_USER,authRegisterUserWorker)
}

const authLoginUserWorker = function*(){

}

export const authLoginUserwatcher= function*(){
    takeLatest(authActions.AUTH_LOGIN_USER,authLoginUserWorker)
}