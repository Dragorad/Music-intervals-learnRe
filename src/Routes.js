import React, { Suspense } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'



const WelcomePage = React.lazy(() => import('./components/views/landingPage/WelcomePage'))
const ControlForm = React.lazy(() => import('./components/views/controlForm/ControlForm'))
const WorkPaneRedux = React.lazy(() => import('./components/views/workArea/WorkPaneRedux'))
const UserForm = React.lazy(() => import('./components/views/userForms/SignInScreen'))

const Routes = (props) => (
  <Suspense fallback={<span>Loading..</span>}>
    <Switch>
      <Route exact path='/' component={WelcomePage} />
      <Route exact path='/login' component={UserForm} />
      <Route exact path='/signedIn' component={ControlForm} />
      <Route exact path='/signUp' component={UserForm} />
      <Route exact path='/control-form' component={ControlForm} />
      <Redirect from='/index' to='/' />
      <Redirect from='/home' to='/' />
      <Route path='/work-pane' component={WorkPaneRedux} />
      <div>404 page not found</div>
    </Switch>
  </Suspense>
)
export default Routes
