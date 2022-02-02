import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Input,
  Label,
  Button,
} from "reactstrap";

const Login = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  return (
    <Container fluid={true} className="p-0">
      <Row className="m-0">
        <Col xs="12" className="p-0">
          <div className="login-card">
            <div>
              <div>
                <div className="logo">
                  <img
                    className="img-fluid for-light"
                    src={require("../../assets/images-transalvador/logo_transalvador.png")}
                    alt="Logotipo Transalvador"
                  />
                </div>
                <div className="login-main login-tab">
                  <div className="content-login">
                    <Form className="theme-form">
                      <h4> Entrar </h4>
                      <p> Utilize suas credenciais para efetuar o login. </p>
                      <FormGroup>
                        <Label className="col-form-label"> E-mail </Label>
                        <Input className="form-control" type="email" onChange={e => {
                            setForm({...form, email: e.target.value});
                        }}/>
                      </FormGroup>
                      <FormGroup>
                        <Label className="col-form-label"> Senha </Label>
                        <Input className="form-control" type="password" onChange={e => {
                            setForm({...form, password: e.target.value});
                        }}/>
                      </FormGroup>
                      <Row className="mb-2">
                        <Col md="12">
                          <a className="pull-right" href="#javascript">
                            Esqueci minha senha
                          </a>
                        </Col>
                      </Row>
                      <Row className="mt-4">
                        <Col md="12">
                          <div className="form-group mt-3">
                            <Button color="primary" className="btn-block">
                              Entrar
                            </Button>
                          </div>
                        </Col>
                      </Row>
                    </Form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
