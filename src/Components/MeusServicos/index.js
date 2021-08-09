import React from "react";
import * as S from './styles';


//Bootstrap 
import { Container, Row, Col } from 'reactstrap';
import MeusServCards from "../MeusServCards";

//img
import logo from '../../assets/LOGO_2021 WHITE.png'

function MeusServicos(){
    return(
        <S.Container id="meusServicos" className="container">
        <Container >
        <Row>
          <Col md="4" sm="4" className="left"></Col>
          <Col className="border-meusServicos " md="4" sm="4" >
            <div className="titlle-meusServicos">
              <h1>Meus Serviços</h1>
              <p></p>
            </div>
          </Col>
          <Col  md="4" sm="4" className="right"></Col>
        </Row>
        <Row >
            <Col md="4" sm="4">
                <MeusServCards logo={logo} title_firstWord='Digital' title_secondtWord="Strategy" content='A small river named Duden flows by their place and 
              supplies it with the necessary regelialiaaa. '/>
            </Col>
            <Col id="border-styled" md="4" sm="4">
            <MeusServCards logo={logo} title_firstWord='Digital' title_secondtWord="Strategy" content='A ddddsmall river named Duden flows by their place and 
              supplies it with the necessary regelialiaaaa. '/>
            </Col>
            <Col  md="4" sm="4" >
            <MeusServCards  logo={logo} title_firstWord='Digital' title_secondtWord="Strategy" content='A small river named Duden flows by their place and 
              supplies it with the necessary regelialiaaaa. '/>
            </Col>
        </Row>
        
        
        <Row >
            <Col  md="4" sm="4">
              <MeusServCards logo={logo} title_firstWord='Digital' title_secondtWord="Strategy" content='A small river named Duden flows by their place and 
              supplies it with the necessary regelialiaaaa. '/>
              </Col>
            <Col id="border-styled" md="4" sm="4">
              <MeusServCards logo={logo} title_firstWord='Digital' title_secondtWord="Strategy" content='A dddsmall river named Duden flows by their place and 
              supplies it with the necessary regelialiaaaa. '/>
              </Col>
            <Col  md="4" sm="4">
              <MeusServCards logo={logo} title_firstWord='Digital' title_secondtWord="Strategy" content='A small river named Duden flows by their place and 
              supplies it with the necessary regelialiaaaa. '/>
              </Col>
        </Row>
        
        
        <Row>
            <Col md="4" sm="4">
              <MeusServCards logo={logo} title_firstWord='Digital' title_secondtWord="Strategy" content='A small river named Duden flows by their place and 
              supplies it with the necessary regelialiaaa. '/>
              </Col>
            <Col id="border-styled" md="4" sm="4">
              <MeusServCards logo={logo} title_firstWord='Digital' title_secondtWord="Strategy" content='A dddsmall river named Duden flows by their place and 
              supplies it with the necessary regelialiaaa. '/>
              </Col>
            <Col  md="4" sm="4">
              <MeusServCards logo={logo} title_firstWord='Digital' title_secondtWord="Strategy" content='A small river named Duden flows by their place and 
              supplies it with the necessary regelialiaaaaa. '/>
              </Col>
        </Row>
        </Container>
        </S.Container>

        
    )
}
export default MeusServicos;