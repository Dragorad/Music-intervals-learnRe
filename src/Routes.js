import React, { Suspense, lazy } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import WorkPaneRedux from './components/views/workArea/WorkPaneRedux'
import UserForm from './components/views/userForms/SignInScreen'
import WelcomePage from './components/views/landingPage/WelcomePage'


const ControlForm = React.lazy(() => import('./components/views/controlForm/ControlForm'))
const AppImage = () => (<img src='interval121.svg' alt="Loading" />)

const Routes = (props) => (
  <Suspense fallback={AppImage} >
    <Switch>
      <Route exact path='/' component={WelcomePage} />
      <Route exact path='/login' component={UserForm} />
      <Route exact path='/signedIn' component={ControlForm} />
      <Route exact path='/signUp' component={UserForm} />
      <Route exact path='/control-form' component={ControlForm} />
      <Redirect from='/index' to='/' />
      <Redirect from='/home' to='/' />
      <Route path='/work-pane' component={WorkPaneRedux} />
      <div>404 page not found
        <AppImage />
      </div>
    </Switch>
  </Suspense>
)
export default Routes
