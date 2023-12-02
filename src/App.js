import React, { Fragment } from 'react'
import './App.css'
import FirstNavbar from './Navbar'
import {Container,Row,Col} from 'react-bootstrap';
import Title from './Title';
import Show from './Show';
import Search from './Search';
import Choose from './Choose';
import Button from './Button';
import Option from './Option';
import Slider from './Slider';

const App =()=>{
  return(
      <>
      <Container>
        <FirstNavbar></FirstNavbar>
      </Container>
      <Container fluid className='page w-100' >
          <Title></Title>
          <Show></Show>
          <Container className='mid'>
        
                    <Search></Search>
    
                <Choose></Choose>

  
              <Choose></Choose>

       
                <Button></Button>
            
          </Container>
          <Container>
    
                  <Option></Option>

          </Container>
          <Container>
            <Slider></Slider>
          </Container>
      </Container>
      
    </>
    
  

  )
}


export default App;