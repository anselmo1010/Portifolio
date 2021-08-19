import React from "react";
import * as S from './styles';
import { Button } from 'reactstrap';

import perfil from '../../assets/744527.jpg';

import { Container, Row, Col } from 'reactstrap';

function SobreNos() {
  

  return( 
    <S.Container id="sobre" className="container">
        <Container >
          <Row>
            <Col className="left" md="4" sm="4" ></Col>
            <Col className="title-style" md="4" sm="4" >
              <div className="titlle-sobrenos" >
                <h1>Sobre Nós</h1>
                <p></p>
              </div>
            </Col>
            <Col md="4" sm="4" className="right"></Col>
          </Row>
        </Container>
        
      <S.SobreNosleftSide >
        <div className="border-style leftSide-breakpoint">
          <img src={perfil} alt='Logo'/>
        </div>
      </S.SobreNosleftSide>

      <S.SobreNosRightSide>
          <div className="rigthSide-breakpoint">
            <h3>Nós podemos fazer isso juntos</h3>
            <p>
              Muito longe, atrás da palavra montanhas, longe dos países Vokalia e Consonantia, 
             <span>vivem</span> os textos <spa>cegos</spa>.
            </p>
            <p>
             Um pequeno rio chamado Duden flui por seu lugar e o abastece com a regelialia necessária. 
            </p>
            <div className="button-Cv">
              <a href="https://www.linkedin.com/in/anselmo-de-bom-desenv-web/" target="_blank"><Button>Meu Curriculo</Button></a>
            </div>
          </div>
      </S.SobreNosRightSide>

      

    </S.Container>
  )
}

export default SobreNos;