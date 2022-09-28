import { Component } from 'react';
import Card from 'react-bootstrap/Card';


// class형 컴포넌트
// this.props선언해줬을 경우 변수명만 작성해도됨
// class MainHeader3 extends Component {
//   render(){
//     // const { text, name, href } = this.props;
//     return(
//       <div className='m-3 float-end'>
//       <h6>{this.props.name} 님 반갑습니다</h6>
//       <a href={this.props.href}>{this.props.text}</a>
//     </div>
//     )
//   }
// }

// 함수형 컴포넌트
function ProfileCard(props){
  const { text, name, age, href } = props;
  return (
    // <div className='m-3 float-end'>
    //   <h6>{name} 님 반갑습니다</h6>
    //   <a href={href}>{text}</a>
    //   {/* <h6>연령: {age}</h6> */}
    // </div>
    <Card style={{ width: '18rem' }} className="m-3">
    <Card.Body>
      <Card.Title>{name} 님 반갑습니다</Card.Title>
      <Card.Subtitle className="mb-2 text-muted">반갑습니다</Card.Subtitle>
      <Card.Text>
        React 연습장에 오신걸 환영합니다.
      </Card.Text>
      <Card.Link href={href}>{text}</Card.Link>
    </Card.Body>
  </Card>
  )
}

export default ProfileCard 