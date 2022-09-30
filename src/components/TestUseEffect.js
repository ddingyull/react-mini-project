import { useEffect, useState, useRef } from 'react';

function TestUseEffect() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('입력하세요');
  const inputValue = useRef()

  const onBtnClick = () => {
    setCount(count + 1);
    // console.log('🖱');
  }

  const onInputChange = () => {
    setText( inputValue.current.value);
    // console.log('키 입력');
  }

  useEffect(() => {
    // 렌더링이 새로고침하거나 input이 있다면 그게 바뀔때마다 
    console.log('렌더링될 때마다 useEffect');
  })

  useEffect(() => {
    // conut, text가 수정될 때마다 
    console.log('👀둘 다 보고 있는 useEffect');
  }, [count, text])

  useEffect(() => {
    console.log('👋🏻난 최초 useEffect');
  }, [])

  return (
    <>
    <h1>{count}</h1>
    <button onClick={onBtnClick}>➕</button>


    <br/><br/><br/>    


    <input ref={inputValue} onChange={onInputChange}></input>
    <h3> { text } </h3>
    </>
  )
}

export default TestUseEffect;