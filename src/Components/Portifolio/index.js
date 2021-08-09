import React from "react";
import * as S from './styles';

import { Container, Row, Col, } from 'reactstrap';




function Portifolio(props) {

    
  return( 
    <S.Container className="container">
      <Container>
      <Row>     
        <Col sm="4" md="4" >
        <Container id="portifolio" className="port-work-title">
          <h1>Portifolio</h1>
        </Container>

        <a href="https://www.youtube.com/watch?v=fI-XfjQCDwM" alt="Video" target="#">
          <Container className="port-work-A text-style hover-effect"> 
            <div class="portfolio-item-content">
              <h3>Shoe Rebranding</h3>
              <p>web, branding</p>
            </div>
          </Container>
        </a>        
        
        <a href="https://www.youtube.com/watch?v=fI-XfjQCDwM" alt="Video" target="#">
        <Container className="port-work-B text-style hover-effect">
        <div class="portfolio-item-content">
            <h3>Shoe Rebranding</h3>
            <p>web, branding</p>
          </div>
        </Container>
        </a>     
        <a href="https://www.youtube.com/watch?v=fI-XfjQCDwM" alt="Video" target="#">
        <Container className="port-work-C text-style hover-effect">
        <div class="portfolio-item-content">
            <h3>Shoe Rebranding</h3>
            <p>web, branding</p>
          </div>
        </Container>
        </a>   
        </Col>

        <Col id="border-styled" sm="4" md="4" >
        <a href="https://www.youtube.com/watch?v=fI-XfjQCDwM" alt="Video" target="#">
        <Container className="port-work-D text-style hover-effect">
        <div class="portfolio-item-content">
            <h3>Shoe Rebranding</h3>
            <p>web, branding</p>
        </div>
        </Container>
        </a>   
        <a href="https://www.youtube.com/watch?v=fI-XfjQCDwM" alt="Video" target="#">
        <Container className="port-work-E text-style hover-effect">
        <div class="portfolio-item-content">
            <h3>Shoe Rebranding</h3>
            <p>web, branding</p>
          </div>
        </Container>
        </a>   
        <a href="https://www.youtube.com/watch?v=fI-XfjQCDwM" alt="Video" target="#">
        <Container className="port-work-F text-style hover-effect">
        <div class="portfolio-item-content">
            <h3>Shoe Rebranding</h3>
            <p>web, branding</p>
          </div>
        </Container>
        </a>   
        </Col>
        <Col sm="4" md="4" >
        <a href="https://www.youtube.com/watch?v=fI-XfjQCDwM" alt="Video" target="#">
        <Container className="port-work-G text-style hover-effect">
        <div class="portfolio-item-content">
            <h3>Shoe Rebranding</h3>
            <p>web, branding</p>
          </div>
        </Container>
        </a>   
        <a href="https://www.youtube.com/watch?v=fI-XfjQCDwM" alt="Video" target="#">
        <Container className="port-work-H text-style hover-effect">
        <div class="portfolio-item-content">
            <h3>Shoe Rebranding</h3>
            <p>web, branding</p>
          </div>
        </Container>
        </a>   
        <a href="https://www.youtube.com/watch?v=fI-XfjQCDwM" alt="Video" target="#">
        <Container className="port-work-I text-style hover-effect">
        <div class="portfolio-item-content">
            <h3>Shoe Rebranding</h3>
            <p>web, branding</p>
          </div>
        </Container>
        </a>   
        </Col>
      </Row>
      </Container>
    </S.Container>
  );
}

export default Portifolio;