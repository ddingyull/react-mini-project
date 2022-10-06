import React from 'react'
import lettering1 from '../images/lettering1.jpg'

export default function Images() {
  return (
    <>
    <h4>public폴더에서 이미지 불러오기</h4>
    <img src="/images/lettering1.jpg" width="30%"/>
    <h4>src폴더에서 이미지 불러오기</h4>
    <img src={ lettering1 } width="30%"/>
    </>
  )
}
