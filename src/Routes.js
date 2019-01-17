import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import ControlForm from './components/views/controlForm/ControlForm'
import WorkPaneRedux from './components/containers/WorkPaneRedux'
import UserForm from './userForms/userForm'

const Routes = (props) => (
  <Switch>
    <Route exact path='/' component={UserForm} />
    <Route exact path='/control-form' component={ControlForm} />
    <Redirect from='/index' to='/'/>
    <Redirect from='/home' to='/'/>
    <Route path='/work-pane' component={WorkPaneRedux} />
       <div>From render</div>
  </Switch>
)
export default Routes
