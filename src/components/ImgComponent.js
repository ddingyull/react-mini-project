import { Container } from 'react-bootstrap';
function ImgComponent() {
  return (
    <Container className='row'>
      <img src="img/object.png" className='main_img m-3 col-6'/>
    {/* // <img src={ objectImg } alt ='main' /> */}
    </Container>
    
  )
}

export default ImgComponent;