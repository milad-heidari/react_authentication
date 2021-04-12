import Home from '../Pages/Home'
import Login from '../Pages/Login'


/**
 * 1-this router file for manage route of page.
 * 2-in below array component key means page name:
 *      for example: component:Home means Home.js in ../Pages/Login
 */
export default [
    {
        path:'/',
        component:Home
    },
    {
        path:'/login',
        component:Login
    }
]