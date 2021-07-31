import React from "react";
import * as S from './styles';

import { Container, Row, Col, } from 'reactstrap';



function CursosEeventos() {
  
  return( 
	<S.Container className="container">
      <Container>

        <Row>
          <Col md="4" sm="4" className="left"></Col>
          <Col md="4" sm="4" className="titlle-cursos">
            <div>
              <h1>Cursos & Eventos</h1>
            </div>
          </Col>
          <Col  md="4" sm="4" className="right"></Col>
        </Row>


        <Row>
          <Col className="border-post1" sm="6" md="8">
          <div className="bg-width bg-post1 bg-position">
          </div>
          </Col>
          <Col className="border-post2" sm="6" md="4">
          <div className="bg-width bg-post2 bg-position">
          </div>
          </Col>
        </Row>

        <Row>
          <Col className="border-post3" sm="4" md="4">
            <div className="bg-width bg-post3 bg-position">
            </div>
          </Col>
          <Col className="border-post4" sm="4" md="4">
          <div className="bg-width bg-post4 bg-position ">
            </div>
          </Col>
          <Col className="border-post5" sm="4" md="4">
          <div className="bg-width bg-post5 bg-position">
            </div> 
          </Col>
        </Row>
      </Container>

	</S.Container>
  
  )
}

export default CursosEeventos;