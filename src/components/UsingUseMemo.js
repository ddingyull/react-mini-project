import { useEffect, useState, useMemo } from "react";
const UsingUseMemo = () => {
  const [number, setNumber] = useState(0);
  const [isKorea, setIsKorea] = useState(true); //초값을 한국으로 설정한 상태

  const location = useMemo(() => {
    return { 
      where: isKorea ? "한국" : "외국", 
    }
  }, [isKorea]);
  
    useEffect(() => {
      console.log("✨ useEffect 호출!");
    }, [location])


    return (
      <>
        <h1>숫자 증감 { number }</h1>
        <input type="number" value={number} onChange={(e) => setNumber(parseInt(e.target.value))} />
        <br />
        <h1>Where are you?</h1>
        <h2>위치: { location.where }</h2>
        <button onClick={() => setIsKorea(!isKorea)}>나라 변경</button>
      </>
    )
}

export default UsingUseMemo;
