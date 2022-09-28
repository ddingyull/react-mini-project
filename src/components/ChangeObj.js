import { useState } from 'react';

export default function ChangeObj (props) {
  const [index, setIndex] = useState(0); //index값으로 배열에서 빼내올 수 있으니 문자열이 아니라 0으로 시작
  let obj = props.objArr[index];

  const userChangeBtn = () => {
    if(index === props.objArr.lenggth -1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
    obj = props.objArr[index]
  }

  return(
    <div className='m-auto'>
      <h4>이름: {obj.name}</h4>
      <h4>나이: {obj.age}</h4>
      <h4>별명: {obj.nickName}</h4>
      <button onClick={userChangeBtn}></button>
    </div>
  );
};

