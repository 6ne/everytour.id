import React from 'react'
import './style.scss'

interface Props {
    direction: String
}

const Layout : React.SFC<Props> = (props) => {
    return (
        <div className={`layout ${props.direction}`}>
            {props.children}
        </div>
    )
}

export default Layout