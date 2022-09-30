import { useEffect, useState, useRef } from 'react';

const PracticeTimer = () => {
  let [render, setRender] = useState(0);
  const time = useRef(0);
  const changeFocus = useRef();

  const PresentTime = () => {
    setRender( render + 1 );
  }

  useEffect(() => {
    const timer = setInterval(() => {
      time.current++;
      setRender(render++)
      console.log(time.current);
      console.log(render);
    }, 1000);

    return(()=>{  //timer없애기 위한 return
      clearInterval(timer);
    })
  }, []); //처음에 한번만 나타나게 하기 위해 빈배열

  return(
    <>
      <h1>타이머 { time.current }초</h1>
      <h1>타이머 0초</h1>
      <button ref={changeFocus} onClick={PresentTime}>시간</button>
      <h1>현재 시간 : { time.current }초</h1>
    </>
  )
}

export default PracticeTimer;

