import React from 'react'
import Dialog from './Dialog';

export default function WelcomeDialog(props) {

  // const alertBtn = () => {
  //   alert(props.alertMessage)
  // }

  return (
    <>
    <Dialog
    color="pink"
    title="Welcome to summoner's lift"
    message="소환사의 협곡에 오신 걸 환영합니다."/>
      <button onClick={()=>alert(props.alertMessage)}>{props.content}</button>
    </>
  )
}