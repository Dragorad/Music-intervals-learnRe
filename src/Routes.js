import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import ControlForm from './components/views/controlForm/ControlForm'
import WorkPaneRedux from './components/containers/WorkPaneRedux'
import UserForm from './components/views/userForms/userForm'
import WelcomePage from './components/views/landingPage/WelcomePage'

const Routes = (props) => (
  <Switch>
    <Route exact path='/' component={WelcomePage} />
    <Route exact path='/login' component={UserForm} />
    <Route exact path='/signedIn' component={ControlForm} />
    <Route exact path='/signUp' component={UserForm} />
    <Route exact path='/control-form' component={ControlForm} />
    <Redirect from='/index' to='/'/>
    <Redirect from='/home' to='/'/>
    <Route path='/work-pane' component={WorkPaneRedux} />
       <div>404 page not found</div>
  </Switch>
)
export default Routes
