import React, { Suspense, lazy } from 'react'
import { connect } from 'react-redux'
import { Redirect, Route, Switch, useLocation } from 'react-router-dom'
import { animated, useTransition } from 'react-spring'
import SelectLanguage from './components/views/landingPage/SelectLanguage'
// import Navbar from './components/views/NavBar/Navbar'


const WelcomePage  = React.lazy (() => import ('./components/views/landingPage/WelcomePage'))


// const WelcomePage = React.lazy(() => import('./components/views/landingPage/WelcomePage'))
const ControlForm = React.lazy(() => import('./components/views/controlForm/ControlForm'))
const WorkPaneRedux = React.lazy(() => import('./components/views/workArea/WorkPaneRedux'))
const UserForm = React.lazy(() => import('./components/views/userForms/SignInScreen'))


const mapStateToProps = store => ({
  language: store.languageSelected
})

const Routes = (props) => {
  const location = useLocation()

  const transitions = useTransition(location, location => location.pathname, {
    from: { opacity: 0, width: "0%" },
    enter: { opacity: 1, width: "100%" },
    leave: { opacity: 0, width: "0%" }
  })

  return (
          <Suspense fallback={SelectLanguage} >
            <Switch location={location}>
              <Route exact path='/' component={
                props.language === '' ? SelectLanguage : WelcomePage} />
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
}
export default connect(mapStateToProps)(Routes)
