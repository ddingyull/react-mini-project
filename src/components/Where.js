import React from 'react'

export default function Where() {
  const where = prompt('어디로 갈까요? left / right');

  // if ( where === 'left' ) {
  //   return (
  //     <>
  //       <h4>왼쪽</h4>
  //     </>
  //   )
  // } else if ( where === 'right' ){
  //   return (
  //     <>
  //       <h4>오른쪽</h4>
  //     </>
  //   )
  // } else {
  //   return (
  //     <h4>잘못입력하였습니다. </h4>
  //   )
  // }

  // 위 코드와 같은 의미
  return (
    <>
      {where === 'left' ? <h4>왼쪽</h4> : <h4>오른쪽</h4>}
    </>
  )
}
