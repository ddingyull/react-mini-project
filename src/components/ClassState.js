import React from 'react';
import { Container } from 'react-bootstrap';

class ClassState extends React.Component{
  constructor(props){
    super(props);

    // 초기값 초기화시키기
    this.state = {
      message: ""
    }
  }
  render(){
    const { message } = this.state;
    const onClickEnter = () => { this.setState({ message: "👋🏻Hello!" });  };
    const onClickLeave = () => { this.setState({ message: "😿Bye" });  };
  
    return (
      <Container>
        <button onClick={ onClickEnter } className="btn btn-dark">입장</button>
        <button onClick={ onClickLeave } className="btn btn-dark">퇴장</button>
        <h1> { message } </h1>
      </Container>
    )
  }
}



export default ClassState;