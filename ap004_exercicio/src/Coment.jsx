import React from 'react'

const Coment = (props) => {
  return (
    <div className="d-flex">

        <div className="d-flex align-items-center" >
            <img src={props.image} alt={props.alt} style={{display: 'inline-block'}}/> 
        </div>

        <div className="border flex-grow-1 rounded p-5">
            <h4 className="text-start">{props.title}</h4>
            <p className="text-start">{props.text}</p>
            <small className="text-start" style={{fontSize: "6px"}}>{props.time}</small>
        </div>

    </div>
  )
}

export default Coment