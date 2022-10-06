import React from 'react'

export default function Dialog(props) {

  return (

    <div 
    style=
      {typeof props.color !== 'undefined' ?  {backgroundColor:props.color} : {backgroundColor:'orange'}  }
    className="m-auto">
      {typeof props.title === 'string' ? <h1>{props.title}</h1> : props.title}
      <p>{props.message}</p>
      {typeof props.color !== 'undefined' ?  null : alert('색상값 없어요ㅠㅠ!')  }
      {props.children}

    </div>
  )
}
