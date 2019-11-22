const initialState = {
  languageSelected:'bg',
  testIntervalData: {},
  testArr: [],
  pointsPerAnswer: 0,
  totalPoints: 0,
  sessionPoints: 0,
  sessionAnswers: [],
  userAnswer: '',
  tasksRemaining: 0,
  currentIntervalIdx: 0,
  currentInterval: {},
  testRendered: false,
  testFinished: false,
  bestResultsMinimized: false,
  answerVisible: false,
  answeringDisabled: false,
  regime:'local',
  timeRemaining:NaN,
  timerWorking:false,
  isSigned: false,
  isSigning: false,
  userName:'guest',
  resultSaved: false,
  user: {}
}

export default initialState
