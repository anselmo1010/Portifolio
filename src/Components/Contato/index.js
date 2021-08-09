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
            <Col md="4" sm="4" >
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
                    <Label for="exampleEmail" className="mr-sm-2">Email</Label>
                    <Input type="email" name="email" id="exampleEmail" placeholder="something@idk.cool" />
                </FormGroup>
                <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                    <Label for="examplePassword" className="mr-sm-2">Password</Label>
                    <Input type="password" name="password" id="examplePassword" placeholder="don't tell!" />
                </FormGroup>
                <FormGroup>
                    <Label for="exampleText">Text Area</Label>
                    <Input type="textarea" name="text" id="exampleText"  rows="5"/>
                </FormGroup>
                <Button>Enviar Menssagem    </Button>
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