import { useEffect, useState, useRef, useMemo } from 'react';

const TestUseMemo = () => {

  const hardCalculate = (num) => {
    console.log('어려운 계산 시작');
    let sum = 0;

    for (let i = 1; i < 1000000001; i++) {
      sum = sum + 1;
      }
    return num + sum;
  }
  const [hardNum, setHardNum] = useState(1);
  const hardSum = useMemo(() => {
    hardCalculate(hardNum);
  })



  const easyCalculate = (num) => {
    console.log("쉬운 계산 시작!");
  let sum = 1000000000;
  // 시간이 걸리는 계산        
    return num + sum;
  }
  const [easyNum, setEasyNum] = useState(1);
  const easySum = easyCalculate(easyNum);


  return (
    <>
      <h1> 시간이 오래 걸리는 계산</h1>
      <input type="number" value={hardNum} onChange={(e) => { setHardNum(parseInt(e.target.value)) }} />
      <span> + 100000000 = {hardNum}</span>
      <br />
      <h1> 시간이 안 걸리는 계산</h1>
      <input type="number" value={easyNum} onChange={(e) => { setEasyNum(parseInt(e.target.value)) }} />
      <span> + 100000000 = {easySum}</span>
    </>
      )
}

export default TestUseMemo;