import React, { useState } from 'react';
import { Container } from 'react-bootstrap';

function FunctionalState () {
  const [message, setMessage] = useState('');
  const onClickEnter = () => { setMessage( "🫶🏼입장하였습니다" );  };
  const onClickLeave = () => { setMessage( "🚷퇴장하였습니다" );  };

  return(
    <>
      <Container className='m-auto'>
        <button onClick={ onClickEnter } className="btn btn-dark">입장</button>
        <button onClick={ onClickLeave } className="btn btn-dark">퇴장</button>
        <h1>{message}</h1>
      </Container>
    </>
  );
};

export default FunctionalState;