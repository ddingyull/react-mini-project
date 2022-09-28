import React, { Component }from "react";
import { Nav, Navbar, Container, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// class MainHeader extends React.Component {
//     render() {
//       return ( 
//         <h1> Hello, Component world! </h1>
//       )
//     }
//   }

    function MainHeader() {
      return (
        <>
          <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand href="#home">RPractice</Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="https://github.com/ddingyull">Github</Nav.Link>
                <Nav.Link href="https://velog.io/@dding_yull">Blog</Nav.Link>
              </Nav>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Container>
          </Navbar>
        </>
      );
    }

    export default MainHeader;