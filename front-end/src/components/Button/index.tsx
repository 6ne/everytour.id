import React from 'react'
import { Link } from 'react-router-dom'
import './style.scss'

interface Props {
    to : string
    content : string
}

const Button : React.SFC<Props> = (props) => {
    return(
        <Link to={ props.to }>
            <button className="button">{ props.content }</button>
        </Link>
    )
}

export default Button