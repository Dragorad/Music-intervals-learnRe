import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import ControlForm from './components/views/ControlForm'
import WorkPaneRedux from './components/containers/WorkPaneRedux'

const Routes = (props) => (
  <Switch>
    <Route exact path='/' component={ControlForm} />
    <Redirect from='/index' to='/'/>
    <Redirect from='/home' to='/'/>
    <Route path='/work-pane' component={WorkPaneRedux} />
       <div>From render</div>
  </Switch>
)
export default Routes
