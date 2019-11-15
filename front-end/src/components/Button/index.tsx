import React, { CSSProperties } from 'react'
import { Link } from 'react-router-dom'
import './style.scss'

interface Props {
    to : string
    content : string
    fontSize : string
}

const Button : React.SFC<Props> = (props) => {
    console.log(props.fontSize)
    const Style : CSSProperties = {
        fontSize: props.fontSize
    }
    return(
        <Link to={ props.to }>
            <button className="Button" style={Style}>{ props.content }</button>
        </Link>
    )
}

export default Button