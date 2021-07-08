import {all} from 'redux-saga/effects'
import {authRegisterUserWatcher,authLoginUserwatcher} from './Authentication/authSaga'

export default function* root(){
    yield all([
        authRegisterUserWatcher(),
        authLoginUserwatcher(),
    ])
}
