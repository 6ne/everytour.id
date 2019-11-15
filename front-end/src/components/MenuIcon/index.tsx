import React, { CSSProperties } from 'react'
import { Link } from 'react-router-dom'
import './style.scss'

interface Props {
    to : string
    content : string
    imgUrl : string
}

const MenuIcon : React.SFC<Props> = (props) => {
    const Style : CSSProperties = {
        backgroundImage: 'url(' + props.imgUrl + ')',
    }
    return(
        <Link className="MenuIcon" to={ props.to } >
            <div className="Image" style={ Style }></div>
            <div className="Text">{ props.content }</div>
        </Link>
    )
}

export default MenuIcon