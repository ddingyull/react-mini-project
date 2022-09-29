function CustomList(props){
  return(
    <ul>
      {props.userContent.map((el)=>{
        return <li>{ el }</li>
      })}
    </ul>
  )
}

export default CustomList;