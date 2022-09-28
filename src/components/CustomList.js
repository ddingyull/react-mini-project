export default function CustomList(props){
  return(
    <ul>
      {props.nameArr.map((el)=>{
        return <li>{ el }</li>
      })}
    </ul>
  )
}