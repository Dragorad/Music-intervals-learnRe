import { setAnswerVisible } from '../actions/indexActions'
// import { applyMiddleware as dispatch } from 'redux'

const timerMiddleWare = store => next => action => {
  console.log('middleWare check')
  if (action.type === 'SET_TIME_REMAINING') {
    let {timeRemaining, timerWorking} = store.getState()
    console.log(timeRemaining + ' ' + timerWorking)
    if (!timerWorking && timeRemaining > 0) {
      store.dispatch(setAnswerVisible(true))
      return
    }
    next(action)
  }
  console.log('MW return')
  next(action)
}

// const middleware = musicPlayer => store => {
//   const playbackOrigin = 'playbackOrigin'
//
//   musicPlayer.on('current-time-changed', currentTime => {
//     store.dispatch({type: 'SET_CURRENT_TIME', origin: playbackOrigin, currentTime})
//   })
//
//   musicPlayer.on('playback-finished', () => {
//     store.dispatch({type: 'STOP_PLAYING', origin: playbackOrigin})
//   })
//
//   // Ensure we reflect the store's initial state
//   const initialState = store.getState()
//   if (initialState.isPlaying) musicPlayer.play()
//   musicPlayer.seek(initialState.currentTime)
//
//   return next => action => {
//     const {isPlaying: wasPlaying, currentTime: previousTime} = store.getState()
//     next(action)
//     const {isPlaying: isPlaying, currentTime: nextTime} = store.getState()
//
//     // Don't dispatch any actions for actions that originated from the player
//     if (action.origin === playbackOrigin) return
//
//     if (!wasPlaying && isPlaying) musicPlayer.play()
//     if (wasPlaying && !isPlaying) musicPlayer.pause()
//     if (previousTime !== nextTime) musicPlayer.seek(nextTime)
//   }
// }
export default timerMiddleWare
