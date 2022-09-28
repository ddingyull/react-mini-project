export default function CustomObj(props){
  const { name, age, nickName } = props.obj;

  return(
    <ul>
    {props.arr.map((el)=>{
      return <div>
      <h4>이름: {name}</h4>
      <h4>나이: {age}</h4>
      <h4>별명: {nickName}</h4>
    </div>
    })}
  </ul>
  )
}