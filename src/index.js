import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
// import App from './App'


import registerServiceWorker from './registerServiceWorker'
import ControlFields from './components/ControlFields'
import ControlForm from './components/ControlForm'
import IntervalGroup from './components/IntervalGroup';
import IntervalButtonsWrap from './components/IntervalButtonsWrap'

ReactDOM.render( <ControlForm/> , document.getElementById('root'))
registerServiceWorker()