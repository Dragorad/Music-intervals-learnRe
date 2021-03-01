import { useSpring, animated } from 'react-spring'

export default function SelectLanguage() {
    // <h4 className='summary-field'
    //     style={{}}> Моля, изберете език..</h4>

    const styleProps = useSpring({
        to: { fontSize: '1rem', minHeight: '30%', opacity: 1, color: 'darkcyan' },
        from: { opacity: 1, color: '#c10413', fontSize: '1.1rem' },
        delay: 800
    })
    return (
        <animated.div className='summary-field' style={styleProps}>
            Моля, изберете език!  Please select a language!
        </animated.div>

    )
}
//