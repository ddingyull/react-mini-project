import { useRef, useState } from 'react';

const Comparing = () => {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);
  const [render, setRender] = useState(0);
  let countVar = 0;

  const countUpState = () => {setCount( count + 1); console.log(`State: ${count}`);};
  const countUpRef = () => {countRef.current = countRef.current + 1; console.log(`Ref: ${countRef.current}`)};
  const countUpVar = () => {countVar = countVar + 1 ; console.log(`Variable: ${countVar}`)};
  const reRender = () => {setRender(render + 1);};

  return(
    <>
      <h1>State: {count}</h1>
      <h1>Ref: {countRef.current}</h1>
      <h1>Variable: {countVar}</h1>

      <button onClick={countUpState}>State +</button>
      <button onClick={countUpRef}>Ref +</button>
      <button onClick={countUpVar}>Variable +</button>
      <button onClick={reRender}>렌더링!</button>
    </>
  )
}

export default Comparing;