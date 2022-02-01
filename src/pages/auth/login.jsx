import React, { useState } from 'react';
import {
    Container,
    Row,
    Col,
    Form,
    FormGroup,
    Input,
    Label,
    Button,
    NavItem,
    NavLink,
    Nav,
    TabContent,
    TabPane
} from 'reactstrap'

const Login = () => {
    return (
        <Container fluid={true} className="p-0">
            <Row className="m-0">
                <Col xs="12" className="p-0">
                    <div className="login-card">
                        <div>
                            <div>
                                <div className="logo">
                                    <img className="img-fluid for-light" src={require('../../assets/images-transalvador/logo_transalvador.png')} alt="" />
                                </div>
                                <div className="login-main login-tab">
                                    <div className="content-login">
                                        <Form className="theme-form">
                                            <h4> Entrar </h4>
                                            <p> Utilize suas credenciais para efetuar o login. </p>
                                            <FormGroup> 
                                                <Label className="col-form-label"> E-mail </Label>
                                                <Input className="form-control" type="email" />
                                            </FormGroup>
                                            <FormGroup> 
                                                <Label className="col-form-label"> Senha </Label>
                                                <Input className="form-control" type="password"/>
                                            </FormGroup>
                                            <div className="form-group"> 

                                            </div>
                                        </Form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Login;
