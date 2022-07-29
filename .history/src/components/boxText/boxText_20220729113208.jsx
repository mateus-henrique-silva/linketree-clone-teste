import React from 'react'
import './boxText.css'

const boxText = (props) => {
  return (
    <div className="box">
        <div className="boxText">

          <h1></h1>
          
            <p>
                {props.text}
            </p>
        </div>
    </div>
  )
}

export default boxText