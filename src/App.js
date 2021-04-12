import React from 'react'
import {Switch,Route} from 'react-router-dom'
import routes from '../src/Router/routes'
function App() {
  return (
    <div>
      <Switch>
        {routes.map(route => <Route key='1' exact {...route}/>)}
      </Switch>
    </div>
  )
}

export default App

