import { useEffect } from 'react';

const Timer = () => {
  // const [count, seCount] = useEffect(1)
  useEffect(() => {

    const timer = setInterval(() => {
      console.log('⏱');
      // seCount(count + 1);
    }, 1000);

    return(()=>{  //timer없애기 위한 return
      clearInterval(timer);
    })
  }, []); //처음에 한번만 나타나게 하기 위해 빈배열

  return(
    <>
      <h1>실행중</h1>
      {/* <h1>{ count }</h1> */}
    </>
  )
}

export default Timer;