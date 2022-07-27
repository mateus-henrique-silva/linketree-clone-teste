import React from 'react'
import './boxText.css'

const boxText = (props) => {
  return (
    <div className="box">
        <div className="boxText">
            <p>
                {props.}
            </p>
        </div>
    </div>
  )
}

export default boxText