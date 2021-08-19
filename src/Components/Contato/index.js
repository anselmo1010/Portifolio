import React from "react";
import * as S from './styles';

import { Container, Row, Col,
          Button, Form, FormGroup, Label, Input } from 'reactstrap';

function Contato(props){

    return(
        <S.Container className="container">
         <Container>
           <Row>
            <Col md="4" sm="4"></Col>
            <Col className="title-style" md="4" sm="4" >
                <div className="titlle-contato">
                <h1>Contato</h1>
                <p></p>
                </div>
            </Col>
            <Col  md="4" sm="4"></Col>
           </Row>
           <Row>
            <Col className="left-form" md="8">
            <Form inline>
                <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                    <Label for="exampleName" className="mr-sm-2"></Label>
                    <Input type="text" name="name" id="name" placeholder="Digite seu nome " />
                </FormGroup>
                <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                    <Label for="exampleEmail" className="mr-sm-2"></Label>
                    <Input type="email" name="email" id="exampleEmail" placeholder="seuEmail@email.com" />
                </FormGroup>
                <FormGroup>
                    <Label for="exampleText"></Label>
                    <Input type="textarea" name="text" id="exampleText" rows="5" placeholder="Digite sua menssagem"/>
                </FormGroup>
                <Button>Enviar Menssagem</Button>
            </Form>
            </Col>
               <Col className="right-form" md="4">
                 <Col>  
                    <div>
                        <h3>EMAIL</h3>
                        <p>ansdebom@gmail.com</p>
                    </div>
                 </Col>
                 <Col>
                    <div>
                        <h3>FONE</h3>
                        <p>(11)95246-4604</p>
                    </div> 
                 </Col>
                 <Col>
                    <div>
                       <h3>ENDEREÇO</h3>
                       <p>ansdebom@gmail.com</p>
                       <p className='line-style-city'>São Paulo, Capital</p>
                    </div>
                 </Col>   
               </Col>
           </Row>
          </Container>
            
            

        </S.Container>
    );
}
export default Contato;