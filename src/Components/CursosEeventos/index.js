import React from "react";
import * as S from './styles';

import { Container, Row, Col, } from 'reactstrap';



function CursosEeventos() {
  
  return( 
	<S.Container id="cursosEventos"className="container">
      <Container>

        <Row>
          <Col md="4" sm="4"></Col>
          <Col md="4" sm="4">
            <div className="titlle-cursos">
              <h1>Cursos & Eventos</h1>
              <p></p>
            </div>
          </Col>
          <Col  md="4" sm="4"></Col>
        </Row>

        <Row>

          <Col className="border-post1 " sm="6" md="8">
          <div className="bg-width bg-post1 bg-position text-style filter-effect hover-effect">
          <div class="portfolio-item-content ">
              <h3>Shoe Rebranding</h3>
              <p>web, branding</p>
            </div>
          </div>
          </Col>


          <Col className="border-post2" sm="6" md="4">
          <div className="bg-width bg-post2 bg-position text-style filter-effect hover-effect">
          <div class="portfolio-item-content ">
              <h3>Shoe Rebranding</h3>
              <p>web, branding</p>
            </div>
          </div>
          </Col>
        </Row>

        <Row>
          <Col className="border-post3" sm="4" md="4">
            <div className="bg-width bg-post3 bg-position text-style filter-effect hover-effect">
            <div class="portfolio-item-content ">
              <h3>Shoe Rebranding</h3>
              <p>web, branding</p>
            </div>
            </div>
          </Col>
          <Col className="border-post4" sm="4" md="4">
          <div className="bg-width bg-post4 bg-position text-style filter-effect hover-effect">
          <div class="portfolio-item-content ">
              <h3>Shoe Rebranding</h3>
              <p>web, branding</p>
            </div>
            </div>
          </Col>
          <Col className="border-post5" sm="4" md="4">
          <div className="bg-width bg-post5 bg-position text-style filter-effect hover-effect">
          <div class="portfolio-item-content ">
              <h3>Shoe Rebranding</h3>
              <p>web, branding</p>
            </div>
            </div> 
          </Col>
        </Row>
      </Container>

	</S.Container>
  
  )
}

export default CursosEeventos;