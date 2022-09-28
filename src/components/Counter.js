import React, { useState } from 'react';
import { Container } from 'react-bootstrap';

function Counter () {
  const [count, setCount] = useState(0);
  const onClickPlus = () => { setCount( count+1 );  };
  const onClickMinus = () => { setCount( count-1 );  };

  return(
    <>
      <Container className='d-flex m-auto'>
      <button onClick={ onClickMinus } className="btn btn-light">-</button>
      <h1>{ count }</h1>  
      <button onClick={ onClickPlus } className="btn btn-light">+</button>
        
        
      </Container>
    </>
  );
};

export default Counter;