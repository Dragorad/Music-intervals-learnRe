import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import ControlForm from './components/ControlForm'
import WorkPane from './components/WorkPane'

const Routes = (props) => (
  <Switch>
    <Route exact path='/' render={(props) => <ControlForm{...props}
      intervalsForTest={this.intervalsForTest}
      timeForAnswer={this.timeForAnswer}
      numberOfTasks={this.numberOfTasks}
    />}
    />
    <Redirect from='/index' to='/'/>
    <Redirect from='/home' to='/'/>
    <Route path='/work-pane' component={WorkPane}/>
    <div>From render</div>
  </Switch>
)
export default Routes
