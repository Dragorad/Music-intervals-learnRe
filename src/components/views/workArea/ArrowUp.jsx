import * as React from "react"

export default function ArrowUp(props) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width='24'
            height='24'
            viewBox="0 0 24 24"
            {...props}
        >
            <path
                className='arrow'
                fill='#c10413'
                d="M14 20h-4v-9l-3.5 3.5-2.42-2.42L12 4.16l7.92 7.92-2.42 2.42L14 11v9z" />
        </svg>
    )
}

