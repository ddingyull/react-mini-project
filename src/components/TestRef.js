import { useState, useRef } from 'react';

function TestRef() {
  const [text, setText] = useState("안녕하세요!");

  const inputValue = useRef(); //input에 작성하는 내용이 inputValue에 저장됨

  const onChangeText = (e) => {
  // const inputText = e.target.value;
  let inputText = inputValue.current.value;
    setText(inputText);
  }
    return (
  <div>
    <h1>{text}</h1>
    {/* <input onChange={(e) => { onChangeText(e) }}></input> */}
    <input ref={inputValue} onChange={onChangeText}></input>
  </div>
  )
  }

  export default TestRef;
  