import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import ControlForm from './components/views/ControlForm'
import WorkPane from './components/views/WorkPane'
import WorkContainer from './components/containers/WorkContainer'

const Routes = (props) => (
  <Switch>
    <Route exact path='/' component={ControlForm} />
    <Redirect from='/index' to='/'/>
    <Redirect from='/home' to='/'/>
    <Route path='/work-pane' component={WorkPane} />
       <div>From render</div>
  </Switch>
)
export default Routes
