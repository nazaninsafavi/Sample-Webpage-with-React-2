import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Nav, NavDropdown } from 'react-bootstrap';
import dakeh from './dakeh.png'
import './Navbar.css'

const FirstNavbar = ()=>{
    return(
        <Navbar className="bg-body-white mt-2">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={dakeh}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
                سامانه <span style={{color:'yellowgreen'}}>دکه</span> 
          </Navbar.Brand>
          <Nav className="options">
            <Nav.Link href="#home">خانه</Nav.Link>
            <Nav.Link href="#features">درباره ما</Nav.Link>
            <Nav.Link href="#pricing">قوانین و مقررات</Nav.Link>
            <Nav.Link href="#home">نحوه فعالیت</Nav.Link>
            <Nav.Link href="#home">تماس با ما</Nav.Link>
            <Nav.Link href="#home">اپلیکیشن دکه</Nav.Link>
            <NavDropdown title="نرم افزارهای کاربردی" id="collapsible-nav-dropdown">
            <NavDropdown.Item className='d-Item' href="#action/3.1">اندروید</NavDropdown.Item>
              <NavDropdown.Item className='d-Item' href="#action/3.2">
                آی او اس 
              </NavDropdown.Item>
            </NavDropdown>

          </Nav>
          <Nav className='register'>
            <Nav.Link href='#' style={{color:'yellowgreen'}}>ورود/ایجاد آگهی</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

    )
}

export default FirstNavbar