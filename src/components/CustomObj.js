import { Container } from 'react-bootstrap'

export default function CustomObj(props){
  // const { name, age, nickName } = props.customObj[0];

  return(
    <div>
      {
      props.customObj.map((el)=>{
        return(
          <Container className='card'>
            <h6>이름 : {el.name}</h6>
            <h6>나이 : {el.age}</h6>
            <h6>별명 : {el.nickName}</h6>
          </Container>
        )
      })
      }


    </div>
  )
}