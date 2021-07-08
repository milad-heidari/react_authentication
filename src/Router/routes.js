import Home from '../Pages/Home'
import Login from '../Pages/Login'
import Register from '../Pages/Register'
import Notfound from '../Pages/Notfound'
import Account from '../Pages/Account'

/**
 * 1-this router file for manage route of page.
 * 2-in below array component key means page name:
 *      for example: component:Home means Home.js in ../Pages
 */
const routes = [
    {
        path:'/',
        component:Home
    },
    {
        path:'/login',
        component:Login
    },
    {
        path:'/register',
        component:Register
    },
    {
        path:'/account',
        component:Account
    },
    {
        component:Notfound
    }
]

export default routes;