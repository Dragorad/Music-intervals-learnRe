
import TestArea from './TestArea'
import ReTestArea from './ReTestArea'
import {animated, useSpring} from 'react-spring'

export default function WorkPaneRedux() {
  const routeDivProps = useSpring({ opacity: 1, from: { opacity: 0 }})
  return (
    <>
      <animated.div style={routeDivProps} className='work-pane'>
        <TestArea />
        <ReTestArea />
      </animated.div>
    </>

  )
}