import React from 'react'
import './title.css'

const title = (props) => {
  return (
    <div>
        <h3 className="title">{props.text}</h3>
    </div>
  )
}

export default title